import { useState, useEffect, useRef } from 'react'
import { AnimatedBlock } from '@/components/ui/Section'

const steps = [
  {
    id: 'capture',
    title: 'You see a plant. You capture it.',
    body: 'Open PhotoMed and point your camera at any plant — wild, cultivated, or growing on the roadside. The AI works in any lighting condition.',
    visual: 'camera',
    accent: 'from-primary-400 to-primary-600',
  },
  {
    id: 'analyze',
    title: 'Multiple AI models go to work.',
    body: 'Your image is cross-referenced against PlantNet\'s taxonomic database and our multi-model pipeline. Within seconds, you have a species match with confidence scoring.',
    visual: 'brain',
    accent: 'from-primary-500 to-primary-700',
  },
  {
    id: 'identify',
    title: 'Species identified. Knowledge unlocked.',
    body: 'Receive the scientific name, common names, family classification, documented medicinal uses, safety ratings, and contraindication warnings — all sourced from published ethnobotanical research.',
    visual: 'leaf',
    accent: 'from-primary-600 to-primary-800',
  },
  {
    id: 'locate',
    title: 'See where it grows near you.',
    body: 'The geospatial engine maps verified sightings of that species in your region. Navigate directly to locations contributed and validated by the community.',
    visual: 'map',
    accent: 'from-primary-700 to-primary-900',
  },
]

function VisualIcon({ type, isActive }: { type: string; isActive: boolean }) {
  const baseClass = `transition-all duration-500 ${isActive ? 'scale-100 opacity-100' : 'scale-90 opacity-40'}`

  const icons: Record<string, React.ReactNode> = {
    camera: (
      <svg viewBox="0 0 120 120" className={`h-full w-full ${baseClass}`}>
        <circle cx="60" cy="60" r="55" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.2" />
        <circle cx="60" cy="65" r="25" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="60" cy="65" r="12" fill="currentColor" opacity="0.3" />
        <rect x="30" y="35" width="60" height="45" rx="6" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <path d="M45 35 L50 25 L70 25 L75 35" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    brain: (
      <svg viewBox="0 0 120 120" className={`h-full w-full ${baseClass}`}>
        <circle cx="60" cy="60" r="55" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.2" />
        {[0, 60, 120, 180, 240, 300].map((angle) => (
          <line
            key={angle}
            x1="60"
            y1="60"
            x2={60 + 40 * Math.cos((angle * Math.PI) / 180)}
            y2={60 + 40 * Math.sin((angle * Math.PI) / 180)}
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.3"
          />
        ))}
        {[0, 60, 120, 180, 240, 300].map((angle) => (
          <circle
            key={angle}
            cx={60 + 40 * Math.cos((angle * Math.PI) / 180)}
            cy={60 + 40 * Math.sin((angle * Math.PI) / 180)}
            r="8"
            fill="currentColor"
            opacity="0.2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        ))}
        <circle cx="60" cy="60" r="15" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    leaf: (
      <svg viewBox="0 0 120 120" className={`h-full w-full ${baseClass}`}>
        <circle cx="60" cy="60" r="55" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.2" />
        <path d="M60 25 Q90 50 85 80 Q70 95 60 95 Q50 95 35 80 Q30 50 60 25 Z" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="2" />
        <path d="M60 35 L60 85" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
        <path d="M60 50 L45 40" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
        <path d="M60 60 L75 50" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
        <path d="M60 70 L45 62" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      </svg>
    ),
    map: (
      <svg viewBox="0 0 120 120" className={`h-full w-full ${baseClass}`}>
        <circle cx="60" cy="60" r="55" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.2" />
        <path d="M35 30 L55 40 L55 90 L35 80 Z" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1.5" />
        <path d="M55 40 L85 30 L85 80 L55 90 Z" fill="currentColor" opacity="0.25" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="65" cy="55" r="6" fill="currentColor" opacity="0.5" />
        <circle cx="65" cy="55" r="3" fill="currentColor" />
        <circle cx="45" cy="65" r="4" fill="currentColor" opacity="0.4" />
        <circle cx="75" cy="45" r="4" fill="currentColor" opacity="0.4" />
      </svg>
    ),
  }

  return icons[type] || null
}

export default function StickyScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const rect = container.getBoundingClientRect()
      const containerHeight = container.offsetHeight
      const viewportHeight = window.innerHeight

      const scrollProgress = Math.max(
        0,
        Math.min(1, (viewportHeight - rect.top) / (containerHeight - viewportHeight + viewportHeight))
      )

      const stepIndex = Math.min(
        steps.length - 1,
        Math.floor(scrollProgress * steps.length)
      )
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
                The Process
              </span>
              <h2 className="mt-3 text-3xl font-bold text-text-primary sm:text-4xl lg:text-5xl">
                From photograph to prescription-free guidance
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-text-muted">
                Every interaction follows the same rigorous pipeline — capture, analyze,
                identify, and locate — ensuring accuracy and safety at every step.
              </p>
            </div>
          </AnimatedBlock>
        </div>

        <div ref={containerRef} className="relative min-h-[200vh] lg:min-h-[250vh]">
          <div className="lg:sticky lg:top-24">
            <div className="grid gap-8 pb-20 lg:grid-cols-2 lg:gap-16">
              {/* Left: step cards */}
              <div className="space-y-6">
                {steps.map((step, i) => (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(i)}
                    className={`w-full rounded-2xl border-2 p-6 text-left transition-all duration-500 md:p-8 ${
                      i === activeStep
                        ? 'border-primary-500 bg-white shadow-lg shadow-primary-100/50'
                        : 'border-transparent bg-white/50 opacity-50 hover:opacity-75'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors duration-500 ${
                          i === activeStep
                            ? 'bg-primary-700 text-white'
                            : 'bg-primary-100 text-primary-700'
                        }`}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <div>
                        <h3
                          className={`text-lg font-bold transition-colors duration-300 ${
                            i === activeStep ? 'text-text-primary' : 'text-text-muted'
                          }`}
                        >
                          {step.title}
                        </h3>
                        <p
                          className={`mt-2 text-sm leading-relaxed transition-all duration-500 ${
                            i === activeStep
                              ? 'max-h-40 text-text-muted opacity-100'
                              : 'max-h-0 overflow-hidden opacity-0'
                          }`}
                        >
                          {step.body}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Right: visual */}
              <div className="flex items-center justify-center">
                <div className="relative aspect-square w-full max-w-md">
                  <div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${steps[activeStep].accent} p-1 transition-all duration-700`}
                  >
                    <div className="flex h-full w-full items-center justify-center rounded-[calc(1.5rem-4px)] bg-white/10 p-12 text-white backdrop-blur-sm">
                      <VisualIcon type={steps[activeStep].visual} isActive={true} />
                    </div>
                  </div>

                  {/* Step indicator dots */}
                  <div className="absolute -bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
                    {steps.map((_, i) => (
                      <div
                        key={i}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          i === activeStep ? 'w-8 bg-primary-600' : 'w-2 bg-primary-200'
                        }`}
                      />
                    ))}
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
