import { AnimatedBlock } from '@/components/ui/Section'
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
    image: '/images/app-screen-plantid.webp',
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
    image: '/images/app-screen-chat.webp',
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
    image: '/images/app-screen-map.webp',
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
      {/* Dark hero with vegetation background */}
      <section className="relative overflow-hidden bg-primary-950 py-24 md:py-32">
        <div className="absolute inset-0 opacity-15">
          <img src="/images/vegetation-hands.webp" alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary-950/70 to-primary-950" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedBlock>
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary-400">
                How It Works
              </span>
              <h1 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
                Three tools. One mission.
              </h1>
              <p className="mt-6 text-lg text-primary-200/80">
                A deep look at the three core capabilities that make PhotoMed a comprehensive
                traditional medicine companion.
              </p>
            </div>
          </AnimatedBlock>
        </div>
      </section>

      {/* Feature sections with alternating layouts */}
      {detailedSteps.map((step, i) => (
        <section key={step.title} className="overflow-hidden">
          <div className={`grid lg:grid-cols-2 ${i % 2 === 1 ? '' : ''}`}>
            {/* Image side */}
            <div className={`relative bg-primary-50 ${i % 2 === 1 ? 'order-2' : 'order-2 lg:order-1'}`}>
              <div className="flex items-center justify-center p-8 md:p-12 lg:min-h-[500px]">
                <div className="relative mx-auto max-w-[200px]">
                  <div className="overflow-hidden rounded-[1.8rem] border-[5px] border-gray-900 bg-gray-900 shadow-2xl">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="aspect-[9/19.5] w-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Content side */}
            <div className={`flex items-center p-8 md:p-12 lg:p-16 ${i % 2 === 1 ? 'order-1' : 'order-1 lg:order-2'}`}>
              <AnimatedBlock>
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-700">
                    <step.icon size={24} />
                  </div>
                  <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-primary-600">
                    {step.subtitle}
                  </p>
                  <h2 className="mt-2 text-3xl font-bold text-text-primary sm:text-4xl">{step.title}</h2>
                  <p className="mt-4 text-text-muted leading-relaxed">{step.description}</p>

                  <ul className="mt-8 space-y-3">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary-500" />
                        <span className="text-sm text-text-muted">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedBlock>
            </div>
          </div>
        </section>
      ))}

      {/* Under the hood */}
      <section className="bg-primary-900 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedBlock>
            <div className="text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary-400">
                Technology
              </span>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Under the Hood</h2>
              <p className="mx-auto mt-4 max-w-2xl text-primary-200/70">
                PhotoMed is built on production-grade infrastructure designed for reliability,
                security, and performance in low-connectivity environments.
              </p>
            </div>
          </AnimatedBlock>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {architecture.map((item, i) => (
              <AnimatedBlock key={item.label} delay={i * 100}>
                <div className="rounded-2xl border border-primary-700/30 bg-primary-800/40 p-8">
                  <item.icon className="text-primary-300" size={28} />
                  <h3 className="mt-5 text-lg font-bold text-white">{item.label}</h3>
                  <p className="mt-2 text-sm text-primary-200/70 leading-relaxed">{item.description}</p>
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
        </div>
      </section>
    </>
  )
}
