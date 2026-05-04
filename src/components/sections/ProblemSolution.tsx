import { Section, AnimatedBlock } from '@/components/ui/Section'

export default function ProblemSolution() {
  return (
    <>
      {/* Problem statement - full width image + text overlay */}
      <section className="relative overflow-hidden bg-white">
        <div className="grid lg:grid-cols-2">
          <div className="relative aspect-[4/3] lg:aspect-auto">
            <img
              src="/images/community-3.webp"
              alt="Traditional healer preparing medicinal herbs in a rural African setting"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 lg:bg-gradient-to-r lg:from-transparent lg:to-white" />
          </div>

          <div className="flex items-center px-6 py-16 sm:px-12 lg:py-24 lg:pl-16 lg:pr-20">
            <AnimatedBlock>
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-primary-600">
                  The Reality
                </span>
                <h2 className="mt-3 text-3xl font-bold text-text-primary sm:text-4xl lg:text-5xl">
                  Healthcare is a privilege.
                  <br />
                  <span className="text-primary-700">Plant knowledge should not be.</span>
                </h2>
                <p className="mt-6 text-text-muted leading-relaxed">
                  Over 80% of the population in developing nations relies on traditional medicine
                  as their primary healthcare. This knowledge is not a curiosity or a supplement.
                  For billions of people, it is survival.
                </p>
                <p className="mt-4 text-text-muted leading-relaxed">
                  But this knowledge is fragmenting. Elderly practitioners pass away without
                  transferring what they know. Urbanization pulls young people away from the
                  land. The plants remain, but the understanding of how to use them is vanishing.
                </p>
                <div className="mt-8 flex items-center gap-4 border-l-4 border-primary-500 pl-5">
                  <div>
                    <p className="text-2xl font-black text-primary-700">80%</p>
                    <p className="text-xs text-text-muted">
                      of Africa relies on traditional medicine as primary healthcare (WHO)
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedBlock>
          </div>
        </div>
      </section>

      {/* Three core capabilities - different card layout */}
      <Section className="bg-surface-dim">
        <AnimatedBlock>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary-600">
              What PhotoMed Does
            </span>
            <h2 className="mt-3 text-3xl font-bold text-text-primary sm:text-4xl">
              Three capabilities. One mission.
            </h2>
          </div>
        </AnimatedBlock>

        <div className="mt-16 space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-6">
          {[
            {
              title: 'Photograph. Identify. Understand.',
              description:
                'Point your camera at any plant. Our AI cross-references multiple botanical databases and returns species identification, medicinal properties, and safety information within seconds.',
              image: '/images/app-screen-plantid.webp',
            },
            {
              title: 'Describe your symptoms. Get guidance.',
              description:
                'Tell our AI assistant what you are experiencing. It draws on ethnobotanical research to suggest plant-based remedies traditionally used for your symptoms, with clear safety boundaries.',
              image: '/images/app-screen-chat.webp',
            },
            {
              title: 'Find medicinal plants near you.',
              description:
                'Our geospatial engine maps medicinal plant locations in your region. Navigate directly to verified sightings contributed by the community and validated by botanical experts.',
              image: '/images/app-screen-map.webp',
            },
          ].map((feature, i) => (
            <AnimatedBlock key={feature.title} delay={i * 150}>
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-lg">
                <div className="flex justify-center bg-gradient-to-b from-primary-50 to-white px-6 pt-8 pb-4">
                  <div className="w-32 overflow-hidden rounded-xl border-[3px] border-gray-900 shadow-lg">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="aspect-[9/16] w-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6 pt-4">
                  <h3 className="text-lg font-bold text-text-primary">{feature.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted">
                    {feature.description}
                  </p>
                </div>
              </div>
            </AnimatedBlock>
          ))}
        </div>
      </Section>
    </>
  )
}
