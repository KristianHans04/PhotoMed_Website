import { AnimatedBlock, Section } from '@/components/ui/Section'
import Button from '@/components/ui/Button'

const posts = [
  {
    title: 'How we evaluate traditional medicine research before publication',
    excerpt:
      'Our editorial process for selecting studies, validating context, and presenting findings clearly to non-technical readers.',
    date: 'May 2026',
    category: 'Research Process',
    href: '/research',
  },
  {
    title: 'Preserving medicinal plant knowledge across generations',
    excerpt:
      'Why documentation matters, and how digital products can support local knowledge continuity.',
    date: 'May 2026',
    category: 'Field Notes',
    href: '/research',
  },
  {
    title: 'Designing trust in health knowledge products',
    excerpt:
      'The product and communication principles we use to make guidance understandable and responsible.',
    date: 'May 2026',
    category: 'Product',
    href: '/research',
  },
]

export default function BlogPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-primary-950 py-24 md:py-32">
        <div className="absolute inset-0 opacity-15">
          <img src="/images/community-1.webp" alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary-950/70 to-primary-950" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedBlock>
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary-400">
                Blog
              </span>
              <h1 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">
                Insights, research, and updates
              </h1>
              <p className="mt-6 text-lg text-primary-200/80">
                Rolling articles on traditional medicine research, product updates, and field learning.
              </p>
            </div>
          </AnimatedBlock>
        </div>
      </section>

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post, i) => (
            <AnimatedBlock key={post.title} delay={i * 120}>
              <article className="flex h-full flex-col rounded-2xl border border-primary-100 bg-white p-6 shadow-sm">
                <p className="text-xs font-medium uppercase tracking-wider text-primary-600">
                  {post.category} · {post.date}
                </p>
                <h2 className="mt-3 text-lg font-bold text-text-primary">{post.title}</h2>
                <p className="mt-3 flex-1 text-sm text-text-muted">{post.excerpt}</p>
                <div className="mt-5">
                  <Button href={post.href} variant="outline" size="sm">
                    Read article
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
