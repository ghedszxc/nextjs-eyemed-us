import { IBlogSidebarStayConnected } from '../types'
import { Nullable } from '@/models/Nullable.interface'
import { Adapter } from '@/coremedia-integration/adapters/Adapter'
import { getAdapterCTA, getAdapterImage, getAkamayUrl } from '@/lib/utilities'

export class BlogSidebarStayConnectedAdapter extends Adapter<
  IBlogSidebarStayConnected,
  Nullable<IBlogSidebarStayConnected>
> {
  adapt: (source: any) => Nullable<IBlogSidebarStayConnected> = source => {
    if (!source) return null
    return {
      theme: 'grape',
      icon: getAkamayUrl(getAdapterImage(source?.pictures)?.[0] || '') || '',
      subtitle: source?.teaserText?.text || '',
      cta: getAdapterCTA(source?.teaserTargets)?.[0] || null,
    }
  }

  adaptReverse: (source: Nullable<any>) => any = source => {
    return source
  }
}
