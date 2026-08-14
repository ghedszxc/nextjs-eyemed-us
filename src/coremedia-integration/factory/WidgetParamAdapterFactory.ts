// Modules
import { Nullable } from '@/models/Nullable.interface'
import { Factory } from './Factory'
import { IAdapter } from '@/coremedia-integration/adapters/Adapter'
import { GenericWidgetNameModel } from '@/models/IGenericWidgetValue.interface'
import { BLOG_WIDGETS } from '@/lib/constants/BLOG_CONSTANTS'

// Adapters
import { SampleAdapter } from '../adapters/widgets/Sample.adapter'
import { M01CopyBlockAdapter } from '@/widgets/M01CopyBlock/adapter'
import { M01CardAdapter } from '@/widgets/M01Card/adapter'
import { M01TitleAndParagraphAdapter } from '@/widgets/M01Title/adapter'
import { M02Adapter } from '@/widgets/M02/adapter'
import { M03ConstituentActionAdapter } from '@/widgets/M03ConstituentAction/adapter'
import { M04Adapter } from '@/widgets/M04/adapter'
import { M05ContactUsCTAAdapter } from '@/widgets/M05ContactUsCTA/adapter'
import { M16RichTextCitationAdapter } from '@/widgets/M16RichTextCitation/adapter'
import { M16RichTextArticleAdapter } from '@/widgets/M16RichTextArticle/adapter'
import { M16RichTextBlogPostNoteAdapter } from '@/widgets/M16RichTextBlogPostNote/adapter'
import { M16MediaLeftAndRightAdapter } from '@/widgets/M16MediaLeftAndRight/adapter'
import { M16BlogPostBannerAdapter } from '@/widgets/M16BlogPostBanner/adapter'
import { BlogTopNavigationAdapter } from '@/widgets/BlogTopNavigation/adapter'
import { BlogFeaturedPostCardAdapter } from '@/widgets/BlogFeaturedPostCard/adapter'
import { BlogCardsAdapter } from '@/widgets/BlogCards/adapter'
import { BlogFeaturedResourcesAdapter } from '@/widgets/BlogFeaturedResources/adapter'
import { BlogSidebarFeaturedArticleAdapter } from '@/widgets/BlogSidebarFeaturedArticle/adapter'
import { BlogBannerAdapter } from '@/widgets/BlogBanner/adapter'
import { BlogReadMoreAdapter } from '@/widgets/BlogReadMore/adapter'
import { BlogSidebarStayConnectedAdapter } from '@/widgets/BlogSidebarStayConnected/adapter'
import { BlogSidebarRelatedArticleAdapter } from '@/widgets/BlogSidebarRelatedArticle/adapter'
import { SearchResultAdapter } from '@/widgets/SearchResult/adapter'
import { M15Adapter } from '@/widgets/M15/adapter'
import { M06Adapter } from '@/widgets/M06/adapter'
import { M07Adapter } from '@/widgets/M07/adapter'
import { M12ColumnsAdapter } from '@/widgets/M12Columns/adapter'
import { M13Adapter } from '@/widgets/M13/adapter'
import { M08Adapter } from '@/widgets/M08/adapter'
import { M10TestimonialWithMediaAdapter } from '@/widgets/M10TestimonialWithMedia/adapter'
import { HtmlFragmentAdapter } from '@/widgets/HtmlFragment/adapter'
import { QuizAdapter } from '@/widgets/Quiz/adapter'
import { ComparisonChartAdapter } from '@/widgets/EMComparisonChart/adapter'
import { ContactUsFormAdapter } from '@/widgets/ContactForm/adapter'
import { IconTextWideAdapter } from '@/widgets/IconTextWide/adapter'
import { BlogSidebarFeaturedEsowAdapter } from '@/widgets/BlogSidebarESOW/adapter'

/**
 * Determines the correct M16 adapter based on viewtype
 * @param viewtype - The viewtype from widgetValue
 * @param isPageLevel - Whether this is a page-level integration
 * @returns The appropriate M16 adapter instance
 */
