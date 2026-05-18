import { readFile, writeFile, rename } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const PROJECT_ROOT = path.resolve(__dirname, '../..')
const BLOG_POSTS_PATH = path.resolve(PROJECT_ROOT, 'public/content/blog-posts.json')
const VERIFIED_FACTS_PATH = path.resolve(__dirname, 'verified-facts.json')

const OPENROUTER_ENDPOINT = 'https://openrouter.ai/api/v1/chat/completions'
const FALLBACK_MODEL = 'openrouter/free'
const AUTO_AUTHOR = 'PhotoMed Auto Editorial'
const MIN_FACTS_PER_POST = 3
const MAX_API_RETRIES = 4
const REQUEST_TIMEOUT_MS = 45_000

const ALLOWED_CATEGORIES = [
  'Research',
  'Product',
  'Traditional Medicine',
  'Community',
  'Technology',
  'Impact',
]

const TOPIC_PLAYBOOK = [
  {
    id: 'health-access-gap',
    category: 'Impact',
    titleHint: 'Why PhotoMed makes practical sense for the health access gap',
    focus:
      'Explain how PhotoMed addresses real last-mile health access constraints while staying clear that it complements, not replaces, clinical care.',
    tags: ['access', 'uhc', 'community', 'impact', 'mobile'],
  },
  {
    id: 'traditional-medicine-evidence',
    category: 'Research',
    titleHint: 'Why validated traditional medicine deserves digital infrastructure',
    focus:
      'Discuss the evidence-backed role of traditional medicine and why structured digital tooling improves reliability, transparency, and safety.',
    tags: ['traditional-medicine', 'policy', 'research', 'global-health'],
  },
  {
    id: 'mobile-first-public-health',
    category: 'Technology',
    titleHint: 'Mobile-first health intelligence for communities that are often underserved',
    focus:
      'Connect mobile adoption trends to practical product design choices for health guidance, including low-data and low-friction access.',
    tags: ['mobile', 'technology', 'community', 'access'],
  },
  {
    id: 'knowledge-preservation',
    category: 'Community',
    titleHint: 'Preserving plant medicine knowledge before it disappears',
    focus:
      'Show why cultural knowledge loss matters for health outcomes and why community-led digitization is essential.',
    tags: ['language', 'knowledge', 'community', 'impact', 'policy'],
  },
  {
    id: 'ethics-and-benefit-sharing',
    category: 'Traditional Medicine',
    titleHint: 'Benefit-sharing, ethics, and trust in digital traditional medicine',
    focus:
      'Describe responsible innovation requirements including governance, community rights, and transparent benefit-sharing.',
    tags: ['benefit-sharing', 'ethics', 'policy', 'community', 'traditional-medicine'],
  },
  {
    id: 'sdg-alignment',
    category: 'Impact',
    titleHint: 'How PhotoMed aligns with global health and development priorities',
    focus:
      'Frame PhotoMed as a practical intervention aligned with universal health coverage and SDG-oriented outcomes.',
    tags: ['sdg', 'impact', 'policy', 'access'],
  },
  {
    id: 'product-safety-and-guardrails',
    category: 'Product',
    titleHint: 'Designing guardrails: what responsible symptom guidance must do',
    focus:
      'Explain safe product boundaries, referral logic, and why guardrails increase trust and real-world usefulness.',
    tags: ['product', 'safety', 'community', 'access'],
  },
  {
    id: 'policy-momentum',
    category: 'Research',
    titleHint: 'Global policy momentum behind traditional medicine and digital tools',
    focus:
      'Analyze current policy momentum and why this creates the right timing for PhotoMed to scale responsibly.',
    tags: ['policy', 'traditional-medicine', 'research', 'technology'],
  },
]

function fail(message) {
  throw new Error(message)
}

function sanitizeText(value) {
  return String(value ?? '')
    .replace(/\s+/g, ' ')
    .trim()
}

function hasNumericClaim(value) {
  return /\d/.test(value)
}

function hasUrl(value) {
  return /https?:\/\//i.test(value)
}

async function loadDotEnvIfPresent() {
  const envPath = path.resolve(PROJECT_ROOT, '.env')
  try {
    const raw = await readFile(envPath, 'utf8')
    raw.split('\n').forEach((line) => {
      const trimmed = line.trim()
      if (!trimmed || trimmed.startsWith('#')) {
        return
      }
      const separatorIndex = trimmed.indexOf('=')
      if (separatorIndex <= 0) {
        return
      }
      const key = trimmed.slice(0, separatorIndex).trim()
      const value = trimmed.slice(separatorIndex + 1).trim()
      if (!process.env[key]) {
        process.env[key] = value
      }
    })
  } catch {
    return
  }
}

