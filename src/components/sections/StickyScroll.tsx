import { useEffect, useRef, useState } from 'react'
import { AnimatedBlock } from '@/components/ui/Section'
import PhoneFrame from '@/components/ui/PhoneFrame'

const steps = [
  {
    id: 'capture',
    title: 'Capture what you see',
    body: 'Take a photo of a plant in your environment. PhotoMed turns everyday plant encounters into reliable medicinal context in seconds.',
    image: '/images/app-screen-plantid.webp',
    caption: 'Plant identification on the PhotoMed app',
  },
  {
    id: 'guidance',
    title: 'Get contextual guidance',
    body: 'Describe symptoms in plain language. PhotoMed provides structured guidance grounded in documented traditional use and safety notes.',
    image: '/images/app-screen-chat.webp',
    caption: 'Symptom guidance in the PhotoMed assistant',
  },
  {
    id: 'discover',
    title: 'Discover nearby medicinal flora',
    body: 'Explore regional plant discovery to understand what grows near you and where traditional medicine knowledge is still actively used.',
    image: '/images/app-screen-map.webp',
    caption: 'Nearby medicinal plant discovery map',
  },
  {
    id: 'community',
    title: 'Connect knowledge to people',
    body: 'PhotoMed helps preserve intergenerational knowledge by connecting field observations, local context, and practical access.',
    image: '/images/community-2.webp',
    caption: 'Community-centered use of PhotoMed',
  },
]

export default function StickyScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const rect = container.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const progress = Math.max(0, Math.min(1, (viewportHeight - rect.top) / (container.offsetHeight)))
      const stepIndex = Math.min(steps.length - 1, Math.floor(progress * steps.length))
      setActiveStep(stepIndex)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="bg-surface-dim">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-20 md:py-28">
          <AnimatedBlock>
            <div className="text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary-600">
                Product Journey
              </span>
              <h2 className="mt-3 text-3xl font-bold text-text-primary sm:text-4xl lg:text-5xl">
                How people use PhotoMed
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-text-muted">
                A simple flow designed to keep medicinal plant knowledge understandable, accessible, and useful.
              </p>
            </div>
          </AnimatedBlock>
        </div>

        <div ref={containerRef} className="relative min-h-[200vh] pb-20 lg:min-h-[240vh]">
          <div className="lg:sticky lg:top-24">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-6">
                {steps.map((step, i) => (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(i)}
                    className={`w-full rounded-2xl border-2 p-6 text-left transition-all duration-500 md:p-8 ${
                      i === activeStep
                        ? 'border-primary-500 bg-white shadow-lg shadow-primary-100/50'
                        : 'border-transparent bg-white/60 opacity-60 hover:opacity-90'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                        i === activeStep ? 'bg-primary-700 text-white' : 'bg-primary-100 text-primary-700'
                      }`}>
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <div>
                        <h3 className={`text-lg font-bold ${i === activeStep ? 'text-text-primary' : 'text-text-muted'}`}>
                          {step.title}
                        </h3>
                        <p className={`mt-2 text-sm leading-relaxed transition-all duration-500 ${
                          i === activeStep ? 'max-h-40 text-text-muted opacity-100' : 'max-h-0 overflow-hidden opacity-0'
                        }`}>
                          {step.body}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-center">
                <div className="w-full max-w-md overflow-hidden rounded-3xl border border-primary-200 bg-white shadow-xl">
                  <div className="flex justify-center bg-gradient-to-b from-primary-50 to-white px-4 py-5">
                    {steps[activeStep].image.includes('app-screen-') ? (
                      <PhoneFrame src={steps[activeStep].image} alt={steps[activeStep].caption} size="md" />
                    ) : (
                      <img
                        src={steps[activeStep].image}
                        alt={steps[activeStep].caption}
                        className="aspect-[4/5] w-full object-cover"
                        loading="lazy"
                      />
                    )}
                  </div>
                  <div className="border-t border-primary-100 bg-gradient-to-r from-primary-50 to-white px-5 py-4">
                    <p className="text-sm font-medium text-text-primary">{steps[activeStep].caption}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