const getM16Adapter = (viewtype?: string | null, isPageLevel: boolean = false): IAdapter => {
  switch (viewtype) {
    case BLOG_WIDGETS.m16RichTextBlogPostNote:
      return new M16RichTextBlogPostNoteAdapter()
    case BLOG_WIDGETS.m16RichTextCitation:
      return new M16RichTextCitationAdapter()
    case BLOG_WIDGETS.m16blogmediaRight:
      return new M16MediaLeftAndRightAdapter()
    case BLOG_WIDGETS.m16blogmediaLeft:
      return new M16MediaLeftAndRightAdapter()
    case BLOG_WIDGETS.m16blogpostbanner:
      return new M16BlogPostBannerAdapter()
    case BLOG_WIDGETS.m16RichTextArticle:
    default:
      return new M16RichTextArticleAdapter(isPageLevel)
  }
}

export class WidgetParamAdapterFactory extends Factory<GenericWidgetNameModel, Nullable<IAdapter>> {
  instance: (comparator: GenericWidgetNameModel, widgetValue?: any) => Nullable<IAdapter> = (
    comparator,
    widgetValue
  ) => {
    switch (comparator) {
      case 'Sample':
        return new SampleAdapter()
      case 'm01-copyblock':
        return new M01CopyBlockAdapter()
      case 'm01- title and text only':
        return new M01TitleAndParagraphAdapter()
      case 'm01-card':
        return new M01CardAdapter()
      case 'm02-choice modals collection':
        return new M02Adapter()
      case 'm03-constituent action':
        return new M03ConstituentActionAdapter()
      case 'm04-featured copy':
        return new M04Adapter()
      case 'm05-contact us CTA':
        return new M05ContactUsCTAAdapter()
      case 'm06-callout section':
        return new M06Adapter()
      case 'm07-small callouts':
        return new M07Adapter()
      case 'm08-small callouts with media':
        return new M08Adapter()
      case 'm10-small video feature section':
        return new M10TestimonialWithMediaAdapter()
      case 'm12-number-facts-column':
        return new M12ColumnsAdapter()
      case 'm13-featured-lists':
        return new M13Adapter()
      case 'm15-resources':
        return new M15Adapter()
      case 'm16-media-left-and-right':
        return new M16MediaLeftAndRightAdapter()
      case 'm16-rich-text':
        return getM16Adapter(widgetValue?.[0]?.viewtype, true)
      case 'em html fragment':
        return new HtmlFragmentAdapter()
      case 'em quiz':
        return new QuizAdapter()
      case 'contactform-landing':
        return new ContactUsFormAdapter()
      case 'em comparison table':
        return new ComparisonChartAdapter()
      case 'icon text wide section':
        return new IconTextWideAdapter()
      case BLOG_WIDGETS.m16RichTextArticle:
        return new M16RichTextArticleAdapter()
      case BLOG_WIDGETS.m16RichTextBlogPostNote:
        return new M16RichTextBlogPostNoteAdapter()
      case BLOG_WIDGETS.m16RichTextCitation:
        return new M16RichTextCitationAdapter()
      case BLOG_WIDGETS.m16blogpostbanner:
        return new M16BlogPostBannerAdapter()
      case BLOG_WIDGETS.m16blogmediaRight:
        return new M16MediaLeftAndRightAdapter()
      case BLOG_WIDGETS.m16blogmediaLeft:
        return new M16MediaLeftAndRightAdapter()
      case BLOG_WIDGETS.blogTopNavigation:
        return new BlogTopNavigationAdapter()
      case BLOG_WIDGETS.blogFeaturedPostCard:
        return new BlogFeaturedPostCardAdapter()
      case BLOG_WIDGETS.blogCards:
        return new BlogCardsAdapter()
      case BLOG_WIDGETS.blogSidebarFeaturedResources:
        return new BlogFeaturedResourcesAdapter()
      case BLOG_WIDGETS.blogSidebarFeaturedArticle:
        return new BlogSidebarFeaturedArticleAdapter()
      case BLOG_WIDGETS.blogSidebarESOW:
        return new BlogSidebarFeaturedEsowAdapter()
      case BLOG_WIDGETS.blogSidebarStayConnected:
        return new BlogSidebarStayConnectedAdapter()
      case BLOG_WIDGETS.blogSidebarRelatedArticle:
        return new BlogSidebarRelatedArticleAdapter()
      case BLOG_WIDGETS.blogBanner:
        return new BlogBannerAdapter()
      case BLOG_WIDGETS.blogReadMore:
        return new BlogReadMoreAdapter()
      case BLOG_WIDGETS.blogSearchResult:
        return new SearchResultAdapter()
      default:
        return null
    }
  }
}
