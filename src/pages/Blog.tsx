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
}

const CATEGORIES = [
  'All',
  'Research',
  'Product',
  'Traditional Medicine',
  'Community',
  'Technology',
  'Impact',
]

const categoryColors: Record<string, string> = {
  Research: 'from-primary-800 to-primary-950',
  Product: 'from-gray-700 to-gray-900',
  'Traditional Medicine': 'from-green-800 to-green-950',
  Community: 'from-emerald-700 to-emerald-900',
  Technology: 'from-teal-800 to-teal-950',
  Impact: 'from-primary-700 to-primary-900',
}

function BlogThumbnail({ title, category }: { title: string; category: string }) {
  const gradient = categoryColors[category] || 'from-primary-800 to-primary-950'

  return (
    <div
      className={`relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br ${gradient} p-6`}
    >
      {/* Subtle vegetation pattern overlay */}
      <div className="absolute inset-0 opacity-[0.07]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id={`leaf-${category}`} x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M30 5c-8 0-15 12-15 25s7 25 15 25 15-12 15-25S38 5 30 5z" fill="none" stroke="white" strokeWidth="0.5" />
              <path d="M30 5v50" fill="none" stroke="white" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#leaf-${category})`} />
        </svg>
      </div>

      {/* Diagonal line accents */}
      <div className="absolute -right-8 -top-8 h-32 w-32 rotate-45 border border-white/5" />
      <div className="absolute -left-4 -bottom-4 h-24 w-24 rotate-12 border border-white/5" />

      {/* Logo mark */}
      <div className="absolute right-4 top-4">
        <span className="text-xs font-bold text-white/30">PhotoMed</span>
      </div>

      {/* Title */}
      <h3 className="relative z-10 text-center text-base font-bold leading-snug text-white sm:text-lg">
        {title}
      </h3>
    </div>
  )
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPostSummary[]>([])
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState('All')

  useEffect(() => {
    fetch('/content/blog-posts.json')
      .then((res) => res.json() as Promise<BlogPostSummary[]>)
      .then((data) => setPosts(data))
      .finally(() => setLoading(false))
  }, [])

  const filtered = activeCategory === 'All'
    ? posts
    : posts.filter((p) => p.category === activeCategory)

  return (
    <>
      <Section>
        <AnimatedBlock>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-primary-700 text-white'
                    : 'bg-surface-dim text-text-muted hover:bg-primary-50 hover:text-primary-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimatedBlock>

        {loading ? (
          <div className="mt-12 text-center text-text-muted">Loading articles...</div>
        ) : filtered.length === 0 ? (
          <div className="mt-12 text-center text-text-muted">No articles in this category yet.</div>
        ) : (
          <>
            {/* Featured post - first article */}
            {activeCategory === 'All' && filtered.length > 0 && (
              <AnimatedBlock>
                <Link
                  to={`/blog/${filtered[0].slug}`}
                  className="group mt-10 block overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all hover:shadow-lg"
                >
                  <div className="grid md:grid-cols-2">
                    <BlogThumbnail title={filtered[0].title} category={filtered[0].category} />
                    <div className="flex flex-col justify-center p-6 md:p-10">
                      <p className="text-xs font-medium uppercase tracking-wider text-primary-600">
                        {filtered[0].category}
                      </p>
                      <h2 className="mt-3 text-2xl font-bold text-text-primary group-hover:text-primary-700 transition-colors sm:text-3xl">
                        {filtered[0].title}
                      </h2>
                      <p className="mt-4 text-sm leading-relaxed text-text-muted">
                        {filtered[0].excerpt}
                      </p>
                      <div className="mt-6 flex items-center gap-4 text-xs text-text-muted">
                        <span>
                          {new Date(filtered[0].date).toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </span>
                        <span>{filtered[0].readingTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedBlock>
            )}

            {/* Rest of posts */}
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {(activeCategory === 'All' ? filtered.slice(1) : filtered).map((post, i) => (
                <AnimatedBlock key={post.slug} delay={i * 80}>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:-translate-y-1 hover:shadow-lg"
                  >
                    <BlogThumbnail title={post.title} category={post.category} />
                    <div className="flex flex-1 flex-col p-5">
                      <p className="text-xs font-medium uppercase tracking-wider text-primary-600">
                        {post.category}
                      </p>
                      <h2 className="mt-2 text-lg font-bold text-text-primary group-hover:text-primary-700 transition-colors leading-snug">
                        {post.title}
                      </h2>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="mt-4 flex items-center justify-between text-xs text-text-muted">
                        <span>
                          {new Date(post.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </span>
                        <span>{post.readingTime}</span>
                      </div>
                    </div>
                  </Link>
                </AnimatedBlock>
              ))}
            </div>
          </>
        )}
      </Section>
    </>
  )
}
