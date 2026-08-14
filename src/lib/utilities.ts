import moment from 'moment'
import { ICta } from '@/models/ICta'
import { ICrops } from '../models/ICrops'
import { defaultLocale } from '@/middleware'
import { BLOG_CONSTANTS } from './constants/BLOG_CONSTANTS'

export const getAkamayUrl = (src: string) => {
  let url = ''

  if (src && src.length) {
    const basePath = process.env.AKAMAY_PATH
    if (!basePath) return src

    if (src.indexOf('data:') < 0) {
      if (src.indexOf(':/') >= 0) {
        const path = new URL(src)
        url = (basePath + '/' + path.pathname)
          .split('///')
          .join('/')
          .split('//')
          .join('/')
          .split(':/')
          .join('://')
      } else {
        url = (basePath + '/' + src)
          .split('///')
          .join('/')
          .split('//')
          .join('/')
          .split(':/')
          .join('://')
      }
    } else {
      url = src
    }
  }

  return url
}

export const transformAkamaiToCmsUrl = (url: string) => {
  const akamaiPath = process.env.AKAMAY_PATH
  const cmsPath = process.env.GRAPHQL_URL?.replace('graphql', '')

  if (!akamaiPath || !cmsPath) return url

  return url.replace(akamaiPath, cmsPath)
}

export const getResourceUrl = (url: string, isDownload = false) => {
  try {
    if (!url) return url

    // 1. Check if already a transformed resource blob URL
    const alreadyResource = /^\/resource\/(blob|image)\/\d+\/.+/.test(url)
    if (alreadyResource) {
      // Add ?download only if requested and missing
      if (isDownload && !url.includes('download')) {
        return url.includes('?') ? `${url}&download=1` : `${url}?download=1`
      }
      return url
    }

    const u = new URL(url)
    const pathname = decodeURI(u.pathname)

    // Check if it's a CoreMedia Akamay media URL
    if (!pathname.includes('/caas/v1/media/')) return url

    const parts = pathname.split('/').filter(Boolean)

    // Expected: ["caas", "v1", "media", "{id}", "data", "{folder}", "{filename}"]
    const mediaIndex = parts.indexOf('media')
    if (mediaIndex === -1 || parts.length < mediaIndex + 4) {
      return url
    }

    const id = parts[mediaIndex + 1]
    const pathParts = parts.slice(mediaIndex + 3) // everything after "data"

    // 2. Check for image pattern
    const isImagePattern = pathParts.length >= 4
    if (isImagePattern) {
      const [folder, crop, width, file] = pathParts

      // Must have width and crop to qualify
      if (crop && width) {
        return `/resource/image/${id}/${crop}/${width}/${folder}/${file}`
      }
    }

    // 3. Fallback to blob format
    const blobPath = pathParts.join('/')
    let transformed = `/resource/blob/${id}/${blobPath}`
    if (isDownload) transformed += '?download=1'

    return transformed
  } catch (err) {
    return url
  }
}

interface IGetAdapterViewtype<T> {
  selected?: T
  unselected?: T[]
}

export const getAdapterViewtype = (
  arr: { viewtype: string }[],
  viewtype: string
): IGetAdapterViewtype<any> => {
  return {
    selected: arr.find(item => item.viewtype === viewtype),
    unselected: arr.filter(item => item.viewtype !== viewtype),
  }
}

export const getAdapterImage = (obj: []) => {
  return obj?.map((img: { data?: { uri: string } }) => img?.data?.uri)
}

export const localeSegmentRemoval = (segment: string = '') => {
  // Move to APP CONFIG
  const segmentLocale = segment?.substring(0, 5).replace(/en-us/, '')

  if (segmentLocale === defaultLocale)
    return segment?.replace(`${process.env.NEXT_PUBLIC_CM_SEGMENT}${defaultLocale}`, '')

  if (process.env.NEXT_PUBLIC_CM_SEGMENT) {
    return segment?.replace(process.env.NEXT_PUBLIC_CM_SEGMENT, '')
  } else {
    return segment
  }
}

export const getAnalyticsId = (
  placement?: string,
  level1?: string,
  level2?: string,
  level3?: string
) => {
  if (placement === 'Navigation') {
    placement = 'MainNav'
  }
  return [
    'X_X',
    placement?.split(' ').join(''),
    level1?.split(' ').join(''),
    level2?.split(' ').join(''),
    level3?.split(' ').join(''),
  ]
    .filter(s => !!s)
    .join('_')
}

