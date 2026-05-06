import Button from '@/components/ui/Button'
import PhoneFrame from '@/components/ui/PhoneFrame'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="pointer-events-none absolute -left-24 top-6 h-72 w-72 rounded-full bg-primary-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-primary-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="text-center lg:text-left">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-700">
              PhotoMed
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
              Traditional plant knowledge,
              <br />
              in one modern experience.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-text-muted lg:mx-0">
              Identify medicinal plants, explore practical guidance, and navigate discovery with confidence.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <Button href="/download" size="lg">
                Get the App
              </Button>
              <Button href="/blog" variant="outline" size="lg">
                Read the Blog
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[460px] rounded-3xl border border-primary-100 bg-surface-dim p-4 shadow-sm">
              <img
                src="/images/community-1.webp"
                alt="Community members preserving medicinal plant knowledge"
                className="aspect-[4/3] w-full rounded-2xl object-cover"
                loading="eager"
              />

              <div className="absolute -bottom-10 left-4 hidden sm:block">
                <PhoneFrame
                  src="/images/app-screen-plantid.webp"
                  alt="PhotoMed plant identification screen"
                  size="sm"
                />
              </div>

              <div className="absolute -top-8 right-4 hidden xl:block">
                <PhoneFrame
                  src="/images/app-screen-chat.webp"
                  alt="PhotoMed guidance screen"
                  size="sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
