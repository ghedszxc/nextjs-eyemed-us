import dynamic from 'next/dynamic'
import { ComponentType } from 'react'
import { IWidgetModel } from '@/models/IWidget.interface'
import { WidgetParamAdapterFactory } from '@/coremedia-integration/factory/WidgetParamAdapterFactory'
import { IUrl } from '@/models/IUrl.interface'
import { TPadding } from '@/models/IPadding'
import AppConfig from '@/lib/AppConfig'

interface Widgets {
  [key: string]: ComponentType<any> | null
}

/**
 * Add import here for new modules
 * set SSR true if needed.
 */
const Widgets: Widgets = {
  'm01-copyblock': dynamic(() => import('@/widgets/M01CopyBlock')),
  'm01- title and text only': dynamic(() => import('@/widgets/M01Title')),
  'm01-card': dynamic(() => import('@/widgets/M01Card')),
  'm02-choice modals collection': dynamic(() => import('@/widgets/M02')),
  'm03-constituent action': dynamic(() => import('@/widgets/M03ConstituentAction')),
  'm04-featured copy': dynamic(() => import('@/widgets/M04')),
  'm05-contact us CTA': dynamic(() => import('@/widgets/M05ContactUsCTA')),
  'm06-callout section': dynamic(() => import('@/widgets/M06')),
  'm07-small callouts': dynamic(() => import('@/widgets/M07')),
  'm08-small callouts with media': dynamic(() => import('@/widgets/M08')),
  'm10-small video feature section': dynamic(() => import('@/widgets/M10TestimonialWithMedia')),
  'm12-number-facts-column': dynamic(() => import('@/widgets/M12Columns')),
  'm13-featured-lists': dynamic(() => import('@/widgets/M13')),
  'm15-resources': dynamic(() => import('@/widgets/M15')),
  m16richtextarticle: dynamic(() => import('@/widgets/M16RichTextArticle')),
  m16richtextcitation: dynamic(() => import('@/widgets/M16RichTextCitation')),
  m16blogpostnote: dynamic(() => import('@/widgets/M16RichTextBlogPostNote')),
  m16blogpostbanner: dynamic(() => import('@/widgets/M16BlogPostBanner')),
  m16blogmediaRight: dynamic(() => import('@/widgets/M16MediaLeftAndRight')),
  m16blogmediaLeft: dynamic(() => import('@/widgets/M16MediaLeftAndRight')),
  'm16-rich-text': dynamic(() => import('@/widgets/M16RichTextArticle')),
  'm16-media-left-and-right': dynamic(() => import('@/widgets/M16MediaLeftAndRight')),
  m16richtextblogpostnote: dynamic(() => import('@/widgets/M16RichTextBlogPostNote')),
  'em html fragment': dynamic(() => import('@/widgets/HtmlFragment')),
  'em quiz': dynamic(() => import('@/widgets/Quiz')),
  'em comparison table': dynamic(() => import('@/widgets/EMComparisonChart')),
  'card-grid': dynamic(() => import('@/widgets/BlogCards')),
  'em top navigation blog': dynamic(() => import('@/widgets/BlogTopNavigation')),
  'blog-featured-post-card': dynamic(() => import('@/widgets/BlogFeaturedPostCard')),
  'blog-page-main-image-and-info': dynamic(() => import('@/widgets/BlogBanner')),
  'blog-related-posts': dynamic(() => import('@/widgets/BlogReadMore')),
  blogsidebarFeaturedResources: dynamic(() => import('@/widgets/BlogFeaturedResources')),
  'blog side bar featured article': dynamic(() => import('@/widgets/BlogSidebarFeaturedArticle')),
  'blogsidebar-stayconnected': dynamic(() => import('@/widgets/BlogSidebarStayConnected')),
  blogsidebarRelatedArticle: dynamic(() => import('@/widgets/BlogSidebarRelatedArticle')),
  blogsidebarESOW: dynamic(() => import('@/widgets/BlogSidebarESOW')),
  'em search result list': dynamic(() => import('@/widgets/SearchResult')),
  'em search bar': dynamic(() => import('@/widgets/GlobalSearchNavigation')),
  'em global search result list': dynamic(() => import('@/widgets/GlobalSearchResults')),
  'contactform-landing': dynamic(() => import('@/widgets/ContactForm')),
  'icon text wide section': dynamic(() => import('@/widgets/IconTextWide')),
}

interface IDynamicWidgetProps {
  url?: IUrl
  adaptedValues: unknown
  padding: TPadding
  pageType: string
  route?: string[]
}

const WidgetGenerator = ({
  widgetName,
  widgetValue,
  widgetContainerId,
  url,
  settings,
  pageType,
  searchParams,
  lang,
  globalTheme,
  route,
  index,
}: IWidgetModel) => {
  const adapter = new WidgetParamAdapterFactory().instance(widgetName, widgetValue)
  let adaptedValues = adapter ? adapter.adapt(widgetValue) : widgetValue

  // Handle M16 widget component routing based on viewtype
  let componentName = widgetName
  if (widgetName === 'm16-rich-text') {
    componentName = AppConfig.getM16ComponentName(widgetValue?.[0]?.viewtype)
  }

  const DynamicWidget: ComponentType<IDynamicWidgetProps> | null = Widgets[componentName]

  /**
   * Widget settings configurations
   * 1. Padding
   */
  const padding: TPadding | undefined =
    widgetContainerId === undefined ? 'both' : settings?.PlacementPadding?.[widgetContainerId]

  if (DynamicWidget) {
    DynamicWidget.displayName = widgetName
    return (
      <DynamicWidget
        url={url}
        {...adaptedValues}
        padding={padding || 'both'}
        pageType={pageType}
        searchParams={searchParams}
        lang={lang}
        globalTheme={globalTheme}
        route={route}
        index={index}
      />
    )
  } else {
    return null
  }
}

export default WidgetGenerator