export interface IAdapterCTAObj {
  callToActionHash?: string
  callToActionText?: string
  target?: {
    id?: string
    type?: string
    url?: string
    openInNewTab?: boolean
    teaserText?: any
    teaserTitle?: string
    title?: string
    name?: string
    navigationPath?: {
      segment?: string
    }[]
    teaserOverlaySettings?: {
      style?: {
        textCls?: string
        color?: string
        backgroundColor?: string
      }
    }
    data: any
  }
}

export const getAdapterCTA = (obj: IAdapterCTAObj[]): ICta[] => {
  return obj?.map((link: IAdapterCTAObj): ICta => {
    const hash = link?.callToActionHash
    const isExternal = link?.target?.type === 'CMExternalLink'

    // File download
    const isFileDownload = link?.target?.type === 'CMDownload'
    if (isFileDownload) {
      return {
        label: link?.callToActionText || '',
        url: getAkamayUrl(link?.target?.data?.uri),
        isExternal: false, // !!isFileDownload,
        isFileDownload: isFileDownload,
      }
    }

    // Normal Url
    const formattedPath =
      link?.target?.navigationPath
        ?.map((path: any) => localeSegmentRemoval(path?.segment))
        ?.join('/') ||
      link?.target?.url ||
      ''

    return {
      label:
        link?.callToActionText ||
        link?.target?.title ||
        link?.target?.teaserTitle ||
        link?.target?.teaserText?.text ||
        link?.target?.name ||
        '',
      url: isExternal
        ? `${link?.target?.url || ''}`
        : `/${formattedPath}${hash ? `#${hash}` : ''}` || '#',
      isExternal: isExternal && !!link?.target?.openInNewTab,
      // ? link?.target?.url?.includes('https://www.eyemed.com/') ||
      //   link?.target?.url?.includes('https://explore.eyemed.com/') ||
      //   link?.target?.url?.includes('https://eyemed.com/')
      //   ? false
      //   : true
      // : false,
      ctaStyle: link?.target?.teaserOverlaySettings?.style?.textCls || '',
    }
  })
}

export const getBlogPagination = (
  page: number,
  hasSidebar: boolean,
  articleCount?: number
): { limit: number; offset: number; totalPages: number } => {
  const BASE_LIMIT = BLOG_CONSTANTS.ARTICLES_PER_PAGE
  const currentPage = Math.max(1, page)
  const isFirstPage = currentPage === 1

  // Articles per page depending on layout
  const firstPageCount = hasSidebar ? BASE_LIMIT - 1 : BASE_LIMIT
  const otherPageCount = hasSidebar ? BASE_LIMIT - 2 : BASE_LIMIT - 1

  // Limit for the current page
  const limit = isFirstPage ? firstPageCount : otherPageCount

  // Offset for pagination
  let offset = 0
  if (currentPage > 1) {
    offset = firstPageCount + (currentPage - 2) * otherPageCount
  }

  // Optional total pages computation
  let totalPages = 0
  if (typeof articleCount === 'number') {
    let remainingArticles = articleCount - firstPageCount
    totalPages = 1

    if (remainingArticles > 0) {
      totalPages += Math.ceil(remainingArticles / otherPageCount)
    }
  }

  return { limit, offset, totalPages }
}

export interface IVideoRawData {
  data?: {
    uri?: string
    dataUrl?: string
  }
}
export const getAdapterVideoUrl = (data: IVideoRawData[]): string[] => {
  return data?.map((image: any) => image?.data?.uri || image?.dataUrl) || []
}

export const getCoreMediaUrl = (str: string) => {
  const prefix = 'coremedia://'
  if (!str.startsWith(prefix)) return str

  const internalLink = str.includes(prefix)
  let pathname = localeSegmentRemoval(str.replace(prefix + '/', '').replace(prefix, ''))
  // if not footnote, add trailing slash for SEO
  if (pathname.charAt(0) !== '#' && pathname.slice(-1) !== '/') {
    pathname += internalLink ? '/' : ''
  }
  return internalLink ? '/' + pathname : pathname
}

export const getMediaUrl = (str: string) => {
  const prefix = 'media:///'
  if (!str.startsWith(prefix)) return str

  const parts = str.replace(prefix, '').split('/')
  const file = parts.pop()

  if (file) {
    // Extract extension (e.g. ".pdf"), if any
    const match = file.match(/(.*?)(\.[a-zA-Z0-9]+)?$/)
    const [, namePart, ext = ''] = match || []

    const formattedName = namePart
      .replace(/\s+/g, '-') // replace spaces with dashes
      .replace(/[^a-zA-Z0-9]+/g, '-') // replace all special characters with dashes
      .replace(/-+/g, '-') // collapse multiple dashes
      .replace(/-$/, '') // remove trailing dash if any
      .toLowerCase()

    const formattedFile = `${formattedName}${ext.toLowerCase()}`
    parts.push(formattedFile)
  }

  return getAkamayUrl(parts.join('/'))
}

