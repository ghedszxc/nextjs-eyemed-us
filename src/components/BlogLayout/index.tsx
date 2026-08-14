import { Fragment, ReactNode } from 'react'
import clsx from 'clsx'
import style from './styles/index.module.scss'
import { ILayoutModel } from '@/models/ILayout.interface'
import { IWidgetModel } from '@/models/IWidget.interface'
import { BLOG_WIDGETS } from '@/lib/constants/BLOG_CONSTANTS'
import { WIDGET_ARIA_LABELS } from '@/lib/constants/WIDGET_ARIA_LABELS'
import SidebarContainer from '../SidebarContainer'
import SidebarContent from '../SidebarContainer/components/SidebarContent'
import WidgetGenerator from '../WidgetGenerator'
import GAScript from '../GAScript'

type Props = {
  data: ILayoutModel
  lang: string
  path: string[]
}

const getCmsBlogWidget = (widgets: IWidgetModel[], name: string): IWidgetModel | undefined =>
  widgets?.find(w => w.widgetName === name)

const BlogLayout = ({ data, lang, path }: Props) => {
  const widgets = data?.widgets
  const navigation = getCmsBlogWidget(widgets, BLOG_WIDGETS.blogTopNavigation)
  const featured = getCmsBlogWidget(widgets, BLOG_WIDGETS.blogFeaturedPostCard)
  const banner = getCmsBlogWidget(widgets, BLOG_WIDGETS.blogBanner)
  const article = getCmsBlogWidget(widgets, BLOG_WIDGETS.blogArticle)
  const sidebar = getCmsBlogWidget(widgets, BLOG_WIDGETS.blogSidebar)
  const readMore = getCmsBlogWidget(widgets, BLOG_WIDGETS.blogReadMore)
  let blogCards = getCmsBlogWidget(widgets, BLOG_WIDGETS.blogCards)

  if (blogCards) {
    blogCards = {
      widgetName: blogCards.widgetName,
      widgetValue: {
        ...blogCards.widgetValue,
        hasSidebar: !!sidebar,
      },
    }
  }

  const getBlogSidebar = () => (
    <SidebarContainer>
      {sidebar?.widgetValue?.map((data: any, key: number) => {
        const widgetName = data?.viewtype
        const widgetValue = data
        const widget = { widgetName, widgetValue }

        return (
          <Fragment key={key}>
            <SidebarContent>
              <WidgetGenerator {...widget} widgetContainerId={key} />
            </SidebarContent>
          </Fragment>
        )
      })}
    </SidebarContainer>
  )

  const getBlogArticle = () => (
    <article aria-label="article body">
      {article?.widgetValue?.map((data: any, key: number) => {
        const isHtml = data?.type === 'CMHTML'
        const widgetName =
          data?.viewtype ?? (isHtml ? 'em html fragment' : BLOG_WIDGETS.m16RichTextArticle)
        const widgetValue = [data]
        const widget = { widgetName, widgetValue }

        return (
          <div className={clsx(style.article, { [style['html']]: isHtml })} key={key}>
            <WidgetGenerator {...widget} widgetContainerId={key} pageType="blog" />
          </div>
        )
      })}
    </article>
  )

  const Section = ({ id, children }: { id: string; children: ReactNode }) => (
    <section className={id} aria-label={WIDGET_ARIA_LABELS?.[id]}>
      {children}
    </section>
  )

  return (
    <main className={style.blogLayout}>
      {navigation && <WidgetGenerator {...navigation} />}
      {featured && (
        <Section id={BLOG_WIDGETS.blogFeaturedPostCard}>
          <WidgetGenerator {...featured} />
        </Section>
      )}
      {banner && <WidgetGenerator {...banner} />}
      <div className={style.container}>
        <div
          className={clsx(style.wrapper, {
            [style['card-grid']]: !article,
            [style['article-page']]: !!article,
          })}
        >
          <div className={clsx(style.content, { [style['has-sidebar']]: sidebar })}>
            {blogCards && (
              <Section id={BLOG_WIDGETS.blogCards}>
                <WidgetGenerator {...blogCards} />
              </Section>
            )}
            {article && getBlogArticle()}
          </div>
          {sidebar && getBlogSidebar()}
        </div>
      </div>
      {readMore && <WidgetGenerator {...readMore} />}
      <GAScript
        ga_id={data?.settings?.googleAnalytics?.webPropertyId || ''}
        lang={lang}
        path={path}
      />
    </main>
  )
}

export default BlogLayout
