import { IBlogSidebarRelatedArticle } from '../types'
import { Nullable } from '@/models/Nullable.interface'
import { Adapter } from '@/coremedia-integration/adapters/Adapter'
import { getAdapterCTA, getComponentImageCropping } from '@/lib/utilities'

export class BlogSidebarRelatedArticleAdapter extends Adapter<
  IBlogSidebarRelatedArticle,
  Nullable<IBlogSidebarRelatedArticle>
> {
  adapt: (source: any) => Nullable<IBlogSidebarRelatedArticle> = source => {
    if (!source) return null

    const cta = getAdapterCTA(source?.teaserTargets)?.[0]

    // Append the article id to the url
    if (cta) {
      cta.url += `-${source?.teaserTargets?.[0]?.target?.id}`
    }

    return {
      image: getComponentImageCropping('BlogSidebarRelatedArticle', source?.pictures),
      title: source?.teaserText?.text,
      cta: cta || null,
    }
  }

  adaptReverse: (source: Nullable<any>) => any = source => {
    return source
  }
}