export interface IGetAdapterCroppings {
  alt?: string
  crops: ICrops
  uriTemplate: string
}

interface IRawCrops {
  name?: string
  sizes?: any
  minWidth?: string | number
}
export interface ICroppingsRawData {
  crops: IRawCrops[]
  uriTemplate?: string
  alt?: string
  title?: string
  fallbackImage?: string
  isCropped?: boolean
}

export const getAdapterCroppings = (pictures: ICroppingsRawData[]): IGetAdapterCroppings[] => {
  return pictures?.map((story: ICroppingsRawData) => {
    const cropObj: ICrops = {}
    const stories = story?.crops || []

    stories.forEach((crop: IRawCrops) => {
      const index: string = crop?.name || ''
      // const validateSize = crop?.sizes.length > 1

      if (index) cropObj[index] = Math.max(...crop?.sizes.map(size => size.width)) // validateSize ? crop?.sizes[1]?.width : crop?.sizes[0]?.width || ''
    })

    return {
      crops: cropObj,
      uriTemplate: story?.uriTemplate || '',
      alt: story?.alt || story?.title || '',
      fallbackImage: story?.uriTemplate || '',
      isCropped: story?.uriTemplate?.includes('{cropName}'),
    }
  })
}

export const getVideoType = (videoUrl: string): 'youtube' | 'vimeo' | 'mp4' | 'unknown' => {
  if (
    /^(https?:\/\/)?(www\.)?youtube\.com/.test(videoUrl) ||
    /^(https?:\/\/)?(www\.)?youtu\.be/.test(videoUrl)
  ) {
    return 'youtube'
  } else if (
    /^(https?:\/\/)?(www\.)?vimeo\.com/.test(videoUrl) ||
    /^(https?:\/\/)?(www\.)?player\.vimeo\.com/.test(videoUrl)
  ) {
    return 'vimeo'
  } else if (videoUrl?.endsWith('.mp4')) {
    return 'mp4'
  } else {
    return 'unknown'
  }
}

export interface IGetURLMainLogoRawData {
  viewtype: string
  data: {
    uri: string
  }
}
export const getURLMainLogo = (items: IGetURLMainLogoRawData[]) => {
  let URLMainLogo
  ;(items || []).forEach((element: IGetURLMainLogoRawData) => {
    if (element.viewtype === 'OsLogo') {
      URLMainLogo = element.data.uri
      return
    }
  })
  return URLMainLogo
}

export const removeCMTextHyphen = (str: string) => {
  return str === '-' || str === '<div>-</div>' || str === '<div><p>-</p></div>' ? '' : str
}

export const truncateText = (str: string, maxLength?: number) => {
  if (!str || !maxLength || str.length <= maxLength) {
    return str
  }
  return str.slice(0, maxLength) + '...'
}

export const generateId = (input: string) => {
  let result = (input ?? '')
    .replace(/<[^>]*>/g, '') // remove HTML tags
    .replace('-', ' ') // hyphens -> spaces
    .normalize('NFD') // separate accents
    .replace(/[\u0300-\u036f]/g, '') // remove accent marks
    .replace(/[^a-zA-Z0-9 ]/g, '') // remove special chars
    .trim()
    .replace(/\s+/g, '-') // spaces -> hyphens
    .toLowerCase()

  if (!result) {
    return undefined
  }

  // Ensure ID doesn't start with a number
  if (/^[0-9]/.test(result)) {
    result = `section-${result}`
  }

  return result
}

export const getAdapterBlogUrl = (blog: any) => {
  if (!blog?.teaserTargets || !blog?.id) return '#'
  return [getAdapterCTA(blog.teaserTargets)?.[0]?.url || '', `${blog.id}`].join('-')
}

/**
 * Brand color CSS class generator.
 *
 * Values: light, bright, dark, classic
 * Other possible values: moon-text, moon-logo
 *
 * Note: you can override the overall theme by defining a custom value
 * Overall theme (teaser style): leaf
 * Value: h-colors = bright-grape
 * Result: bright-grape-h-colors
 *
 * @param theme - the overall ThemeColor
 * @param brandColors - the brand color settings
 * @returns string[]
 */
export const getBrandColorClasses = (
  theme: string,
  brandColors: Record<string, string>
): string[] => {
  if (!brandColors) return []

  return Object.entries(brandColors || {})
    .filter(([, value]) => !!value)
    .map(([element, value]) => {
      // Allow theme to be overridable thru hyphen separator
      // Example: overall theme is leaf
      // Settings: p-colors = moon-text
      // Result: moon-text-p-colors instead of moon-text-leaf-p-colors
      const finalTheme = value.includes('-') ? value : `${value}-${theme || 'leaf'}`

      return `${finalTheme}-${element}`
    })
}