async function readJsonFile(filePath, label) {
  let raw
  try {
    raw = await readFile(filePath, 'utf8')
  } catch (error) {
    fail(`Unable to read ${label}: ${error instanceof Error ? error.message : 'Unknown read error'}`)
  }

  try {
    return JSON.parse(raw)
  } catch (error) {
    fail(`Failed to parse ${label} JSON: ${error instanceof Error ? error.message : 'Unknown parse error'}`)
  }
}

function getTodayDate() {
  return new Date().toISOString().slice(0, 10)
}

function pickTopicForDate(dateValue) {
  const dayNumber = Math.floor(Date.parse(`${dateValue}T00:00:00Z`) / 86_400_000)
  return TOPIC_PLAYBOOK[((dayNumber % TOPIC_PLAYBOOK.length) + TOPIC_PLAYBOOK.length) % TOPIC_PLAYBOOK.length]
}

function scoreFacts(topic, facts) {
  const topicTags = new Set(topic.tags)
  return facts
    .map((fact) => {
      const categoryBoost = fact.categories.includes(topic.category) ? 2 : 0
      const tagScore = fact.tags.reduce((sum, tag) => sum + (topicTags.has(tag) ? 2 : 0), 0)
      return { fact, score: categoryBoost + tagScore }
    })
    .sort((a, b) => b.score - a.score || a.fact.id.localeCompare(b.fact.id))
}

function selectFacts(topic, facts, count) {
  const ranked = scoreFacts(topic, facts)
  const chosen = ranked.slice(0, count).map((entry) => entry.fact)
  if (chosen.length < count) {
    fail(`Not enough verified facts to build a post. Needed ${count}, got ${chosen.length}.`)
  }
  return chosen
}

function buildGenerationPrompt(topic, facts) {
  const factLines = facts
    .map(
      (fact) =>
        `- ${fact.id}: "${fact.value}" | ${fact.label} | Source: ${fact.sourceTitle} (${fact.sourceYear}) ${fact.sourceUrl}`
    )
    .join('\n')

  return `
Write one long-form PhotoMed blog draft in valid JSON.

Rules you must follow:
1. Return JSON only. No markdown fences. No extra commentary.
2. Use this schema exactly:
{
  "title": "string",
  "excerpt": "string",
  "narrativeBlocks": [
    { "type": "heading", "text": "string" },
    { "type": "paragraph", "text": "string" },
    { "type": "quote", "text": "string", "attribution": "string" },
    { "type": "list", "style": "unordered|ordered", "items": ["string"] },
    { "type": "callout", "tone": "info|success|warning", "title": "string", "text": "string" },
    { "type": "divider" }
  ]
}
3. Produce 12 to 18 narrativeBlocks.
4. Include at least 3 headings, 1 quote, 1 list, 1 callout, and 1 divider.
5. Paragraphs, list items, quotes, and callouts must not contain URLs.
6. Paragraphs, list items, quotes, and callouts must not include numeric figures. Numeric facts are handled separately.
7. Keep the article investor-grade, practical, and specific to PhotoMed's value.
8. The article must explain:
   - the real problem,
   - why PhotoMed's approach makes sense,
   - the expected social/health impact,
   - safety guardrails and responsible use.
9. Category context for this article is: ${topic.category}.
10. Topic focus: ${topic.focus}
11. Title direction: ${topic.titleHint}
12. Avoid disease-treatment claims. Keep PhotoMed framed as symptom guidance support.

These are the only verified fact anchors available for this draft:
${factLines}
`.trim()
}

function extractJsonPayload(rawText) {
  const withoutFences = rawText.replace(/```json|```/gi, '').trim()
  const start = withoutFences.indexOf('{')
  const end = withoutFences.lastIndexOf('}')
  if (start < 0 || end < 0 || end <= start) {
    fail('Model response did not contain a valid JSON object.')
  }
  const candidate = withoutFences.slice(start, end + 1)
  try {
    return JSON.parse(candidate)
  } catch (error) {
    fail(`Model returned invalid JSON: ${error instanceof Error ? error.message : 'Unknown parse error'}`)
  }
}

