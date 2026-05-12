interface Env {
  OPENROUTER_API_KEY: string
  RATE_LIMIT_KV?: KVNamespace
}

interface ChatRequest {
  messages: { role: 'user' | 'assistant'; content: string }[]
}

const SYSTEM_PROMPT = `You are the PhotoMed website assistant. PhotoMed is an AI-powered mobile app that helps people treat everyday symptoms using medicinal plants growing near them.

How PhotoMed works:
1. A user opens the app and describes their symptoms to the AI chatbot (e.g. "I have a headache and feel nauseous")
2. The AI identifies which medicinal plants can help those symptoms
3. Using the user's GPS location, it finds the nearest available plant
4. It gives walking directions to the plant
5. It tells the user how to prepare the remedy (chew the leaf, boil into tea, apply topically, etc.)
6. When the user arrives, they can use the camera to confirm they picked the right plant

Important context:
- PhotoMed treats everyday SYMPTOMS like headaches, stomach aches, coughs, minor burns, nausea, skin irritation. It does NOT treat diseases like cancer or COVID-19.
- If symptoms persist or are serious, PhotoMed always recommends seeing a doctor.
- PhotoMed is NOT replacing hospitals or pharmaceutical companies. It helps decongest healthcare systems by handling simple ailments.
- The vision is to map all the world's vegetation like Google Street View mapped every street.
- The app is currently available on Android.
- Future plans include veterinary care (treating animals and pets with plant-based remedies).

Your behavior rules:
- NEVER show your reasoning or thinking process. Only output the final answer.
- NEVER use markdown formatting like ** or ## or - lists. Write in plain, natural sentences and paragraphs.
- NEVER mention internal technology, APIs, databases, frameworks, or infrastructure.
- Do not use emojis.
- Keep responses concise (under 150 words) unless a detailed explanation is needed.
- Only answer questions related to PhotoMed, plant-based remedies, or the website. Politely decline unrelated questions.
- Be confident and professional. This is an investor-facing website.
- Guide visitors to relevant pages: About, Blog, Donate, Contact, Careers.`

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context
  const clientIP = request.headers.get('CF-Connecting-IP') || 'unknown'

  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  }

  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders })
  }

  // Simple in-memory rate limiting using CF headers
  const rateLimitKey = `chat:${clientIP}`
  if (env.RATE_LIMIT_KV) {
    const existing = await env.RATE_LIMIT_KV.get(rateLimitKey)
    if (existing && parseInt(existing) >= 20) {
      return new Response(
        JSON.stringify({ error: 'Rate limit exceeded. Please try again later.' }),
        { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }
    const count = existing ? parseInt(existing) + 1 : 1
    await env.RATE_LIMIT_KV.put(rateLimitKey, count.toString(), { expirationTtl: 3600 })
  }

  try {
    const body: ChatRequest = await request.json()

    if (!body.messages || !Array.isArray(body.messages) || body.messages.length === 0) {
      return new Response(
        JSON.stringify({ error: 'Messages array is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Limit conversation length to prevent abuse
    const recentMessages = body.messages.slice(-6)

    const openrouterRes = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${env.OPENROUTER_API_KEY}`,
        'HTTP-Referer': 'https://photomed.kristianhans.com',
        'X-Title': 'PhotoMed Website Assistant',
      },
      body: JSON.stringify({
        model: 'openrouter/free',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...recentMessages,
        ],
        max_tokens: 3000,
        temperature: 0.7,
      }),
    })

    if (!openrouterRes.ok) {
      const err = await openrouterRes.text()
      console.error('OpenRouter error:', err)
      return new Response(
        JSON.stringify({ error: 'AI service temporarily unavailable' }),
        { status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const data = await openrouterRes.json() as { choices: { message: { content: string } }[] }
    let reply = data.choices?.[0]?.message?.content || 'I was unable to generate a response. Please try again.'

    // Strip chain-of-thought leaks (model sometimes prefixes with thinking)
    reply = reply.replace(/^(Okay|Alright|Let me|Hmm|So),?\s*(the user|they|I need to|I should|I'll|looking at).*?\n+/gi, '')
    reply = reply.replace(/<think>[\s\S]*?<\/think>/gi, '')
    reply = reply.replace(/\*\*(.*?)\*\*/g, '$1')
    reply = reply.replace(/^#+\s*/gm, '')
    reply = reply.replace(/^[-*]\s+/gm, '- ')
    reply = reply.trim()

    return new Response(
      JSON.stringify({ reply }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch {
    return new Response(
      JSON.stringify({ error: 'Invalid request' }),
      { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
}
