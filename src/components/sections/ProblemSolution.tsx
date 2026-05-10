import { useState } from 'react'
import { Section, AnimatedBlock } from '@/components/ui/Section'

const steps = [
  {
    step: '01',
    title: 'Describe your symptoms',
    description:
      'Open the AI chatbot and describe what you are feeling in plain language. The app may ask follow-up questions or request a photo for better accuracy.',
    image: '/images/app-screen-chat.webp',
  },
  {
    step: '02',
    title: 'Receive a plant-based remedy',
    description:
      'The AI matches your symptoms to medicinal plants backed by ethnobotanical research and provides the specific preparation method — chew, boil, brew, or apply.',
    image: '/images/app-screen-plantid.webp',
  },
  {
    step: '03',
    title: 'Navigate to the nearest plant',
    description:
      'PhotoMed cross-references your GPS location against our vegetation database and gives you walking directions to the closest available plant.',
    image: '/images/app-screen-map.webp',
  },
  {
    step: '04',
    title: 'Confirm the right species',
    description:
      'Point your camera at the plant when you arrive. The AI verifies the species match and flags any safety concerns before you pick anything.',
    image: '/images/community-2.webp',
  },
]

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
  const [activeStep, setActiveStep] = useState(0)

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

      {/* How it works — interactive tabbed layout with phone preview */}
      <section className="relative overflow-hidden bg-surface-dim py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedBlock>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">
                From symptoms to remedy in minutes
              </h2>
              <p className="mt-4 text-text-muted">
                PhotoMed connects your symptoms to verified, nearby, plant-based remedies
                and guides you through every step.
              </p>
            </div>
          </AnimatedBlock>

          <AnimatedBlock delay={200}>
            <div className="mt-16 grid items-start gap-10 lg:grid-cols-5">
              {/* Left: Steps navigation */}
              <div className="lg:col-span-3">
                <div className="grid gap-4 sm:grid-cols-2">
                  {steps.map((item, i) => (
                    <button
                      key={item.step}
                      onClick={() => setActiveStep(i)}
                      className={`group relative overflow-hidden rounded-2xl p-6 text-left transition-all duration-300 ${
                        i === activeStep
                          ? 'bg-primary-700 text-white shadow-lg shadow-primary-700/20'
                          : 'bg-white text-text-primary hover:shadow-md'
                      }`}
                    >
                      <span
                        className={`text-4xl font-black ${
                          i === activeStep ? 'text-white/20' : 'text-primary-100'
                        }`}
                      >
                        {item.step}
                      </span>
                      <h3
                        className={`mt-3 text-base font-bold ${
                          i === activeStep ? 'text-white' : 'text-text-primary'
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={`mt-2 text-sm leading-relaxed ${
                          i === activeStep ? 'text-white/80' : 'text-text-muted'
                        }`}
                      >
                        {item.description}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Right: Phone preview */}
              <div className="flex justify-center lg:col-span-2 lg:sticky lg:top-28">
                <div className="w-[220px] sm:w-[240px]">
                  <div className="overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-xl transition-all duration-500">
                    <img
                      src={steps[activeStep].image}
                      alt={`Step ${steps[activeStep].step}: ${steps[activeStep].title}`}
                      className="aspect-[9/16] w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </AnimatedBlock>

          {/* Safety note */}
          <AnimatedBlock delay={400}>
            <div className="mx-auto mt-14 max-w-3xl rounded-2xl border border-primary-200 bg-white p-6 sm:p-8">
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100">
                    <svg className="h-5 w-5 text-primary-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-bold text-text-primary">
                    If symptoms persist, consult a healthcare professional
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-text-muted">
                    PhotoMed addresses everyday symptoms — headaches, stomach aches, minor burns,
                    coughs, nausea. It is complementary to modern healthcare, not a replacement.
                    If your condition does not improve, always seek professional medical advice.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedBlock>
        </div>
      </section>

      {/* Use cases — image-backed cards with hover effect */}
      <Section className="bg-primary-50">
        <AnimatedBlock>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">
              Real symptoms. Proven remedies.
            </h2>
            <p className="mt-4 text-text-muted">
              These are not hypothetical. These are plant-based preparations with documented
              use across cultures and published research supporting their efficacy.
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
