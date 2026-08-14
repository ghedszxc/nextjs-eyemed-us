'use client'

import React, { useEffect } from 'react'
import ShadowDom from '@/components/shared/ShadowDom'
import AppConfig from '@/lib/AppConfig'
import { IHtmlFragment } from './types'
import { BLOG_HTML_STYLES } from '@/lib/constants/BLOG_CONSTANTS'

const HtmlFragment = React.memo(({ content, pageType }: IHtmlFragment) => {
  if (!content) return null

  const isBlog = pageType === 'blog'

  /**
   * Handles clicking on in-page fragment links (e.g., <a href="#section">)
   * so that repeated clicks on the same fragment still trigger scrolling.
   */
  useEffect(() => {
    const onClick = (e: Event) => {
      const target = e.target as HTMLElement
      if (!target) return

      const anchor = target.closest('a')
      if (!anchor) return

      const href = anchor.getAttribute('href')
      if (!href || !href.startsWith('#')) return

      const id = href.slice(1)

      history.replaceState(null, '', window.location.pathname + window.location.search)
      setTimeout(() => {
        history.replaceState(null, '', '#' + id)
      }, 10)
    }

    window.addEventListener('click', onClick)

    return () => {
      window.removeEventListener('click', onClick)
    }
  }, [])

  return (
    <ShadowDom style={isBlog ? BLOG_HTML_STYLES : undefined}>
      {AppConfig.html(content, false)}
    </ShadowDom>
  )
})

HtmlFragment.displayName = 'HtmlFragment'

export default HtmlFragment
