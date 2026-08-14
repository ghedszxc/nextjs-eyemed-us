import { Adapter } from '@/coremedia-integration/adapters/Adapter'
import { Nullable } from '@/models/Nullable.interface'
import { IComparisonChart } from '../types'
import { getAdapterCTA } from '@/lib/utilities'

export class ComparisonChartAdapter extends Adapter<IComparisonChart, Nullable<IComparisonChart>> {
  adapt: (source: any) => Nullable<IComparisonChart> = source => {
    if (!source.length) return null
    const data = source[0]

    const columns =
      data?.items?.map((col, i) => {
        const header = col?.collectionSubTitle
          ? `<h3>${col.collectionTitle}</h3><p>${col.collectionSubTitle}</p>`
          : col?.collectionTitle || ''

        const column = [header]
        const cells =
          col?.items?.map(item => {
            const title = item?.teaserTitle || ''
            if (i === 0) return `<p>${title}</p>`
            // if (title === '-') return getAkamayUrl(getAdapterImage(item?.pictures)?.[0] || '')
            if (title === '-') return title
            return `<h6>${item?.teaserTitle}</h6>`
          }) || []

        const target = col?.teaserLXCallToActionSettings?.[0]?.target
        let lastCell = getAdapterCTA(target?.teaserTargets)?.[0] || col?.collectionText

        if (typeof lastCell === 'object') {
          lastCell = {
            ...lastCell,
            label: target?.teaserText?.text || '',
          }
        }

        if (lastCell) {
          cells.push(lastCell)
        }

        return column.concat(cells)
      }) || null

    return {
      title: data?.collectionTitle || '',
      subtitle: data?.collectionText || '',
      columns,
    }
  }

  adaptReverse: (source: Nullable<any>) => any = source => {
    return source
  }
}
