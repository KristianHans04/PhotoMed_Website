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
              Feeling unwell?
              <br />
              <span className="text-primary-300">The remedy might be growing next to you.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-primary-100/90 sm:text-xl">
              PhotoMed uses AI to match your symptoms to medicinal plants near
              your location, shows you exactly where to find them, and tells you
              how to prepare the remedy. Complementary to modern medicine,
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

            <div className="mt-14 flex items-center gap-8 text-sm text-primary-200/70">
              <div>
                <span className="block text-2xl font-bold text-white">57%</span>
                of Africans lack access to essential medicines (WHO)
              </div>
              <div className="h-10 w-px bg-primary-400/30" />
              <div>
                <span className="block text-2xl font-bold text-white">12+ hrs</span>
                average wait time in many public hospitals
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
