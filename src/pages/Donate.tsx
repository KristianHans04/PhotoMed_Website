import { useState } from 'react'
import { Section, AnimatedBlock } from '@/components/ui/Section'

export default function Donate() {
  const [amount, setAmount] = useState('')
  const [email, setEmail] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)

  function handleDonate() {
    const parsedAmount = Number.parseInt(amount, 10)
    const normalizedEmail = email.trim()
    if (!parsedAmount || parsedAmount < 1 || !normalizedEmail) return

    setIsProcessing(true)

    const handler = (window as unknown as Record<string, unknown>).PaystackPop as {
      setup: (config: Record<string, unknown>) => { openIframe: () => void }
    }

    if (!handler) {
      const script = document.createElement('script')
      script.src = 'https://js.paystack.co/v1/inline.js'
      script.onload = () => initPaystack(parsedAmount * 100, normalizedEmail)
      document.head.appendChild(script)
    } else {
      initPaystack(parsedAmount * 100, normalizedEmail)
    }
  }

  function initPaystack(amountInKobo: number, donorEmail: string) {
    const PaystackPop = (window as unknown as Record<string, unknown>).PaystackPop as {
      setup: (config: Record<string, unknown>) => { openIframe: () => void }
    }

    const handler = PaystackPop.setup({
      key: 'pk_test_ea98efd53a7531a0b94d9c527bd277df3c0e2585',
      amount: amountInKobo,
      currency: 'KES',
      email: donorEmail,
      metadata: {
        custom_fields: [{ display_name: 'Donation', variable_name: 'donation', value: 'PhotoMed Platform' }],
      },
      callback: () => {
        setIsProcessing(false)
        alert('Thank you for supporting PhotoMed.')
      },
      onClose: () => {
        setIsProcessing(false)
      },
    })

    handler.openIframe()
  }

  return (
    <>
      {/* Donate hero — clean, minimal, no dark overlay */}
      <section className="border-b border-primary-100 bg-gradient-to-b from-primary-50 to-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedBlock>
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-extrabold text-text-primary sm:text-5xl">
                Fund the mapping of vegetation and the delivery of symptom relief to underserved communities
              </h1>
            </div>
          </AnimatedBlock>
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-2xl">
          <AnimatedBlock>
            <div className="rounded-2xl border border-primary-100 bg-white p-6 shadow-sm md:p-10">
              <h2 className="text-2xl font-bold text-text-primary">Enter donation amount</h2>

              <div className="mt-8">
                <label className="text-sm font-medium text-text-secondary">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-xl border border-primary-200 bg-white px-4 py-3.5 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                />
              </div>

              <div className="mt-6">
                <label className="text-sm font-medium text-text-secondary">Amount (KES)</label>
                <div className="mt-2 flex items-center gap-3">
                  <span className="text-sm font-semibold text-text-muted">KES</span>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0"
                    min="1"
                    className="w-full rounded-xl border border-primary-200 bg-white px-4 py-3.5 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                  />
                </div>
              </div>

              <button
                onClick={handleDonate}
                disabled={isProcessing || !amount || !email}
                className="mt-8 w-full rounded-xl bg-primary-700 px-6 py-4 text-base font-semibold text-white transition-all hover:bg-primary-800 hover:shadow-lg hover:shadow-primary-700/20 disabled:opacity-50"
              >
                {isProcessing ? 'Processing...' : `Donate KES ${amount || '0'}`}
              </button>
            </div>
          </AnimatedBlock>
        </div>
      </Section>
    </>
  )
}
