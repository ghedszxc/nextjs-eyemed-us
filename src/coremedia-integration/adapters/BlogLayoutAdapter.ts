import { BLOG_WIDGETS } from '@/lib/constants/BLOG_CONSTANTS'
import { ILayoutModel } from '../../models/ILayout.interface'
import { Nullable } from '../../models/Nullable.interface'
import { Adapter } from './Adapter'
import { jsonToLayoutAdapter } from './JsonToLayoutAdapter'

class BlogLayoutAdapter extends Adapter<Nullable<Record<string, any>>, Nullable<ILayoutModel>> {
  adapt: (source: Nullable<Record<string, any>>, path?: string) => Nullable<ILayoutModel> =
    source => {
      const { cmsPage, cmsBlog, cmsReadMore, pageNum } = source || {}

      const pageLayout = jsonToLayoutAdapter.adapt(cmsPage)

      const blogs = cmsBlog?.content?.search
      const content = cmsBlog?.content?.content

      let article = content?.related
      let readMore = cmsReadMore?.content?.search?.result

      // Category level sidebar
      const sidebar = cmsPage?.content?.pageByPath?.grid?.rows?.find(
        p => p?.placements?.[0]?.name === 'main_placement_2'
      )?.placements?.[0]?.items?.[0]?.items

      // Social links
      const socialLinks = cmsPage?.content?.pageByPath?.grid?.rows?.find(
        p => p?.placements?.[0]?.viewtype === BLOG_WIDGETS.blogTopNavigation
      )?.placements?.[0]?.items?.[2]

      // BlogFeaturedPostCard
      if (pageNum === 1 && blogs) {
        const featured = blogs?.result?.[0]

        if (featured) {
          pageLayout?.widgets?.push({
            widgetName: BLOG_WIDGETS.blogFeaturedPostCard,
            widgetValue: featured,
          })
          blogs?.result?.shift()
        }
      }

      if (blogs?.result?.length) {
        // ALL POSTS & CATEGORY PAGE

        const blogCards = {
          ...blogs,
          pageNum,
        }
        pageLayout?.widgets?.push({
          widgetName: BLOG_WIDGETS.blogCards,
          widgetValue: blogCards,
        })

        if (sidebar) {
          // Add a placeholder after Featured Resources in sidebar
          const transformedSidebar = [...sidebar]
          const i = sidebar.findIndex(p => p.viewtype === BLOG_WIDGETS.blogSidebarFeaturedResources)
          if (i !== -1) {
            transformedSidebar.splice(i + 1, 0, { viewtype: 'placeholder' })
          }

          pageLayout?.widgets?.push({
            widgetName: BLOG_WIDGETS.blogSidebar,
            widgetValue: transformedSidebar,
          })
        }
      } else if (article) {
        // SINGLE BLOG PAGE
        const hasSidebar = content?.viewtype === 'withSidebar'

        // BlogBanner
        pageLayout?.widgets?.push({
          widgetName: BLOG_WIDGETS.blogBanner,
          widgetValue: [content, socialLinks],
        })

        // Sidebar
        const blogSidebar = article?.find(p => p.name === 'Sidebar Content Collection')
        if (blogSidebar) {
          pageLayout?.widgets?.push({
            widgetName: BLOG_WIDGETS.blogSidebar,
            widgetValue: blogSidebar?.teasableItems,
          })
          article = article?.filter(p => p !== blogSidebar)
        } else if (hasSidebar) {
          pageLayout?.widgets?.push({
            widgetName: BLOG_WIDGETS.blogSidebar,
            widgetValue: sidebar,
          })
        }

        // BlogReadMore
        const blogReadMore = article?.find(p => p.name === 'Related Content Collection')
        if (blogReadMore) {
          pageLayout?.widgets?.push({
            widgetName: BLOG_WIDGETS.blogReadMore,
            widgetValue: blogReadMore,
          })
          article = article?.filter(p => p !== blogReadMore)
        } else {
          // filter same article then limit to 3 articles
          readMore = readMore?.filter(item => item?.id !== content?.id).slice(0, 3)
          pageLayout?.widgets?.push({
            widgetName: BLOG_WIDGETS.blogReadMore,
            widgetValue: readMore,
          })
        }

        // ARTICLE
        const blogArticle = article?.[0]?.teasableItems || []

        // simple copy
        if (content?.detailText?.text && content.detailText.text !== '<p>placeholder</p>') {
          blogArticle?.unshift({
            viewtype: BLOG_WIDGETS.m16RichTextArticle,
            detailText: content.detailText,
          })
        }

        // m16 blog post banner
        const postBanners = article?.filter(p => p.viewtype === BLOG_WIDGETS.m16blogpostbanner)
        if (postBanners) {
          postBanners?.reverse()?.forEach(w => blogArticle.unshift(w))
          article = article?.filter(p => p.viewtype !== BLOG_WIDGETS.m16blogpostbanner)
        }

        // the rest of the article
        pageLayout?.widgets?.push({
          widgetName: BLOG_WIDGETS.blogArticle,
          widgetValue: blogArticle,
        })
      }

      return pageLayout
    }

  adaptReverse: (source: Nullable<ILayoutModel>) => Nullable<Record<string, any>> = source => {
    if (!source) return null
    return JSON.parse(JSON.stringify(source))
  }
}

export const blogLayoutAdapter = new BlogLayoutAdapter()
