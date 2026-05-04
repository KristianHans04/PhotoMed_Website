import { AnimatedBlock, Section } from '@/components/ui/Section'
import Button from '@/components/ui/Button'

const references = [
  {
    citation: 'World Health Organization (2019)',
    title: 'WHO Global Report on Traditional and Complementary Medicine',
    finding:
      'An estimated 88% of WHO member states acknowledge traditional medicine use. In Africa, up to 80% of the population relies on it for primary healthcare.',
    link: 'https://www.who.int/publications/i/item/978924151536',
  },
  {
    citation: 'Fabricant & Farnsworth, Environmental Health Perspectives (2001)',
    title: 'The Value of Plants Used in Traditional Medicine for Drug Discovery',
    finding:
      'Around 25% of modern drugs are derived from plants first used traditionally, while a large share of plant species remain understudied pharmacologically.',
    link: 'https://ehp.niehs.nih.gov/doi/full/10.1289/ehp.01109s169',
  },
  {
    citation: 'Saslis-Lagoudakis et al., PNAS (2012)',
    title: 'Phylogenies Reveal Predictive Power of Traditional Medicine',
    finding:
      'Cross-cultural evidence shows related plants are used for similar conditions across different regions, supporting the consistency of traditional knowledge systems.',
    link: 'https://www.pnas.org/doi/10.1073/pnas.1202242109',
  },
]

export default function ResearchPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-primary-950 py-24 md:py-32">
        <div className="absolute inset-0 opacity-15">
          <img src="/images/vegetation-dense.webp" alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary-950/70 to-primary-950" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedBlock>
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary-400">
                Research Library
              </span>
              <h1 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">
                Evidence behind our mission
              </h1>
              <p className="mt-6 text-lg text-primary-200/80">
                A curated list of research used to guide product direction and safety context.
              </p>
            </div>
          </AnimatedBlock>
        </div>
      </section>

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {references.map((item, i) => (
            <AnimatedBlock key={item.title} delay={i * 120}>
              <article className="flex h-full flex-col rounded-2xl border border-primary-100 bg-white p-6 shadow-sm">
                <p className="text-xs font-medium uppercase tracking-wider text-primary-600">{item.citation}</p>
                <h2 className="mt-3 text-lg font-bold text-text-primary">{item.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted">{item.finding}</p>
                <div className="mt-5">
                  <Button href={item.link} external variant="outline" size="sm">
                    Read source
                  </Button>
                </div>
              </article>
            </AnimatedBlock>
          ))}
        </div>
      </Section>
    </>
  )
}
