import { TBlogBanner } from '@/widgets/BlogBanner/types'
import { TBlogCardsProps } from '@/widgets/BlogCards/types'
import { IBlogFeaturedPostCard } from '@/widgets/BlogFeaturedPostCard/types'
import { IBlogSidebar } from '@/widgets/BlogSidebar/types'
import { IBlogTopNavigation } from '@/widgets/BlogTopNavigation/types'
import { IM16RichTextArticle } from '@/widgets/M16RichTextArticle/types'
import { IM16RichTextBlogPostNote } from '@/widgets/M16RichTextBlogPostNote/types'
import { IM16RichTextCitation } from '@/widgets/M16RichTextCitation/types'

export interface IBlogLayout {
  navigation?: IBlogTopNavigation
  featured?: IBlogFeaturedPostCard
  banner?: TBlogBanner
  blogCards?: TBlogCardsProps
  article?: TBlogArticle
  sidebar?: IBlogSidebar
}

export type TBlogArticle = {
  content?: IM16RichTextArticle
  postNote?: IM16RichTextBlogPostNote
  citation?: IM16RichTextCitation
}
