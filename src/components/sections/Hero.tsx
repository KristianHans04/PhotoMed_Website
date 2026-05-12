export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/community-1.webp"
          alt="Community member using PhotoMed to find nearby medicinal plants"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/90 via-primary-950/75 to-primary-950/40" />
      </div>

      <div className="relative flex min-h-[90vh] items-center">
        <div className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              PhotoMed finds the medicinal plants nearest to you that can treat your symptoms.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-primary-100/90 sm:text-xl">
              PhotoMed uses AI to match your symptoms to medicinal plants near
              your location — identifying which ones help, where to find them,
              and how to prepare them correctly. Complementary to modern medicine,
              built for the communities that need it most.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="/api/apk-latest"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-semibold text-primary-900 transition-all hover:bg-primary-50 hover:shadow-lg"
              >
                Get the App
              </a>
              <a
                href="/donate"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-8 py-4 text-base font-semibold text-white transition-all hover:border-white/60 hover:bg-white/10"
              >
                Support the Mission
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
