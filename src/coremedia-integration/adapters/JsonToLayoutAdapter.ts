import PLACEMENTS_TO_MERGE from '../../lib/constants/PLACEMENTS_TO_MERGE'
import AppConfig from '@/lib/AppConfig'
import { ILayoutModel } from '../../models/ILayout.interface'
import { IWidgetModel } from '../../models/IWidget.interface'
import { Nullable } from '../../models/Nullable.interface'
import { Adapter } from './Adapter'

const WIDGET_NAME_TO_ID: Record<string, any> = {}
// const { mergePlacement } = AppConfig;

class JsonToLayoutAdapter extends Adapter<Nullable<Record<string, any>>, Nullable<ILayoutModel>> {
  adapt: (source: Nullable<Record<string, any>>, path?: string) => Nullable<ILayoutModel> =
    source => {
      // Variables
      const pageByPath = source?.content?.pageByPath

      let widgetsMapped: Array<IWidgetModel> = []
      let metaTags: any = []
      let metaTagImageURL: any = ''

      const settings = pageByPath?.settings
      const viewTypesMerged = Object.values(PLACEMENTS_TO_MERGE).flatMap(
        (viewTypes: string[]) => viewTypes
      )

      // Functions
      const checkEmptyItems = (elem: any) => elem?.placements?.[0].items.length > 0
      const checkDefaultItems = (elem: any) => elem?.placements?.[0].viewtype !== 'default'
      const filterPlacementToRemove = (elem: any) =>
        !viewTypesMerged.includes(elem.placements?.[0].viewtype)

      // Get widget data
      if (pageByPath && pageByPath.grid) {
        const rows = pageByPath?.grid?.rows

        // Merged Placements
        // const Footer = mergePlacement(
        //   rows,
        //   "Footer",
        //   PLACEMENTS_TO_MERGE["Footer"]
        // );
        // const Navigation = mergePlacement(
        //   rows,
        //   "Navigation",
        //   PLACEMENTS_TO_MERGE["Navigation"]
        // );

        // Grid
        let grid = rows?.map(<T>(row: T, key: number) => ({ ...row, orderId: key + 1 })) || []

        widgetsMapped = [...grid]
          ?.filter(checkEmptyItems)
          ?.filter(checkDefaultItems)
          ?.filter(filterPlacementToRemove)
          ?.map((row: any) => {
            let widgetId =
              WIDGET_NAME_TO_ID[row?.placements[0]?.viewtype] || row?.placements[0]?.viewtype

            return {
              widgetName: widgetId?.trim(),
              widgetValue: row?.placements[0]?.items,
            }
          })

        // Get Meta Tags
        const metaTagsData = grid?.find((rows: any) => rows?.placements[0]?.name === 'Meta_links')
        metaTags = AppConfig.getMetaTagsLinks(metaTagsData)
      }

      const navigationData = {
        hideHeader: !!pageByPath?.settings?.otherproperties?.hideHeader,
        crumbs: pageByPath?.navigationPath?.map((item, index) => ({
          label: item.title,
          url:
            '/' +
            pageByPath?.navigationPath
              ?.slice(0, index + 1)
              ?.map(p => p.segment)
              ?.join('/'),
        })),
      }

      return {
        layoutType: 'OneColumnLayout',
        widgets: widgetsMapped,
        title: source?.content?.pageByPath?.title || '',
        description: source?.content?.pageByPath?.htmlDescription || '',
        pageType: source?.content?.pageByPath?.subjectTaxonomy?.[0]?.value || '',
        metaTags: metaTags,
        metaTagImageURL: metaTagImageURL,
        settings,
        navigationData,
        globalTheme: pageByPath?.teaserOverlaySettings?.style?.textCls || '',
      }
    }

  adaptReverse: (source: Nullable<ILayoutModel>) => Nullable<Record<string, any>> = source => {
    if (!source) return null
    return JSON.parse(JSON.stringify(source))
  }
}

export const jsonToLayoutAdapter = new JsonToLayoutAdapter()