function extractAssistantContent(payload) {
  const choice = payload?.choices?.[0]
  const candidate = choice?.message?.content ?? choice?.text ?? payload?.output_text

  if (typeof candidate === 'string') {
    return sanitizeText(candidate)
  }

  if (Array.isArray(candidate)) {
    const combined = candidate
      .map((part) => {
        if (typeof part === 'string') {
          return part
        }
        if (part && typeof part === 'object') {
          if (typeof part.text === 'string') {
            return part.text
          }
          if (typeof part.content === 'string') {
            return part.content
          }
        }
        return ''
      })
      .join('\n')
    return sanitizeText(combined)
  }

  if (candidate && typeof candidate === 'object') {
    if (typeof candidate.text === 'string') {
      return sanitizeText(candidate.text)
    }
    if (typeof candidate.content === 'string') {
      return sanitizeText(candidate.content)
    }
  }

  return ''
}

function shouldRetryStatus(statusCode) {
  return statusCode === 408 || statusCode === 409 || statusCode === 425 || statusCode === 429 || statusCode >= 500
}

async function waitFor(ms) {
  await new Promise((resolve) => setTimeout(resolve, ms))
}

async function callOpenRouterWithRetry({ apiKey, model, topic, facts }) {
  const prompt = buildGenerationPrompt(topic, facts)

  for (let attempt = 1; attempt <= MAX_API_RETRIES; attempt += 1) {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)

    try {
      const response = await fetch(OPENROUTER_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
          'HTTP-Referer': 'https://photomed.app',
          'X-Title': 'PhotoMed Daily Blog Generator',
        },
        signal: controller.signal,
        body: JSON.stringify({
          model,
          temperature: 0.35,
          max_tokens: 2600,
          messages: [
            {
              role: 'system',
              content:
                'You are a factual editorial assistant. You must follow schema constraints exactly and only return JSON.',
            },
            { role: 'user', content: prompt },
          ],
        }),
      })

      if (!response.ok) {
        const errorText = await response.text()
        if (attempt < MAX_API_RETRIES && shouldRetryStatus(response.status)) {
          await waitFor(600 * attempt)
          continue
        }
        fail(`OpenRouter request failed (${response.status}): ${errorText}`)
      }

      const payload = await response.json()
      const content = extractAssistantContent(payload)
      if (!content) {
        if (attempt < MAX_API_RETRIES) {
          await waitFor(600 * attempt)
          continue
        }
        fail('OpenRouter response did not include message content.')
      }

      return extractJsonPayload(content)
    } catch (error) {
      const isAbort = error instanceof Error && error.name === 'AbortError'
      if (attempt < MAX_API_RETRIES) {
        await waitFor(isAbort ? 1_000 * attempt : 600 * attempt)
        continue
      }
      fail(
        `OpenRouter request error: ${error instanceof Error ? error.message : 'Unknown network error'}`
      )
    } finally {
      clearTimeout(timeout)
    }
  }

  fail('OpenRouter retries exhausted.')
}

function normalizeListItems(items, index) {
  if (!Array.isArray(items) || items.length < 3) {
    fail(`List block at index ${index} must contain at least 3 items.`)
  }
  return items.map((item, itemIndex) => {
    const text = sanitizeText(item)
    if (!text) {
      fail(`List block at index ${index} has an empty item at position ${itemIndex}.`)
    }
    if (hasNumericClaim(text)) {
      fail(`List block at index ${index} contains numeric claims; only statistic blocks can include figures.`)
    }
    if (hasUrl(text)) {
      fail(`List block at index ${index} contains a URL.`)
    }
    return text
  })
}

