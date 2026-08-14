import { IM16RichTextCitation } from '../types'
import { Nullable } from '@/models/Nullable.interface'
import { Adapter } from '@/coremedia-integration/adapters/Adapter'
import { removeCMTextHyphen } from '@/lib/utilities'

export class M16RichTextCitationAdapter extends Adapter<
  IM16RichTextCitation,
  Nullable<IM16RichTextCitation>
> {
  private isPageLevel: boolean

  constructor(isPageLevel: boolean = false) {
    super()
    this.isPageLevel = isPageLevel
  }

  adapt: (source: any) => Nullable<IM16RichTextCitation> = source => {
    if (!source.length) return null
    const data = source[0]

    return {
      title: removeCMTextHyphen(data?.title || ''),
      body: removeCMTextHyphen(data?.detailText?.text || ''),
      theme: data?.settings?.bgcolor || undefined,
      isPageLevel: this.isPageLevel
    }
  }

  adaptReverse: (source: Nullable<any>) => any = source => {
    return source
  }
}
