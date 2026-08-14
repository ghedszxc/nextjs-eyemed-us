import { IM16RichTextArticle, IRelatedFile } from '../types'
import { Nullable } from '@/models/Nullable.interface'
import { Adapter } from '@/coremedia-integration/adapters/Adapter'
import { removeCMTextHyphen, getAdapterCTA } from '@/lib/utilities'

export class M16RichTextArticleAdapter extends Adapter<
  IM16RichTextArticle,
  Nullable<IM16RichTextArticle>
> {
  private isPageLevel: boolean

  constructor(isPageLevel: boolean = false) {
    super()
    this.isPageLevel = isPageLevel
  }

  private processSectionHeaders = (htmlString: string): string => {
    return htmlString.replace(/<li><p>([^<]+)<\/p><ul>/g, '<li><h5>$1</h5><ul>')
  }

  private processUnderlineTags = (htmlString: string): string => {
    return htmlString.replace(/<u>/gi, '<span class="underline">').replace(/<\/u>/gi, '</span>')
  }

  private processTextBigElements = (htmlString: string, related: IRelatedFile[]): string => {
    if (!related || related.length === 0) {
      return htmlString
    }

    const textBigRegex =
      /<([a-zA-Z][a-zA-Z0-9]*)\s+([^>]*\s+)?class=["']([^"']*\btext-big\b[^"']*)["']([^>]*)>([\s\S]*?)<\/\1>/gi
    let match
    let processedHtml = htmlString
    const matches: Array<{ fullMatch: string; tag: string; content: string; index: number }> = []

    while ((match = textBigRegex.exec(htmlString)) !== null) {
      matches.push({
        fullMatch: match[0],
        tag: match[1],
        content: match[5] || '',
        index: matches.length,
      })
    }

    const fileToUse = related.length === 1 ? related[0] : null

    for (let i = matches.length - 1; i >= 0; i--) {
      const matchItem = matches[i]
      const relatedFile = fileToUse || (i < related.length ? related[i] : null)

      if (relatedFile) {
        const cta = relatedFile.teaserTargets
          ? getAdapterCTA(relatedFile.teaserTargets)?.[0] || null
          : null

        if (cta && cta.url) {
          const label = cta.label || matchItem.content.replace(/<[^>]*>/g, '').trim() || 'Download'
          const replacement = `<h4><a href="${cta.url}" target="_self"><strong>${label}</strong></a></h4>`
          processedHtml = processedHtml.replace(matchItem.fullMatch, replacement)
        }
      }
    }

    return processedHtml
  }

  adapt: (source: any) => Nullable<IM16RichTextArticle> = source => {
    if (!source.length) return null
    const data = source[0]

    const related = data?.related || []
    const rawBody = data?.detailText?.text || ''
    const processedBody = this.processTextBigElements(
      this.processUnderlineTags(this.processSectionHeaders(rawBody)),
      related
    )

    return {
      title: removeCMTextHyphen(data?.title || ''),
      introText: data?.articleColorSettings?.otherproperties?.introText || '',
      body: processedBody,
      theme: data?.teaserOverlaySettings?.style?.textCls || '',
      isPageLevel: this.isPageLevel,
      related: related,
    }
  }

  adaptReverse: (source: Nullable<any>) => any = source => {
    return source
  }
}