function normalizeNarrativeBlocks(inputBlocks) {
  if (!Array.isArray(inputBlocks) || inputBlocks.length < 12) {
    fail('Generated narrativeBlocks must be an array with at least 12 items.')
  }

  const allowedTypes = new Set(['paragraph', 'heading', 'quote', 'list', 'callout', 'divider'])
  const counters = {
    heading: 0,
    quote: 0,
    list: 0,
    callout: 0,
    divider: 0,
  }

  const normalized = inputBlocks.map((item, index) => {
    if (!item || typeof item !== 'object') {
      fail(`Narrative block at index ${index} is not an object.`)
    }

    const type = sanitizeText(item.type)
    if (!allowedTypes.has(type)) {
      fail(`Unsupported narrative block type "${type}" at index ${index}.`)
    }

    if (type === 'divider') {
      counters.divider += 1
      return { type: 'divider' }
    }

    if (type === 'list') {
      counters.list += 1
      const style = item.style === 'ordered' ? 'ordered' : 'unordered'
      const items = normalizeListItems(item.items, index)
      return { type: 'list', style, items }
    }

    const text = sanitizeText(item.text)
    if (!text) {
      fail(`Narrative block at index ${index} is missing text.`)
    }
    if (hasNumericClaim(text)) {
      fail(`Narrative block at index ${index} contains numeric claims; only statistic blocks may contain figures.`)
    }
    if (hasUrl(text)) {
      fail(`Narrative block at index ${index} contains a URL.`)
    }

    if (type === 'heading') {
      counters.heading += 1
      return { type: 'heading', text }
    }

    if (type === 'quote') {
      counters.quote += 1
      const attribution = sanitizeText(item.attribution) || 'Verified public source'
      return { type: 'quote', text, attribution }
    }

    if (type === 'callout') {
      counters.callout += 1
      const title = sanitizeText(item.title) || 'Key takeaway'
      const tone = item.tone === 'success' || item.tone === 'warning' ? item.tone : 'info'
      return { type: 'callout', title, text, tone }
    }

    return { type: 'paragraph', text }
  })

  if (counters.heading < 3) {
    fail('Generated draft must include at least 3 headings.')
  }
  if (counters.quote < 1) {
    fail('Generated draft must include at least 1 quote.')
  }
  if (counters.list < 1) {
    fail('Generated draft must include at least 1 list block.')
  }
  if (counters.callout < 1) {
    fail('Generated draft must include at least 1 callout block.')
  }
  if (counters.divider < 1) {
    fail('Generated draft must include at least 1 divider block.')
  }

  return normalized
}

function buildStatisticBlocks(facts) {
  return facts.map((fact) => ({
    type: 'statistic',
    value: fact.value,
    label: fact.label,
    source: `${fact.sourceTitle} (${fact.sourceYear}) - ${fact.sourceUrl}`,
  }))
}

function interleaveStatistics(narrativeBlocks, statisticBlocks) {
  const result = []
  let statsIndex = 0
  let paragraphSeen = 0

  for (const block of narrativeBlocks) {
    result.push(block)
    if (block.type === 'paragraph') {
      paragraphSeen += 1
      if (statsIndex < statisticBlocks.length && (paragraphSeen === 1 || paragraphSeen === 3 || paragraphSeen === 5)) {
        result.push(statisticBlocks[statsIndex])
        statsIndex += 1
      }
    }
  }

  while (statsIndex < statisticBlocks.length) {
    result.push(statisticBlocks[statsIndex])
    statsIndex += 1
  }

  return result
}

function buildReferencesBlocks(facts) {
  const references = [{ type: 'heading', text: 'References' }]
  for (const fact of facts) {
    references.push({
      type: 'paragraph',
      text: `${fact.sourceTitle} (${fact.sourceYear}): ${fact.sourceUrl}`,
    })
  }
  return references
}

function countWords(text) {
  return sanitizeText(text).split(/\s+/).filter(Boolean).length
}

function estimateReadingTime(post) {
  const textWordCount =
    countWords(post.title) +
    countWords(post.excerpt) +
    post.content.reduce((sum, block) => {
      if (!block || typeof block !== 'object') {
        return sum
      }
      if (typeof block.text === 'string') {
        return sum + countWords(block.text)
      }
      if (Array.isArray(block.items)) {
        return sum + block.items.reduce((inner, item) => inner + countWords(item), 0)
      }
      if (typeof block.label === 'string') {
        return sum + countWords(block.label)
      }
      return sum
    }, 0)

  const minutes = Math.max(8, Math.round(textWordCount / 210))
  return `${minutes} min read`
}

