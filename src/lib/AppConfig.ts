import parse, { HTMLReactParserOptions } from 'html-react-parser'
import { getAkamayUrl, getCoreMediaUrl, getMediaUrl } from '@/lib/utilities'
import { META_IMAGES_NAMES } from './constants/METATAGS'
import { TPadding } from '@/models/IPadding'
import { FORM_TRANSLATIONS } from '@/lib/constants/FORM_TRANSLATIONS'
import { BLOG_WIDGETS } from './constants/BLOG_CONSTANTS'

const AppConfig = (() => {
  // Newline Parser
  const newLineToHTML = (str: string) => {
    if (typeof str === 'string') {
      return (str || '')?.replace(/&lt;br&gt;/g, '<br />')?.replace(/\n/g, '<br />')
    } else {
      return ''
    }
  }

  const setFragmentLinks = (str: string) => {
    return str.replace(/<p>\s*#([a-zA-Z0-9_-]+)\s*<\/p>/g, '<a name="$1"></a>')
  }

  // HTML Parse
  const html = (str?: string, cleanNewLine = true) => {
    const newLine = cleanNewLine ? newLineToHTML(str || '') : str || ''
    const rawHtml = setFragmentLinks(newLine)

    const options: HTMLReactParserOptions = {
      replace: (domNode: any) => {
        // parse images
        if (domNode?.name === 'img' && domNode?.type === 'tag') {
          const template = domNode?.attribs?.['data-uritemplate']
          if (template) {
            const image = template.replace('{cropName}/{width}/', '')
            domNode.attribs['src'] = getAkamayUrl(image)
          }

          const src = domNode?.attribs?.['data-src']
          if (src) domNode.attribs['src'] = getMediaUrl(src)
        }

        // parse links and footnotes
        if (domNode?.name === 'a' && domNode?.type === 'tag') {
          const template = domNode?.attribs?.['data-href'] || domNode?.attribs?.['href']
          if (template) {
            // parse coremedia urls
            const href = getMediaUrl(getCoreMediaUrl(template))
            domNode.attribs['href'] = href
          }

          const target = domNode?.attribs?.['data-show']
          if (target === 'new') {
            domNode.attribs['target'] = '_blank'
          } else if (target === 'replace' || target === 'embed') {
            domNode.attribs['target'] = '_self'
          }
        }

        return domNode
      },
    }

    return parse(rawHtml, options)
  }

  // Placement Merger
  const mergePlacement = (data: any, newViewType: string, viewTypeToMerge: string[]) => {
    const dataWithId = data?.map((placement: any, key: number) => ({
      ...placement,
    }))

    const ifFirstIndexAvailable = dataWithId?.find(
      (obj: any) => obj?.placements[0]?.viewtype === viewTypeToMerge[0]
    )

    if (!ifFirstIndexAvailable) return null

    const filteredData = dataWithId
      ?.filter((obj: any) => {
        return viewTypeToMerge.includes(obj?.placements[0]?.viewtype)
      })
      ?.map((obj: any) => obj)

    return {
      placements: [
        {
          name: newViewType,
          viewtype: newViewType,
          items: filteredData,
        },
      ],
    }
  }

  // Get Meta Tags
  const getMetaTagsLinks = (metaTagsData?: any): [] => {
    try {
      const html = metaTagsData?.placements[0]?.items[0]?.html
      const image = metaTagsData?.placements[0]?.items[1]?.data?.uri || ''

      const list = html?.split('<meta')?.map((link: any) => {
        const cleanupLink = link?.trim()?.replace(/\\n/g, '')

        const name = (cleanupLink?.split('name="')[1] || '')?.split('"')[0]
        const property = (cleanupLink?.split('property="')[1] || '')?.split('"')[0]

        const isImage = META_IMAGES_NAMES?.some(
          (itemName: string) => itemName === name || itemName === property
        )
        const content = !isImage
          ? (cleanupLink?.split('content="')[1] || '')?.split('"')[0]
          : getAkamayUrl(image || '')

        return { property, content, name }
      })

      list?.shift()

      return list || []
    } catch (err) {
      console.log(err)
      return []
    }
  }

  // Strip elements
  const stripHtml = (html: string) => {
    let tmp = globalThis?.window?.document?.createElement('DIV')

    if (!tmp) return html

    tmp.innerHTML = html
    return tmp.textContent || tmp.innerText || ''
  }

  // Get widget Paddings
  type IBreakPoint = 'lg' | 'md' | 'xl' | 'sm' | 'xs'
  const getWidgetPadding = (padding: TPadding, breakpoint?: IBreakPoint) => {
    if (padding === 'bottom') {
      switch (breakpoint) {
        case 'lg':
          return 'lg:pt-0'
        case 'md':
          return 'md:pt-0'
        case 'xl':
          return 'xl:pt-0'
        case 'sm':
          return 'sm:pt-0'
        case 'xs':
          return 'xs:pt-0'
        default:
          return 'pt-0'
      }
    } else if (padding === 'top') {
      switch (breakpoint) {
        case 'lg':
          return 'lg:pb-0'
        case 'md':
          return 'md:pb-0'
        case 'xl':
          return 'xl:pb-0'
        case 'sm':
          return 'sm:pb-0'
        case 'xs':
          return 'xs:pb-0'
        default:
          return 'pb-0'
      }
    } else {
      return ''
    }
  }

  // Get translated value by type
  const getTranslatedValue = (lang?: string, type?: string) => {
    if (!lang || !type) return 'Missing lang or type'
    return FORM_TRANSLATIONS?.[lang]?.[type] || ''
  }

  /**
   * Determines the correct M16 component name based on viewtype
   * @param viewtype - The viewtype from widgetValue
   * @returns The appropriate M16 component name
   */
  const getM16ComponentName = (viewtype?: string | null): string => {
    switch (viewtype) {
      case BLOG_WIDGETS.m16RichTextCitation:
        return BLOG_WIDGETS.m16RichTextCitation
      case BLOG_WIDGETS.m16RichTextBlogPostNote:
        return BLOG_WIDGETS.m16RichTextBlogPostNote
      case BLOG_WIDGETS.m16blogmediaRight:
        return BLOG_WIDGETS.m16blogmediaRight
      case BLOG_WIDGETS.m16blogmediaLeft:
        return BLOG_WIDGETS.m16blogmediaRight
      case BLOG_WIDGETS.m16blogpostbanner:
        return BLOG_WIDGETS.m16blogpostbanner
      default:
        return BLOG_WIDGETS.m16RichTextArticle
    }
  }

  return {
    html,
    mergePlacement,
    getMetaTagsLinks,
    stripHtml,
    getWidgetPadding,
    getTranslatedValue,
    getM16ComponentName,
  }
})()

export default AppConfig
