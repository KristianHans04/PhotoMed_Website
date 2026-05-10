import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

const STORAGE_KEY = 'photomed_newsletter_dismissed'
const SHOW_DELAY_MS = 15000

export default function NewsletterModal() {
  const [visible, setVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY)
    if (dismissed) return

    const timer = window.setTimeout(() => setVisible(true), SHOW_DELAY_MS)
    return () => window.clearTimeout(timer)
  }, [])

  function dismiss() {
    setVisible(false)
    localStorage.setItem(STORAGE_KEY, 'true')
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim()) return

    setStatus('submitting')
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      })

      if (!response.ok) throw new Error('Subscription failed')

      setStatus('success')
      localStorage.setItem(STORAGE_KEY, 'true')
      setTimeout(() => setVisible(false), 3000)
    } catch {
      setStatus('error')
    }
  }

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl">
        <button
          onClick={dismiss}
          className="absolute right-4 top-4 rounded-md p-1 text-text-muted transition-colors hover:text-text-primary"
          aria-label="Close newsletter signup"
        >
          <X size={20} />
        </button>

        <div className="p-8">
          {status === 'success' ? (
            <div className="text-center py-6">
              <h3 className="text-xl font-bold text-text-primary">You are subscribed</h3>
              <p className="mt-3 text-sm text-text-muted">
                You will receive our weekly newsletter with the latest research, product updates, and stories from the field.
              </p>
            </div>
          ) : (
            <>
              <h3 className="text-xl font-bold text-text-primary">
                Stay informed
              </h3>
              <p className="mt-3 text-sm text-text-muted leading-relaxed">
                Get a weekly roundup of product updates, plant-based remedy research,
                and stories from the communities we serve. No spam.
              </p>

              <form onSubmit={handleSubmit} className="mt-6">
                <label htmlFor="newsletter-email" className="text-sm font-medium text-text-secondary">
                  Email address
                </label>
                <div className="mt-2 flex gap-3">
                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    className="flex-1 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                  />
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="shrink-0 rounded-lg bg-primary-700 px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-800 disabled:opacity-50"
                  >
                    {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </div>
                {status === 'error' && (
                  <p className="mt-3 text-sm text-red-600">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>

              <p className="mt-4 text-xs text-text-muted">
                By subscribing, you agree to our{' '}
                <a href="/privacy" className="text-primary-700 hover:underline">Privacy Policy</a>.
                Unsubscribe at any time.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