function slugify(value) {
  return sanitizeText(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function buildUniqueSlug(title, dateValue, existingPosts) {
  const base = slugify(title) || `photomed-daily-brief-${dateValue}`
  const existing = new Set(existingPosts.map((post) => post.slug))
  if (!existing.has(base)) {
    return base
  }
  let index = 2
  while (existing.has(`${base}-${index}`)) {
    index += 1
  }
  return `${base}-${index}`
}

function validateFacts(facts) {
  if (!Array.isArray(facts) || facts.length < MIN_FACTS_PER_POST) {
    fail('Verified facts dataset is missing or too small.')
  }

  for (const fact of facts) {
    if (!fact.id || !fact.value || !fact.label || !fact.sourceTitle || !fact.sourceUrl) {
      fail(`Fact entry is missing required fields: ${JSON.stringify(fact)}`)
    }
    if (!Array.isArray(fact.categories) || fact.categories.length === 0) {
      fail(`Fact ${fact.id} must include categories.`)
    }
    if (!Array.isArray(fact.tags) || fact.tags.length === 0) {
      fail(`Fact ${fact.id} must include tags.`)
    }
    if (!/^https?:\/\//i.test(fact.sourceUrl)) {
      fail(`Fact ${fact.id} has an invalid source URL.`)
    }
  }
}

function validateFinalPost(post, selectedFacts) {
  if (!post.title || !post.excerpt || !post.slug || !post.date || !post.category) {
    fail('Final generated post is missing required top-level fields.')
  }
  if (!ALLOWED_CATEGORIES.includes(post.category)) {
    fail(`Generated category "${post.category}" is not allowed.`)
  }
  if (!Array.isArray(post.content) || post.content.length < 15) {
    fail('Generated post content is too short.')
  }

  const factMap = new Map(
    selectedFacts.map((fact) => [
      `${fact.value}|||${fact.label}`,
      `${fact.sourceTitle} (${fact.sourceYear}) - ${fact.sourceUrl}`,
    ])
  )

  const statistics = post.content.filter((block) => block?.type === 'statistic')
  if (statistics.length < MIN_FACTS_PER_POST) {
    fail(`Generated post has too few statistic blocks (${statistics.length}).`)
  }

  for (const stat of statistics) {
    const key = `${sanitizeText(stat.value)}|||${sanitizeText(stat.label)}`
    if (!factMap.has(key)) {
      fail(`Statistic "${key}" is not part of selected verified facts.`)
    }
    const expectedSource = factMap.get(key)
    if (sanitizeText(stat.source) !== expectedSource) {
      fail(`Statistic source mismatch for "${key}".`)
    }
  }
}

function isAlreadyGeneratedForDate(posts, dateValue) {
  return posts.some((post) => post.date === dateValue && post.author === AUTO_AUTHOR)
}

async function writeJsonAtomic(filePath, value) {
  const tempFilePath = `${filePath}.tmp-${Date.now()}`
  await writeFile(tempFilePath, `${JSON.stringify(value, null, 2)}\n`, 'utf8')
  await rename(tempFilePath, filePath)
}

async function main() {
  await loadDotEnvIfPresent()

  const force = process.argv.includes('--force')
  const apiKey = process.env.OPENROUTER_API_KEY
  const model = process.env.OPENROUTER_MODEL || FALLBACK_MODEL

  if (!apiKey) {
    fail('OPENROUTER_API_KEY is required for blog generation.')
  }

  const posts = await readJsonFile(BLOG_POSTS_PATH, 'blog posts')
  if (!Array.isArray(posts)) {
    fail('blog-posts.json must be a top-level array.')
  }

  const factsPayload = await readJsonFile(VERIFIED_FACTS_PATH, 'verified facts')
  const facts = factsPayload?.facts
  validateFacts(facts)

  const today = getTodayDate()
  if (!force && isAlreadyGeneratedForDate(posts, today)) {
    console.log(`Daily blog post already exists for ${today}. Nothing to do.`)
    return
  }

  const topic = pickTopicForDate(today)
  const selectedFacts = selectFacts(topic, facts, MIN_FACTS_PER_POST)

  const draft = await callOpenRouterWithRetry({
    apiKey,
    model,
    topic,
    facts: selectedFacts,
  })

  const title = sanitizeText(draft.title)
  const excerpt = sanitizeText(draft.excerpt)
  if (!title || title.length < 35) {
    fail('Generated title is too short or empty.')
  }
  if (!excerpt || excerpt.length < 80) {
    fail('Generated excerpt is too short or empty.')
  }

  const narrativeBlocks = normalizeNarrativeBlocks(draft.narrativeBlocks)
  const statistics = buildStatisticBlocks(selectedFacts)
  const content = [
    ...interleaveStatistics(narrativeBlocks, statistics),
    ...buildReferencesBlocks(selectedFacts),
  ]

  const generatedPost = {
    slug: buildUniqueSlug(title, today, posts),
    title,
    excerpt,
    author: AUTO_AUTHOR,
    date: today,
    readingTime: '',
    category: topic.category,
    content,
  }
  generatedPost.readingTime = estimateReadingTime(generatedPost)

  validateFinalPost(generatedPost, selectedFacts)

  posts.push(generatedPost)
  await writeJsonAtomic(BLOG_POSTS_PATH, posts)

  console.log(`Generated "${generatedPost.title}" (${generatedPost.slug}) for ${today}.`)
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error)
  process.exit(1)
})
