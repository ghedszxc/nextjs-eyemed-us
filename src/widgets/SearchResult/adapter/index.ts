import { Adapter } from '@/coremedia-integration/adapters/Adapter'
import { Nullable } from '@/models/Nullable.interface'
import { BlogSearch } from '../types'
// import { getAdapterCTA } from '@/lib/utilities'

export class SearchResultAdapter extends Adapter<BlogSearch, Nullable<BlogSearch>> {
  adapt: (source: any) => Nullable<BlogSearch> = source => {
    if (!source) return null

    return {
      theme: 'grape',
      noFoundMessage: source[0]?.teaserText?.text,
      resultMsg: source?.[0]?.title,
    }
  }

  adaptReverse: (source: Nullable<any>) => any = source => {
    return source
  }
}
