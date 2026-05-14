import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatedBlock, Section } from '@/components/ui/Section'
import { MapPin, Users, Briefcase } from 'lucide-react'

interface CareerSummary {
  slug: string
  title: string
  positions: number
  type: string
  location: string
  description: string
}

export default function Careers() {
  const [roles, setRoles] = useState<CareerSummary[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/content/careers.json')
      .then((res) => res.json() as Promise<CareerSummary[]>)
      .then((data) => setRoles(data))
      .finally(() => setLoading(false))
  }, [])

  return (
    <>
      {/* Careers hero — accent strip left-aligned */}
      <section className="border-b border-primary-100 bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedBlock>
            <div className="grid items-end gap-8 lg:grid-cols-2">
              <div>
                <h1 className="mt-2 text-4xl font-extrabold text-text-primary sm:text-5xl lg:text-6xl">
                  Join PhotoMed
                </h1>
                <p className="mt-4 max-w-lg text-lg text-text-muted">
                  We are a small team with a large mission. If you want real startup
                  experience at the intersection of AI, healthcare, and social impact,
                  we want to hear from you.
                </p>
              </div>
              <div className="hidden lg:block">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src="/images/community-2.webp"
                    alt="Team collaboration"
                    className="aspect-[16/9] w-full object-cover"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </AnimatedBlock>
        </div>
      </section>

      <Section>

        {loading ? (
          <div className="mt-12 text-center text-text-muted">Loading positions...</div>
        ) : (
          <div className="mx-auto mt-12 max-w-3xl space-y-4">
            {roles.map((role, i) => (
              <AnimatedBlock key={role.slug} delay={i * 100}>
                <Link
                  to={`/careers/${role.slug}`}
                  className="group block rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-primary-300 hover:shadow-md"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-text-primary group-hover:text-primary-700 transition-colors">
                        {role.title}
                      </h3>
                      <p className="mt-2 text-sm text-text-muted leading-relaxed">
                        {role.description}
                      </p>
                      <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-text-muted">
                        <span className="flex items-center gap-1.5">
                          <MapPin size={14} />
                          {role.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Briefcase size={14} />
                          {role.type}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Users size={14} />
                          {role.positions} {role.positions === 1 ? 'position' : 'positions'}
                        </span>
                      </div>
                    </div>
                    <div className="shrink-0">
                      <span className="inline-flex items-center rounded-lg bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-700 transition-colors group-hover:bg-primary-100">
                        View details
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedBlock>
            ))}
          </div>
        )}

        <AnimatedBlock delay={300}>
          <div className="mx-auto mt-16 max-w-3xl rounded-xl border border-primary-100 bg-primary-50/50 p-6 text-center">
            <h3 className="text-lg font-bold text-text-primary">
              Do not see the right role?
            </h3>
            <p className="mt-2 text-sm text-text-muted">
              We are always interested in hearing from talented people. Send your CV
              and a note about what you would bring to PhotoMed.
            </p>
            <a
              href="mailto:recruitment@photomed.app"
              className="mt-4 inline-flex items-center rounded-lg bg-primary-700 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-800"
            >
              recruitment@photomed.app
            </a>
          </div>
        </AnimatedBlock>
      </Section>
    </>
  )
}
