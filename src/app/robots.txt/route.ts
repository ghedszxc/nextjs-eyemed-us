import { NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
  const url = new URL(req.url)

  // Allow crawler only for live site
  const domain: any = process.env.NEXT_PUBLIC_DOMAIN
  const shouldCrawl = domain ? !['preview', 'uat'].some(env => domain.includes(env)) : false

  const robots = `User-agent: *
Disallow: ${shouldCrawl ? '' : '/'}

Sitemap: ${domain ?? `${url.origin}/`}sitemap.xml`

  return new Response(robots, {
    status: 200,
    headers: { 'content-type': 'text/plain' },
  })
}
