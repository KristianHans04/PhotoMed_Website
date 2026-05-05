import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Section } from '@/components/ui/Section'

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  author: string
  date: string
  readingTime: string
  category: string
  coverImage: string
  content: string[]
}

export default function BlogPostPage() {
  const { slug } = useParams()
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/content/blog-posts.json')
      .then((res) => res.json() as Promise<BlogPost[]>)
      .then((data) => setPosts(data))
      .finally(() => setLoading(false))
  }, [])

  const post = useMemo(() => posts.find((item) => item.slug === slug), [posts, slug])

  if (loading) {
    return <Section><p className="text-center text-text-muted">Loading article...</p></Section>
  }

  if (!post) {
    return (
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold text-text-primary">Article not found</h1>
          <Link to="/blog" className="mt-4 inline-block text-primary-700 hover:underline">
            Back to blog
          </Link>
        </div>
      </Section>
    )
  }

  return (
    <>
      <section className="relative overflow-hidden bg-primary-950 py-24 md:py-32">
        <div className="absolute inset-0 opacity-20">
          <img src={post.coverImage} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary-950/70 to-primary-950" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-wider text-primary-400">{post.category}</p>
          <h1 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">{post.title}</h1>
          <p className="mt-5 text-sm text-primary-200/80">
            {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} · {post.readingTime} · {post.author}
          </p>
        </div>
      </section>

      <Section>
        <article className="mx-auto max-w-3xl">
          <p className="text-lg leading-relaxed text-text-secondary">{post.excerpt}</p>
          <div className="mt-8 space-y-6">
            {post.content.map((paragraph) => (
              <p key={paragraph} className="leading-relaxed text-text-muted">
                {paragraph}
              </p>
            ))}
          </div>
          <Link to="/blog" className="mt-10 inline-block text-sm font-semibold text-primary-700 hover:underline">
            Back to blog
          </Link>
        </article>
      </Section>
    </>
  )
}
