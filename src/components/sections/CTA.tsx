import { Section, AnimatedBlock } from '@/components/ui/Section'
import Button from '@/components/ui/Button'

export default function CTA() {
  return (
    <Section className="relative overflow-hidden bg-primary-900">
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      <div className="relative text-center">
        <AnimatedBlock>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            This knowledge belongs to everyone.
            <br />
            <span className="text-primary-300">Help us keep it alive.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-200">
            Every contribution accelerates our mission to digitize and democratize traditional
            plant medicine for the communities that depend on it. Your support directly funds
            research, development, and expansion into underserved regions.
          </p>
        </AnimatedBlock>

        <AnimatedBlock delay={200}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/donate" size="lg" className="bg-white text-primary-900 hover:bg-primary-50">
              Support the Mission
            </Button>
            <Button
              href="/download"
              variant="outline"
              size="lg"
              className="border-primary-400/50 text-white hover:bg-primary-800/50"
            >
              Download PhotoMed
            </Button>
          </div>
        </AnimatedBlock>
      </div>
    </Section>
  )
}
