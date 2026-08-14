'use client'

import { useState } from 'react'
import clsx from 'clsx'
import style from '../../styles/index.module.scss'
import { IHeader } from '../../types'
import Anchor from '@/components/shared/Anchor'
import LoginDropdown from './LoginDropdown'
import PrimaryNavDesktop from './PrimaryNavDesktop'
import NavSearch from '../NavSearch'

const Desktop = ({ logo, pages, cta, searchLabel, loginOptions }: IHeader) => {
  const [open, setOpen] = useState(-1)

  return (
    <div className={style.desktop}>
      <div className={style.container}>
        <div className={style.row}>
          <div className={style.logo}>
            <Anchor href={logo?.cta?.url || '/'}>
              <img src={logo?.image || '/images/eyemed-logo.svg'} alt="EyeMed Logo and Home link" />
            </Anchor>
          </div>
          <div className={style.content}>
            <div className={style.logSearchWrap}>
              <NavSearch label={searchLabel} />
              {cta?.map(link => (
                <Anchor href={link.url || '#'} isExternal={link?.isExternal} key={link.label}>
                  {link.label}
                </Anchor>
              ))}
              {loginOptions && <LoginDropdown {...loginOptions} />}
            </div>
            <nav id="dropdown-nav" className={style.dropdownNav} aria-label="primary nav">
              <div className={clsx(style.dropdownBg, { [style.open]: open !== -1 })}></div>
              <ul className={style.primaryNav}>
                {pages?.map((tier1, i) => (
                  <PrimaryNavDesktop
                    key={`tier1-${i}`}
                    tier1={tier1}
                    isOpen={open === i}
                    onMouseEnter={() => {
                      ;(document?.activeElement as HTMLElement).blur()
                      setOpen(i)
                    }}
                    onMouseLeave={() => setOpen(-1)}
                    onClick={() => setOpen(i)}
                  />
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Desktop
