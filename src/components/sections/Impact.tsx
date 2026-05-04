import { Section, AnimatedBlock } from '@/components/ui/Section'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

export default function Impact() {
  return (
    <>
      {/* Stats row with animated counters */}
      <section className="relative overflow-hidden bg-primary-900 py-20 md:py-24">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/images/vegetation-dense.webp"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedBlock>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Traditional medicine is not alternative.
                <br />
                <span className="text-primary-300">For billions, it is the only option.</span>
              </h2>
            </div>
          </AnimatedBlock>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-primary-600/40 bg-primary-900/70 p-6 backdrop-blur-sm">
              <AnimatedCounter
                end={80}
                suffix="%"
                label="Rely on traditional medicine"
                sublabel="Population in developing nations (WHO)"
                theme="inverted"
              />
            </div>
            <div className="rounded-2xl border border-primary-600/40 bg-primary-900/70 p-6 backdrop-blur-sm">
              <AnimatedCounter
                end={50000}
                suffix="+"
                label="Medicinal plant species"
                sublabel="Documented worldwide"
                theme="inverted"
              />
            </div>
            <div className="rounded-2xl border border-primary-600/40 bg-primary-900/70 p-6 backdrop-blur-sm">
              <AnimatedCounter
                end={4}
                suffix="B"
                label="Lack essential health services"
                sublabel="People globally"
                theme="inverted"
              />
            </div>
            <div className="rounded-2xl border border-primary-600/40 bg-primary-900/70 p-6 backdrop-blur-sm">
              <AnimatedCounter
                end={25}
                suffix="%"
                label="Modern drugs from plants"
                sublabel="Derived from rainforest species"
                theme="inverted"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Not replacing healthcare - vegetation hands image */}
      <Section className="bg-white">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <AnimatedBlock>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="/images/vegetation-hands.webp"
                  alt="Hands holding fresh medicinal herbs including moringa and mint leaves"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 rounded-xl bg-primary-700 p-4 shadow-lg">
                <p className="text-sm font-bold text-white">Not replacing.</p>
                <p className="text-xs text-primary-200">Preserving and digitizing.</p>
              </div>
            </div>
          </AnimatedBlock>

          <AnimatedBlock delay={200}>
            <div>
              <h3 className="text-2xl font-bold text-text-primary md:text-3xl">
                We are not replacing modern healthcare.
              </h3>
              <p className="mt-4 text-text-muted leading-relaxed">
                We are preserving and digitizing centuries of ethnobotanical knowledge so that
                communities without reliable hospital access can make informed decisions about
                the plants growing in their own environments.
              </p>
              <p className="mt-4 text-text-muted leading-relaxed">
                PhotoMed always recommends seeking professional medical help for serious or
                persistent conditions. Traditional plant knowledge and clinical medicine are
                not in competition. They are complementary — and for the billions without
                hospital access, traditional knowledge is the critical first line.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-surface-dim p-4">
                  <p className="text-2xl font-black text-primary-700">60%</p>
                  <p className="mt-1 text-xs text-text-muted">
                    of plant medicine knowledge at risk of being lost this generation
                  </p>
                </div>
                <div className="rounded-xl bg-surface-dim p-4">
                  <p className="text-2xl font-black text-primary-700">15%</p>
                  <p className="mt-1 text-xs text-text-muted">
                    of 300,000 plant species studied for pharmacological activity
                  </p>
                </div>
              </div>
            </div>
          </AnimatedBlock>
        </div>
      </Section>
    </>
  )
}
