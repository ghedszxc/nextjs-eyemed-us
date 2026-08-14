'use client'

import { useEffect, useState } from 'react'
import { IconProps } from '..'
import parse, { attributesToProps, domToReact, HTMLReactParserOptions } from 'html-react-parser'

import bookFlip from '@/assets/icons/book-flip.svg'
import callCenter from '@/assets/icons/call-center.svg'
import caretDown from '@/assets/icons/caret-down.svg'
import caretRight from '@/assets/icons/caret-right.svg'
import chat from '@/assets/icons/chat.svg'
import check from '@/assets/icons/check.svg'
import checkmark from '@/assets/icons/checkmark-badge.svg'
import close from '@/assets/icons/close.svg'
import doctor from '@/assets/icons/doctor.svg'
import dollarBill from '@/assets/icons/dollar-bill.svg'
import dollarSign from '@/assets/icons/dollar-sign.svg'
import eyeDiagram from '@/assets/icons/eye-diagram.svg'
import eyemed from '@/assets/icons/eyemed-logo.svg'
import family from '@/assets/icons/family.svg'
import graphLine from '@/assets/icons/graph-line.svg'
import lightOn from '@/assets/icons/light-on.svg'
import laptop from '@/assets/icons/laptop.svg'
import lock from '@/assets/icons/lock.svg'
import mailEnvelope from '@/assets/icons/mail-envelope.svg'
import menu from '@/assets/icons/menu.svg'
import phone from '@/assets/icons/phone.svg'
import savings from '@/assets/icons/savings.svg'
import search from '@/assets/icons/search.svg'
import blog from '@/assets/icons/social-blog.svg'
import facebook from '@/assets/icons/social-facebook.svg'
import instagram from '@/assets/icons/social-instagram.svg'
import linkedin from '@/assets/icons/social-linkedin.svg'
import map from '@/assets/icons/map.svg'
import monitorClick from '@/assets/icons/monitor-click.svg'
import eye from '@/assets/icons/eye.svg'
import eyeGlassesTilt from '@/assets/icons/eye-glasses-tilt.svg'
import eyemedPaper from '@/assets/icons/eyemed-paper.svg'
import eyeGlasses from '@/assets/icons/eye-glasses.svg'
import eyeSwim from '@/assets/icons/eye-swim.svg'
import pinMap from '@/assets/icons/pin-map.svg'
import women from '@/assets/icons/women.svg'
import cart from '@/assets/icons/cart.svg'
import eyemedInsideMonitor from '@/assets/icons/eyemed-inside-monitor.svg'
import pieChartInsideTablet from '@/assets/icons/pie-chart-inside-tablet.svg'
import calendar from '@/assets/icons/calendar.svg'
import group from '@/assets/icons/group.svg'
import newTab from '@/assets/icons/new-tab.svg'
import eyemedDownload from '@/assets/icons/eyemed-download.svg'
import eyeChat from '@/assets/icons/eye-chat.svg'
import download from '@/assets/icons/download.svg'
import fileText from '@/assets/icons/file-text.svg'
import fileVideo from '@/assets/icons/file-video.svg'
import fileImage from '@/assets/icons/file-image.svg'
import fileSales from '@/assets/icons/file-sales.svg'

const svgs = {
  bookFlip,
  calendar,
  callCenter,
  caretDown,
  caretRight,
  cart,
  chat,
  check,
  checkmark,
  close,
  doctor,
  dollarSign,
  dollarBill,
  eyeDiagram,
  eyemed,
  family,
  graphLine,
  group,
  lightOn,
  laptop,
  lock,
  mailEnvelope,
  menu,
  phone,
  savings,
  search,
  blog,
  facebook,
  instagram,
  linkedin,
  map,
  monitorClick,
  eye,
  eyeGlasses,
  eyeGlassesTilt,
  eyemedInsideMonitor,
  eyemedPaper,
  eyeSwim,
  pieChartInsideTablet,
  pinMap,
  women,
  newTab,
  eyemedDownload,
  eyeChat,
  download,
  fileText,
  fileVideo,
  fileImage,
  fileSales,
}

export type IconTypeSVG = keyof typeof svgs

export const IconClient = ({ type, src, color, size, ...props }: IconProps) => {
  const [markup, setMarkup] = useState<string | null>(null)

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

  // CSR icon using type src (via proxy)
  useEffect(() => {
    if (src) {
      fetch(src)
        .then(res => (res.ok ? res.text() : null))
        .then(setMarkup)
        .catch(() => setMarkup(null))
    }
  }, [src])

  // CSR icon using type arg
  if (type) {
    const Icon = svgs[type]
    if (Icon)
      return (
        <Icon
          fill={color ? `var(--color-${color})` : undefined}
          style={size ? { width: `${size}px`, height: 'auto' } : undefined}
          {...props}
        />
      )
  }

  if (markup) return parse(markup, options)

  return <svg style={size ? { width: `${size}px`, height: `${size}px` } : undefined} {...props} />
}

export default IconClient
