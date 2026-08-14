import { Adapter } from '@/coremedia-integration/adapters/Adapter'
import { Nullable } from '@/models/Nullable.interface'
import { IBlogFeaturedResources } from '../types'
import { getAdapterCTA } from '@/lib/utilities'

export class BlogFeaturedResourcesAdapter extends Adapter<
  IBlogFeaturedResources,
  Nullable<IBlogFeaturedResources>
> {
  adapt: (source: any) => Nullable<IBlogFeaturedResources> = source => {
    if (!source) return null

    const resources = source?.items?.map(item => {
      return {
        cta: getAdapterCTA(item?.teaserTargets)?.[0] || null,
        theme: 'leaf',
        hasDownload: true,
        textLimit: 17,
      }
    })

    return {
      title: source?.collectionTitle || '',
      resources,
    }
  }

  adaptReverse: (source: Nullable<any>) => any = source => {
    return source
  }
}
