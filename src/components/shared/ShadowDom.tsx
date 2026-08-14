import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

interface ShadowDomProps {
  children: React.ReactNode
  style?: string
}

const ShadowDom: React.FC<ShadowDomProps> = ({ children, style }) => {
  const hostRef = useRef<HTMLDivElement>(null)
  const [shadowRoot, setShadowRoot] = useState<ShadowRoot | null>(null)

  useEffect(() => {
    const host = hostRef.current
    if (!host) return

    // If a shadow root already exists, reuse it instead of reattaching
    let root = host.shadowRoot
    if (!root) {
      root = host.attachShadow({ mode: 'open' })

      // Load and inject external CSS
      fetch('/css/main.css')
        .then(res => res.text())
        .then(css => {
          const styleEl = document.createElement('style')
          styleEl.textContent = css + (style || '')
          root!.appendChild(styleEl)
          setShadowRoot(root)
        })
        .catch(err => console.error('Failed to load CSS:', err))
    } else {
      // Reuse existing shadow root (e.g. during hot reload)
      setShadowRoot(root)
    }
  }, [])

  useEffect(() => {
    if (!shadowRoot) return

    const scrollToFragment = () => {
      const id = window.location.hash.slice(1)
      const el = shadowRoot?.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    scrollToFragment()

    window.addEventListener('hashchange', scrollToFragment)
    return () => window.removeEventListener('hashchange', scrollToFragment)
  }, [shadowRoot])

  return <div ref={hostRef}>{shadowRoot && createPortal(children, shadowRoot)}</div>
}

export default ShadowDom
