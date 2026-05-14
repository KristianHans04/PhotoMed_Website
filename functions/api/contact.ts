interface Env {
  RESEND_API_KEY: string
  CONTACT_TO_EMAIL: string
}

interface ContactRequest {
  name: string
  email: string
  subject: string
  message: string
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context

  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  }

  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders })
  }

  try {
    const body: ContactRequest = await request.json()

    if (!body.name || !body.email || !body.subject || !body.message) {
      return new Response(
        JSON.stringify({ error: 'All fields are required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email address' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const resendKey = env.RESEND_API_KEY
    const toEmail = env.CONTACT_TO_EMAIL || 'support@photomed.app'
    const contactFrom = 'PhotoMed Support <support@mail.photomed.app>'

    // Send notification to team
    const notificationRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${resendKey}`,
      },
      body: JSON.stringify({
        from: contactFrom,
        to: [toEmail],
        reply_to: body.email,
        subject: `[PhotoMed Contact] ${body.subject}`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 32px 24px; background: #ffffff;">
            <div style="border-bottom: 3px solid #15803d; padding-bottom: 16px; margin-bottom: 24px;">
              <h1 style="margin: 0; font-size: 20px; color: #0a1f13;">New Contact Form Submission</h1>
            </div>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #6b7f73; font-size: 14px; width: 100px;">Name</td>
                <td style="padding: 8px 0; color: #0a1f13; font-size: 14px; font-weight: 600;">${body.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7f73; font-size: 14px;">Email</td>
                <td style="padding: 8px 0; color: #0a1f13; font-size: 14px;"><a href="mailto:${body.email}" style="color: #15803d;">${body.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7f73; font-size: 14px;">Subject</td>
                <td style="padding: 8px 0; color: #0a1f13; font-size: 14px;">${body.subject}</td>
              </tr>
            </table>
            <div style="margin-top: 24px; padding: 16px; background: #f1f5f3; border-radius: 8px;">
              <p style="margin: 0 0 8px; color: #6b7f73; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>
              <p style="margin: 0; color: #0a1f13; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${body.message}</p>
            </div>
            <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #dcfce7;">
               <p style="margin: 0; color: #6b7f73; font-size: 12px;">Sent from the PhotoMed website contact form</p>
             </div>
           </div>
         `,
      }),
    })

    if (!notificationRes.ok) {
      const err = await notificationRes.text()
      console.error('Resend error:', err)
      return new Response(
        JSON.stringify({ error: 'Failed to send message. Please try again.' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Send acknowledgment to user
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${resendKey}`,
      },
      body: JSON.stringify({
        from: contactFrom,
        to: [body.email],
        reply_to: toEmail,
        subject: 'We received your message - PhotoMed',
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 32px 24px; background: #ffffff;">
            <div style="border-bottom: 3px solid #15803d; padding-bottom: 16px; margin-bottom: 24px;">
              <h1 style="margin: 0; font-size: 20px; color: #0a1f13;">Thank you for reaching out</h1>
            </div>
            <p style="color: #374a3e; font-size: 14px; line-height: 1.7;">
              Hi ${body.name},
             </p>
             <p style="color: #374a3e; font-size: 14px; line-height: 1.7;">
               We have received your message regarding "${body.subject}" and will get back to you within 24 working hours.
             </p>
            <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #dcfce7;">
              <p style="margin: 0; color: #6b7f73; font-size: 12px;">PhotoMed Support Team</p>
            </div>
          </div>
        `,
      }),
    })

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch {
    return new Response(
      JSON.stringify({ error: 'Invalid request body' }),
      { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
}
