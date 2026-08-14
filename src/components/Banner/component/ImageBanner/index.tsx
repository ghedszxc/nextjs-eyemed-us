'use client'
import React from 'react'
import clsx from 'clsx'
import styles from '../../styles/index.module.scss'
import { ThemeColor, TWidgetImages } from '@/types/theme'
import ResponsiveImageSSR from '@/components/ResponsiveImageSSR'
import Typography from '@/components/UI/Typography'
import AppConfig from '@/lib/AppConfig'
import Button from '@/components/UI/Button'
import Anchor from '@/components/shared/Anchor'
import { trackCTAClicks } from '@/lib/utilities'

type TImageBanner = {
  images?: TWidgetImages
  isCard?: boolean
  title?: string
  text?: string
  theme?: ThemeColor
  customStyle?: React.CSSProperties
  ctas?: {
    href: string
    text?: string
    isExternal?: boolean
    ctaStyle?: string
  }[]
  links?: { href?: string; text?: string }[]
}

const ImageBanner: React.FC<TImageBanner> = ({
  images,
  isCard,
  title = '',
  text = '',
  theme = 'leaf',
  customStyle = {},
  ctas = [],
  links = [],
}) => {
  return (
    <div className={clsx(styles['banner'])} style={customStyle}>
      {images && (
        <ResponsiveImageSSR
          classNames={styles['image']}
          desktop={images?.desktop}
          mobile={images?.mobile}
        />
      )}
      <div className={styles['content']}>
        <div className={styles['content__container']}>
          {title !== '' && (
            <div
              className={clsx(
                styles['content__wrapper'],
                isCard ? styles['card'] : styles['default'],
                styles[theme]
              )}
            >
              <Typography lineHeight="1.077" as={'h1'}>
                {title}
              </Typography>
              <div className={styles['description']}>{AppConfig.html(text)}</div>
              {ctas && (
                <div className={styles['ctas']}>
                  {ctas?.map(cta =>
                    cta?.ctaStyle === 'default' ? (
                      <Button
                        theme={theme}
                        variant={isCard ? 'secondary' : 'primary'}
                        key={cta?.href}
                        href={cta?.href}
                        className={styles['cta_button']}
                        isExternal={cta?.isExternal || false}
                        animate={true}
                        onClick={() => {
                          trackCTAClicks(cta?.text || '')
                        }}
                      >
                        {cta?.text}
                      </Button>
                    ) : (
                      <Anchor
                        href={cta?.href}
                        className={styles['cta_button_link']}
                        target={cta?.isExternal ? '_blank' : undefined}
                        key={cta?.href}
                      >
                        {cta?.text}
                        <svg
                          className={styles['link-carret']}
                          aria-hidden="true"
                          data-prefix="fas"
                          data-icon="caret-right"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 192 512"
                          data-fa-i2svg=""
                          aria-label="caret right"
                        >
                          <path
                            fill="white"
                            d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"
                          ></path>
                        </svg>
                      </Anchor>
                    )
                  )}
                </div>
              )}
              {links?.length !== 0 && (
                <div className={styles['hyperLinks']}>
                  {links?.map((link, key) => (
                    <Anchor key={key} href={link?.href || ''}>
                      {link?.text}
                    </Anchor>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ImageBanner
