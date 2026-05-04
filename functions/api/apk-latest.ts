interface Env {
  APK_DOWNLOAD_URL?: string
  APK_VERSION?: string
  APK_UPDATED_AT?: string
  APK_SIZE_BYTES?: string
}

export const onRequestGet: PagesFunction<Env> = async ({ request, env }) => {
  const url = new URL(request.url)
  const downloadUrl = env.APK_DOWNLOAD_URL?.trim() || ''
  const isMetaRequest = url.searchParams.get('meta') === '1'

  const metaResponse = {
    available: Boolean(downloadUrl),
    version: env.APK_VERSION || null,
    updatedAt: env.APK_UPDATED_AT || null,
    sizeBytes: env.APK_SIZE_BYTES ? Number.parseInt(env.APK_SIZE_BYTES, 10) : null,
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

  if (!downloadUrl) {
    return new Response(JSON.stringify({ error: 'APK download is not configured yet.' }), {
      status: 503,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store',
      },
    })
  }

  let parsedUrl: URL
  try {
    parsedUrl = new URL(downloadUrl)
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