export const getThemeText = (hex: string) => {
  if (!hex) return null
  if (!hex.startsWith('#')) return hex

  const hexColors = {
    // LEAF
    '#308729': 'leaf',
    '#297323': 'leaf',
    '#227b13': 'leaf',

    // GRAPE
    '#9f248f': 'grape',
    '#8a1f7c': 'grape',

    // LIPS
    '#e40571': 'lips',
    '#cb0465': 'lips',
    '#b5055b': 'lips',

    // SUN
    '#d04800': 'sun',
    '#b73f00': 'sun',
    '#c43400': 'sun',

    // MOON
    '#767777': 'moon',
  }

  return hex ? hexColors[hex] : null
}

export const getFormattedPublishedDate = (dateInput: string): string => {
  if (!dateInput) return dateInput
  const date = moment(dateInput, moment.ISO_8601, true).isValid()
    ? moment(dateInput)
    : moment(dateInput, 'ddd MMM DD HH:mm:ss [UTC] YYYY')
  return date.format('MMMM D, YYYY')
}

export const getComponentImageCropping = (type: string, images: ICroppingsRawData[]) => {
  let desktopImg
  let mobileImg

  const validateIcon = images?.[0]?.uriTemplate?.includes('svg')
  const cmDesktopImg = getAdapterCroppings(images)?.[!validateIcon ? 0 : 1]
  const cmMobileImg = getAdapterCroppings(images)?.[!validateIcon ? 1 : 2]

  const imageType = {
    M04: ['square_ratio1x1', 'landscape_ratio9x6'], // index 0: tablet & desktop; index 1: mobile
    M05: ['portrait_ratio6x9', 'landscape_ratio9x6'],
    BlogSidebarRelatedArticle: ['square_ratio1x1', 'square_ratio1x1'],
    BlogFeaturedPostCard: ['landscape_ratio10x5', 'landscape_ratio10x5'],
  }

  const desktopImgRatio = cmDesktopImg?.crops[imageType[type]?.[0]]?.toString()
  const mobileImgRatio = cmMobileImg
    ? cmMobileImg?.crops[imageType[type]?.[1]]
    : cmDesktopImg?.crops[imageType[type]?.[1]]

  const isDesktopCroppingExist = Object.keys(cmDesktopImg?.crops)?.length ? true : false
  const isMobileCroppingExist =
    cmMobileImg && Object.keys(cmMobileImg?.crops)?.length ? true : false

  if (cmMobileImg) {
    desktopImg = {
      url: getAkamayUrl(
        isDesktopCroppingExist
          ? cmDesktopImg?.uriTemplate
              ?.replace('{cropName}', imageType[type]?.[0])
              ?.replace('{width}', desktopImgRatio)
          : cmDesktopImg?.uriTemplate
      ),
      alt: cmDesktopImg?.alt || '',
      isCropped: isDesktopCroppingExist,
    }

    mobileImg = {
      url: getAkamayUrl(
        isMobileCroppingExist
          ? cmMobileImg?.uriTemplate
              ?.replace('{cropName}', imageType[type]?.[1])
              ?.replace('{width}', mobileImgRatio?.toString())
          : cmMobileImg?.uriTemplate
      ),
      alt: cmMobileImg?.alt || '',
      isCropped: isMobileCroppingExist,
    }
  } else {
    desktopImg = {
      url: getAkamayUrl(
        isDesktopCroppingExist
          ? cmDesktopImg?.uriTemplate
              ?.replace('{cropName}', imageType[type]?.[0])
              ?.replace('{width}', desktopImgRatio)
          : cmDesktopImg?.uriTemplate
      ),
      alt: cmDesktopImg?.alt || '',
      isCropped: isDesktopCroppingExist,
    }

    mobileImg = {
      url: getAkamayUrl(
        isDesktopCroppingExist
          ? cmDesktopImg?.uriTemplate
              ?.replace('{cropName}', imageType[type]?.[1])
              ?.replace('{width}', mobileImgRatio?.toString())
          : cmDesktopImg?.uriTemplate
      ),
      alt: cmDesktopImg?.alt || '',
      isCropped: isDesktopCroppingExist,
    }
  }

  return {
    desktopImg,
    mobileImg,
  }
}

export const trackCTAClicks = (label: string) => {
  try {
    let _dl = window._dl
    _dl = Object.assign(_dl, {
      site_events: {
        call_to_action: 'true',
      },
      cta_name: label || '',
    })
    window._trackAnalytics(_dl)
  } catch (err) {
    console.error(err)
  }
}
