import { AnimatedBlock } from '@/components/ui/Section'

export default function About() {
  return (
    <>
      {/* About hero — asymmetric split with large text */}
      <section className="overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <AnimatedBlock>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary-600">About PhotoMed</p>
                <h1 className="mt-4 text-4xl font-extrabold text-text-primary sm:text-5xl lg:text-6xl">
                  We are mapping the world's vegetation so no one has to suffer waiting for
                  medicine that is already growing around them
                </h1>
              </div>
            </AnimatedBlock>
            <AnimatedBlock delay={200}>
              <div className="relative">
                <div className="overflow-hidden rounded-3xl">
                  <img
                    src="/images/vegetation-dense.webp"
                    alt="Dense medicinal vegetation"
                    className="aspect-[4/5] w-full object-cover"
                    loading="eager"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 rounded-2xl bg-primary-700 px-6 py-4 shadow-lg">
                  <p className="text-2xl font-black text-white">50,000+</p>
                  <p className="text-xs text-primary-200">documented medicinal plant species</p>
                </div>
              </div>
            </AnimatedBlock>
          </div>
        </div>
      </section>

      {/* The Problem - full width image + text layout */}
      <section className="overflow-hidden">
        <div className="grid lg:grid-cols-2">
          <div className="relative">
            <img
              src="/images/community-3.webp"
              alt="People waiting outside a rural health clinic"
              className="h-full min-h-[300px] w-full object-cover lg:min-h-[500px]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10 lg:bg-none" />
          </div>
          <div className="flex items-center bg-white p-8 md:p-12 lg:p-16">
            <AnimatedBlock>
              <div>
                <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">
                  The healthcare system was not built for everyone
                </h2>
                <div className="mt-6 space-y-4 text-text-muted leading-relaxed">
                  <p>
                    In sub-Saharan Africa, the doctor-to-patient ratio is 1 to 5,000. Patients
                    wait 12 or more hours to be seen. When they get in, basic medicines are often
                    out of stock. The WHO estimates that 57% of Africans lack reliable access to
                    essential medicines.
                  </p>
                  <p>
                    But here is what most people do not realize: the plants that have treated headaches,
                    stomach aches, burns, coughs, and fevers for generations are still growing in
                    the gardens, fields, and roadsides around these communities. The remedies exist.
                    People just need help finding and using them safely.
                  </p>
                  <p>
                    That is exactly what PhotoMed does.
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
                <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">
                  Your symptoms. The nearest plant. How to prepare it.
                </h2>
                <div className="mt-6 space-y-4 text-text-muted leading-relaxed">
                  <p>
                    Tell our AI chatbot what you are feeling. "I have a headache and feel nauseous."
                    It identifies which medicinal plants can help, finds the closest one to your GPS
                    location, gives you walking directions, and tells you how to prepare the remedy —
                    whether that means chewing the leaf, boiling it into tea, or applying it directly.
                  </p>
                  <p>
                    When you arrive at the plant, point your camera at it. The AI confirms you have
                    the right species and warns you if anything looks wrong. No guessing, no risk of
                    picking a harmful look-alike.
                  </p>
                  <p>
                    PhotoMed is not replacing doctors or pharmaceutical companies. We are decongesting
                    hospitals by handling the everyday symptoms — headaches, colds, minor burns,
                    stomach aches — that do not require a prescription. If symptoms persist or are
                    serious, we always recommend professional medical care.
                  </p>
                </div>
              </div>
            </AnimatedBlock>
          </div>
          <div className="relative order-1 lg:order-2">
            <img
              src="/images/community-2.webp"
              alt="Person using smartphone near vegetation"
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
              <h2 className="text-3xl font-bold text-white sm:text-4xl">The Path Forward</h2>
              <p className="mx-auto mt-4 max-w-2xl text-primary-200/70">
                We are building the infrastructure for plant-based symptom relief at scale.
              </p>
            </div>
          </AnimatedBlock>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <AnimatedBlock delay={100}>
              <div className="rounded-2xl border border-primary-700/30 bg-primary-800/40 p-8">
                <div className="text-5xl font-black text-primary-500/50">01</div>
                <h3 className="mt-4 text-xl font-bold text-white">Map</h3>
                <p className="mt-3 text-sm text-primary-200/70 leading-relaxed">
                  Map the world's vegetation the way Google Street View mapped every street.
                  Build the most comprehensive geospatial database of medicinal plant locations
                  on the planet. Community-sourced, AI-verified, continuously updated.
                </p>
              </div>
            </AnimatedBlock>

            <AnimatedBlock delay={200}>
              <div className="rounded-2xl border border-primary-700/30 bg-primary-800/40 p-8">
                <div className="text-5xl font-black text-primary-500/50">02</div>
                <h3 className="mt-4 text-xl font-bold text-white">Connect</h3>
                <p className="mt-3 text-sm text-primary-200/70 leading-relaxed">
                  Connect every person's symptoms to a verified, nearby, plant-based remedy.
                  Cross-reference community knowledge with published ethnobotanical research.
                  Make the tool work offline for the connectivity constraints of rural areas.
                </p>
              </div>
            </AnimatedBlock>

            <AnimatedBlock delay={300}>
              <div className="rounded-2xl border border-primary-700/30 bg-primary-800/40 p-8">
                <div className="text-5xl font-black text-primary-500/50">03</div>
                <h3 className="mt-4 text-xl font-bold text-white">Scale</h3>
                <p className="mt-3 text-sm text-primary-200/70 leading-relaxed">
                  Expand across the continent and beyond. Cover more plant species, more symptoms,
                  more languages. Our long-term vision includes extending the system to veterinary
                  care — treating livestock and pets with the same plant-based approach.
                </p>
              </div>
            </AnimatedBlock>
          </div>
        </div>
      </section>
    </>
  )
}
