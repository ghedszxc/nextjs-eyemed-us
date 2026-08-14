import { Adapter } from '@/coremedia-integration/adapters/Adapter'
import { Nullable } from '@/models/Nullable.interface'
import { IHtmlFragment } from '../types'

export class HtmlFragmentAdapter extends Adapter<IHtmlFragment, Nullable<IHtmlFragment>> {
  adapt: (source: any) => Nullable<IHtmlFragment> = source => {
    if (!source.length) return null
    const data = source[0]

    return {
      content: data?.html || '',
    }
  }

  adaptReverse: (source: Nullable<any>) => any = source => {
    return source
  }
}
