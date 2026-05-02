import Hero from '@/components/sections/Hero'
import ProblemSolution from '@/components/sections/ProblemSolution'
import Impact from '@/components/sections/Impact'
import HowItWorksPreview from '@/components/sections/HowItWorksPreview'
import TechOverview from '@/components/sections/TechOverview'
import Research from '@/components/sections/Research'
import CTA from '@/components/sections/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <Impact />
      <HowItWorksPreview />
      <TechOverview />
      <Research />
      <CTA />
    </>
  )
}
