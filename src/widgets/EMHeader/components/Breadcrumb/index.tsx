'use client'

import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import style from './styles/index.module.scss'
import { ICta } from '@/models/ICta'
import Anchor from '@/components/shared/Anchor'

interface BreadcrumbProps {
  crumbs?: ICta[]
}

const Breadcrumb = ({ crumbs }: BreadcrumbProps) => {
  const pathname = usePathname()
  const lastSlug = pathname?.split('/').filter(Boolean).pop()
  const hasCrumbs = crumbs && crumbs.length > 1

  return (
    <div
      className={clsx(style.breadcrumb, { [style.noCrumbs]: !hasCrumbs })}
      id="sub-nav-breadcrumb"
      aria-label="Breadcrumb"
      role="navigation"
    >
      {hasCrumbs && (
        <nav className={style.container} aria-label="breadcrumb navigation">
          <ul>
            {crumbs?.map(crumb => {
              const crumbSlug = crumb.url?.split('/').filter(Boolean).pop()
              const isLast = crumbSlug === lastSlug

              return (
                <li className={clsx({ [style.active]: isLast })} key={crumb.label}>
                  {crumb.url && !isLast ? (
                    <Anchor href={crumb.url}>{crumb.label}</Anchor>
                  ) : (
                    crumb.label
                  )}
                </li>
              )
            })}
          </ul>
        </nav>
      )}
    </div>
  )
}

export default Breadcrumb
