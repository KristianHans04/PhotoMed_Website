import { AnimatedBlock } from '@/components/ui/Section'
import { useInView } from '@/hooks/useInView'

const regions = [
  { name: 'West Africa', x: 230, y: 185, usage: 85, plants: '5,400+', description: 'Ghana, Nigeria, Senegal lead in documented ethnobotanical traditions' },
  { name: 'East Africa', x: 310, y: 200, usage: 80, plants: '4,200+', description: 'Kenya, Tanzania, Ethiopia — PhotoMed\'s primary target markets' },
  { name: 'Southern Africa', x: 290, y: 260, usage: 70, plants: '3,000+', description: 'South Africa, Mozambique with rich indigenous healing systems' },
  { name: 'South Asia', x: 430, y: 170, usage: 75, plants: '8,000+', description: 'India\'s Ayurvedic tradition spans thousands of years' },
  { name: 'Southeast Asia', x: 490, y: 195, usage: 70, plants: '6,500+', description: 'Traditional medicine deeply integrated into daily life' },
  { name: 'Central America', x: 115, y: 185, usage: 60, plants: '2,800+', description: 'Maya and Aztec herbal traditions still practiced widely' },
  { name: 'South America', x: 155, y: 240, usage: 65, plants: '4,000+', description: 'Amazon basin contains the world\'s densest medicinal biodiversity' },
  { name: 'China', x: 480, y: 145, usage: 55, plants: '11,000+', description: 'Traditional Chinese Medicine — the world\'s most documented system' },
]

export default function WorldMapSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 })

  return (
    <section className="relative overflow-hidden bg-primary-950 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedBlock>
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary-400">
              Global Reach
            </span>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Traditional medicine is everywhere.
              <br />
              <span className="text-primary-300">The documentation is not.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-primary-200/80">
              Over 50,000 plant species are used medicinally worldwide. PhotoMed is building the
              infrastructure to catalog, verify, and distribute this knowledge — starting with East Africa.
            </p>
          </div>
        </AnimatedBlock>

        <div ref={ref} className="mt-16">
          <div className="relative mx-auto max-w-4xl">
            <svg
              viewBox="0 0 600 340"
              className="w-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="currentColor" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Simplified world map outline */}
              <g className="text-primary-800" fill="currentColor" opacity="0.3">
                {/* North America */}
                <path d="M60,60 L140,50 L160,80 L170,120 L155,140 L130,150 L90,145 L70,130 L55,100 Z" />
                {/* Central America */}
                <path d="M90,145 L130,150 L135,170 L120,185 L105,180 L95,165 Z" />
                {/* South America */}
                <path d="M120,185 L160,190 L180,220 L185,260 L170,290 L150,300 L130,280 L125,240 L130,210 Z" />
                {/* Europe */}
                <path d="M250,55 L290,50 L310,60 L300,80 L275,95 L260,90 L245,75 Z" />
                {/* Africa */}
                <path d="M250,110 L290,100 L320,120 L330,160 L320,200 L310,240 L290,270 L270,275 L255,250 L245,200 L240,160 L235,130 Z" />
                {/* Middle East */}
                <path d="M310,95 L350,90 L370,110 L360,130 L330,120 Z" />
                {/* South Asia */}
                <path d="M400,120 L440,110 L460,130 L450,170 L430,190 L410,180 L395,150 Z" />
                {/* East Asia */}
                <path d="M450,60 L500,55 L520,80 L510,120 L480,140 L460,130 L440,110 L445,80 Z" />
                {/* Southeast Asia */}
                <path d="M460,160 L500,155 L520,180 L510,210 L490,215 L470,200 Z" />
                {/* Australia */}
                <path d="M480,250 L530,240 L550,260 L540,290 L510,295 L480,280 Z" />
              </g>

              {/* Data points */}
              {regions.map((region, i) => (
                <g
                  key={region.name}
                  className={`transition-all duration-700 ease-out ${
                    isInView ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <circle
                    cx={region.x}
                    cy={region.y}
                    r={region.usage / 5}
                    className="text-primary-400"
                    fill="currentColor"
                    opacity="0.15"
                  >
                    {isInView && (
                      <animate
                        attributeName="r"
                        from="0"
                        to={String(region.usage / 5)}
                        dur="1s"
                        begin={`${i * 0.15}s`}
                        fill="freeze"
                      />
                    )}
                  </circle>
                  <circle
                    cx={region.x}
                    cy={region.y}
                    r="4"
                    className="text-primary-400"
                    fill="currentColor"
                  />
                  {isInView && (
                    <circle
                      cx={region.x}
                      cy={region.y}
                      r="4"
                      className="text-primary-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      opacity="0.6"
                    >
                      <animate
                        attributeName="r"
                        from="4"
                        to="20"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        from="0.6"
                        to="0"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  )}
                </g>
              ))}
            </svg>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {regions.slice(0, 4).map((region, i) => (
              <AnimatedBlock key={region.name} delay={i * 100}>
                <div className="rounded-xl border border-primary-700/30 bg-primary-900/50 p-4 backdrop-blur-sm">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-sm font-semibold text-primary-200">{region.name}</h3>
                    <span className="text-xs text-primary-400">{region.usage}% reliance</span>
                  </div>
                  <p className="mt-1 text-2xl font-bold text-white">{region.plants}</p>
                  <p className="mt-1 text-xs text-primary-300/70">{region.description}</p>
                </div>
              </AnimatedBlock>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
