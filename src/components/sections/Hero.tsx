import Button from '@/components/ui/Button'
import PhoneFrame from '@/components/ui/PhoneFrame'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary-950 py-24 md:py-32">
      <div className="absolute inset-0 opacity-20">
        <img src="/images/hero-bg.webp" alt="" className="h-full w-full object-cover" loading="eager" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-primary-950/60 via-primary-950/80 to-primary-950" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary-400">
              PhotoMed
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Traditional plant knowledge,
              <br />
              accessible in one app.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-primary-200/85 lg:mx-0">
              Identify medicinal plants, explore practical guidance, and discover trusted regional context in seconds.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <Button href="/download" size="lg">
                Get the App
              </Button>
              <Button
                href="/blog"
                variant="outline"
                size="lg"
                className="border-primary-400/50 text-white hover:bg-primary-800/50"
              >
                Read the Blog
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative flex items-end gap-4">
              <PhoneFrame
                src="/images/app-screen-plantid.webp"
                alt="PhotoMed plant identification screen"
                size="lg"
              />
              <div className="hidden xl:block">
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
