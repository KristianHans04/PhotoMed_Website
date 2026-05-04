import Hero from '@/components/sections/Hero'
import ProblemSolution from '@/components/sections/ProblemSolution'
import Impact from '@/components/sections/Impact'
import StickyScroll from '@/components/sections/StickyScroll'
import InteractiveDemo from '@/components/sections/InteractiveDemo'
import CommunityImpact from '@/components/sections/CommunityImpact'
import Research from '@/components/sections/Research'
import CTA from '@/components/sections/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <Impact />
      <StickyScroll />
      <div id="demo">
        <InteractiveDemo />
      </div>
      <CommunityImpact />
      <Research />
      <CTA />
    </>
  )
}
