interface Env {
  APK_DOWNLOAD_URL?: string
  APK_VERSION?: string
  APK_UPDATED_AT?: string
  APK_SIZE_BYTES?: string
}

interface GitHubRelease {
  tag_name: string
  published_at: string
  assets: Array<{
    name: string
    size: number
    browser_download_url: string
  }>
}

async function fetchLatestRelease(): Promise<{
  url: string
  version: string
  updatedAt: string
  sizeBytes: number
} | null> {
  try {
    const res = await fetch(
      'https://api.github.com/repos/KristianHans04/PhotoMed/releases/latest',
      {
        headers: {
          Accept: 'application/vnd.github+json',
          'User-Agent': 'PhotoMed-Website/1.0',
        },
      },
    )
    if (!res.ok) return null
    const release = (await res.json()) as GitHubRelease
    const apk = release.assets.find(
      (a) => a.name.endsWith('.apk') || a.name.includes('app-release'),
    )
    if (!apk) return null
    return {
      url: apk.browser_download_url,
      version: release.tag_name,
      updatedAt: release.published_at,
      sizeBytes: apk.size,
    }
  } catch {
    return null
  }
}

export const onRequestGet: PagesFunction<Env> = async ({ request, env }) => {
  const url = new URL(request.url)
  const isMetaRequest = url.searchParams.get('meta') === '1'

  const ghRelease = await fetchLatestRelease()

  const downloadUrl =
    ghRelease?.url ||
    env.APK_DOWNLOAD_URL?.trim() ||
    ''

  const metaResponse = {
    available: Boolean(downloadUrl),
    version: ghRelease?.version || env.APK_VERSION || null,
    updatedAt: ghRelease?.updatedAt || env.APK_UPDATED_AT || null,
    sizeBytes: ghRelease?.sizeBytes || (env.APK_SIZE_BYTES ? Number.parseInt(env.APK_SIZE_BYTES, 10) : null),
    source: ghRelease ? 'github_releases' : (env.APK_DOWNLOAD_URL ? 'env_config' : 'unavailable'),
  }

  if (isMetaRequest) {
    return new Response(JSON.stringify(metaResponse), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300',
      },
    })
  }

  if (!downloadUrl) {
    return new Response(
      JSON.stringify({ error: 'No APK release available yet. Check back soon.' }),
      {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store',
        },
      },
    )
  }

  let parsedUrl: URL
  try {
    parsedUrl = new URL(downloadUrl, url.origin)
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid APK download URL configuration.' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store',
      },
    })
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: parsedUrl.toString(),
      'Cache-Control': 'no-store',
    },
  })
}
