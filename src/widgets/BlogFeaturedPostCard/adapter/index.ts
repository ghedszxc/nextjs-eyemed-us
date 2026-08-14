import { Adapter } from '@/coremedia-integration/adapters/Adapter'
import { Nullable } from '@/models/Nullable.interface'
import { IBlogFeaturedPostCard } from '../types'
import {
  getAdapterCTA,
  getFormattedPublishedDate,
  getComponentImageCropping,
} from '@/lib/utilities'

export class BlogFeaturedPostCardAdapter extends Adapter<
  IBlogFeaturedPostCard,
  Nullable<IBlogFeaturedPostCard>
> {
  adapt: (source: any) => Nullable<IBlogFeaturedPostCard> = source => {
    if (!source) return null

    const settings = source?.articleColorSettings?.otherproperties
    const url = [getAdapterCTA(source?.teaserTargets)?.[0]?.url || '', `${source?.id}`].join('-')
    const teaserText = source?.teaserText?.text?.replace(/<[^>]*>/g, '')

    return {
      theme: 'grape',
      date: settings?.hideDate ? '' : getFormattedPublishedDate(source?.extDisplayedDate || ''),
      title: source?.title || '',
      text: teaserText || '',
      subtext: source?.subjectTaxonomy?.[1]?.externalReference || '',
      picture: getComponentImageCropping('BlogFeaturedPostCard', source?.pictures),
      url: url || '',
    }
  }

  adaptReverse: (source: Nullable<any>) => any = source => {
    return source
  }
}
