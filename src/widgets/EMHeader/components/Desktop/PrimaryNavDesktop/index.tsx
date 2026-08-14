import clsx from 'clsx'
import style from '../../../styles/index.module.scss'
import { Page } from '../../../types'
import Icon from '@/components/UI/Icon'
import Anchor from '@/components/shared/Anchor'

interface PrimaryNavDesktopProps {
  tier1: Page
  isOpen?: boolean
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  onClick?: () => void
}

const PrimaryNavDesktop = ({
  tier1,
  isOpen,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: PrimaryNavDesktopProps) => {
  const theme = style?.[tier1?.color || ''] || ''

  return (
    <li
      className={clsx(style['tier-1'], theme, { [style.open]: !!isOpen })}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onBlur={e => {
        if (e.currentTarget.contains(e.relatedTarget)) return
        onMouseLeave && onMouseLeave()
      }}
    >
      <button aria-haspopup="true" aria-expanded={!!isOpen} onClick={onClick}>
        {tier1?.header?.label}
        <Icon type="caretDown" />
      </button>
      <div className={style.secondaryNav}>
        <div className={style.container}>
          <ul className={style.columnWrap}>
            {tier1?.pages?.map((tier2, i) => (
              <li className={style['tier-2']} key={`tier2-${i}`}>
                <Anchor
                  href={tier2?.header?.url || '#'}
                  isExternal={tier2?.header?.isExternal}
                  className={style.columnHeader}
                >
                  {tier2?.header?.label}
                  <Icon type="caretRight" />
                </Anchor>
                {tier2?.pages && (
                  <ul>
                    {tier2.pages.map((tier3, j) => (
                      <li key={`tier3-${j}`}>
                        <Anchor
                          href={tier3?.header?.url || '#'}
                          isExternal={tier3?.header?.isExternal}
                          className={style.rowLink}
                        >
                          {tier3?.header?.label}
                        </Anchor>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  )
}

export default PrimaryNavDesktop
