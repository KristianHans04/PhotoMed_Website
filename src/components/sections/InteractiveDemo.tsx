import { useState } from 'react'
import { AnimatedBlock } from '@/components/ui/Section'

const demoPlants = [
  {
    name: 'Aloe vera',
    scientific: 'Aloe barbadensis miller',
    family: 'Asphodelaceae',
    confidence: 96,
    image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8c76921?w=400&q=80',
    uses: ['Wound healing', 'Skin inflammation', 'Digestive aid', 'Burns and sunburn'],
    safety: 'Generally safe for topical use. Oral consumption of aloe latex can cause cramping.',
    regions: ['East Africa', 'South Asia', 'Central America'],
  },
  {
    name: 'Moringa',
    scientific: 'Moringa oleifera',
    family: 'Moringaceae',
    confidence: 93,
    image: 'https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=400&q=80',
    uses: ['Nutritional supplement', 'Anti-inflammatory', 'Blood sugar regulation', 'Water purification'],
    safety: 'Leaves widely consumed as food. Root bark contains alkaloids — avoid during pregnancy.',
    regions: ['East Africa', 'South Asia', 'Southeast Asia'],
  },
  {
    name: 'Neem',
    scientific: 'Azadirachta indica',
    family: 'Meliaceae',
    confidence: 91,
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&q=80',
    uses: ['Antimicrobial', 'Dental hygiene', 'Skin conditions', 'Insect repellent'],
    safety: 'External use generally safe. Internal use requires caution — not for children or pregnant women.',
    regions: ['East Africa', 'South Asia', 'West Africa'],
  },
]

export default function InteractiveDemo() {
  const [selected, setSelected] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  function handleIdentify() {
    setShowResult(false)
    setIsAnalyzing(true)
    setTimeout(() => {
      setIsAnalyzing(false)
      setShowResult(true)
    }, 2000)
  }

  const plant = demoPlants[selected]

  return (
    <section className="relative overflow-hidden bg-primary-950 py-20 md:py-28">
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1470058869958-2a77bde23b87?w=1920&q=80"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedBlock>
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary-400">
              Try It Yourself
            </span>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              See the identification pipeline in action
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-primary-200/80">
              Select a plant image below and watch how PhotoMed processes it. In the real app,
              you would photograph any plant with your camera.
            </p>
          </div>
        </AnimatedBlock>

        <div className="mt-16">
          <AnimatedBlock delay={200}>
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Left: plant selection */}
              <div>
                <p className="mb-4 text-sm font-medium text-primary-300">
                  Select a plant to identify:
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {demoPlants.map((p, i) => (
                    <button
                      key={p.name}
                      onClick={() => {
                        setSelected(i)
                        setShowResult(false)
                        setIsAnalyzing(false)
                      }}
                      className={`group relative overflow-hidden rounded-xl transition-all duration-300 ${
                        i === selected
                          ? 'ring-2 ring-primary-400 ring-offset-2 ring-offset-primary-950'
                          : 'opacity-60 hover:opacity-80'
                      }`}
                    >
                      <img
                        src={p.image}
                        alt={p.name}
                        className="aspect-square w-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-2 pb-2 pt-8">
                        <p className="text-xs font-medium text-white">{p.name}</p>
                      </div>
                    </button>
                  ))}
                </div>

                <button
                  onClick={handleIdentify}
                  disabled={isAnalyzing}
                  className="mt-6 w-full rounded-xl bg-primary-600 px-6 py-4 text-sm font-semibold text-white transition-all hover:bg-primary-500 disabled:opacity-50"
                >
                  {isAnalyzing ? 'Analyzing...' : 'Identify This Plant'}
                </button>
              </div>

              {/* Right: result */}
              <div className="flex flex-col">
                {isAnalyzing && (
                  <div className="flex flex-1 flex-col items-center justify-center rounded-2xl border border-primary-700/30 bg-primary-900/50 p-8">
                    <div className="relative h-16 w-16">
                      <div className="absolute inset-0 animate-ping rounded-full bg-primary-500/20" />
                      <div className="absolute inset-2 animate-pulse rounded-full bg-primary-500/40" />
                      <div className="absolute inset-4 rounded-full bg-primary-400" />
                    </div>
                    <p className="mt-6 text-sm text-primary-300">
                      Cross-referencing botanical databases...
                    </p>
                    <div className="mt-4 h-1 w-48 overflow-hidden rounded-full bg-primary-800">
                      <div className="h-full animate-pulse rounded-full bg-primary-400" style={{ width: '60%' }} />
                    </div>
                  </div>
                )}

                {showResult && (
                  <div className="rounded-2xl border border-primary-700/30 bg-primary-900/50 p-6 backdrop-blur-sm md:p-8">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-primary-400">
                          Species Identified
                        </p>
                        <h3 className="mt-1 text-2xl font-bold text-white">{plant.name}</h3>
                        <p className="text-sm italic text-primary-300">{plant.scientific}</p>
                        <p className="mt-1 text-xs text-primary-400">Family: {plant.family}</p>
                      </div>
                      <div className="rounded-lg bg-primary-700/50 px-3 py-1.5">
                        <span className="text-lg font-bold text-primary-200">{plant.confidence}%</span>
                        <p className="text-[10px] text-primary-400">confidence</p>
                      </div>
                    </div>

                    <div className="mt-6">
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary-400">
                        Documented Medicinal Uses
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {plant.uses.map((use) => (
                          <span
                            key={use}
                            className="rounded-full border border-primary-600/40 bg-primary-800/50 px-3 py-1 text-xs text-primary-200"
                          >
                            {use}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-5 rounded-lg bg-primary-800/30 p-4">
                      <p className="text-xs font-semibold uppercase text-primary-400">
                        Safety Information
                      </p>
                      <p className="mt-1 text-sm text-primary-200/80">{plant.safety}</p>
                    </div>

                    <div className="mt-4">
                      <p className="text-xs text-primary-400">
                        Found in: {plant.regions.join(' / ')}
                      </p>
                    </div>
                  </div>
                )}

                {!isAnalyzing && !showResult && (
                  <div className="flex flex-1 flex-col items-center justify-center rounded-2xl border border-dashed border-primary-700/30 p-8 text-center">
                    <div className="h-16 w-16 rounded-2xl bg-primary-800/50 p-4 text-primary-500">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p className="mt-4 text-sm text-primary-300">
                      Select a plant and tap "Identify" to see the pipeline in action.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </AnimatedBlock>
        </div>
      </div>
    </section>
  )
}
