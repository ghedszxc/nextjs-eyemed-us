import { useState } from 'react'
import clsx from 'clsx'
import { IHeader } from '../../../types'
import style from '../../../styles/index.module.scss'
import Icon from '@/components/UI/Icon'
import Typography from '@/components/UI/Typography'
import SecondaryNavMobile from '../SecondaryNavMobile'

interface PrimaryNavMobileProps extends IHeader {
  showNav?: boolean
}

const PrimaryNavMobile = ({ pages, loginOptions, showNav }: PrimaryNavMobileProps) => {
  const [open, setOpen] = useState(-1)

  const toggleAccordion = (i: number) => {
    setOpen(i === open ? -1 : i)
  }

  return (
    <nav className={clsx({ [style.open]: showNav })} aria-label="mobile primary nav">
      <ul>
        {(loginOptions ? [loginOptions, ...(pages || [])] : pages)?.map((tier1, i) => (
          <li key={`tier1-${i}`} className={clsx(style['tier-1'], { [style.open]: open === i })}>
            <div className={style.tier1Header} onClick={() => toggleAccordion(i)}>
              <Typography as="span" fontSize="md" bold>
                {tier1?.header?.label}
                <Icon type="caretRight" />
              </Typography>
            </div>
            {tier1.pages && <SecondaryNavMobile pages={tier1.pages} isExpanded={open === i} />}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default PrimaryNavMobile
