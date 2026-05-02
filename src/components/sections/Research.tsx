import { Section, AnimatedBlock } from '@/components/ui/Section'

const research = [
  {
    citation: 'World Health Organization (2019)',
    title: 'WHO Global Report on Traditional and Complementary Medicine',
    finding:
      'An estimated 88% of WHO member states acknowledge the use of traditional medicine. In Africa, up to 80% of the population uses traditional medicine for primary healthcare.',
  },
  {
    citation: 'Fabricant & Farnsworth, Environmental Health Perspectives (2001)',
    title: 'The Value of Plants Used in Traditional Medicine for Drug Discovery',
    finding:
      'Approximately 25% of modern pharmaceutical drugs are derived from plants first used traditionally. Yet fewer than 15% of the estimated 300,000 plant species have been studied for pharmacological activity.',
  },
  {
    citation: 'Saslis-Lagoudakis et al., PNAS (2012)',
    title: 'Phylogenies Reveal Predictive Power of Traditional Medicine',
    finding:
      'Cross-cultural analysis demonstrates that phylogenetically related plants are used to treat similar medical conditions across geographically isolated cultures, validating traditional knowledge systems.',
  },
]

export default function Research() {
  return (
    <Section className="bg-white">
      <AnimatedBlock>
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-600">
            Evidence-Based
          </span>
          <h2 className="mt-3 text-3xl font-bold text-text-primary sm:text-4xl">
            Built on peer-reviewed science
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-muted">
            Our approach is grounded in published research. We do not make medical claims.
            We provide access to documented ethnobotanical knowledge with appropriate safety context.
          </p>
        </div>
      </AnimatedBlock>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {research.map((item, i) => (
          <AnimatedBlock key={item.citation} delay={i * 150}>
            <div className="flex h-full flex-col rounded-2xl border border-primary-100 bg-surface-dim p-6">
              <p className="text-xs font-medium uppercase tracking-wider text-primary-600">
                {item.citation}
              </p>
              <h3 className="mt-3 text-sm font-bold text-text-primary">{item.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted">
                {item.finding}
              </p>
            </div>
          </AnimatedBlock>
        ))}
      </div>
    </Section>
  )
}
