import { Section, AnimatedBlock } from '@/components/ui/Section'
import { Camera, Brain, MapPin, Shield, MessageCircle, Download } from 'lucide-react'
import Button from '@/components/ui/Button'

const detailedSteps = [
  {
    icon: Camera,
    title: 'Plant Identification',
    subtitle: 'Point. Shoot. Know.',
    description:
      'Take a photograph of any plant. Our multi-model AI pipeline analyzes the image against botanical databases including PlantNet. When confidence exceeds threshold, you receive the species name, common names, family classification, and documented medicinal uses.',
    details: [
      'Works in varied lighting and angles',
      'Cross-validated against taxonomic authorities',
      'Returns safety classification and toxicity warnings',
      'Stores identification with GPS coordinates for community mapping',
    ],
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
  },
  {
    icon: MessageCircle,
    title: 'Symptom Analysis',
    subtitle: 'Describe. Discover. Decide.',
    description:
      'Describe your symptoms in plain language. Our AI assistant draws on published ethnobotanical research to suggest traditional plant-based approaches that have been documented for those symptoms in your geographic region.',
    details: [
      'Natural language input, no medical jargon required',
      'Region-aware recommendations based on local flora',
      'Distinguishes between traditional and clinical evidence',
      'Always recommends professional consultation for serious symptoms',
    ],
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80',
  },
  {
    icon: MapPin,
    title: 'Geospatial Plant Discovery',
    subtitle: 'Find. Navigate. Harvest responsibly.',
    description:
      'An interactive map shows verified medicinal plant locations within your region. Community members contribute sightings, which are validated by botanical experts before appearing on the public map.',
    details: [
      'PostGIS-powered proximity search',
      'Community-contributed sighting data',
      'Expert verification workflow',
      'Navigation to exact plant locations',
    ],
    image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80',
  },
]

const architecture = [
  {
    icon: Brain,
    label: 'AI Layer',
    description: 'Google Gemini + OpenRouter + PlantNet for multi-modal analysis',
  },
  {
    icon: Shield,
    label: 'Security',
    description: 'JWT authentication, role-based access, rate limiting, encryption at rest',
  },
  {
    icon: Download,
    label: 'Offline Mode',
    description: 'Local plant database with background sync when connectivity returns',
  },
]

export default function HowItWorks() {
  return (
    <>
      <section className="bg-gradient-to-b from-primary-50 to-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedBlock>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-extrabold text-text-primary sm:text-5xl">
                How PhotoMed Works
              </h1>
              <p className="mt-6 text-lg text-text-muted">
                A deep look at the three core capabilities that make PhotoMed a comprehensive
                traditional medicine companion.
              </p>
            </div>
          </AnimatedBlock>
        </div>
      </section>

      {detailedSteps.map((step, i) => (
        <Section key={step.title} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-dim'}>
          <div
            className={`grid items-center gap-12 lg:grid-cols-2 ${
              i % 2 === 1 ? 'lg:grid-flow-dense' : ''
            }`}
          >
            <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
              <AnimatedBlock>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-700">
                  <step.icon size={24} />
                </div>
                <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-primary-600">
                  {step.subtitle}
                </p>
                <h2 className="mt-2 text-3xl font-bold text-text-primary">{step.title}</h2>
                <p className="mt-4 text-text-muted leading-relaxed">{step.description}</p>

                <ul className="mt-6 space-y-3">
                  {step.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3">
                      <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary-500" />
                      <span className="text-sm text-text-muted">{detail}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedBlock>
            </div>

            <AnimatedBlock delay={200}>
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={step.image}
                  alt={step.title}
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </div>
            </AnimatedBlock>
          </div>
        </Section>
      ))}

      <Section className="bg-primary-900">
        <AnimatedBlock>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Under the Hood</h2>
            <p className="mx-auto mt-4 max-w-2xl text-primary-200">
              PhotoMed is built on production-grade infrastructure designed for reliability,
              security, and performance in low-connectivity environments.
            </p>
          </div>
        </AnimatedBlock>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {architecture.map((item, i) => (
            <AnimatedBlock key={item.label} delay={i * 100}>
              <div className="rounded-2xl border border-primary-700/50 bg-primary-800/50 p-6">
                <item.icon className="text-primary-300" size={24} />
                <h3 className="mt-4 font-bold text-white">{item.label}</h3>
                <p className="mt-2 text-sm text-primary-300">{item.description}</p>
              </div>
            </AnimatedBlock>
          ))}
        </div>

        <AnimatedBlock delay={400}>
          <div className="mt-12 text-center">
            <Button href="/download" size="lg" className="bg-white text-primary-900 hover:bg-primary-50">
              Experience It Yourself
            </Button>
          </div>
        </AnimatedBlock>
      </Section>
    </>
  )
}
