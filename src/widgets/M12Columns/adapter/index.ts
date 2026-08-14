import { TM12Columns } from '../types'
import { Nullable } from '@/models/Nullable.interface'
import { Adapter } from '@/coremedia-integration/adapters/Adapter'
import { getAkamayUrl, getBrandColorClasses } from '@/lib/utilities'
import { viewTypeToVariantMapping } from '../constants/columnMapping'

export class M12ColumnsAdapter extends Adapter<TM12Columns, Nullable<TM12Columns>> {
  adapt: (source: any) => Nullable<TM12Columns> = source => {
    if (!source.length) return null
    const data = source[0]

    const parseColumns = (column: any) => {
      const mappingType = viewTypeToVariantMapping[data?.viewtype]

      const theme =
        column?.teaserOverlaySettings?.style?.textCls || data?.collectionTextOverlayStyle
      const brandColors = column?.settings?.otherproperties?.['brand-colors']

      if (mappingType === 'TitleImageColumn') {
        return {
          cls: getBrandColorClasses(theme, brandColors),
          title: column?.teaserTitle,
          text: column?.teaserText1,
          caption: !column?.picture ? '' : column?.teaserText2,
          image: {
            href: getAkamayUrl(
              column?.picture?.uriTemplate?.replace('{cropName}/', '')?.replace('{width}/', '')
            ),
            alt: column?.picture?.title,
          },
        }
      } else {
        return {
          cls: getBrandColorClasses(theme, brandColors),
          title1: column?.teaserTitle1,
          title2: column?.teaserTitle2,
          text1: column?.teaserText1,
          text2: column?.teaserText2,
          image: {
            href: getAkamayUrl(
              column?.picture?.uriTemplate?.replace('{cropName}/', '')?.replace('{width}/', '')
            ),
            alt: column?.picture?.title,
          },
        }
      }
    }

    const collection = data?.items?.map(column => parseColumns(column))

    return {
      theme: data?.collectionTextOverlayStyle || '',
      variant: viewTypeToVariantMapping[data?.viewtype],
      collection,
    }
  }

  adaptReverse: (source: Nullable<any>) => any = source => {
    return source
  }
}
