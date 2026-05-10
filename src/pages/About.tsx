import { AnimatedBlock } from '@/components/ui/Section'

const principles = [
  {
    title: 'Accessibility over everything',
    body: 'If a solution only works for people who already have access to a hospital, it is not solving the right problem. Everything we build is designed around the communities where the need is greatest — not the ones where distribution is easiest.',
  },
  {
    title: 'Evidence, not folklore',
    body: 'We have deep respect for traditional botanical knowledge. We also hold it to a standard. Every remedy we surface is cross-referenced against published ethnobotanical research. The goal is not to preserve tradition — it is to make what works safe and findable.',
  },
  {
    title: 'Complementary, not competitive',
    body: 'PhotoMed is not trying to replace doctors, clinics, or pharmaceutical companies. It addresses the symptoms that do not require a prescription and, in doing so, reduces the pressure on systems that are already stretched beyond capacity.',
  },
  {
    title: 'Safety is not optional',
    body: 'Many medicinal plants have harmful look-alikes. Many have dosage limits. Many interact badly with other medications. We built the camera verification step and the safety flagging system precisely because we know the consequences of getting it wrong.',
  },
]

export default function About() {
  return (
    <>
      {/* Page intro — clean, left-aligned, no hero image */}
      <section className="border-b border-gray-100 bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedBlock>
            <div className="max-w-3xl">
              <h1 className="text-4xl font-extrabold text-text-primary sm:text-5xl">
                About PhotoMed
              </h1>
              <p className="mt-6 text-xl leading-relaxed text-text-muted">
                PhotoMed is built on a straightforward observation: the remedies that have
                treated everyday symptoms for generations are still growing in fields, gardens,
                and roadsides across Africa. What is missing is not the plants — it is the
                ability to find them, identify them safely, and know how to use them.
              </p>
            </div>
          </AnimatedBlock>
        </div>
      </section>

      {/* Origin story */}
      <section className="bg-primary-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <AnimatedBlock>
              <div>
                <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">
                  Where this started
                </h2>
                <div className="mt-6 space-y-5 text-text-muted leading-relaxed">
                  <p>
                    The project began with a simple question: what happens when you are feeling
                    unwell, the nearest clinic is hours away, and basic medications are either
                    unavailable or unaffordable?
                  </p>
                  <p>
                    In most of sub-Saharan Africa, that is not a hypothetical. It is a Tuesday.
                    The WHO estimates that 57% of Africans cannot reliably access essential
                    medicines. Doctor-to-patient ratios in the region reach 1 to 5,000.
                    People routinely wait 12 hours or more to be seen at public hospitals —
                    for headaches, stomach aches, coughs, and burns that, in another context,
                    would be handled at home.
                  </p>
                  <p>
                    The gap PhotoMed is trying to close is not between the sick and doctors.
                    It is between the sick and the knowledge of what to do before the doctor
                    is reachable. Traditional communities had that knowledge. It is documented.
                    It is real. The challenge is making it accurate, safe, and accessible to
                    the person standing in a field with a headache who does not know which
                    plant to pick or how to prepare it.
                  </p>
                </div>
              </div>
            </AnimatedBlock>

            <AnimatedBlock delay={200}>
              <div className="space-y-6">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src="/images/community-3.webp"
                    alt="Person in a rural setting surrounded by vegetation"
                    className="aspect-[4/3] w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-primary-200 bg-white p-5">
                    <p className="text-2xl font-black text-primary-700">57%</p>
                    <p className="mt-1 text-xs text-text-muted">
                      of Africans without reliable access to essential medicines (WHO)
                    </p>
                  </div>
                  <div className="rounded-xl border border-primary-200 bg-white p-5">
                    <p className="text-2xl font-black text-primary-700">1 : 5,000</p>
                    <p className="mt-1 text-xs text-text-muted">
                      doctor-to-patient ratio in sub-Saharan Africa (WHO, 2023)
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedBlock>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedBlock>
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">
                What we stand for
              </h2>
              <p className="mt-4 text-text-muted leading-relaxed">
                The decisions behind how PhotoMed works — what it recommends, what it withholds,
                and how it handles edge cases — are not arbitrary. They follow from a set of
                principles we hold without exception.
              </p>
            </div>
          </AnimatedBlock>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {principles.map((item, i) => (
              <AnimatedBlock key={item.title} delay={i * 100}>
                <div className="h-full rounded-2xl border border-gray-100 bg-surface-dim p-8">
                  <h3 className="text-lg font-bold text-text-primary">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">{item.body}</p>
                </div>
              </AnimatedBlock>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-primary-900 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-5 lg:gap-16">
            <AnimatedBlock className="lg:col-span-3">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                The goal is not an app. It is infrastructure.
              </h2>
              <div className="mt-6 space-y-4 text-primary-200/80 leading-relaxed">
                <p>
                  The immediate product is a mobile application that connects symptoms to
                  nearby plant-based remedies. But the underlying goal is something larger:
                  a comprehensive, community-maintained, AI-verified map of the world's
                  medicinal vegetation — the way Google Street View mapped every street.
                </p>
                <p>
                  The same infrastructure that directs a person in rural Africa to the aloe
                  vera plant growing two minutes away can eventually support communities on
                  every continent. It can be extended to animal care — helping farmers and
                  families treat livestock and pets with the same validated, plant-based
                  approach.
                </p>
                <p>
                  We are at the beginning of that build. If you believe in what we are doing,
                  there are ways to help — as a funder, a researcher, or someone who simply
                  downloads the app and lets it find you the nearest plant.
                </p>
              </div>
            </AnimatedBlock>

            <AnimatedBlock delay={200} className="lg:col-span-2">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="/images/vegetation-dense.webp"
                  alt="Dense vegetation representing the scope of medicinal plant diversity"
                  className="aspect-[3/4] w-full object-cover opacity-90"
                  loading="lazy"
                />
              </div>
            </AnimatedBlock>
          </div>
        </div>
      </section>
    </>
  )
}

