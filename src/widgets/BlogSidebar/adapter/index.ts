import { Adapter } from '@/coremedia-integration/adapters/Adapter'
import { Nullable } from '@/models/Nullable.interface'
import { IBlogSidebar } from '../types'
import { WidgetParamAdapterFactory } from '@/coremedia-integration/factory/WidgetParamAdapterFactory'
import { BLOG_WIDGETS } from '@/lib/constants/BLOG_CONSTANTS'

export class BlogSidebarAdapter extends Adapter<IBlogSidebar, Nullable<IBlogSidebar>> {
  adapt: (source: any) => Nullable<IBlogSidebar> = source => {
    if (!source) return null

    const items = source?.items || source?.teasableItems

    let featuredResources, featuredArticle, stayConnected, relatedArticle, featuredEsow

    items?.forEach(item => {
      const widgetName = item?.viewtype || item?.name
      const adapter = new WidgetParamAdapterFactory().instance(widgetName)
      const widgetValues = adapter ? adapter.adapt(item) : item

      switch (widgetName) {
        case BLOG_WIDGETS.blogSidebarFeaturedResources:
          featuredResources = widgetValues
          break
        case BLOG_WIDGETS.blogSidebarFeaturedArticle:
          featuredArticle = widgetValues
          break
        case BLOG_WIDGETS.blogSidebarStayConnected:
          stayConnected = widgetValues
          break
        case BLOG_WIDGETS.blogSidebarRelatedArticle:
          relatedArticle = widgetValues
          break
        case BLOG_WIDGETS.blogSidebarESOW:
          featuredEsow = widgetValues
      }
    })

    return {
      featuredResources,
      featuredArticle,
      stayConnected,
      relatedArticle,
      featuredEsow,
    }
  }

  adaptReverse: (source: Nullable<any>) => any = source => {
    return source
  }
}
