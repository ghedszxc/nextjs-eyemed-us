import { IBlogFeaturedResources } from '@/widgets/BlogFeaturedResources/types'
import { TBlogSideBarFeatureArticle } from '@/widgets/BlogSidebarFeaturedArticle/types'
import { IBlogSidebarRelatedArticle } from '@/widgets/BlogSidebarRelatedArticle/types'
import { IBlogSidebarStayConnected } from '@/widgets/BlogSidebarStayConnected/types'
import { TBlogSideBarFeatureEsow } from '@/widgets/BlogSidebarESOW/types'

export interface IBlogSidebar {
  featuredResources?: IBlogFeaturedResources | null
  featuredArticle?: TBlogSideBarFeatureArticle | null
  featuredEsow?: TBlogSideBarFeatureEsow | null
  stayConnected?: IBlogSidebarStayConnected | null
  relatedArticle?: IBlogSidebarRelatedArticle | null
}
