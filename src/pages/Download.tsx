import { useState, useEffect } from 'react'
import { Section, AnimatedBlock } from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import { Download as DownloadIcon, Smartphone, RefreshCw, CheckCircle2 } from 'lucide-react'

interface ApkMeta {
  version: string | null
  updatedAt: string | null
  sizeBytes: number | null
  available: boolean
}

export default function Download() {
  const [meta, setMeta] = useState<ApkMeta | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/apk-latest?meta=1')
      .then((res) => {
        if (!res.ok) throw new Error('APK metadata unavailable')
        return res.json() as Promise<ApkMeta>
      })
      .then((data) => setMeta(data))
      .catch(() => setMeta(null))
      .finally(() => setLoading(false))
  }, [])

  return (
    <>
      <section className="relative overflow-hidden bg-primary-950 py-24 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <img src="/images/hero-bg.webp" alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary-950/80 to-primary-950" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <AnimatedBlock>
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-primary-400">
                  Download
                </span>
                <h1 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
                  Get PhotoMed on your device
                </h1>
                <p className="mt-6 text-lg text-primary-200/80">
                  Download the latest Android APK directly.
                </p>

                <div className="mt-8 space-y-4">
                  {loading ? (
                    <div className="flex items-center gap-3 text-primary-300">
                      <RefreshCw size={18} className="animate-spin" />
                      Checking latest build...
                    </div>
                  ) : (
                    <div>
                      <Button
                        href="/api/apk-latest"
                        external
                        size="lg"
                        className="bg-white text-primary-900 hover:bg-primary-50"
                      >
                        <DownloadIcon size={18} />
                        Download Latest APK
                      </Button>
                      {meta?.available && (
                        <p className="mt-3 text-sm text-primary-300/70">
                          {meta.version ? `Version ${meta.version}` : 'Latest version'}
                          {meta.sizeBytes ? ` — ${(meta.sizeBytes / 1024 / 1024).toFixed(1)} MB` : ''}
                          {meta.updatedAt
                            ? ` — Updated ${new Date(meta.updatedAt).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                              })}`
                            : ''}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </AnimatedBlock>

            <AnimatedBlock delay={200}>
              <div className="relative mx-auto max-w-[220px]">
                <div className="overflow-hidden rounded-[1.8rem] border-[5px] border-gray-800 bg-gray-900 shadow-2xl shadow-black/40">
                  <img
                    src="/images/app-screen-plantid.webp"
                    alt="PhotoMed app interface showing plant identification results"
                    className="aspect-[9/19.5] w-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 rounded-lg bg-white px-3 py-2 shadow-lg">
                  <div className="flex items-center gap-2">
                    <Smartphone size={14} className="text-primary-700" />
                    <span className="text-xs font-medium text-text-primary">Android</span>
                  </div>
                </div>
              </div>
            </AnimatedBlock>
          </div>
        </div>
      </section>

      <Section>
        <AnimatedBlock>
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary-700">
              Quick Setup
            </span>
            <h2 className="mt-3 text-3xl font-bold text-text-primary">Installation Guide</h2>
          </div>
        </AnimatedBlock>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              step: '1',
              title: 'Download the APK',
              description: 'Tap the download button above to fetch the latest package.',
            },
            {
              step: '2',
              title: 'Allow Installation',
              description: 'If prompted, enable installation from your browser in Android settings.',
            },
            {
              step: '3',
              title: 'Launch PhotoMed',
              description: 'Open the app and start exploring medicinal plant knowledge.',
            },
          ].map((item, i) => (
            <AnimatedBlock key={item.step} delay={i * 100}>
              <div className="rounded-2xl border border-primary-100 bg-white p-8 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-700 text-sm font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mt-5 text-lg font-bold text-text-primary">{item.title}</h3>
                <p className="mt-2 text-sm text-text-muted leading-relaxed">{item.description}</p>
              </div>
            </AnimatedBlock>
          ))}
        </div>
      </Section>

      <section className="overflow-hidden">
        <div className="grid lg:grid-cols-2">
          <div className="relative">
            <img
              src="/images/vegetation-dense.webp"
              alt="Dense tropical vegetation"
              className="h-full min-h-[300px] w-full object-cover lg:min-h-[450px]"
              loading="lazy"
            />
          </div>
          <div className="flex items-center bg-surface-dim p-8 md:p-12 lg:p-16">
            <AnimatedBlock>
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-primary-700">
                  Reliable Access
                </span>
                <h2 className="mt-3 text-3xl font-bold text-text-primary sm:text-4xl">
                  Keep the app current
                </h2>
                <p className="mt-4 text-text-muted leading-relaxed">
                  This download always points to the latest packaged APK.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    'Direct latest-build download',
                    'No repository browsing required',
                    'Simple installation flow',
                    'Built for Android users first',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle2 size={16} className="shrink-0 text-primary-700" />
                      <span className="text-sm text-text-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedBlock>
          </div>
        </div>
      </section>
    </>
  )
}
