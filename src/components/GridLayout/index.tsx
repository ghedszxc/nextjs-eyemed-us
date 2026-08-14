// Models
import { ILayoutModel } from '@/models/ILayout.interface'
import { IUrl } from '@/models/IUrl.interface'
import { IWidgetModel } from '@/models/IWidget.interface'
import { WIDGET_ARIA_LABELS } from '@/lib/constants/WIDGET_ARIA_LABELS'
import { generateId, getBrandColorClasses } from '@/lib/utilities'
import AppConfig from '@/lib/AppConfig'

// Components
import WidgetGenerator from '@/components/WidgetGenerator'
import GAScript from '../GAScript'
import clsx from 'clsx'
// import Analytics from "@/components/Analytics";

type Props = {
  data: ILayoutModel
  url: IUrl
  pageType?: string
  searchParams?: Record<string, string | string[] | undefined>
  lang?: string
  route?: string[]
}

const GridLayout = ({ data, url, pageType, searchParams, lang, route }: Props) => {
  const widgetList = data?.widgets

  return (
    <>
      <main>
        {widgetList?.map((widget: IWidgetModel, key: number) => {
          const widgetData = widget.widgetValue?.[0]

          // Handle M16 widget component routing based on viewtype
          let widgetName = widget.widgetName
          if (widgetName === 'm16-rich-text') {
            widgetName = AppConfig.getM16ComponentName(widget.widgetValue?.[0]?.viewtype)
          }

          // Get module aria label
          const ariaLabel =
            WIDGET_ARIA_LABELS?.[widgetName] ||
            widgetData?.teaserTitle ||
            widgetData?.collectionTitle

          // Get custom theme classes
          const globalTheme = data?.globalTheme || 'leaf'
          const theme = widgetData?.teaserOverlaySettings?.style?.textCls || globalTheme
          const brandColors =
            widgetData?.settings?.otherproperties?.['brand-colors'] ||
            widgetData?.articleColorSettings?.otherproperties?.['brand-colors']
          const brandCls = getBrandColorClasses(theme, brandColors)

          return (
            <section
              className={clsx(generateId(widgetName), ...brandCls)}
              key={key}
              id={data?.settings?.PlacementsAutoFocus?.[key] || undefined}
              aria-label={ariaLabel}
            >
              <WidgetGenerator
                {...widget}
                url={url}
                settings={data.settings}
                pageType={pageType}
                widgetContainerId={key}
                searchParams={searchParams}
                lang={lang}
                globalTheme={globalTheme}
                route={route}
                index={key}
              />
            </section>
          )
        })}
      </main>
      <GAScript
        ga_id={data?.settings?.googleAnalytics?.webPropertyId || ''}
        lang={lang || 'en-us'}
        path={route || []}
      />
      {/* <Analytics pageType={pageType} prop20={data?.title} /> */}
    </>
  )
}

export default GridLayout
