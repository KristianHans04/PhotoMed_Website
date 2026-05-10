import { Section, AnimatedBlock } from '@/components/ui/Section'

export default function ProblemSolution() {
  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div className="grid lg:grid-cols-2">
          <div className="relative aspect-[4/3] lg:aspect-auto">
            <img
              src="/images/community-3.webp"
              alt="Person waiting at an overcrowded rural clinic"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 lg:bg-gradient-to-r lg:from-transparent lg:to-white" />
          </div>

          <div className="flex items-center px-6 py-16 sm:px-12 lg:py-24 lg:pl-16 lg:pr-20">
            <AnimatedBlock>
              <div>
                <h2 className="text-3xl font-bold text-text-primary sm:text-4xl lg:text-5xl">
                  The hospital is 6 hours away.
                  <br />
                  <span className="text-primary-700">The remedy is 6 minutes away.</span>
                </h2>
                <p className="mt-6 text-text-muted leading-relaxed">
                  Across sub-Saharan Africa, the doctor-to-patient ratio reaches 1 doctor
                  for every 5,000 people (WHO, 2023). Patients routinely wait 12 or more hours
                  to be seen at a public hospital. When they finally get in, basic medications
                  are frequently out of stock — the WHO estimates that 57% of Africans lack
                  reliable access to essential medicines.
                </p>
                <p className="mt-4 text-text-muted leading-relaxed">
                  Meanwhile, the plants that have treated headaches, stomach aches, coughs,
                  burns, and fevers for generations are still growing in the fields, gardens,
                  and roadsides around these communities. The knowledge of how to use them
                  just needs to reach the people who need it.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-2xl font-black text-primary-700">1 : 5,000</p>
                    <p className="text-xs text-text-muted">
                      doctor-to-patient ratio in sub-Saharan Africa (WHO)
                    </p>
                  </div>
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-2xl font-black text-primary-700">57%</p>
                    <p className="text-xs text-text-muted">
                      of Africans cannot access essential medicines (WHO)
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedBlock>
          </div>
        </div>
      </section>

      {/* How it works - step by step use case */}
      <Section className="bg-surface-dim">
        <AnimatedBlock>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">
              From symptoms to remedy in minutes
            </h2>
            <p className="mt-4 text-text-muted">
              PhotoMed is not a database. It is a practical tool that connects your symptoms
              to the nearest plants that can help — and tells you exactly what to do with them.
            </p>
          </div>
        </AnimatedBlock>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="space-y-8">
            {[
              {
                step: '01',
                title: 'Tell the app what you are feeling',
                description:
                  'Open the AI chatbot and describe your symptoms in plain language. "I have a headache and feel nauseous." The app may ask follow-up questions or request a photo to better understand what you are experiencing.',
              },
              {
                step: '02',
                title: 'Get matched to a plant-based remedy',
                description:
                  'The AI identifies which medicinal plants are traditionally used for your symptoms — and which ones are verified by published ethnobotanical research. It tells you the specific preparation method: chew the leaf, boil and drink the water, apply the sap topically.',
              },
              {
                step: '03',
                title: 'Navigate to the nearest plant',
                description:
                  'PhotoMed sees your GPS location and cross-references it against our mapped vegetation database. It directs you to the closest available plant with step-by-step navigation — the same way you would navigate to a pharmacy, except the pharmacy is a guava tree 200 metres from your house.',
              },
              {
                step: '04',
                title: 'Confirm you have the right plant',
                description:
                  'Before you pick anything, point your camera at the plant. The AI confirms the species match and flags any safety concerns. This prevents you from confusing a medicinal plant with a harmful look-alike.',
              },
            ].map((item, i) => (
              <AnimatedBlock key={item.step} delay={i * 100}>
                <div className="flex gap-6 rounded-2xl bg-white p-6 shadow-sm sm:p-8">
                  <div className="shrink-0">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-700 text-lg font-bold text-white">
                      {item.step}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text-primary">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimatedBlock>
            ))}
          </div>

          <AnimatedBlock delay={500}>
            <div className="mt-10 rounded-2xl border border-primary-200 bg-primary-50/60 p-6 sm:p-8">
              <h3 className="text-lg font-bold text-text-primary">
                If symptoms persist, see a doctor.
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                PhotoMed helps with everyday symptoms — headaches, stomach aches, minor burns,
                coughs, colds, nausea. We are not replacing hospitals or pharmaceutical companies.
                We are decongesting them by handling the treatable ailments that do not require
                a prescription. If your symptoms do not improve or you are dealing with a serious
                condition, always seek professional medical advice.
              </p>
            </div>
          </AnimatedBlock>
        </div>
      </Section>

      {/* Real use cases */}
      <Section className="bg-white">
        <AnimatedBlock>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">
              Everyday situations. Immediate solutions.
            </h2>
          </div>
        </AnimatedBlock>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              symptom: 'Headache',
              remedy: 'Guava leaves',
              how: 'Chew 2-3 fresh young guava leaves or brew them as tea. Guava leaves contain quercetin and other flavonoids with documented analgesic properties.',
            },
            {
              symptom: 'Minor burns',
              remedy: 'Aloe vera',
              how: 'Split the leaf lengthwise and apply the gel directly to the burn. Aloe vera has been used for wound healing across cultures for over 3,000 years.',
            },
            {
              symptom: 'Stomach ache',
              remedy: 'Peppermint or ginger root',
              how: 'Boil fresh ginger slices in water for 10 minutes and drink the tea. Ginger is one of the most extensively studied medicinal plants for gastrointestinal relief.',
            },
            {
              symptom: 'Cough and sore throat',
              remedy: 'Honey and lemon with thyme',
              how: 'Brew thyme leaves in hot water, add honey and lemon juice. WHO recognizes honey as a demulcent that can help relieve cough symptoms.',
            },
            {
              symptom: 'Nausea',
              remedy: 'Ginger root',
              how: 'Chew on a small piece of fresh ginger or brew it as tea. Multiple clinical studies confirm ginger is effective against nausea and motion sickness.',
            },
            {
              symptom: 'Skin irritation',
              remedy: 'Neem leaves',
              how: 'Boil neem leaves and use the cooled water to wash the affected area. Neem has documented antibacterial and anti-inflammatory properties.',
            },
          ].map((useCase, i) => (
            <AnimatedBlock key={useCase.symptom} delay={i * 80}>
              <div className="flex h-full flex-col rounded-2xl bg-surface-dim p-6">
                <p className="text-sm font-semibold text-primary-700">{useCase.symptom}</p>
                <h3 className="mt-2 text-lg font-bold text-text-primary">{useCase.remedy}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted">
                  {useCase.how}
                </p>
              </div>
            </AnimatedBlock>
          ))}
        </div>
      </Section>
    </>
  )
}
