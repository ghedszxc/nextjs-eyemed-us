import React, { useState } from 'react'
import clsx from 'clsx'
import style from '../../../styles/index.module.scss'
import { IHeader } from '../../../types'
import Icon from '@/components/UI/Icon'
import ConditionalWrapper from '@/components/shared/ConditionalWrapper'
import Anchor from '@/components/shared/Anchor'
import DropdownNavMobile from '../DropdownNavMobile'

interface SecondaryNavMobileProps extends IHeader {
  isExpanded?: boolean
}

const SecondaryNavMobile = ({ pages, isExpanded }: SecondaryNavMobileProps) => {
  const [open, setOpen] = useState(-1)

  const toggleAccordion = (i: number) => {
    setOpen(i === open ? -1 : i)
  }

  return (
    <DropdownNavMobile className={style['tier-2']} isExpanded={isExpanded}>
      {pages?.map((tier2, i) => {
        const tier2Expanded = open === i
        const hasChildren = !!tier2?.pages?.length
        const props = {
          ...(hasChildren
            ? {}
            : { href: tier2?.header?.url, isExternal: tier2?.header?.isExternal }),
        }
        const tier3Pages = hasChildren ? [{ header: tier2.header }, ...(tier2.pages ?? [])] : []

        return (
          <li
            key={`tier2-${i}`}
            className={clsx({ [style.hasChildren]: hasChildren, [style.open]: tier2Expanded })}
            onClick={() => hasChildren && toggleAccordion(i)}
          >
            <ConditionalWrapper
              className={style.tier2Header}
              wrapper="div"
              fallback={Anchor}
              condition={hasChildren}
              {...(props as any)}
            >
              {tier2?.header?.label}
              {hasChildren && <Icon type="caretRight" />}
            </ConditionalWrapper>
            <DropdownNavMobile isExpanded={tier2Expanded} className={style['tier-3']}>
              {tier3Pages.map((tier3, j) => (
                <li key={`tier3-${j}`}>
                  <Anchor
                    href={tier3?.header?.url || '#'}
                    isExternal={tier3?.header?.isExternal}
                    onClick={e => e.stopPropagation()}
                  >
                    {tier3.header?.label}
                  </Anchor>
                </li>
              ))}
            </DropdownNavMobile>
          </li>
        )
      })}
    </DropdownNavMobile>
  )
}

export default SecondaryNavMobile
