import { IM16RichTextBlogPostNote } from '../types'
import { Nullable } from '@/models/Nullable.interface'
import { Adapter } from '@/coremedia-integration/adapters/Adapter'
import { removeCMTextHyphen } from '@/lib/utilities'

export class M16RichTextBlogPostNoteAdapter extends Adapter<
  IM16RichTextBlogPostNote,
  Nullable<IM16RichTextBlogPostNote>
> {
  adapt: (source: any) => Nullable<IM16RichTextBlogPostNote> = source => {
    if (!source.length) return null
    const data = source[0]

    return {
      title: removeCMTextHyphen(data?.title || ''),
      body: data?.detailText?.text || '',
      theme: data?.articleColorSettings?.title || 'grape',
      // theme: getThemeText(data?.articleColorSettings?.title) || 'grape',
    }
  }

  adaptReverse: (source: Nullable<any>) => any = source => {
    return source
  }
}
