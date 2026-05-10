import { Section, AnimatedBlock } from '@/components/ui/Section'

const useCases = [
  {
    symptom: 'Headache',
    remedy: 'Guava leaves',
    how: 'Chew 2-3 fresh young guava leaves or brew them as tea. Contains quercetin and flavonoids with documented analgesic properties.',
    image: 'https://images.unsplash.com/photo-1536511132770-e5058c7e8c46?w=400&q=80',
  },
  {
    symptom: 'Minor burns',
    remedy: 'Aloe vera',
    how: 'Split the leaf and apply the gel directly to the affected area. Used for wound healing across cultures for over 3,000 years.',
    image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?w=400&q=80',
  },
  {
    symptom: 'Stomach ache',
    remedy: 'Ginger root',
    how: 'Boil fresh ginger slices in water for 10 minutes and drink the tea. One of the most extensively studied plants for gastrointestinal relief.',
    image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400&q=80',
  },
  {
    symptom: 'Cough and sore throat',
    remedy: 'Thyme with honey',
    how: 'Brew thyme leaves in hot water, add honey and lemon juice. WHO recognizes honey as a demulcent that can help relieve cough symptoms.',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&q=80',
  },
  {
    symptom: 'Nausea',
    remedy: 'Ginger root',
    how: 'Chew on a small piece of fresh ginger or brew as tea. Multiple clinical studies confirm ginger is effective against nausea and motion sickness.',
    image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400&q=80',
  },
  {
    symptom: 'Skin irritation',
    remedy: 'Neem leaves',
    how: 'Boil neem leaves and use the cooled water to wash the affected area. Neem has documented antibacterial and anti-inflammatory properties.',
    image: 'https://images.unsplash.com/photo-1586185018050-25a468d2ab52?w=400&q=80',
  },
]

export default function ProblemSolution() {
  return (
    <>
      {/* Problem statement */}
      <section className="relative overflow-hidden bg-white">
        <div className="grid lg:grid-cols-2">
          <div className="relative aspect-[4/3] lg:aspect-auto">
            <img
              src="/images/community-3.webp"
              alt="Person waiting at a rural clinic"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 lg:bg-gradient-to-r lg:from-transparent lg:to-white" />
          </div>

          <div className="flex items-center px-6 py-16 sm:px-12 lg:py-24 lg:pl-16 lg:pr-20">
            <AnimatedBlock>
              <div>
                <h2 className="text-3xl font-bold text-text-primary sm:text-4xl lg:text-5xl">
                  Healthcare access should not determine whether a headache becomes a crisis.
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
                  safely just needs to reach the people who need it.
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

      {/* Use cases */}
      <Section className="bg-primary-50">
        <AnimatedBlock>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">
              Real symptoms. Documented remedies.
            </h2>
            <p className="mt-4 text-text-muted">
              These are plant-based preparations with published ethnobotanical evidence
              behind them, used across cultures for generations.
            </p>
          </div>
        </AnimatedBlock>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, i) => (
            <AnimatedBlock key={useCase.symptom} delay={i * 80}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:shadow-lg hover:ring-primary-200">
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={useCase.image}
                    alt={useCase.remedy}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute bottom-3 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary-800 backdrop-blur-sm">
                    {useCase.symptom}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-bold text-text-primary">{useCase.remedy}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">
                    {useCase.how}
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
