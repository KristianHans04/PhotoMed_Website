import { useState } from 'react'
import { Section, AnimatedBlock } from '@/components/ui/Section'
import { Heart, Shield, Globe } from 'lucide-react'

const impactAreas = [
  {
    icon: Globe,
    title: 'Expansion to East Africa',
    description:
      'Funding directly accelerates our expansion from Kenya into Tanzania, Uganda, and Ethiopia — regions where traditional medicine usage exceeds 80%.',
  },
  {
    icon: Heart,
    title: 'Community Plant Mapping',
    description:
      'Every contribution supports local botanists and community health workers who verify plant locations and traditional use data.',
  },
  {
    icon: Shield,
    title: 'AI Model Training',
    description:
      'Better models mean more accurate plant identification and safer symptom guidance. Your support funds the compute and research behind this.',
  },
]

const amounts = [500, 1000, 2500, 5000, 10000, 25000]

export default function Donate() {
  const [selectedAmount, setSelectedAmount] = useState<number>(2500)
  const [customAmount, setCustomAmount] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)

  function handleDonate() {
    setIsProcessing(true)
    const amount = customAmount ? parseInt(customAmount) * 100 : selectedAmount * 100

    // Paystack inline integration
    const handler = (window as unknown as Record<string, unknown>).PaystackPop as {
      setup: (config: Record<string, unknown>) => { openIframe: () => void }
    }

    if (!handler) {
      // Load Paystack script dynamically
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
      <section className="bg-gradient-to-b from-primary-50 to-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedBlock>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-extrabold text-text-primary sm:text-5xl">
                Fund the future of accessible healthcare
              </h1>
              <p className="mt-6 text-lg text-text-muted">
                PhotoMed is self-funded and independent. Every contribution goes directly into
                development, research, and expansion. No investors to answer to. No profit motive
                to distort the mission.
              </p>
            </div>
          </AnimatedBlock>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <AnimatedBlock>
            <div>
              <h2 className="text-2xl font-bold text-text-primary">Choose an amount (KES)</h2>
              <p className="mt-2 text-sm text-text-muted">
                All contributions are processed securely via Paystack.
              </p>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {amounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => { setSelectedAmount(amount); setCustomAmount('') }}
                    className={`rounded-lg border-2 px-4 py-3 text-sm font-semibold transition-all ${
                      selectedAmount === amount && !customAmount
                        ? 'border-primary-700 bg-primary-50 text-primary-700'
                        : 'border-primary-100 text-text-secondary hover:border-primary-300'
                    }`}
                  >
                    {amount.toLocaleString()}
                  </button>
                ))}
              </div>

              <div className="mt-4">
                <label className="text-sm font-medium text-text-secondary">
                  Or enter a custom amount
                </label>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-sm font-medium text-text-muted">KES</span>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(0) }}
                    placeholder="0"
                    min="100"
                    className="w-full rounded-lg border border-primary-200 bg-white px-4 py-3 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                  />
                </div>
              </div>

              <button
                onClick={handleDonate}
                disabled={isProcessing || (!selectedAmount && !customAmount)}
                className="mt-6 w-full rounded-lg bg-primary-700 px-6 py-4 text-base font-semibold text-white transition-all hover:bg-primary-800 hover:shadow-lg disabled:opacity-50"
              >
                {isProcessing
                  ? 'Processing...'
                  : `Contribute KES ${(customAmount || selectedAmount).toLocaleString()}`}
              </button>

              <p className="mt-3 text-xs text-text-muted">
                Secured by Paystack. Your payment information is never stored on our servers.
              </p>
            </div>
          </AnimatedBlock>

          <AnimatedBlock delay={200}>
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-text-primary">Where your money goes</h2>
              {impactAreas.map((area) => (
                <div key={area.title} className="flex gap-4 rounded-xl border border-primary-100 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-100 text-primary-700">
                    <area.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-text-primary">{area.title}</h3>
                    <p className="mt-1 text-sm text-text-muted">{area.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedBlock>
        </div>
      </Section>

      <Section className="bg-surface-dim">
        <AnimatedBlock>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-text-primary">Transparency Commitment</h2>
            <p className="mt-4 text-text-muted leading-relaxed">
              We publish quarterly updates on how funds are allocated. Development costs,
              research partnerships, community outreach, and infrastructure expenses are all
              documented publicly. If you contribute, you will know exactly where your money went.
            </p>
          </div>
        </AnimatedBlock>
      </Section>
    </>
  )
}
