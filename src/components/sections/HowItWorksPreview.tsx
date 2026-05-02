import { Section, AnimatedBlock } from '@/components/ui/Section'

const steps = [
  {
    step: '01',
    title: 'Capture or Describe',
    description:
      'Photograph an unknown plant or describe your symptoms in plain language. The system accepts images in any lighting condition and text in conversational format.',
    image: 'https://images.unsplash.com/photo-1585399000684-d2f72660f092?w=600&q=80',
  },
  {
    step: '02',
    title: 'AI Cross-References',
    description:
      'Your input is analyzed by multiple AI models cross-referencing botanical databases, ethnobotanical literature, and community-verified plant data with geospatial context.',
    image: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=600&q=80',
  },
  {
    step: '03',
    title: 'Actionable Guidance',
    description:
      'Receive species identification, traditional use information, safety warnings, and a map showing where verified specimens of that plant have been found near you.',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&q=80',
  },
]

export default function HowItWorksPreview() {
  return (
    <Section className="bg-surface-dim">
      <AnimatedBlock>
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-600">
            How It Works
          </span>
          <h2 className="mt-3 text-3xl font-bold text-text-primary sm:text-4xl">
            Three steps. Zero complexity.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-muted">
            Whether you are identifying a plant on a trail or seeking relief for a symptom,
            PhotoMed delivers trusted guidance in under 30 seconds.
          </p>
        </div>
      </AnimatedBlock>

      <div className="mt-16 space-y-16 lg:space-y-24">
        {steps.map((item, i) => (
          <AnimatedBlock key={item.step} delay={i * 100}>
            <div
              className={`flex flex-col items-center gap-8 lg:flex-row lg:gap-16 ${
                i % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1">
                <span className="text-5xl font-black text-primary-100">{item.step}</span>
                <h3 className="mt-2 text-2xl font-bold text-text-primary">{item.title}</h3>
                <p className="mt-4 text-text-muted leading-relaxed">{item.description}</p>
              </div>
              <div className="flex-1">
                <div className="overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="aspect-[4/3] w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </AnimatedBlock>
        ))}
      </div>
    </Section>
  )
}
