import { GenericWidgetValueModel } from '../../models/IGenericWidgetValue.interface'
import { Nullable } from '../../models/Nullable.interface'
import { Adapter } from './Adapter'

export class StaticPathsAdapter extends Adapter<GenericWidgetValueModel, Nullable<any>> {
  adapt: (source: any) => Nullable<any> = source => {
    if (!source?.content?.site?.root) return null
    const root = source?.content?.site?.root
    const children = root?.children

    const locale = root?.segment.replace(/em-/g, '')
    const paths: any[] = []

    const checkChildren = (data: any) => {
      return !!data?.children && !!data?.children?.length
    }

    paths.push({
      params: {
        page: [],
      },
      locale: locale,
      modificationDate: root?.modificationDate,
      hiddenInSitemap: false, // root?.hiddenInSitemap
    })

    const buildPathsRecursively = (nodes: any[], pageSegments: string[] = []): void => {
      nodes?.forEach((node: any) => {
        const currentSegments = [...pageSegments, node?.segment]

        paths.push({
          params: {
            page: currentSegments,
          },
          locale: locale,
          modificationDate: node?.modificationDate || '',
          hiddenInSitemap: node?.hiddenInSitemap || false,
        })

        if (checkChildren(node)) {
          buildPathsRecursively(node?.children, currentSegments)
        }
      })
    }

    buildPathsRecursively(children)
    return paths
  }

  adaptReverse: (source: Nullable<any>) => any = source => {
    return source
  }
}
