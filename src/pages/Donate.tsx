import { useState } from 'react'
import { Section, AnimatedBlock } from '@/components/ui/Section'

const amounts = [500, 1000, 2500, 5000, 10000, 25000]

const milestones = [
  {
    amount: 'KES 500',
    impact: 'Covers the cost of verifying and digitizing 10 traditional plant remedies from community healers.',
  },
  {
    amount: 'KES 2,500',
    impact: 'Funds one day of field research documenting medicinal plants in a rural Kenyan community.',
  },
  {
    amount: 'KES 10,000',
    impact: 'Supports the compute costs for training AI models on 500 additional plant species.',
  },
  {
    amount: 'KES 25,000',
    impact: 'Enables deployment of PhotoMed to a new geographic region including local flora database setup.',
  },
]

export default function Donate() {
  const [selectedAmount, setSelectedAmount] = useState<number>(2500)
  const [customAmount, setCustomAmount] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)

  function handleDonate() {
    setIsProcessing(true)
    const amount = customAmount ? parseInt(customAmount) * 100 : selectedAmount * 100

    const handler = (window as unknown as Record<string, unknown>).PaystackPop as {
      setup: (config: Record<string, unknown>) => { openIframe: () => void }
    }

    if (!handler) {
      const script = document.createElement('script')
      script.src = 'https://js.paystack.co/v1/inline.js'
      script.onload = () => initPaystack(amount)
      document.head.appendChild(script)
    } else {
      initPaystack(amount)
    }
  }

  function initPaystack(amount: number) {
    const PaystackPop = (window as unknown as Record<string, unknown>).PaystackPop as {
      setup: (config: Record<string, unknown>) => { openIframe: () => void }
    }

    const handler = PaystackPop.setup({
      key: 'pk_test_ea98efd53a7531a0b94d9c527bd277df3c0e2585',
      amount,
      currency: 'KES',
      email: '',
      metadata: { custom_fields: [{ display_name: 'Donation', variable_name: 'donation', value: 'PhotoMed Platform' }] },
      callback: () => {
        setIsProcessing(false)
        alert('Thank you for your contribution. Your support directly advances our mission.')
      },
      onClose: () => {
        setIsProcessing(false)
      },
    })

    handler.openIframe()
  }

  return (
    <>
      {/* Hero with full-bleed community image */}
      <section className="relative overflow-hidden bg-primary-950 py-24 md:py-32">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/images/community-1.webp"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-950/80 to-primary-950/60" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedBlock>
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary-400">
                Support the Mission
              </span>
              <h1 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
                Fund the future of
                <br />
                <span className="text-primary-300">accessible healthcare</span>
              </h1>
              <p className="mt-6 text-lg text-primary-200/80">
                PhotoMed is self-funded and independent. Every contribution goes directly into
                development, research, and expansion. No investors to answer to. No profit motive
                to distort the mission.
              </p>
            </div>
          </AnimatedBlock>
        </div>
      </section>

      {/* Donation form + impact */}
      <Section>
        <div className="grid gap-16 lg:grid-cols-5">
          {/* Left: form */}
          <div className="lg:col-span-3">
            <AnimatedBlock>
              <div className="rounded-2xl border border-primary-100 bg-white p-6 shadow-sm md:p-10">
                <h2 className="text-2xl font-bold text-text-primary">Choose an amount (KES)</h2>
                <p className="mt-2 text-sm text-text-muted">
                  All contributions are processed securely via Paystack.
                </p>

                <div className="mt-8 grid grid-cols-3 gap-3">
                  {amounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => { setSelectedAmount(amount); setCustomAmount('') }}
                      className={`rounded-xl border-2 px-4 py-4 text-sm font-semibold transition-all ${
                        selectedAmount === amount && !customAmount
                          ? 'border-primary-700 bg-primary-50 text-primary-700 shadow-sm'
                          : 'border-primary-100 text-text-secondary hover:border-primary-300 hover:bg-primary-50/50'
                      }`}
                    >
                      {amount.toLocaleString()}
                    </button>
                  ))}
                </div>

                <div className="mt-6">
                  <label className="text-sm font-medium text-text-secondary">
                    Or enter a custom amount
                  </label>
                  <div className="mt-2 flex items-center gap-3">
                    <span className="text-sm font-semibold text-text-muted">KES</span>
                    <input
                      type="number"
                      value={customAmount}
                      onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(0) }}
                      placeholder="0"
                      min="100"
                      className="w-full rounded-xl border border-primary-200 bg-white px-4 py-3.5 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                    />
                  </div>
                </div>

                <button
                  onClick={handleDonate}
                  disabled={isProcessing || (!selectedAmount && !customAmount)}
                  className="mt-8 w-full rounded-xl bg-primary-700 px-6 py-4 text-base font-semibold text-white transition-all hover:bg-primary-800 hover:shadow-lg hover:shadow-primary-700/20 disabled:opacity-50"
                >
                  {isProcessing
                    ? 'Processing...'
                    : `Contribute KES ${(customAmount || selectedAmount).toLocaleString()}`}
                </button>

                <p className="mt-4 text-center text-xs text-text-muted">
                  Secured by Paystack. Your payment information is never stored on our servers.
                </p>
              </div>
            </AnimatedBlock>
          </div>

          {/* Right: what your money does */}
          <div className="lg:col-span-2">
            <AnimatedBlock delay={200}>
              <h2 className="text-2xl font-bold text-text-primary">What your contribution funds</h2>
              <div className="mt-6 space-y-4">
                {milestones.map((item) => (
                  <div key={item.amount} className="rounded-xl bg-surface-dim p-5">
                    <p className="text-sm font-bold text-primary-700">{item.amount}</p>
                    <p className="mt-2 text-sm text-text-muted leading-relaxed">{item.impact}</p>
                  </div>
                ))}
              </div>
            </AnimatedBlock>
          </div>
        </div>
      </Section>

      {/* Allocation breakdown */}
      <section className="bg-surface-dim py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedBlock>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-text-primary">Fund Allocation</h2>
              <p className="mx-auto mt-4 max-w-2xl text-text-muted">
                Full transparency on where every shilling goes.
              </p>
            </div>
          </AnimatedBlock>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { pct: '40%', label: 'Engineering', detail: 'AI models, app development, infrastructure' },
              { pct: '25%', label: 'Field Research', detail: 'Community interviews, plant documentation, verification' },
              { pct: '20%', label: 'Expansion', detail: 'New regions, languages, local flora databases' },
              { pct: '15%', label: 'Operations', detail: 'Hosting, security, compliance, community support' },
            ].map((item, i) => (
              <AnimatedBlock key={item.label} delay={i * 100}>
                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <div className="text-4xl font-black text-primary-700">{item.pct}</div>
                  <h3 className="mt-3 font-bold text-text-primary">{item.label}</h3>
                  <p className="mt-2 text-sm text-text-muted">{item.detail}</p>
                </div>
              </AnimatedBlock>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="relative overflow-hidden bg-primary-900 py-20 md:py-28">
        <div className="absolute inset-0 opacity-10">
          <img src="/images/vegetation-dense.webp" alt="" className="h-full w-full object-cover" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedBlock>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Transparency Commitment</h2>
              <p className="mt-6 text-primary-200/80 leading-relaxed">
                We publish quarterly updates on how funds are allocated. Development costs,
                research partnerships, community outreach, and infrastructure expenses are all
                documented publicly. If you contribute, you will know exactly where your money went.
              </p>
              <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-primary-700/50 bg-primary-800/50 px-6 py-3 text-sm text-primary-200">
                Open-source codebase on GitHub — audit us anytime
              </div>
            </div>
          </AnimatedBlock>
        </div>
      </section>
    </>
  )
}
