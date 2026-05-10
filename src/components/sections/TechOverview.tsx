import { Section, AnimatedBlock } from '@/components/ui/Section'

const techFeatures = [
  {
    title: 'AI-Powered Symptom Matching',
    description:
      'When you describe your symptoms, the AI cross-references ethnobotanical research and documented traditional practices to identify the plants most likely to help.',
  },
  {
    title: 'Geospatial Plant Location',
    description:
      'PhotoMed knows where medicinal plants grow. It cross-references your GPS coordinates against a continually growing vegetation database to find the closest available plant.',
  },
  {
    title: 'Camera Verification',
    description:
      'Before you pick anything, point your camera at the plant. The AI confirms the species and flags any safety concerns — so you never mistake a harmful look-alike.',
  },
  {
    title: 'Built for Remote Use',
    description:
      'Designed for regions where connectivity is unreliable and hospital access is hours away. The app works in low-bandwidth environments and provides guidance even offline.',
  },
]

export default function TechOverview() {
  return (
    <Section className="bg-surface-dim">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <AnimatedBlock>
            <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">
              Serious infrastructure for a serious problem
            </h2>
            <p className="mt-4 text-text-muted">
              PhotoMed is not a simple plant lookup tool. It is a full-stack platform that
              combines artificial intelligence, geospatial data, and validated botanical
              knowledge into a single mobile experience designed for the communities that need
              it most.
            </p>
          </AnimatedBlock>

          <div className="mt-10 space-y-6">
            {techFeatures.map((feature, i) => (
              <AnimatedBlock key={feature.title} delay={i * 100}>
                <div className="flex gap-4">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-700">
                    <svg className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-text-primary">{feature.title}</h3>
                    <p className="mt-1 text-sm text-text-muted">{feature.description}</p>
                  </div>
                </div>
              </AnimatedBlock>
            ))}
          </div>
        </div>

        <AnimatedBlock delay={300}>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/images/vegetation-dense.webp"
                alt="Dense tropical vegetation with various medicinal plants"
                className="aspect-[3/4] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-xl bg-white p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-primary-500" />
                <span className="text-sm font-medium text-text-primary">
                  187 tests passing
                </span>
              </div>
              <p className="mt-1 text-xs text-text-muted">Production-grade reliability</p>
            </div>
          </div>
        </AnimatedBlock>
      </div>
    </Section>
  )
}
