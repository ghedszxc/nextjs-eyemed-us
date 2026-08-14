import { Adapter } from '@/coremedia-integration/adapters/Adapter'
import { Nullable } from '@/models/Nullable.interface'
import { TBlogCardsProps, TCardProps } from '../types'
import { getAdapterBlogUrl, getAkamayUrl, getFormattedPublishedDate } from '@/lib/utilities'

export class BlogCardsAdapter extends Adapter<TBlogCardsProps, Nullable<TBlogCardsProps>> {
  adapt: (source: any) => Nullable<TBlogCardsProps> = source => {
    const data = source?.result
    if (!data) return null

    const { numFound, pageNum } = source

    const cards: TCardProps[] = data
      .map(blog => {
        const settings = blog?.articleColorSettings?.otherproperties
        const teaserText = blog?.teaserText?.text?.replace(/<[^>]*>/g, '')

        return {
          title: blog?.title || '',
          description: teaserText || '',
          date: settings?.hideDate ? '' : getFormattedPublishedDate(blog?.extDisplayedDate || ''),
          category: blog?.subjectTaxonomy?.[1]?.externalReference || '',
          imageSrc: getAkamayUrl(blog?.pictures?.[0]?.uriTemplate)
            .replace('{cropName}', 'landscape_ratio10x5')
            .replace('{width}', '1236'), // TODO: refactor image cropping
          altText: blog?.pictures?.[0]?.title || '',
          link: getAdapterBlogUrl(blog),
        }
      })
      .filter(Boolean)

    return {
      theme: 'grape',
      cards: cards || [],
      articleCount: numFound ?? 0,
      currentPage: pageNum ?? 1,
      hasSidebar: !!source?.hasSidebar,
    }
  }

  adaptReverse: (source: Nullable<any>) => any = source => {
    return source
  }
}
