import { Adapter } from '@/coremedia-integration/adapters/Adapter'
import { Nullable } from '@/models/Nullable.interface'
import { IBlogReadMore } from '../types'
import { getAdapterBlogUrl, getAdapterImage, getAkamayUrl } from '@/lib/utilities'

export class BlogReadMoreAdapter extends Adapter<IBlogReadMore, Nullable<IBlogReadMore>> {
  adapt: (source: any) => Nullable<IBlogReadMore> = source => {
    if (!source) return null
    let items = []

    if (source?.teasableItems) {
      // user defined articles
      items = source?.teasableItems?.map(item => ({
        text: item?.teaserTitle,
        url: getAdapterBlogUrl(item),
        fallbackImage: getAkamayUrl(getAdapterImage(item?.media)?.[0] || ''),
      }))
    } else {
      // category level articles
      items = source?.map(item => ({
        text: item?.title,
        url: getAdapterBlogUrl(item),
        fallbackImage: getAkamayUrl(getAdapterImage(item?.pictures)?.[0] || ''),
      }))
    }

    return {
      theme: 'leaf',
      title: 'READ MORE',
      items,
    }
  }

  adaptReverse: (source: Nullable<any>) => any = source => {
    return source
  }
}
