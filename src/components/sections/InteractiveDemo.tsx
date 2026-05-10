import { useEffect, useState } from 'react'
import { AnimatedBlock } from '@/components/ui/Section'

const slides = [
  {
    name: 'Plant Identification',
    image: '/images/app-screen-plantid.webp',
    summary: 'Capture a plant image and get instant medicinal context.',
    outcomes: ['Species match', 'Medicinal use context', 'Safety notes'],
  },
  {
    name: 'Symptom Guidance',
    image: '/images/app-screen-chat.webp',
    summary: 'Describe symptoms and receive structured guidance.',
    outcomes: ['Conversation flow', 'Contextual recommendations', 'Safety boundaries'],
  },
  {
    name: 'Nearby Discovery',
    image: '/images/app-screen-map.webp',
    summary: 'Browse medicinal plant discovery in your region.',
    outcomes: ['Regional discovery points', 'Map-based exploration', 'Practical access'],
  },
]

export default function InteractiveDemo() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => window.clearInterval(interval)
  }, [])

  const current = slides[active]

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedBlock>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-text-primary sm:text-4xl lg:text-5xl">
              See how it works
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-text-muted">
              Three core features that put traditional medicine knowledge in your hands.
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
                        ? 'border-primary-300 bg-primary-50 text-text-primary shadow-sm'
                        : 'border-gray-200 bg-white text-text-muted hover:border-primary-200 hover:bg-primary-50/50'
                    }`}
                  >
                    <p className="font-semibold">{slide.name}</p>
                    <p className="mt-1 text-sm opacity-80">{slide.summary}</p>
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
                      i === active ? 'w-8 bg-primary-600' : 'w-2 bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="order-1 flex justify-center lg:order-2">
              <div className="relative w-[220px] sm:w-[260px]">
                <div className="overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-xl">
                  <img
                    src={current.image}
                    alt={`${current.name} screen in PhotoMed`}
                    className="aspect-[9/16] w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-bold text-text-primary">{current.name}</h3>
                  <ul className="mt-2 space-y-1">
                    {current.outcomes.map((outcome) => (
                      <li key={outcome} className="text-sm text-text-muted">
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
