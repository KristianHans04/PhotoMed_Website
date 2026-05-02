import { Section, AnimatedBlock } from '@/components/ui/Section'
import Button from '@/components/ui/Button'

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedBlock>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-extrabold text-text-primary sm:text-5xl">
                We are building the world's first
                <span className="text-primary-700"> open infrastructure</span> for traditional plant medicine
              </h1>
              <p className="mt-6 text-lg text-text-muted leading-relaxed">
                PhotoMed exists because the knowledge that billions of people rely on for
                healthcare is being lost faster than it is being documented. We are reversing that.
              </p>
            </div>
          </AnimatedBlock>
        </div>
      </section>

      <Section>
        <div className="grid gap-16 lg:grid-cols-2">
          <AnimatedBlock>
            <div>
              <h2 className="text-3xl font-bold text-text-primary">The Problem</h2>
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

          <AnimatedBlock delay={200}>
            <div>
              <h2 className="text-3xl font-bold text-text-primary">Our Solution</h2>
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
      </Section>

      <Section className="bg-surface-dim">
        <AnimatedBlock>
          <h2 className="text-center text-3xl font-bold text-text-primary">Our Vision</h2>
        </AnimatedBlock>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <AnimatedBlock delay={100}>
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="text-4xl font-black text-primary-200">01</div>
              <h3 className="mt-4 text-lg font-bold text-text-primary">Preserve</h3>
              <p className="mt-2 text-sm text-text-muted">
                Document and digitize traditional plant medicine knowledge before it disappears.
                Build the largest open ethnobotanical dataset in the world.
              </p>
            </div>
          </AnimatedBlock>

          <AnimatedBlock delay={200}>
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="text-4xl font-black text-primary-200">02</div>
              <h3 className="mt-4 text-lg font-bold text-text-primary">Validate</h3>
              <p className="mt-2 text-sm text-text-muted">
                Cross-reference community knowledge with published research. Apply AI verification
                and expert botanical review to ensure accuracy and safety.
              </p>
            </div>
          </AnimatedBlock>

          <AnimatedBlock delay={300}>
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="text-4xl font-black text-primary-200">03</div>
              <h3 className="mt-4 text-lg font-bold text-text-primary">Distribute</h3>
              <p className="mt-2 text-sm text-text-muted">
                Make this knowledge accessible to anyone with a smartphone. Offline-capable,
                region-aware, and designed for the connectivity constraints of rural areas.
              </p>
            </div>
          </AnimatedBlock>
        </div>
      </Section>

      <Section>
        <AnimatedBlock>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-text-primary">Where We Are Today</h2>
            <p className="mt-4 text-text-muted">
              PhotoMed is currently in active development with a working MVP targeting the
              Kenyan market. Our backend API serves plant identification, symptom analysis,
              and geospatial queries. The mobile application is functional on Android with
              iOS support planned.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/donate">Support Development</Button>
              <Button href="/download" variant="secondary">Try the App</Button>
            </div>
          </div>
        </AnimatedBlock>
      </Section>
    </>
  )
}
