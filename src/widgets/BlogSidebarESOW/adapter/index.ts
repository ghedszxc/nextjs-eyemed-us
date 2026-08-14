import { Adapter } from '@/coremedia-integration/adapters/Adapter'
import { Nullable } from '@/models/Nullable.interface'
import { TBlogSideBarFeatureEsow } from '../types'
import { getAkamayUrl, getAdapterCTA } from '@/lib/utilities'

export class BlogSidebarFeaturedEsowAdapter extends Adapter<
  TBlogSideBarFeatureEsow,
  Nullable<TBlogSideBarFeatureEsow>
> {
  adapt: (source: any) => Nullable<TBlogSideBarFeatureEsow> = source => {
    if (!source) return null

    // console.log(source)

    const headerImage = getAkamayUrl(source?.picture?.data?.uri)
    const items = source?.items?.map(item => {
      return {
        title: item?.teaserTitle,
        cta: getAdapterCTA(item?.teaserTargets)?.[0],
        image: getAkamayUrl(
          item?.media?.[0]?.uriTemplate
            ?.replace('{cropName}', 'blog_thumb')
            ?.replace('{width}', '180')
        ),
      }
    })

    return {
      theme: 'grape',
      headerImage,
      items,
    }
  }

  adaptReverse: (source: Nullable<any>) => any = source => {
    return source
  }
}
