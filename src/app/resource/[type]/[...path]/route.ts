import { NextResponse } from 'next/server'
import { getAkamayUrl, transformAkamaiToCmsUrl } from '@/lib/utilities'

export async function GET(req: Request) {
  try {
    const url = new URL(req.url)
    const parts = url.pathname.split('/').filter(Boolean)
    const [, type] = parts
    const download = url.searchParams.get('download')
    const isDownload = download === '' || download === 'true' || download === '1'

    let akamayPath = ''

    if (type === 'image' && parts.length === 7) {
      const [, , id, crop, width, folder, file] = parts
      akamayPath = `/caas/v1/media/${id}/data/${folder}/${crop}/${width}/${file}`
    } else if (type === 'blob' && parts.length === 5) {
      const [, , id, folder, file] = parts
      akamayPath = `/caas/v1/media/${id}/data/${folder}/${file}`
    } else {
      throw new Error('Invalid resource path')
    }

    const remoteUrl = transformAkamaiToCmsUrl(getAkamayUrl(akamayPath))
    const resp = await fetch(remoteUrl)

    if (!resp.ok) {
      throw new Error('Resource not found')
    }

    const contentType = resp.headers.get('Content-Type') || 'application/octet-stream'

    return new NextResponse(resp.body, {
      headers: {
        'Content-Type': contentType,
        'Content-Disposition': isDownload ? 'attachment' : 'inline',
        'Cache-Control': 'public, max-age=3600',
      },
    })
  } catch (err) {
    return new NextResponse('', { status: 404 })
  }
}
