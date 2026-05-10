import { AnimatedBlock } from '@/components/ui/Section'
import Button from '@/components/ui/Button'

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Image collage - left side */}
          <div className="lg:col-span-2">
            <AnimatedBlock>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-3">
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src="/images/community-1.webp"
                      alt="African woman examining medicinal plants in her garden"
                      className="aspect-[3/4] w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src="/images/vegetation-dense.webp"
                      alt="Dense collection of medicinal plants"
                      className="aspect-square w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="mt-8 space-y-3">
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src="/images/community-2.webp"
                      alt="Young man using smartphone to identify plants in rural East Africa"
                      className="aspect-square w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src="/images/vegetation-hands.webp"
                      alt="Hands holding fresh medicinal herbs"
                      className="aspect-[3/4] w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </AnimatedBlock>
          </div>

          {/* Content - right side */}
          <div className="lg:col-span-3">
            <AnimatedBlock delay={200}>
              <h2 className="text-3xl font-bold text-text-primary sm:text-4xl lg:text-5xl">
                Help us map the world's medicinal vegetation and put it in the hands of the people who need it.
              </h2>
              <p className="mt-6 text-lg text-text-muted leading-relaxed">
                Every contribution funds the mapping of more vegetation, the expansion of
                our AI capabilities, and the delivery of PhotoMed into communities where
                proven plant-based remedies are growing but the knowledge of how to use
                them safely has not yet reached the people who need it.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button href="/donate" size="lg">
                  Support the Mission
                </Button>
                <a
                  href="/api/apk-latest"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-50 px-8 py-4 text-base font-semibold text-primary-700 transition-all hover:bg-primary-100"
                >
                  Download PhotoMed
                </a>
              </div>
            </AnimatedBlock>
          </div>
        </div>
      </div>
    </section>
  )
}
