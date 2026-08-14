import { Adapter } from '@/coremedia-integration/adapters/Adapter'
import { Nullable } from '@/models/Nullable.interface'
import { IHeader, Page } from '../types'
import { getAdapterCTA, getAkamayUrl } from '@/lib/utilities'

class HeaderNavigationAdapter extends Adapter<IHeader, Nullable<IHeader>> {
  adapt: (source: any) => Nullable<IHeader> = source => {
    if (!source) return null
    const data = source?.content?.pageByPath?.grid?.rows

    const getPlacement = (data: any, viewtype: string) =>
      data?.find(item => item?.placements?.[0]?.viewtype === viewtype)?.placements?.[0]

    const aboveHeader = getPlacement(data, 'main top above header')?.items
    const navMenu = getPlacement(data, 'main top navi header')?.items

    const logoData = navMenu?.[0]
    const logo = {
      image: getAkamayUrl(logoData?.pictures?.[0]?.data?.uri) || '',
      cta: getAdapterCTA(logoData?.teaserTargets)?.[0] || null,
    }

    const aboveHeaderSearch = aboveHeader?.[0]
    const aboveHeaderCta = aboveHeader?.[1]
    const aboveHeaderLogin = aboveHeader?.[2]

    const searchLabel = aboveHeaderSearch?.title || ''

    const cta = [
      {
        url: aboveHeaderCta?.url || '',
        label: aboveHeaderCta?.teaserTitle || '',
      },
    ]

    const loginLinks = aboveHeaderLogin?.items?.map(item => {
      const header = {
        label: item?.teaserTitle || '',
        url: item?.url || '',
      }
      return {
        header,
      }
    })

    const loginOptions = {
      header: {
        label: aboveHeaderLogin?.collectionTitle || '',
        url: '',
      },
      pages: loginLinks,
    }

    const pages: Page[] = navMenu?.slice(1)?.map(tier1 => {
      let header1 = getAdapterCTA(tier1?.teaserTargets)?.[0] || null
      header1 = {
        ...header1,
        label: tier1?.collectionTitle || '',
      }

      const tier2Pages = tier1?.items?.map(tier2 => {
        const targets =
          tier2?.teaserLXCallToActionSettings?.[0]?.target?.teaserTargets ||
          tier2?.teaserLXCallToActionSettings

        let header2 = getAdapterCTA(targets)?.[0] || null
        header2 = {
          ...(header2 || {}),
          label: tier2?.collectionTitle || '',
        }

        const tier3Pages = tier2?.items?.map(tier3 => {
          let header3 = getAdapterCTA(tier3?.teaserTargets)?.[0] || null
          header3 = {
            ...(header3 || {}),
            label: tier3?.teaserTitle || '',
          }

          return { header: header3 }
        })

        return {
          header: header2,
          pages: tier3Pages,
        }
      })

      const color = tier1?.collectionTextOverlayStyle || null

      return { header: header1, pages: tier2Pages, color }
    })

    return {
      logo,
      cta,
      searchLabel,
      loginOptions,
      pages,
    }
  }

  adaptReverse: (source: Nullable<any>) => any = source => {
    return source
  }
}

export const headerNavigationAdapter = new HeaderNavigationAdapter()
