import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Section } from '@/components/ui/Section'

interface ContentBlock {
  type: 'paragraph' | 'heading' | 'quote' | 'statistic'
  text?: string
  attribution?: string
  value?: string
  label?: string
  source?: string
}

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  author: string
  date: string
  readingTime: string
  category: string
  content: (string | ContentBlock)[]
}

function isContentBlock(item: string | ContentBlock): item is ContentBlock {
  return typeof item === 'object' && 'type' in item
}

function renderContentBlock(block: ContentBlock, index: number) {
  switch (block.type) {
    case 'heading':
      return (
        <h2 key={index} className="mt-10 mb-4 text-2xl font-bold text-text-primary">
          {block.text}
        </h2>
      )
    case 'quote':
      return (
        <blockquote
          key={index}
          className="my-8 border-l-4 border-primary-500 bg-primary-50/50 py-4 pl-6 pr-4"
        >
          <p className="text-base leading-relaxed text-text-secondary italic">
            "{block.text}"
          </p>
          {block.attribution && (
            <cite className="mt-3 block text-sm font-medium text-text-muted not-italic">
              -- {block.attribution}
            </cite>
          )}
        </blockquote>
      )
    case 'statistic':
      return (
        <div
          key={index}
          className="my-8 rounded-xl border border-primary-100 bg-surface-dim p-6 text-center"
        >
          <p className="text-4xl font-black text-primary-700">{block.value}</p>
          <p className="mt-2 text-sm text-text-muted">{block.label}</p>
          {block.source && (
            <p className="mt-1 text-xs text-text-muted/70">Source: {block.source}</p>
          )}
        </div>
      )
    case 'paragraph':
    default:
      return (
        <p key={index} className="leading-relaxed text-text-muted">
          {block.text}
        </p>
      )
  }
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
    return (
      <Section>
        <p className="text-center text-text-muted">Loading article...</p>
      </Section>
    )
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
      <section className="bg-primary-950 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-primary-300 transition-colors hover:text-white"
          >
            Back to newsroom
          </Link>
          <p className="mt-6 text-xs font-medium uppercase tracking-wider text-primary-400">
            {post.category}
          </p>
          <h1 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-sm text-primary-200/80">
            {new Date(post.date).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}{' '}
            · {post.readingTime} · {post.author}
          </p>
        </div>
      </section>

      <Section>
        <article className="mx-auto max-w-3xl">
          <p className="text-lg leading-relaxed text-text-secondary">{post.excerpt}</p>
          <hr className="my-8 border-primary-100" />
          <div className="space-y-6">
            {post.content.map((item, index) => {
              if (isContentBlock(item)) {
                return renderContentBlock(item, index)
              }
              return (
                <p key={index} className="leading-relaxed text-text-muted">
                  {item}
                </p>
              )
            })}
          </div>
          <hr className="my-10 border-primary-100" />
          <Link
            to="/blog"
            className="inline-block text-sm font-semibold text-primary-700 hover:underline"
          >
            Back to newsroom
          </Link>
        </article>
      </Section>
    </>
  )
}
