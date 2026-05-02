import { Section, AnimatedBlock } from '@/components/ui/Section'
import { Cpu, Database, Shield, Globe } from 'lucide-react'

const techFeatures = [
  {
    icon: Cpu,
    title: 'Multi-Model AI Pipeline',
    description:
      'Plant identification is cross-validated through multiple AI systems and the PlantNet taxonomic database for maximum accuracy.',
  },
  {
    icon: Database,
    title: 'Geospatial Intelligence',
    description:
      'PostGIS-powered spatial queries locate medicinal plants within walking distance, with community-contributed and expert-verified sighting data.',
  },
  {
    icon: Shield,
    title: 'Safety-First Architecture',
    description:
      'Every recommendation includes safety ratings, contraindication checks, and clear guidance to seek professional medical help when appropriate.',
  },
  {
    icon: Globe,
    title: 'Designed for Connectivity Constraints',
    description:
      'Offline-capable architecture with background sync. Works in regions with intermittent connectivity where healthcare access is most limited.',
  },
]

export default function TechOverview() {
  return (
    <Section className="bg-surface-dim">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <AnimatedBlock>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary-600">
              Technology
            </span>
            <h2 className="mt-3 text-3xl font-bold text-text-primary sm:text-4xl">
              Serious infrastructure for a serious problem
            </h2>
            <p className="mt-4 text-text-muted">
              PhotoMed is not a simple plant identification app. It is a full-stack platform
              combining artificial intelligence, geospatial data systems, and community-sourced
              botanical knowledge into a single, accessible mobile experience.
            </p>
          </AnimatedBlock>

          <div className="mt-10 space-y-6">
            {techFeatures.map((feature, i) => (
              <AnimatedBlock key={feature.title} delay={i * 100}>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-100 text-primary-700">
                    <feature.icon size={20} />
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
