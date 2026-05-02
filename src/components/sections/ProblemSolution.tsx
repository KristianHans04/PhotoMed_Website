import { Section, AnimatedBlock } from '@/components/ui/Section'
import { Camera, MessageCircle, MapPin } from 'lucide-react'

const features = [
  {
    icon: Camera,
    title: 'Photograph. Identify. Understand.',
    description:
      'Point your camera at any plant. Our AI cross-references multiple botanical databases and returns species identification, medicinal properties, and safety information within seconds.',
  },
  {
    icon: MessageCircle,
    title: 'Describe your symptoms. Get guidance.',
    description:
      'Tell our AI assistant what you are experiencing. It draws on ethnobotanical research to suggest plant-based remedies traditionally used for your symptoms, with clear safety boundaries.',
  },
  {
    icon: MapPin,
    title: 'Find medicinal plants near you.',
    description:
      'Our geospatial engine maps medicinal plant locations in your region. Navigate directly to verified sightings contributed by the community and validated by botanical experts.',
  },
]

export default function ProblemSolution() {
  return (
    <Section className="bg-white">
      <AnimatedBlock>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-text-primary sm:text-4xl lg:text-5xl">
            Healthcare is a privilege.
            <br />
            <span className="text-primary-700">Plant knowledge should not be.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-text-muted">
            Over 80% of the population in developing nations relies on traditional medicine as their
            primary healthcare. Yet this knowledge is fragmented, poorly documented, and fading with
            each generation. PhotoMed is building the infrastructure to preserve and democratize it.
          </p>
        </div>
      </AnimatedBlock>

      <div className="mt-20 grid gap-8 md:grid-cols-3">
        {features.map((feature, i) => (
          <AnimatedBlock key={feature.title} delay={i * 150}>
            <div className="group relative rounded-2xl border border-primary-100 bg-surface-dim p-8 transition-all hover:border-primary-200 hover:shadow-lg">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-700 transition-colors group-hover:bg-primary-700 group-hover:text-white">
                <feature.icon size={24} />
              </div>
              <h3 className="mb-3 text-lg font-bold text-text-primary">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-text-muted">{feature.description}</p>
            </div>
          </AnimatedBlock>
        ))}
      </div>
    </Section>
  )
}
