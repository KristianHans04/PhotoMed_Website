import { useEffect, useState } from 'react'
import { AnimatedBlock } from '@/components/ui/Section'
import PhoneFrame from '@/components/ui/PhoneFrame'

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
    <section className="relative overflow-hidden bg-primary-950 py-20 md:py-28">
      <div className="absolute inset-0 opacity-10">
        <img src="/images/hero-bg.webp" alt="" className="h-full w-full object-cover" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedBlock>
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary-400">
              Product Demo
            </span>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              In-app experience preview
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-primary-200/80">
              A live slideshow of the core workflows users see in PhotoMed.
            </p>
          </div>
        </AnimatedBlock>

        <AnimatedBlock delay={200}>
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <div className="space-y-3">
              {slides.map((slide, i) => (
                <button
                  key={slide.name}
                  onClick={() => setActive(i)}
                  className={`w-full rounded-xl border px-5 py-4 text-left transition-all ${
                    i === active
                      ? 'border-primary-400 bg-primary-900/70 text-white'
                      : 'border-primary-800/60 bg-primary-900/40 text-primary-200 hover:border-primary-600'
                  }`}
                >
                  <p className="font-semibold">{slide.name}</p>
                  <p className="mt-1 text-sm opacity-80">{slide.summary}</p>
                </button>
              ))}
            </div>

            <div className="rounded-2xl border border-primary-700/40 bg-primary-900/50 p-5 backdrop-blur-sm">
              <PhoneFrame src={current.image} alt={`${current.name} screen in PhotoMed`} size="lg" />
              <h3 className="mt-6 text-xl font-bold text-white">{current.name}</h3>
              <ul className="mt-3 space-y-2">
                {current.outcomes.map((outcome) => (
                  <li key={outcome} className="text-sm text-primary-200/85">
                    {outcome}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex gap-2">
                {slides.map((slide, i) => (
                  <button
                    key={slide.name}
                    onClick={() => setActive(i)}
                    aria-label={`Show ${slide.name}`}
                    className={`h-2 rounded-full transition-all ${
                      i === active ? 'w-8 bg-primary-300' : 'w-2 bg-primary-700'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </AnimatedBlock>
      </div>
    </section>
  )
}
