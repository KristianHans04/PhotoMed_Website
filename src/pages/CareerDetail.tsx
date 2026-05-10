import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Section, AnimatedBlock } from '@/components/ui/Section'
import { MapPin, Users, Briefcase, ArrowLeft } from 'lucide-react'

interface Career {
  slug: string
  title: string
  positions: number
  type: string
  location: string
  description: string
  responsibilities: string[]
  requirements: string[]
  preferredQualifications: string[]
  eligibleCourses: string[]
  benefits: string[]
}

export default function CareerDetail() {
  const { slug } = useParams()
  const [careers, setCareers] = useState<Career[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/content/careers.json')
      .then((res) => res.json() as Promise<Career[]>)
      .then((data) => setCareers(data))
      .finally(() => setLoading(false))
  }, [])

  const career = useMemo(() => careers.find((c) => c.slug === slug), [careers, slug])

  if (loading) {
    return (
      <Section>
        <p className="text-center text-text-muted">Loading position details...</p>
      </Section>
    )
  }

  if (!career) {
    return (
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold text-text-primary">Position not found</h1>
          <Link to="/careers" className="mt-4 inline-block text-primary-700 hover:underline">
            Back to careers
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
            to="/careers"
            className="inline-flex items-center gap-2 text-sm text-primary-300 transition-colors hover:text-white"
          >
            <ArrowLeft size={16} />
            All positions
          </Link>
          <h1 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            {career.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-primary-200/80">
            <span className="flex items-center gap-1.5">
              <MapPin size={16} />
              {career.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Briefcase size={16} />
              {career.type}
            </span>
            <span className="flex items-center gap-1.5">
              <Users size={16} />
              {career.positions} {career.positions === 1 ? 'position' : 'positions'}
            </span>
          </div>
          <p className="mt-6 text-lg text-primary-100/90 leading-relaxed">
            {career.description}
          </p>
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-10">
              <AnimatedBlock>
                <div>
                  <h2 className="text-xl font-bold text-text-primary">Responsibilities</h2>
                  <ul className="mt-4 space-y-3">
                    {career.responsibilities.map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-text-muted leading-relaxed">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedBlock>

              <AnimatedBlock delay={100}>
                <div>
                  <h2 className="text-xl font-bold text-text-primary">Requirements</h2>
                  <ul className="mt-4 space-y-3">
                    {career.requirements.map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-text-muted leading-relaxed">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedBlock>

              <AnimatedBlock delay={200}>
                <div>
                  <h2 className="text-xl font-bold text-text-primary">Preferred qualifications</h2>
                  <ul className="mt-4 space-y-3">
                    {career.preferredQualifications.map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-text-muted leading-relaxed">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-300" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedBlock>

              <AnimatedBlock delay={300}>
                <div>
                  <h2 className="text-xl font-bold text-text-primary">Eligible courses</h2>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {career.eligibleCourses.map((course) => (
                      <span
                        key={course}
                        className="rounded-lg bg-surface-dim px-3 py-1.5 text-xs font-medium text-text-muted"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedBlock>
            </div>

            <div className="lg:col-span-1">
              <AnimatedBlock delay={100}>
                <div className="sticky top-24 space-y-6">
                  <div className="rounded-xl border border-primary-100 bg-primary-50/50 p-6">
                    <h3 className="text-lg font-bold text-text-primary">What you will gain</h3>
                    <ul className="mt-4 space-y-3">
                      {career.benefits.map((item) => (
                        <li key={item} className="flex gap-3 text-sm text-text-muted leading-relaxed">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-xl border border-gray-200 bg-white p-6">
                    <h3 className="text-lg font-bold text-text-primary">How to apply</h3>
                    <p className="mt-3 text-sm text-text-muted leading-relaxed">
                      Send the following to{' '}
                      <a href="mailto:recruitment@photomed.app" className="font-semibold text-primary-700 hover:underline">
                        recruitment@photomed.app
                      </a>:
                    </p>
                    <ul className="mt-4 space-y-2">
                      {[
                        'Your CV',
                        'Course and year of study',
                        'Institution name',
                        'Role being applied for',
                        'Short paragraph explaining why you are interested',
                        'Any sample of previous work, if available',
                      ].map((item) => (
                        <li key={item} className="flex gap-3 text-sm text-text-muted">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-300" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedBlock>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
