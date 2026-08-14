import { Adapter } from '@/coremedia-integration/adapters/Adapter'
import { Nullable } from '@/models/Nullable.interface'
import { IBlogTopNavigation } from '../types'
import { getAdapterCTA, getAdapterImage, getAkamayUrl } from '@/lib/utilities'

export class BlogTopNavigationAdapter extends Adapter<
  IBlogTopNavigation,
  Nullable<IBlogTopNavigation>
> {
  adapt: (source: any) => Nullable<IBlogTopNavigation> = source => {
    if (!source) return null

    const navMenu = source?.[0]
    const search = source?.[1]

    const icon = getAkamayUrl(getAdapterImage(source?.[0]?.pictures)[0] || '')
    const title = navMenu?.items?.[0]?.title || ''
    const searchTitle = navMenu?.collectionTitle
    const placeholder = search?.title || ''

    // TODO: to use other property for label other than `name`
    const cta = { url: '', label: search?.name || '' }

    const items = navMenu?.items?.map(item => ({
      label: item?.teaserTitle,
      url: getAdapterCTA(item?.teaserTargets)?.[0]?.url,
    }))

    return {
      theme: 'grape',
      icon,
      title,
      searchTitle,
      placeholder,
      cta,
      items,
    }
  }

  adaptReverse: (source: Nullable<any>) => any = source => {
    return source
  }
}
