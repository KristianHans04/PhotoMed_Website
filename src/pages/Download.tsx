import { useState, useEffect } from 'react'
import Button from '@/components/ui/Button'
import PhoneFrame from '@/components/ui/PhoneFrame'
import { Download as DownloadIcon, RefreshCw } from 'lucide-react'

interface ApkMeta {
  version: string | null
  updatedAt: string | null
  sizeBytes: number | null
  available: boolean
  fallback?: boolean
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
    <section className="relative min-h-[70vh] overflow-hidden bg-primary-950 py-24 md:py-32">
      <div className="absolute inset-0 opacity-10">
        <img src="/images/hero-bg.webp" alt="" className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-primary-950/80 to-primary-950" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
              Download PhotoMed
            </h1>
            <p className="mt-6 text-lg text-primary-200/80">
              Get the latest Android APK directly.
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
                    </p>
                  )}
                  {meta?.fallback && (
                    <p className="mt-3 text-sm text-primary-300/70">
                      Download is currently using the packaged APK fallback.
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-center">
            <PhoneFrame
              src="/images/app-screen-plantid.webp"
              alt="PhotoMed app interface showing plant identification results"
              size="lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
