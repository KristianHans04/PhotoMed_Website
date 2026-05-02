import { Section, AnimatedBlock } from '@/components/ui/Section'

const stats = [
  { value: '80%', label: 'of developing nations rely on traditional medicine (WHO)' },
  { value: '50,000+', label: 'plant species used medicinally worldwide' },
  { value: '4B', label: 'people lack access to essential health services' },
  { value: '25%', label: 'of modern drugs derived from rainforest plants' },
]

export default function Impact() {
  return (
    <Section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1920&q=80"
          alt=""
          className="h-full w-full object-cover opacity-5"
        />
      </div>

      <AnimatedBlock>
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-600">
            The Scale of the Problem
          </span>
          <h2 className="mt-3 text-3xl font-bold text-text-primary sm:text-4xl">
            Traditional medicine is not alternative.
            <br />
            For billions, it is the only option.
          </h2>
        </div>
      </AnimatedBlock>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <AnimatedBlock key={stat.label} delay={i * 100}>
            <div className="rounded-2xl border border-primary-100 bg-white p-6 text-center shadow-sm">
              <div className="text-4xl font-extrabold text-primary-700 lg:text-5xl">
                {stat.value}
              </div>
              <p className="mt-3 text-sm text-text-muted">{stat.label}</p>
            </div>
          </AnimatedBlock>
        ))}
      </div>

      <AnimatedBlock delay={500}>
        <div className="mt-16 rounded-2xl bg-primary-900 p-8 md:p-12">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold text-white md:text-3xl">
                We are not replacing modern healthcare.
              </h3>
              <p className="mt-4 text-primary-200">
                We are preserving and digitizing centuries of ethnobotanical knowledge so that
                communities without reliable hospital access can make informed decisions about
                the plants growing in their own environments. PhotoMed always recommends seeking
                professional medical help for serious or persistent conditions.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80"
                alt="Hands holding a young plant seedling in rich soil"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </AnimatedBlock>
    </Section>
  )
}
