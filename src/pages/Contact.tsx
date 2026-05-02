import { useState } from 'react'
import { Section, AnimatedBlock } from '@/components/ui/Section'
import { Mail, MapPin, Send, Loader2, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'Failed to send message')
      }

      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      setStatus('error')
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong')
    }
  }

  return (
    <>
      {/* Hero with vegetation background */}
      <section className="relative overflow-hidden bg-primary-950 py-24 md:py-32">
        <div className="absolute inset-0 opacity-15">
          <img
            src="/images/vegetation-hands.webp"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary-950/60 to-primary-950" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedBlock>
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary-400">
                Get in Touch
              </span>
              <h1 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
                Let's talk
              </h1>
              <p className="mt-6 text-lg text-primary-200/80">
                Whether you are interested in partnerships, research collaboration, funding
                opportunities, or just want to learn more about what we are building — we
                want to hear from you.
              </p>
            </div>
          </AnimatedBlock>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <AnimatedBlock>
              {status === 'success' ? (
                <div className="flex flex-col items-center rounded-2xl border border-primary-200 bg-primary-50 p-12 text-center">
                  <CheckCircle className="text-primary-700" size={48} />
                  <h2 className="mt-4 text-2xl font-bold text-text-primary">Message sent</h2>
                  <p className="mt-2 text-text-muted">
                    Thank you for reaching out. We will respond within 48 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-sm font-medium text-primary-700 hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <div className="rounded-2xl border border-primary-100 bg-white p-6 shadow-sm md:p-10">
                  <h2 className="text-xl font-bold text-text-primary">Send us a message</h2>
                  <p className="mt-1 text-sm text-text-muted">
                    We read and respond to every message personally.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-text-primary">
                          Name
                        </label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full rounded-xl border border-primary-200 bg-white px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-text-primary">
                          Email
                        </label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full rounded-xl border border-primary-200 bg-white px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-text-primary">
                        Subject
                      </label>
                      <input
                        type="text"
                        required
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className="w-full rounded-xl border border-primary-200 bg-white px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                        placeholder="Partnership, Research, Funding, General Inquiry..."
                      />
                    </div>

                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-text-primary">
                        Message
                      </label>
                      <textarea
                        required
                        rows={6}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full resize-none rounded-xl border border-primary-200 bg-white px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                        placeholder="Tell us what you're thinking..."
                      />
                    </div>

                    {status === 'error' && (
                      <p className="text-sm text-red-600">{errorMessage}</p>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary-700 px-6 py-4 text-sm font-semibold text-white transition-all hover:bg-primary-800 hover:shadow-lg hover:shadow-primary-700/20 disabled:opacity-50"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </AnimatedBlock>
          </div>

          <div className="lg:col-span-2">
            <AnimatedBlock delay={200}>
              <div className="space-y-6">
                <div className="rounded-2xl border border-primary-100 bg-surface-dim p-6">
                  <div className="flex items-center gap-3">
                    <Mail className="text-primary-700" size={20} />
                    <h3 className="font-bold text-text-primary">Email</h3>
                  </div>
                  <p className="mt-2 text-sm text-text-muted">
                    hello@kristianhans.com
                  </p>
                </div>

                <div className="rounded-2xl border border-primary-100 bg-surface-dim p-6">
                  <div className="flex items-center gap-3">
                    <MapPin className="text-primary-700" size={20} />
                    <h3 className="font-bold text-text-primary">Location</h3>
                  </div>
                  <p className="mt-2 text-sm text-text-muted">
                    Nairobi, Kenya
                  </p>
                </div>

                <div className="rounded-2xl border border-primary-100 bg-surface-dim p-6">
                  <h3 className="font-bold text-text-primary">Response Time</h3>
                  <p className="mt-2 text-sm text-text-muted">
                    We respond to all inquiries within 48 hours. For urgent matters
                    related to partnerships or funding, please indicate this in your subject line.
                  </p>
                </div>

                {/* Community image */}
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src="/images/community-2.webp"
                    alt="PhotoMed being used in a rural East African community"
                    className="aspect-[4/3] w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </AnimatedBlock>
          </div>
        </div>
      </Section>
    </>
  )
}
