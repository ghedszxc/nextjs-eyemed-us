'use server'

import { cmsRepo } from '@/graphql/CMSRepo'
import {
  getAdapterBlogUrl,
  getAdapterCTA,
  getAdapterImage,
  getAkamayUrl,
  truncateText,
} from './utilities'
import { defaultLocale } from '@/middleware'
import { ICta } from '@/models/ICta'

/**
 * Add serverside actions here
 * example: form actions, etc.
 */
export async function getMetaData(lang: string, path?: string) {
  const cmsResp = await cmsRepo.getMetaData(`${lang}`, path || '')
  const data = cmsResp?.content?.pageByPath

  const hreflangs = data?.localizedVariants
    ?.map(variant => ({
      language: variant?.navigationPath?.[0]?.segment,
      path: variant?.navigationPath?.map(path => path?.segment)?.join('/'),
    }))
    ?.reduce((acc: any, item: any) => {
      acc[item?.language] =
        `${process.env.NEXT_PUBLIC_DOMAIN}${item.path !== '/' ? item.path + '/' : item.language}`
      return acc
    }, {})

  // Fetch meta data image by id
  const metaImageID = data?.settings?.MetaImg?.[0]?.replace(
    /Content\[coremedia:\/\/\/cap\/content\/|]/g,
    ''
  )

  let akamaiImageURL: string = ''
  if (metaImageID) {
    const metaImageResp = await cmsRepo.getFileLink(metaImageID)

    akamaiImageURL = metaImageResp?.content?.content?.data?.uri
      ? getAkamayUrl(metaImageResp?.content?.content?.data?.uri)
      : ''
  }

  const BANNER_TYPE = ['m01-card', 'm01-copyblock']
  if (BANNER_TYPE.includes(data?.localizedVariants?.[0]?.grid?.placements[0]?.viewtype)) {
    akamaiImageURL = getAkamayUrl(
      data?.localizedVariants?.[0]?.grid?.placements[0]?.items[0]?.media[0]?.data?.uri
    )
  }

  return {
    title: data?.htmlTitle,
    description: data?.htmlDescription,
    metaDataImage: akamaiImageURL || '',
    hreflang: hreflangs,
    noIndexNoFollow: !data?.hiddenInSitemap,
  }
}

export async function getBlogMetaData(id: string) {
  const cmsResp = await cmsRepo.getContentById(id)
  const data = cmsResp?.content?.content

  const htmlDescription = truncateText(data?.teaserText?.text?.replace(/<[^>]*>/g, '') || '', 150)
  const akamaiImageURL = getAkamayUrl(getAdapterImage(data?.pictures)?.[0] || '')

  const domain = process.env.NEXT_PUBLIC_DOMAIN
  const baseUrl = domain?.endsWith('/') ? domain.slice(0, -1) : domain
  const hreflangs = [
    {
      language: data?.navigationPath?.[0]?.segment || defaultLocale,
      path: getAdapterBlogUrl(data),
    },
  ].reduce((acc: any, item: any) => {
    acc[item?.language] = `${baseUrl}${item.path !== '/' ? item.path + '/' : item.language}`
    return acc
  }, {})

  return {
    title: data?.teaserTitle,
    description: htmlDescription,
    metaDataImage: akamaiImageURL,
    hreflang: hreflangs,
    noIndexNoFollow: true,
  }
}

const getCapContentCta = async (str: string) => {
  const prefix = 'coremedia:///cap/content/'
  if (!str.startsWith(prefix)) return null

  const id = str.replace(prefix, '').replace('/', '')
  const cmsContent = await cmsRepo.getContentById(id)
  const data = cmsContent?.content?.content || cmsContent

  if (data?.url) {
    return {
      url: data?.url || '#',
    } as ICta
  }

  const cta = getAdapterCTA(data?.teaserTargets)?.[0]
  if (!cta) return null

  // cta.label = data?.teaserTitle || ''

  // If viewtype is "Button style CTA", set ctaStyle to enable btn className
  if (
    data?.viewtype === 'Button style CTA' ||
    data?.viewtype?.toLowerCase().includes('button style')
  ) {
    cta.ctaStyle = 'btn'
  }

  if (
    data?.teaserTargets &&
    cta?.url &&
    cta.url.includes('/blog/') &&
    !cta.url.endsWith(`-${id}`)
  ) {
    cta.url = `${cta.url}-${id}`
  }

  return cta
}

const setUriTemplates = async (str: string = '') => {
  if (!str) return null

  const anchorTemplate = 'data-href='
  const anchorRegex = new RegExp(`${anchorTemplate}"(.+?)"`, 'g')
  const anchors =
    str.match(anchorRegex)?.map(match => {
      return match.replace(anchorTemplate, '').slice(1, -1)
    }) || []

  for (let n = 0; n < anchors.length; n++) {
    let rawHref = anchors[n]
    const cta = await getCapContentCta(rawHref)

    if (cta?.url) {
      str = str.replace(
        `${anchorTemplate}"${anchors[n]}"`,
        `href="${cta.url}"${cta?.ctaStyle ? ' className="btn"' : ''}`
      )
    }
    if (cta?.label) str = str.replace(/(<a[^>]*>)([^<]*)(<\/a>)/, `$1${cta.label}$3`)
  }

  return str
}

export async function normalizeCmsData(source: any): Promise<ICta | null> {
  const rows = source?.content?.pageByPath?.grid?.rows

  if (rows) {
    for (const row of rows) {
      const widget = row?.placements?.[0]
      const widgetName = widget?.viewtype
      const widgetValue = widget?.items

      if (widgetName === 'm16-rich-text') {
        const html = widgetValue?.[0]?.detailText?.text
        const parsed = await setUriTemplates(html)

        if (parsed && widgetValue?.[0]?.detailText) {
          widgetValue[0].detailText.text = parsed
        }
      }
    }
  }

  return source
}

export async function normalizeBlogContent(source: any): Promise<any> {
  if (!source?.content?.content) return source

  const content = source.content.content

  if (content?.detailText?.text) {
    const parsed = await setUriTemplates(content.detailText.text)
    if (parsed) {
      content.detailText.text = parsed
    }
  }

  const related = content?.related

  if (related && Array.isArray(related)) {
    for (const relatedItem of related) {
      const teasableItems = relatedItem?.teasableItems

      if (teasableItems && Array.isArray(teasableItems)) {
        for (const item of teasableItems) {
          const widgetName = item?.viewtype

          if (widgetName === 'm16blogmediaRight' || widgetName === 'm16blogmediaLeft') {
            const html = item?.teaserText?.text
            if (html) {
              const parsed = await setUriTemplates(html)

              if (parsed && item?.teaserText) {
                item.teaserText.text = parsed
              }
            }
          }
        }
      }
    }
  }

  return source
}
