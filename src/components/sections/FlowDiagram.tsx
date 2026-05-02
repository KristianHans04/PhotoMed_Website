import { AnimatedBlock } from '@/components/ui/Section'
import { useInView } from '@/hooks/useInView'

const pipelineSteps = [
  {
    label: 'Image Capture',
    detail: 'Camera input with GPS metadata',
  },
  {
    label: 'Pre-Processing',
    detail: 'Normalization, color correction, crop',
  },
  {
    label: 'PlantNet API',
    detail: 'Taxonomic cross-reference',
  },
  {
    label: 'AI Validation',
    detail: 'Multi-model confidence scoring',
  },
  {
    label: 'Knowledge Base',
    detail: 'Ethnobotanical data + safety checks',
  },
  {
    label: 'User Response',
    detail: 'Species ID, uses, warnings, map',
  },
]

export default function FlowDiagram() {
  const { ref, isInView } = useInView({ threshold: 0.2 })

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedBlock>
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary-600">
              Architecture
            </span>
            <h2 className="mt-3 text-3xl font-bold text-text-primary sm:text-4xl">
              What happens in those 30 seconds
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-text-muted">
              Every plant identification passes through a rigorous multi-stage pipeline
              before any information reaches the user. Here is the high-level flow.
            </p>
          </div>
        </AnimatedBlock>

        <div ref={ref} className="mt-16">
          {/* Desktop: horizontal flow */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connection line */}
              <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
                <div
                  className="h-0.5 bg-gradient-to-r from-primary-200 via-primary-500 to-primary-200 transition-all duration-1500"
                  style={{
                    width: isInView ? '100%' : '0%',
                    transitionDuration: '1.5s',
                  }}
                />
              </div>

              <div className="relative grid grid-cols-6 gap-4">
                {pipelineSteps.map((step, i) => (
                  <div
                    key={step.label}
                    className="flex flex-col items-center transition-all duration-500"
                    style={{
                      opacity: isInView ? 1 : 0,
                      transform: isInView ? 'translateY(0)' : 'translateY(20px)',
                      transitionDelay: `${i * 200}ms`,
                    }}
                  >
                    <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-primary-200 bg-white shadow-sm">
                      <span className="text-lg font-black text-primary-600">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div className="mt-4 text-center">
                      <p className="text-sm font-semibold text-text-primary">{step.label}</p>
                      <p className="mt-1 text-xs text-text-muted">{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile: vertical flow */}
          <div className="lg:hidden">
            <div className="relative ml-6">
              {/* Vertical line */}
              <div
                className="absolute bottom-0 left-0 top-0 w-0.5 bg-gradient-to-b from-primary-200 via-primary-500 to-primary-200"
                style={{
                  height: isInView ? '100%' : '0%',
                  transition: 'height 1.5s ease-out',
                }}
              />

              <div className="space-y-8">
                {pipelineSteps.map((step, i) => (
                  <div
                    key={step.label}
                    className="relative flex items-start gap-5 pl-8 transition-all duration-500"
                    style={{
                      opacity: isInView ? 1 : 0,
                      transform: isInView ? 'translateX(0)' : 'translateX(-20px)',
                      transitionDelay: `${i * 200}ms`,
                    }}
                  >
                    <div className="absolute left-0 top-0 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-xl border-2 border-primary-200 bg-white shadow-sm">
                      <span className="text-sm font-bold text-primary-600">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-text-primary">{step.label}</p>
                      <p className="mt-1 text-sm text-text-muted">{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom stats bar */}
        <AnimatedBlock delay={400}>
          <div className="mt-16 grid grid-cols-2 gap-4 rounded-2xl bg-primary-50 p-6 md:grid-cols-4 md:p-8">
            {[
              { value: '<30s', label: 'Average response time' },
              { value: '94%', label: 'Identification accuracy' },
              { value: '50K+', label: 'Species in database' },
              { value: '187', label: 'Automated tests passing' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-black text-primary-700 md:text-3xl">{stat.value}</div>
                <p className="mt-1 text-xs text-text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimatedBlock>
      </div>
    </section>
  )
}
