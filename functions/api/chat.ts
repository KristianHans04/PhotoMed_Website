interface Env {
  OPENROUTER_API_KEY: string
  RATE_LIMIT_KV?: KVNamespace
}

interface ChatRequest {
  messages: { role: 'user' | 'assistant'; content: string }[]
}

const SYSTEM_PROMPT = `You are the PhotoMed website assistant. PhotoMed is an AI-powered traditional medicine platform that helps users identify medicinal plants through image recognition, provides symptom-to-remedy guidance using ethnobotanical research, and maps medicinal plant locations geospatially.

Your role:
- Help visitors understand what PhotoMed does and how it works
- Answer questions about traditional plant medicine in general terms
- Guide users to appropriate pages (Download, Donate, Contact, How It Works)
- Be helpful, informative, and concise
- Never provide specific medical advice or diagnosis
- Always recommend consulting healthcare professionals for serious symptoms
- Do not use emojis in your responses

Key facts about PhotoMed:
- Mobile app available on Android (APK download)
- Uses AI cross-referenced with PlantNet botanical database for plant identification
- Geospatial mapping of medicinal plants using PostGIS
- Currently targeting the Kenyan market, expanding to East Africa
- Backend hosted on Railway, mobile built with Flutter
- 187 automated tests, production-grade infrastructure
- Founded on WHO research showing 80% of developing nations rely on traditional medicine

Keep responses under 150 words unless the question requires detailed explanation.`

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
        model: 'google/gemma-3-1b-it:free',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...recentMessages,
        ],
        max_tokens: 300,
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
    const reply = data.choices?.[0]?.message?.content || 'I was unable to generate a response. Please try again.'

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
