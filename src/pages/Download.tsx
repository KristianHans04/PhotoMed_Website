import { useState, useEffect } from 'react'
import { Section, AnimatedBlock } from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import { Download as DownloadIcon, Smartphone, RefreshCw, CheckCircle2 } from 'lucide-react'

interface ReleaseInfo {
  tag_name: string
  published_at: string
  assets: { name: string; browser_download_url: string; size: number }[]
}

export default function Download() {
  const [release, setRelease] = useState<ReleaseInfo | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://api.github.com/repos/KristianHans04/PhotoMed/releases/latest')
      .then((res) => {
        if (!res.ok) throw new Error('No releases found')
        return res.json()
      })
      .then((data) => setRelease(data))
      .catch(() => setRelease(null))
      .finally(() => setLoading(false))
  }, [])

  const apkAsset = release?.assets.find((a) => a.name.endsWith('.apk'))

  return (
    <>
      {/* Hero with dark bg and phone mockup */}
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
                  Download the Android app directly. No app store required. The app auto-updates
                  when new versions are released, ensuring you always have the latest plant
                  database and AI capabilities.
                </p>

                <div className="mt-8 space-y-4">
                  {loading ? (
                    <div className="flex items-center gap-3 text-primary-300">
                      <RefreshCw size={18} className="animate-spin" />
                      Checking for latest version...
                    </div>
                  ) : apkAsset ? (
                    <div>
                      <Button
                        href={apkAsset.browser_download_url}
                        external
                        size="lg"
                        className="bg-white text-primary-900 hover:bg-primary-50"
                      >
                        <DownloadIcon size={18} />
                        Download APK ({(apkAsset.size / 1024 / 1024).toFixed(1)} MB)
                      </Button>
                      <p className="mt-3 text-sm text-primary-300/70">
                        Version {release?.tag_name} — Released{' '}
                        {new Date(release?.published_at || '').toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                    </div>
                  ) : (
                    <div>
                      <Button
                        href="https://github.com/KristianHans04/PhotoMed/releases"
                        external
                        size="lg"
                        className="bg-white text-primary-900 hover:bg-primary-50"
                      >
                        <DownloadIcon size={18} />
                        View Releases on GitHub
                      </Button>
                      <p className="mt-3 text-sm text-primary-300/70">
                        The first public release is coming soon. Star the repository to be notified.
                      </p>
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

      {/* Installation Guide - horizontal steps */}
      <Section>
        <AnimatedBlock>
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary-700">
              Quick Setup
            </span>
            <h2 className="mt-3 text-3xl font-bold text-text-primary">
              Installation Guide
            </h2>
          </div>
        </AnimatedBlock>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              step: '1',
              title: 'Download the APK',
              description:
                'Tap the download button above. Your browser may warn about downloading APK files — this is normal for apps distributed outside the Play Store.',
            },
            {
              step: '2',
              title: 'Allow Installation',
              description:
                'Open the downloaded file. If prompted, go to Settings and enable "Install unknown apps" for your browser. This is a standard Android setting for sideloading.',
            },
            {
              step: '3',
              title: 'Launch PhotoMed',
              description:
                'Once installed, open the app and create your account. The app will notify you when updates are available and can install them automatically.',
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

      {/* Features + auto-update section */}
      <section className="overflow-hidden">
        <div className="grid lg:grid-cols-2">
          <div className="relative">
            <img
              src="/images/vegetation-dense.webp"
              alt="Dense tropical vegetation representing the plant database"
              className="h-full min-h-[300px] w-full object-cover lg:min-h-[450px]"
              loading="lazy"
            />
          </div>
          <div className="flex items-center bg-surface-dim p-8 md:p-12 lg:p-16">
            <AnimatedBlock>
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-primary-700">
                  Always Up to Date
                </span>
                <h2 className="mt-3 text-3xl font-bold text-text-primary sm:text-4xl">
                  Auto-Update Built In
                </h2>
                <p className="mt-4 text-text-muted leading-relaxed">
                  PhotoMed checks for new versions automatically. When an update is available,
                  you will receive a notification and can install it with a single tap. No manual
                  re-downloading required.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    'Automatic version checking',
                    'One-tap updates',
                    'Plant data persists across updates',
                    'Chat history and maps preserved',
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
