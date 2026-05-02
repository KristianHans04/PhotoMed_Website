import { AnimatedBlock } from '@/components/ui/Section'
import ImageCarousel from '@/components/ui/ImageCarousel'

const communityImages = [
  {
    src: 'https://images.unsplash.com/photo-1509099836639-18ba4637f590?w=900&q=80',
    alt: 'Rural African landscape with green vegetation and community gardens',
    caption: 'Medicinal gardens in rural East Africa, where traditional healers cultivate plants used for generations.',
  },
  {
    src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&q=80',
    alt: 'Community health workers in a field setting',
    caption: 'Community health workers document local plant species for digital preservation.',
  },
  {
    src: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=900&q=80',
    alt: 'Hands holding a young plant seedling in soil',
    caption: 'Every plant holds centuries of accumulated healing knowledge waiting to be preserved.',
  },
  {
    src: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=900&q=80',
    alt: 'Dense tropical vegetation with medicinal plants',
    caption: 'The world\'s tropical forests contain the densest concentration of medicinal biodiversity.',
  },
]

const impacts = [
  {
    stat: '2.1B',
    description: 'People in sub-Saharan Africa without access to essential healthcare facilities within 2 hours.',
    source: 'The Lancet, 2020',
  },
  {
    stat: '60%',
    description: 'Of traditional medicinal plant knowledge is at risk of being lost within one generation.',
    source: 'IUCN Red List Assessment, 2021',
  },
  {
    stat: '12x',
    description: 'Rural Kenyans are more likely to consult a traditional healer before visiting a hospital.',
    source: 'Kenya National Health Survey, 2019',
  },
]

export default function CommunityImpact() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: image carousel */}
          <AnimatedBlock>
            <div>
              <ImageCarousel images={communityImages} />
              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=300&q=80',
                  'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=300&q=80',
                  'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&q=80',
                ].map((src, i) => (
                  <div key={i} className="aspect-square overflow-hidden rounded-xl">
                    <img
                      src={src}
                      alt="Medicinal plants and vegetation"
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </AnimatedBlock>

          {/* Right: content */}
          <div className="lg:pt-8">
            <AnimatedBlock>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary-600">
                Why This Matters
              </span>
              <h2 className="mt-3 text-3xl font-bold text-text-primary sm:text-4xl">
                For millions, the choice between
                <span className="text-primary-700"> traditional medicine and nothing</span> is not a choice at all
              </h2>
              <p className="mt-6 text-text-muted leading-relaxed">
                In the communities where PhotoMed operates, hospitals can be a full day's journey away.
                Pharmaceutical drugs cost more than a week's income. The plants growing on the
                roadside — the same plants their grandmothers used — are often the only option available.
                We are not romanticizing this reality. We are building tools to make it safer.
              </p>
            </AnimatedBlock>

            <div className="mt-10 space-y-6">
              {impacts.map((item, i) => (
                <AnimatedBlock key={item.stat} delay={i * 150}>
                  <div className="flex gap-5 border-l-4 border-primary-200 pl-6">
                    <div>
                      <span className="text-3xl font-black text-primary-700">{item.stat}</span>
                      <p className="mt-1 text-sm text-text-muted">{item.description}</p>
                      <p className="mt-1 text-xs font-medium text-primary-600">{item.source}</p>
                    </div>
                  </div>
                </AnimatedBlock>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
