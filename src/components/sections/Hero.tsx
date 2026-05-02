import { ArrowDown } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800">
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80"
          alt=""
          className="h-full w-full object-cover"
          loading="eager"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-primary-950/90 via-primary-900/60 to-transparent" />

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          <span className="mb-6 inline-block rounded-full border border-primary-400/30 bg-primary-800/50 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-primary-200">
            Traditional Medicine Meets Artificial Intelligence
          </span>
        </div>

        <h1 className="animate-slide-up max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          The world's plant medicine,{' '}
          <span className="bg-gradient-to-r from-primary-300 to-primary-400 bg-clip-text text-transparent">
            in your hands
          </span>
        </h1>

        <p className="mt-8 max-w-2xl animate-slide-up text-lg leading-relaxed text-primary-100/90 sm:text-xl" style={{ animationDelay: '200ms' }}>
          Millions rely on traditional plant remedies but lack reliable identification tools.
          PhotoMed uses AI image recognition and geospatial mapping to connect communities
          with the medicinal plants around them.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row" style={{ animationDelay: '400ms' }}>
          <Button href="/download" size="lg" className="animate-slide-up">
            Download the App
          </Button>
          <Button
            href="/how-it-works"
            variant="outline"
            size="lg"
            className="animate-slide-up border-primary-400/50 text-white hover:bg-primary-800/50"
          >
            See How It Works
          </Button>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-primary-300/60" size={28} />
        </div>
      </div>
    </section>
  )
}
