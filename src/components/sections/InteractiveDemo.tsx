import { useEffect, useState } from 'react'
import { AnimatedBlock } from '@/components/ui/Section'

const slides = [
  {
    name: 'Describe your symptoms',
    image: '/images/app-screen-chat.webp',
    summary: '"I have a headache and feel nauseous." The AI asks follow-up questions to narrow down the best remedy.',
    outcomes: ['Plain language input', 'Follow-up questions for accuracy', 'Image upload for visual symptoms'],
  },
  {
    name: 'Get a plant-based remedy',
    image: '/images/app-screen-plantid.webp',
    summary: 'The AI recommends specific plants and tells you how to prepare them — chew, boil, or apply.',
    outcomes: ['Matched to your symptoms', 'Preparation instructions', 'Safety warnings included'],
  },
  {
    name: 'Navigate to the nearest plant',
    image: '/images/app-screen-map.webp',
    summary: 'See where the recommended plant grows closest to you and get walking directions.',
    outcomes: ['GPS-based plant locations', 'Step-by-step navigation', 'Community-verified sightings'],
  },
]

export default function InteractiveDemo() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => window.clearInterval(interval)
  }, [])

  const current = slides[active]

  return (
    <section className="bg-primary-950 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedBlock>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              How PhotoMed works
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-primary-300/80">
              From symptom to remedy in three steps. No appointment, no prescription, no waiting room.
            </p>
          </div>
        </AnimatedBlock>

        <AnimatedBlock delay={200}>
          <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div className="space-y-3">
                {slides.map((slide, i) => (
                  <button
                    key={slide.name}
                    onClick={() => setActive(i)}
                    className={`w-full rounded-xl border px-5 py-4 text-left transition-all ${
                      i === active
                        ? 'border-primary-500 bg-primary-800/60 text-white shadow-sm'
                        : 'border-primary-800 bg-primary-900/40 text-primary-300 hover:border-primary-600 hover:bg-primary-800/30'
                    }`}
                  >
                    <p className="font-semibold">
                      <span className="mr-2 text-primary-400">{String(i + 1).padStart(2, '0')}</span>
                      <span className={i === active ? 'text-white' : 'text-primary-200'}>{slide.name}</span>
                    </p>
                    <p className={`mt-1 text-sm ${i === active ? 'text-primary-200' : 'text-primary-400'}`}>{slide.summary}</p>
                  </button>
                ))}
              </div>

              <div className="mt-6 flex gap-2">
                {slides.map((slide, i) => (
                  <button
                    key={slide.name}
                    onClick={() => setActive(i)}
                    aria-label={`Show ${slide.name}`}
                    className={`h-1.5 rounded-full transition-all ${
                      i === active ? 'w-8 bg-primary-400' : 'w-2 bg-primary-700'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="order-1 flex justify-center lg:order-2">
              <div className="relative w-[220px] sm:w-[260px]">
                <div className="overflow-hidden rounded-[2rem] border border-primary-700/50 bg-primary-900 shadow-xl shadow-black/40">
                  <img
                    src={current.image}
                    alt={`${current.name} — PhotoMed app`}
                    className="aspect-[9/16] w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-bold text-white">{current.name}</h3>
                  <ul className="mt-2 space-y-1">
                    {current.outcomes.map((outcome) => (
                      <li key={outcome} className="text-sm text-primary-300">
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </AnimatedBlock>
      </div>
    </section>
  )
}
