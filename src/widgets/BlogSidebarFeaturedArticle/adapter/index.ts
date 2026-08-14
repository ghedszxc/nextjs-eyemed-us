import { Adapter } from '@/coremedia-integration/adapters/Adapter'
import { Nullable } from '@/models/Nullable.interface'
import { TBlogSideBarFeatureArticle } from '../types'
import { getAkamayUrl, getComponentImageCropping } from '@/lib/utilities'

export class BlogSidebarFeaturedArticleAdapter extends Adapter<
  TBlogSideBarFeatureArticle,
  Nullable<TBlogSideBarFeatureArticle>
> {
  adapt: (source: any) => Nullable<TBlogSideBarFeatureArticle> = source => {
    if (!source) return null

    const article = source?.teaserTargets?.[0]?.target
    const url = article?.url || ''
    const title = source?.teaserTitle || ''
    const text = article?.teaserTitle || article?.name || ''

    const image = getComponentImageCropping('BlogFeaturedPostCard', source?.media)

    return {
      url,
      title,
      image,
      text,
      theme: 'leaf',
    }
  }

  adaptReverse: (source: Nullable<any>) => any = source => {
    return source
  }
}
