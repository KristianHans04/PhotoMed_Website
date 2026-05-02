import { ArrowDown } from 'lucide-react'
import Button from '@/components/ui/Button'
import PhoneFrame from '@/components/ui/PhoneFrame'

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800">
      <div className="absolute inset-0 opacity-25">
        <img
          src="/images/hero-bg.webp"
          alt=""
          className="h-full w-full object-cover"
          loading="eager"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-900/70 to-primary-950/40" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="text-center lg:text-left">
            <div className="animate-fade-in">
            </div>

            <h1 className="animate-slide-up text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Centuries of healing.
              <br />
              <span className="bg-gradient-to-r from-primary-300 to-primary-400 bg-clip-text text-transparent">
                One app.
              </span>
            </h1>

            <p
              className="mt-8 max-w-xl animate-slide-up text-lg leading-relaxed text-primary-100/90 sm:text-xl"
              style={{ animationDelay: '200ms' }}
            >
              Photograph any plant. Get its medicinal uses in seconds. Navigate to verified
              specimens near you. PhotoMed puts the world's ethnobotanical knowledge in
              the hands of the communities who need it most.
            </p>

            <div
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
              style={{ animationDelay: '400ms' }}
            >
              <Button href="/download" size="lg" className="animate-slide-up">
                Download the App
              </Button>
              <Button
                href="#demo"
                variant="outline"
                size="lg"
                className="animate-slide-up border-primary-400/50 text-white hover:bg-primary-800/50"
              >
                See It In Action
              </Button>
            </div>
          </div>

          <div className="hidden animate-fade-in lg:flex lg:justify-center" style={{ animationDelay: '400ms' }}>
            <div className="relative flex items-end gap-4">
              <PhoneFrame
                src="/images/app-screen-plantid.webp"
                alt="PhotoMed plant identification screen showing species analysis results"
                size="lg"
              />
              <div className="hidden xl:block">
                <PhoneFrame
                  src="/images/app-screen-map.webp"
                  alt="PhotoMed geospatial map showing nearby medicinal plant locations"
                  size="sm"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-primary-300/60" size={28} />
        </div>
      </div>
    </section>
  )
}
