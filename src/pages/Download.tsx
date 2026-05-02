import { useState, useEffect } from 'react'
import { Section, AnimatedBlock } from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import { Download as DownloadIcon, Smartphone, RefreshCw } from 'lucide-react'

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
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <AnimatedBlock>
              <div>
                <h1 className="text-4xl font-extrabold text-text-primary sm:text-5xl">
                  Get PhotoMed on your device
                </h1>
                <p className="mt-6 text-lg text-text-muted">
                  Download the Android app directly. No app store required. The app auto-updates
                  when new versions are released, ensuring you always have the latest plant
                  database and AI capabilities.
                </p>

                <div className="mt-8 space-y-4">
                  {loading ? (
                    <div className="flex items-center gap-3 text-text-muted">
                      <RefreshCw size={18} className="animate-spin" />
                      Checking for latest version...
                    </div>
                  ) : apkAsset ? (
                    <div>
                      <Button
                        href={apkAsset.browser_download_url}
                        external
                        size="lg"
                      >
                        <DownloadIcon size={18} />
                        Download APK ({(apkAsset.size / 1024 / 1024).toFixed(1)} MB)
                      </Button>
                      <p className="mt-3 text-sm text-text-muted">
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
                      >
                        <DownloadIcon size={18} />
                        View Releases on GitHub
                      </Button>
                      <p className="mt-3 text-sm text-text-muted">
                        The first public release is coming soon. Star the repository to be notified.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </AnimatedBlock>

            <AnimatedBlock delay={200}>
              <div className="relative mx-auto max-w-sm">
                <div className="overflow-hidden rounded-[2.5rem] border-8 border-primary-900 bg-primary-900 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1596046120220-e8f0b87e84de?w=400&q=80"
                    alt="PhotoMed app interface showing plant identification"
                    className="aspect-[9/16] w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 rounded-xl bg-white p-3 shadow-lg">
                  <div className="flex items-center gap-2">
                    <Smartphone size={16} className="text-primary-700" />
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
          <h2 className="text-center text-3xl font-bold text-text-primary">
            Installation Guide
          </h2>
        </AnimatedBlock>

        <div className="mx-auto mt-12 max-w-2xl space-y-6">
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
              <div className="flex gap-4 rounded-xl border border-primary-100 bg-surface-dim p-6">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-700 text-sm font-bold text-white">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-text-primary">{item.title}</h3>
                  <p className="mt-1 text-sm text-text-muted">{item.description}</p>
                </div>
              </div>
            </AnimatedBlock>
          ))}
        </div>
      </Section>

      <Section className="bg-surface-dim">
        <AnimatedBlock>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-text-primary">Auto-Update Built In</h2>
            <p className="mt-4 text-text-muted">
              PhotoMed checks for new versions automatically. When an update is available,
              you will receive a notification and can install it with a single tap. No manual
              re-downloading required. Your plant identifications, chat history, and map data
              persist across updates.
            </p>
          </div>
        </AnimatedBlock>
      </Section>
    </>
  )
}
