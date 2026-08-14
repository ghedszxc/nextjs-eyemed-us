import { locales } from '../../middleware'
import { generateSitemap } from '@/lib/sitemap'

export async function GET() {
  try {
    const sitemap = generateSitemap(null, [], locales)

    return new Response(sitemap, {
      status: 200,
      headers: { 'content-type': 'text/xml' },
    })
  } catch (err) {
    return new Response(JSON.stringify(err, null, 4), {
      status: 500,
    })
  }
}
