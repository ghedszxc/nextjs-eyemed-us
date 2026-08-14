import { Adapter } from '@/coremedia-integration/adapters/Adapter'
import { Nullable } from '@/models/Nullable.interface'
import { IContactForm, ISupportCard, ISupportCardItem, ISupportCardSection } from '../types'
import { getAdapterCTA, getAkamayUrl, getBrandColorClasses } from '@/lib/utilities'

export class ContactUsFormAdapter extends Adapter<IContactForm, Nullable<IContactForm>> {
  adapt: (source: any) => Nullable<IContactForm> = source => {
    const data = source

    // console.log(data)

    const sourceCards = data?.map((sourceCard): ISupportCard => {
      const sectionCTA = getAdapterCTA(sourceCard?.teaserLXCallToActionSettings)[0]
      // console.log(sourceCard?.teaserTargets)
      const cropping = sourceCard?.media[0]?.crops?.find(
        crop => crop?.name === 'landscape_ratio9x6'
      )

      const sectionItems =
        sourceCard?.items &&
        sourceCard?.items?.map((sourceItem): ISupportCardSection => {
          const iconItems = sourceItem?.items?.map((iconItem): ISupportCardItem => {
            // console.log(iconItem)
            return {
              text: iconItem?.teaserTitle,
              src: getAkamayUrl(iconItem?.media[0]?.uriTemplate || ''),
            }
          })

          return {
            heading: sourceItem?.collectionTitle,
            items: iconItems || [],
          }
        })

      const theme = sourceCard?.collectionTextOverlayStyle
      const brandColors = sourceCard?.settings?.otherproperties?.['brand-colors']

      return {
        cls: getBrandColorClasses(theme, brandColors),
        title: sourceCard?.collectionTitle || '',
        image:
          getAkamayUrl(sourceCard?.media[0]?.uriTemplate)
            ?.replace('{cropName}', cropping?.name)
            ?.replace('{width}', cropping?.sizes?.[cropping?.sizes?.length - 1]?.width) || '',
        theme,
        ctaText: sectionCTA?.label,
        ctaUrl: sectionCTA?.url,
        sections: sectionItems || [],
      }
    })

    // console.log(sourceCards)

    return {
      supportCards: sourceCards || [],
    }
  }

  adaptReverse: (source: Nullable<any>) => any = source => {
    return source
  }
}
