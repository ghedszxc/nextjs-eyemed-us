import { locales } from '@/middleware'
import { NextRequest } from 'next/server'

export interface ICMSPath {
  id: string
  name: string
  locale: string
  root: {
    segment: string
  }
  modificationDate: string
  hiddenInSitemap: boolean
}

export interface IPath {
  path: string
  modificationDate: string
  isPriority: boolean
}

export interface IAdaptedPath {
  params: { slug: string; page: string[] }
  locale: string
  modificationDate: string
}

export function getLocale(request: NextRequest) {
  const locale = request.nextUrl.pathname.split('/').filter(Boolean)[0]
  return locales.find(l => l === locale)
}

export function generateSitemap(locale: string | null, paths: IPath[], cmsLocales: string[]) {
  if (locale) {
    return `
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${paths
          .filter(Boolean)
          .map(
            p => `
            <url>
              <loc>${p.path}</loc>
              <lastmod>${p.modificationDate?.replace(/Z\[GMT\]/, '')}+00:00</lastmod>
              <priority>${p.isPriority ? '1.0' : '0.8'}</priority>
            </url>
          `
          )
          .join('')}
      </urlset>
    `
  }

  return `
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${cmsLocales
        .map(
          l =>
            `<sitemap><loc>${process.env.NEXT_PUBLIC_DOMAIN}${l ? `${l}/` : ''}sitemap.xml</loc></sitemap>`
        )
        .join('')}
    </sitemapindex>
  `
}
