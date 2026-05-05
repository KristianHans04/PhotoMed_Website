import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatedBlock, Section } from '@/components/ui/Section'

interface BlogPostSummary {
  slug: string
  title: string
  excerpt: string
  author: string
  date: string
  readingTime: string
  category: string
  coverImage: string
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPostSummary[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/content/blog-posts.json')
      .then((res) => res.json() as Promise<BlogPostSummary[]>)
      .then((data) => setPosts(data))
      .finally(() => setLoading(false))
  }, [])

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
                Stories and product insights
              </h1>
              <p className="mt-6 text-lg text-primary-200/80">
                Research process, field learnings, and practical updates from the PhotoMed team.
              </p>
            </div>
          </AnimatedBlock>
        </div>
      </section>

      <Section>
        {loading ? (
          <div className="text-center text-text-muted">Loading articles...</div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <AnimatedBlock key={post.slug} delay={i * 100}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-primary-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="overflow-hidden">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs font-medium uppercase tracking-wider text-primary-600">
                      {post.category}
                    </p>
                    <h2 className="mt-2 text-xl font-bold text-text-primary">{post.title}</h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted">{post.excerpt}</p>
                    <div className="mt-5 flex items-center justify-between text-xs text-text-muted">
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                      <span>{post.readingTime}</span>
                    </div>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="mt-5 inline-flex items-center text-sm font-semibold text-primary-700 transition-colors hover:text-primary-800"
                    >
                      Read article
                    </Link>
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
