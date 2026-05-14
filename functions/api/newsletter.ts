interface Env {
  RESEND_API_KEY?: string
  NEWSLETTER_AUDIENCE_ID?: string
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  }

  try {
    const body = (await context.request.json()) as { email?: string }
    const email = body.email?.trim()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Please provide a valid email address.' }),
        { status: 400, headers }
      )
    }

    const resendKey = context.env.RESEND_API_KEY
    if (!resendKey) {
      // Store locally if Resend is not configured
      console.log(`Newsletter subscription: ${email}`)
      return new Response(
        JSON.stringify({ success: true, message: 'Subscribed successfully.' }),
        { status: 200, headers }
      )
    }

    // Send welcome email via Resend
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'PhotoMed <newsletter@scrapifie.com>',
        to: [email],
        subject: 'Welcome to the PhotoMed Newsletter',
        html: `
          <div style="font-family: 'Inter', Arial, sans-serif; max-width: 560px; margin: 0 auto; padding: 40px 24px; color: #0a1f13;">
            <div style="margin-bottom: 32px;">
              <span style="font-size: 20px; font-weight: 800; color: #14532d;">Photo</span><span style="font-size: 20px; font-weight: 800; color: #15803d;">Med</span>
            </div>
            <h1 style="font-size: 24px; font-weight: 700; margin: 0 0 16px 0; color: #0a1f13;">
              Welcome to our newsletter
            </h1>
            <p style="font-size: 15px; line-height: 1.7; color: #374a3e; margin: 0 0 16px 0;">
              Thank you for subscribing. Every week, we will share the latest research, product updates, and stories from the communities driving traditional medicine forward.
            </p>
            <p style="font-size: 15px; line-height: 1.7; color: #374a3e; margin: 0 0 24px 0;">
              In the meantime, explore our latest articles on the PhotoMed blog.
            </p>
            <a href="https://photomed.app/blog" style="display: inline-block; background-color: #15803d; color: #ffffff; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-size: 14px; font-weight: 600;">
              Read the Blog
            </a>
            <hr style="border: none; border-top: 1px solid #dcfce7; margin: 32px 0;" />
            <p style="font-size: 12px; color: #6b7f73; margin: 0;">
              PhotoMed. Traditional medicine, preserved by technology.
            </p>
          </div>
        `,
      }),
    })

    if (!emailResponse.ok) {
      console.error('Resend error:', await emailResponse.text())
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Subscribed successfully.' }),
      { status: 200, headers }
    )
  } catch (error) {
    console.error('Newsletter error:', error)
    return new Response(
      JSON.stringify({ error: 'An unexpected error occurred.' }),
      { status: 500, headers }
    )
  }
}
