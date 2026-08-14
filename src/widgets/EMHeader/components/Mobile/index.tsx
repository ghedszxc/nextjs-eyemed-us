'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { IHeader } from '../../types'
import style from '../../styles/index.module.scss'
import Anchor from '@/components/shared/Anchor'
import Icon from '@/components/UI/Icon'
import Button from '@/components/UI/Button'
import PrimaryNavMobile from './PrimaryNavMobile'
import NavSearch from '../NavSearch'

const Mobile = ({ logo, pages, searchLabel, loginOptions }: IHeader) => {
  const pathname = usePathname()
  const category = pathname?.split('/').filter(Boolean)?.[1]?.toLowerCase()
  const isPlural = category?.slice(-1) === 's'

  const loginPages = loginOptions?.pages?.filter(p => {
    const label = p?.header?.label?.toLowerCase() || ''
    return category === `${label + (isPlural ? 's' : '')}`
  })

  const loginCta = {
    ...loginOptions,
    pages: loginPages?.length ? loginPages : loginOptions?.pages,
  }

  const [showNav, setShowNav] = useState(false)
  const [showSearch, setShowSearch] = useState(false)

  useEffect(() => {
    const body = document.body
    const lockNav = 'lock-nav'

    if (showNav) {
      body.classList.add(lockNav)
    } else {
      body.classList.remove(lockNav)
    }

    return () => {
      body.classList.remove(lockNav)
    }
  }, [showNav])

  return (
    <div className={style.mobile}>
      <div className={style.header}>
        <div className={style.menu}>
          <Icon
            type={showNav ? 'close' : 'menu'}
            size={50}
            color="gray"
            onClick={() => setShowNav(prev => !prev)}
          />
        </div>
        <Anchor href={logo?.cta?.url || '/'}>
          <img
            className={style.logo}
            src={logo?.image || '/images/eyemed-logo.svg'}
            alt="EyeMed Logo and Home link"
          />
        </Anchor>
        <Button
          leftIcon={<Icon type="search" size={17} />}
          className={style.toggle}
          onClick={() => setShowSearch(prev => !prev)}
          aria-label="Search"
        />
        <NavSearch
          label={searchLabel}
          sticky={showSearch}
          onClose={() => setShowSearch(prev => !prev)}
        />
      </div>
      <PrimaryNavMobile pages={pages} loginOptions={loginCta} showNav={showNav} />
    </div>
  )
}

export default Mobile
