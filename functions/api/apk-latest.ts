interface Env {
  APK_DOWNLOAD_URL?: string
  APK_VERSION?: string
  APK_UPDATED_AT?: string
  APK_SIZE_BYTES?: string
}

export const onRequestGet: PagesFunction<Env> = async ({ request, env }) => {
  const url = new URL(request.url)
  const configuredUrl = env.APK_DOWNLOAD_URL?.trim() || ''
  const fallbackRelativeUrl = '/downloads/photomed-latest.apk'
  const downloadUrl = configuredUrl || fallbackRelativeUrl
  const isMetaRequest = url.searchParams.get('meta') === '1'

  const metaResponse = {
    available: Boolean(downloadUrl),
    version: env.APK_VERSION || null,
    updatedAt: env.APK_UPDATED_AT || null,
    sizeBytes: env.APK_SIZE_BYTES ? Number.parseInt(env.APK_SIZE_BYTES, 10) : null,
    fallback: !configuredUrl,
  }

  if (isMetaRequest) {
    return new Response(JSON.stringify(metaResponse), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store',
      },
    })
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
