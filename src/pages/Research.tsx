import { useEffect, useState } from 'react'
import { AnimatedBlock, Section } from '@/components/ui/Section'
import Button from '@/components/ui/Button'

interface ResearchEntry {
  citation: string
  title: string
  finding: string
  sourceUrl: string
  publisher: string
}

export default function ResearchPage() {
  const [items, setItems] = useState<ResearchEntry[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/content/research.json')
      .then((res) => res.json() as Promise<ResearchEntry[]>)
      .then((data) => setItems(data))
      .finally(() => setLoading(false))
  }, [])

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
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
                Source-backed references
              </h1>
              <p className="mt-6 text-lg text-primary-200/80">
                Publications and reports that inform PhotoMed’s framing and product decisions.
              </p>
            </div>
          </AnimatedBlock>
        </div>
      </section>

      <Section>
        {loading ? (
          <div className="text-center text-text-muted">Loading references...</div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item, i) => (
              <AnimatedBlock key={item.title} delay={i * 100}>
                <article className="flex h-full flex-col rounded-2xl border border-primary-100 bg-white p-6 shadow-sm">
                  <p className="text-xs font-medium uppercase tracking-wider text-primary-600">{item.publisher}</p>
                  <h2 className="mt-3 text-lg font-bold text-text-primary">{item.title}</h2>
                  <p className="mt-2 text-xs text-text-muted">{item.citation}</p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-text-muted">{item.finding}</p>
                  <div className="mt-5">
                    <Button href={item.sourceUrl} external variant="outline" size="sm">
                      Open source
                    </Button>
                  </div>
                </article>
              </AnimatedBlock>
            ))}
          </div>
        )}
      </Section>
    </>
  )
}
