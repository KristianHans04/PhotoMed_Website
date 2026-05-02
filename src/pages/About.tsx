import { AnimatedBlock } from '@/components/ui/Section'
import Button from '@/components/ui/Button'

export default function About() {
  return (
    <>
      {/* Full-bleed hero with dark overlay */}
      <section className="relative overflow-hidden bg-primary-950 py-28 md:py-36">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/images/vegetation-dense.webp"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary-950/70 via-primary-950/80 to-primary-950" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedBlock>
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary-400">
                About PhotoMed
              </span>
              <h1 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
                We are building the world's first
                <span className="text-primary-300"> open infrastructure</span> for traditional plant medicine
              </h1>
              <p className="mt-6 text-lg text-primary-200/80 leading-relaxed">
                PhotoMed exists because the knowledge that billions of people rely on for
                healthcare is being lost faster than it is being documented. We are reversing that.
              </p>
            </div>
          </AnimatedBlock>
        </div>
      </section>

      {/* The Problem - full width image + text layout */}
      <section className="overflow-hidden">
        <div className="grid lg:grid-cols-2">
          <div className="relative">
            <img
              src="/images/community-3.webp"
              alt="Traditional healer preparing medicinal herbs in a rural community"
              className="h-full min-h-[300px] w-full object-cover lg:min-h-[500px]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10 lg:bg-none" />
          </div>
          <div className="flex items-center bg-white p-8 md:p-12 lg:p-16">
            <AnimatedBlock>
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-primary-700">
                  The Problem
                </span>
                <h2 className="mt-3 text-3xl font-bold text-text-primary sm:text-4xl">
                  Ancient knowledge is disappearing
                </h2>
                <div className="mt-6 space-y-4 text-text-muted leading-relaxed">
                  <p>
                    The World Health Organization estimates that 80% of the population in developing
                    countries depends on traditional medicine for their primary healthcare needs.
                    This is not a choice driven by preference. It is driven by the absence of
                    alternatives.
                  </p>
                  <p>
                    Hospitals are hours away. Pharmaceuticals are unaffordable. But the plants that
                    have treated these communities for centuries still grow in the fields, forests,
                    and roadsides around them.
                  </p>
                  <p>
                    The problem is not that the medicine does not exist. The problem is that the
                    knowledge of what to use, when, and how is concentrated in aging practitioners
                    with no digital documentation. When they pass, their knowledge vanishes with them.
                  </p>
                </div>
              </div>
            </AnimatedBlock>
          </div>
        </div>
      </section>

      {/* The Solution - reversed layout */}
      <section className="overflow-hidden">
        <div className="grid lg:grid-cols-2">
          <div className="order-2 flex items-center bg-primary-50 p-8 md:p-12 lg:order-1 lg:p-16">
            <AnimatedBlock>
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-primary-700">
                  Our Solution
                </span>
                <h2 className="mt-3 text-3xl font-bold text-text-primary sm:text-4xl">
                  Technology as a preservation tool
                </h2>
                <div className="mt-6 space-y-4 text-text-muted leading-relaxed">
                  <p>
                    PhotoMed digitizes, validates, and distributes traditional plant medicine
                    knowledge through a mobile platform accessible to anyone with a smartphone.
                  </p>
                  <p>
                    We combine AI-powered plant identification, symptom-to-remedy matching, and
                    geospatial plant mapping into a single application. Users can photograph a
                    plant to learn its medicinal properties, describe their symptoms to receive
                    plant-based guidance, or navigate a map to find verified medicinal plant
                    locations near them.
                  </p>
                  <p>
                    Every piece of information is cross-referenced against published ethnobotanical
                    research. Every recommendation carries safety context. We are not practicing
                    medicine. We are preserving and distributing knowledge that already exists but
                    is at risk of being permanently lost.
                  </p>
                </div>
              </div>
            </AnimatedBlock>
          </div>
          <div className="relative order-1 lg:order-2">
            <img
              src="/images/community-2.webp"
              alt="Young person using smartphone to identify plants in rural East Africa"
              className="h-full min-h-[300px] w-full object-cover lg:min-h-[500px]"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Vision - 3-step roadmap */}
      <section className="bg-primary-900 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedBlock>
            <div className="text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary-400">
                Our Roadmap
              </span>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">The Path Forward</h2>
            </div>
          </AnimatedBlock>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <AnimatedBlock delay={100}>
              <div className="rounded-2xl border border-primary-700/30 bg-primary-800/40 p-8">
                <div className="text-5xl font-black text-primary-500/50">01</div>
                <h3 className="mt-4 text-xl font-bold text-white">Preserve</h3>
                <p className="mt-3 text-sm text-primary-200/70 leading-relaxed">
                  Document and digitize traditional plant medicine knowledge before it disappears.
                  Build the largest open ethnobotanical dataset in the world. Work directly with
                  community healers and botanical researchers.
                </p>
              </div>
            </AnimatedBlock>

            <AnimatedBlock delay={200}>
              <div className="rounded-2xl border border-primary-700/30 bg-primary-800/40 p-8">
                <div className="text-5xl font-black text-primary-500/50">02</div>
                <h3 className="mt-4 text-xl font-bold text-white">Validate</h3>
                <p className="mt-3 text-sm text-primary-200/70 leading-relaxed">
                  Cross-reference community knowledge with published research. Apply AI verification
                  and expert botanical review to ensure accuracy and safety. No unverified claims
                  reach users.
                </p>
              </div>
            </AnimatedBlock>

            <AnimatedBlock delay={300}>
              <div className="rounded-2xl border border-primary-700/30 bg-primary-800/40 p-8">
                <div className="text-5xl font-black text-primary-500/50">03</div>
                <h3 className="mt-4 text-xl font-bold text-white">Distribute</h3>
                <p className="mt-3 text-sm text-primary-200/70 leading-relaxed">
                  Make this knowledge accessible to anyone with a smartphone. Offline-capable,
                  region-aware, and designed for the connectivity constraints of rural areas.
                  Scale across East Africa and beyond.
                </p>
              </div>
            </AnimatedBlock>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="border-y border-primary-100 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: '80%', label: 'of developing nations rely on traditional medicine' },
              { value: '40,000+', label: 'plant species used medicinally worldwide' },
              { value: '1 in 3', label: 'people lack access to essential medicines' },
              { value: '187', label: 'automated tests ensuring platform reliability' },
            ].map((stat, i) => (
              <AnimatedBlock key={stat.label} delay={i * 100}>
                <div className="text-center">
                  <div className="text-3xl font-black text-primary-700 md:text-4xl">{stat.value}</div>
                  <p className="mt-2 text-xs text-text-muted">{stat.label}</p>
                </div>
              </AnimatedBlock>
            ))}
          </div>
        </div>
      </section>

      {/* Where we are today with vegetation image */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute bottom-0 right-0 top-0 hidden w-1/3 lg:block">
          <img
            src="/images/vegetation-hands.webp"
            alt="Hands holding medicinal plants"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedBlock>
            <div className="max-w-2xl">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary-700">
                Current Status
              </span>
              <h2 className="mt-3 text-3xl font-bold text-text-primary sm:text-4xl">
                Where We Are Today
              </h2>
              <p className="mt-6 text-text-muted leading-relaxed">
                PhotoMed is currently in active development with a working MVP targeting the
                Kenyan market. Our backend API serves plant identification, symptom analysis,
                and geospatial queries. The mobile application is functional on Android with
                iOS support planned.
              </p>
              <p className="mt-4 text-text-muted leading-relaxed">
                The technology stack — Flutter for cross-platform mobile, a Node.js API backed
                by PostgreSQL with PostGIS for spatial data, AI models via Google Gemini and
                PlantNet — is built to scale across regions and languages.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button href="/donate">Support Development</Button>
                <Button href="/download" variant="secondary">Try the App</Button>
              </div>
            </div>
          </AnimatedBlock>
        </div>
      </section>
    </>
  )
}
