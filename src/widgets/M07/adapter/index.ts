import { IM07 } from '../types'
import { Nullable } from '@/models/Nullable.interface'
import { Adapter } from '@/coremedia-integration/adapters/Adapter'
import { getAdapterImage, getAkamayUrl, getAdapterCTA, getBrandColorClasses } from '@/lib/utilities'

export class M07Adapter extends Adapter<IM07, Nullable<IM07>> {
  adapt: (source: any) => Nullable<IM07> = source => {
    if (!source.length) return null
    const data = source[0]

    const items = data?.items?.map(item => {
      const theme = item?.collectionTextOverlayStyle || data?.collectionTextOverlayStyle
      const brandColors = item?.settings?.otherproperties?.['brand-colors']

      return {
        cls: getBrandColorClasses(theme, brandColors),
        title: item?.teaserTitle,
        subtitle: item?.teaserText?.text,
        icon: getAkamayUrl(getAdapterImage(item?.pictures)[0] || ''),
      }
    })

    const CTA = getAdapterCTA(data?.teaserLXCallToActionSettings)?.[0] || null

    const isExternal =
      data?.teaserLXCallToActionSettings[0]?.target?.teaserTargets?.[0]?.target?.type ==
      'CMExternalLink'
    const url = data?.teaserLXCallToActionSettings[0]?.target?.teaserTargets?.[0]?.target?.url

    if (isExternal) CTA.isExternal = isExternal
    if (url) CTA.url = url

    return {
      theme: data?.collectionTextOverlayStyle,
      title: data?.collectionTitle,
      subtitle: data?.collectionText,
      footNote: data?.collectionSubTitle,
      cta: CTA,
      items,

      // This is needed for the Quiz module identifier
      isQuiz: data?.viewtype === 'emQuizAnswers',
    }
  }

  adaptReverse: (source: Nullable<any>) => any = source => {
    return source
  }
}
