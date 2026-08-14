import { transformAkamaiToCmsUrl } from '@/lib/utilities'
import { IconProps } from '..'
import parse, { attributesToProps, domToReact, HTMLReactParserOptions } from 'html-react-parser'

async function fetchSvgContent(src: string) {
  const isSvg = src?.replaceAll('/', '')?.endsWith('.svg')
  if (!isSvg) return null

  try {
    const url = transformAkamaiToCmsUrl(src)
    const res = await fetch(url, { next: { revalidate: 3600 } }) // cache for 1hr
    if (!res.ok) return null
    const text = await res.text()
    return text.replace(/(\r\n|\n|\r)/gm, '')
  } catch (e) {
    return null
  }
}

export const IconServer = ({ src, color, size, ...props }: IconProps) => {
  const isServer = typeof window === 'undefined'

  const options: HTMLReactParserOptions = {
    replace: (domNode: any) => {
      if (domNode?.type === 'tag' && domNode?.name === 'svg') {
        const svgProps = attributesToProps(domNode.attribs)
        return (
          <svg
            {...svgProps}
            fill={color ? `var(--color-${color})` : undefined}
            style={size ? { width: `${size}px`, height: 'auto' } : undefined}
            {...props}
          >
            {domToReact(domNode.children)}
          </svg>
        )
      }
      return domNode
    },
  }

  const fallback = (
    <svg style={size ? { width: `${size}px`, height: `${size}px` } : undefined} {...props} />
  )

  // SSR icon using src arg (string)
  if (isServer && src) {
    const RenderServerSvg = async () => {
      const markup = await fetchSvgContent(src)
      if (!markup) return fallback
      return parse(markup, options)
    }
    return <RenderServerSvg />
  }

  // fallback
  return fallback
}

export default IconServer
