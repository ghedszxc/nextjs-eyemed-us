import React from 'react'
import style from './styles/index.module.scss'
import { ThemeColor } from '@/types/theme'
import clsx from 'clsx'
import AppConfig from '@/lib/AppConfig'
import Anchor from '@/components/shared/Anchor'

type TSearchItem = {
  text: string
  exerp?: string
  image?: {
    url: string
    alt?: string
  }
  url: string
  isExternal?: boolean
  theme?: ThemeColor
}

const SearchResultItem: React.FC<TSearchItem> = ({
  text,
  image = undefined,
  url,
  isExternal = false,
  theme = 'leaf',
  exerp = '',
}) => {
  const words = text.split(' ')
  const firstWord = words[0]

  return (
    <Anchor
      href={url}
      target={isExternal ? '_blank' : undefined}
      className={clsx(style.searchResultItem, style[theme])}
    >
      <div className={style.resultContent}>
        {/* {image && (
          <div className={style.imageWrapper}>
            <img src={image?.url} alt={image?.alt} />
          </div>
        )} */}
        <div className={clsx(style.textContent, firstWord?.length > 14 && style.truncate)}>
          <h2>{text}</h2>
          <div className={style.exerp}>{AppConfig?.html(exerp || '')}</div>
        </div>
      </div>
      <div className={style.buttonSvg}>
        <svg
          aria-hidden="true"
          data-prefix="fas"
          aria-label="external-link-alt"
          data-icon="external-link-alt"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path d="M576 24v127.984c0 21.461-25.96 31.98-40.971 16.971l-35.707-35.709-243.523 243.523c-9.373 9.373-24.568 9.373-33.941 0l-22.627-22.627c-9.373-9.373-9.373-24.569 0-33.941L442.756 76.676l-35.703-35.705C391.982 25.9 402.656 0 424.024 0H552c13.255 0 24 10.745 24 24zM407.029 270.794l-16 16A23.999 23.999 0 0 0 384 303.765V448H64V128h264a24.003 24.003 0 0 0 16.97-7.029l16-16C376.089 89.851 365.381 64 344 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V287.764c0-21.382-25.852-32.09-40.971-16.97z"></path>
        </svg>
      </div>
    </Anchor>
  )
}

export default SearchResultItem
