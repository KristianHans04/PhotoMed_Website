import { useState } from 'react'
import { AnimatedBlock } from '@/components/ui/Section'

const demoScenarios = [
  {
    name: 'Plant Identification',
    image: '/images/app-screen-plantid.webp',
    summary: 'Identify a medicinal plant from a single camera capture.',
    outcomes: [
      'Species name and confidence score',
      'Traditional medicinal context',
      'Safety and usage notes',
    ],
  },
  {
    name: 'Symptom Guidance',
    image: '/images/app-screen-chat.webp',
    summary: 'Describe symptoms in plain language and receive structured guidance.',
    outcomes: [
      'Guided symptom conversation',
      'Context-aware plant references',
      'Clear safety boundaries',
    ],
  },
  {
    name: 'Nearby Discovery',
    image: '/images/app-screen-map.webp',
    summary: 'Discover medicinal plants around your location.',
    outcomes: [
      'Nearby medicinal plant points',
      'Regional context for discovery',
      'Map-first exploration',
    ],
  },
]

export default function InteractiveDemo() {
  const [selected, setSelected] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  function handlePreview() {
    setShowResult(false)
    setIsAnalyzing(true)
    setTimeout(() => {
      setIsAnalyzing(false)
      setShowResult(true)
    }, 1200)
  }

  const scenario = demoScenarios[selected]

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
              Preview the in-app experience
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-primary-200/80">
              Choose a workflow and preview what users see inside PhotoMed.
            </p>
          </div>
        </AnimatedBlock>

        <AnimatedBlock delay={200}>
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-sm font-medium text-primary-300">Choose a workflow:</p>
              <div className="space-y-3">
                {demoScenarios.map((item, i) => (
                  <button
                    key={item.name}
                    onClick={() => {
                      setSelected(i)
                      setShowResult(false)
                      setIsAnalyzing(false)
                    }}
                    className={`w-full rounded-xl border px-5 py-4 text-left transition-all ${
                      i === selected
                        ? 'border-primary-400 bg-primary-900/70 text-white'
                        : 'border-primary-800/60 bg-primary-900/40 text-primary-200 hover:border-primary-600'
                    }`}
                  >
                    <p className="font-semibold">{item.name}</p>
                    <p className="mt-1 text-sm opacity-80">{item.summary}</p>
                  </button>
                ))}
              </div>

              <button
                onClick={handlePreview}
                disabled={isAnalyzing}
                className="mt-6 w-full rounded-xl bg-primary-600 px-6 py-4 text-sm font-semibold text-white transition-all hover:bg-primary-500 disabled:opacity-50"
              >
                {isAnalyzing ? 'Loading preview...' : 'Run Preview'}
              </button>
            </div>

            <div className="rounded-2xl border border-primary-700/40 bg-primary-900/50 p-5 backdrop-blur-sm">
              {isAnalyzing && (
                <div className="flex min-h-[380px] flex-col items-center justify-center">
                  <div className="h-14 w-14 animate-spin rounded-full border-4 border-primary-700 border-t-primary-300" />
                  <p className="mt-5 text-sm text-primary-200">Preparing scenario preview...</p>
                </div>
              )}

              {showResult && (
                <div>
                  <div className="mx-auto max-w-[220px] overflow-hidden rounded-[1.8rem] border-[5px] border-gray-900 bg-gray-900 shadow-xl">
                    <img
                      src={scenario.image}
                      alt={`${scenario.name} screen in PhotoMed`}
                      className="aspect-[9/19.5] w-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-white">{scenario.name}</h3>
                  <ul className="mt-3 space-y-2">
                    {scenario.outcomes.map((outcome) => (
                      <li key={outcome} className="text-sm text-primary-200/85">
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {!isAnalyzing && !showResult && (
                <div className="flex min-h-[380px] flex-col items-center justify-center rounded-xl border border-dashed border-primary-700/60 px-6 text-center">
                  <p className="text-sm text-primary-300">
                    Select a workflow and run preview to see the interface state.
                  </p>
                </div>
              )}
            </div>
          </div>
        </AnimatedBlock>
      </div>
    </section>
  )
}
