import { Adapter } from '@/coremedia-integration/adapters/Adapter'
import { Nullable } from '@/models/Nullable.interface'
import { IFooter } from '../types'
import { ICta } from '@/models/ICta'
import { getAdapterCTA, getAdapterImage, getAkamayUrl } from '@/lib/utilities'

class FooterNavigationAdapter extends Adapter<IFooter, Nullable<IFooter>> {
  adapt: (source: any) => Nullable<IFooter> = source => {
    if (!source) return null

    const data = source?.content?.pageByPath?.grid?.rows

    const getPlacement = (data: any, viewtype: string) =>
      data?.find(item => item?.placements?.[0]?.name === viewtype)?.placements?.[0]

    const getContent = (data: any, viewtype: string) => data?.find(item => item?.name === viewtype)

    const footerNav = getPlacement(data, 'footer_navigation')?.items
    const subFooter1 = getPlacement(data, 'footer_belowfooter1')?.items
    const subFooter2 = getPlacement(data, 'footer_belowfooter2')?.items?.[0]
    const socials = getPlacement(data, 'footerSocials')?.items?.[0]

    const logoNav = getContent(subFooter1, 'logo navi')
    const subFooter = getContent(subFooter1, 'Subfooter')

    const mainLinks: ICta[][] = footerNav?.map(tier1 => {
      const targets =
        tier1?.teaserLXCallToActionSettings?.[0]?.target?.teaserTargets ||
        tier1?.teaserLXCallToActionSettings

      let cta1 = getAdapterCTA(targets)?.[0]
      cta1 = {
        url: cta1?.url,
        label: tier1?.collectionTitle || '',
      }

      const cta2 = tier1?.items
        ?.map(tier2 => getAdapterCTA(tier2?.teaserTargets)?.[0])
        ?.filter(Boolean)

      return [{ ...cta1 }].concat(cta2)
    })

    const subLinks: ICta[] = subFooter?.items?.map(item => {
      let cta = getAdapterCTA(item?.teaserTargets)?.[0] || null
      return cta
    })

    const privacyLink = {
      image: getAkamayUrl(subFooter2?.pictures?.[0]?.data?.uri),
      cta: getAdapterCTA(subFooter2?.teaserTargets)?.[0] || null,
    }

    const contactLink = getAdapterCTA(socials?.teaserLXCallToActionSettings)?.[0] || null

    // TODO: to complete dynamic mapping in CM
    const tempImageAlt = [
      'EyeMed Logo and Home link',
      'independent providers lenscrafter pearle vision optical sears optical',
    ]
    const imageLinks = logoNav?.items?.map((item, i) => {
      const image = getAdapterImage(item?.pictures)
      const imageDesktop = getAkamayUrl(image?.[0] || '')
      const imageMobile = getAkamayUrl(image?.[1] || image?.[0] || '')
      const cta = getAdapterCTA(item?.teaserTargets)?.[0] || null
      const alt = tempImageAlt[i] || ''

      return {
        image: {
          desktop: { url: imageDesktop, alt },
          mobile: { url: imageMobile || imageDesktop, alt },
        },
        cta: cta ?? { url: '/' },
      }
    })

    // TODO: to complete dynamic mapping in CM
    const tempSocialAlt = [
      'EyeMed on LinkedIn',
      'EyeMed on Facebook',
      'EyeMed on Instagram',
      'EyeMed blog',
    ]
    const socialLinks = socials?.items?.map((item, i) => ({
      image: getAkamayUrl(getAdapterImage(item?.pictures)?.[0] || ''),
      altText: tempSocialAlt[i] || '',
      cta: getAdapterCTA(item?.teaserTargets)?.[0] || null,
    }))

    return {
      mainLinks,
      subLinks,
      privacyLink,
      contactLink,
      imageLinks,
      socialLinks,
    }
  }

  adaptReverse: (source: Nullable<any>) => any = source => {
    return source
  }
}

export const footerNavigationAdapter = new FooterNavigationAdapter()
