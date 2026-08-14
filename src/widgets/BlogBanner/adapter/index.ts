import { Adapter } from '@/coremedia-integration/adapters/Adapter'
import { Nullable } from '@/models/Nullable.interface'
import { TBlogBanner } from '../types'
import {
  getAdapterBlogUrl,
  getAdapterCTA,
  getAdapterImage,
  getAkamayUrl,
  getFormattedPublishedDate,
  getComponentImageCropping,
} from '@/lib/utilities'

export class BlogBannerAdapter extends Adapter<TBlogBanner, Nullable<TBlogBanner>> {
  adapt: (source: any) => Nullable<TBlogBanner> = source => {
    if (!source.length) return null
    const data = source[0]
    const socials = source?.[1]

    const settings = data?.articleColorSettings?.otherproperties
    const authorRaw = data?.authors?.[0]
    const author = {
      image: getAkamayUrl(authorRaw?.picture?.fullyQualifiedUrl),
      name: [authorRaw?.firstName, authorRaw?.lastName].filter(Boolean).join(' '),
      desc: authorRaw?.jobTitle || '',
    }
    const title = data?.teaserTitle || ''
    const image = getComponentImageCropping('BlogFeaturedPostCard', data?.pictures)?.desktopImg?.url // getAkamayUrl(getAdapterImage(data?.pictures)?.[0] || '')
    const categoryText = data?.subjectTaxonomy?.[1]?.externalReference?.toUpperCase?.() || ''
    const date = settings?.hideDate ? '' : getFormattedPublishedDate(data?.extDisplayedDate || '')

    const path = getAdapterBlogUrl(data)?.slice(1) || ''
    const href = new URL(`${process.env.NEXT_PUBLIC_DOMAIN}${path}`)

    // TODO: to complete dynamic mapping in CM
    const tempSocialAlt = [
      'facebook share icon',
      'twitter share icon',
      'linkedin share icon',
      'email share icon',
      'print icon',
    ]
    const socialLinks = socials?.items?.map((social, i) => {
      const url = getAdapterCTA(social?.teaserTargets)?.[0]?.url
      return {
        logo: getAkamayUrl(getAdapterImage(social?.pictures)?.[0] || ''),
        alt: tempSocialAlt[i],
        url: url && url !== '#' ? url + href : '#',
      }
    })

    return {
      theme: 'grape',
      title,
      image,
      categoryText,
      author,
      date,
      socialTitle: socials?.collectionTitle || '',
      externalLinks: socialLinks,
    }
  }

  adaptReverse: (source: Nullable<any>) => any = source => {
    return source
  }
}
