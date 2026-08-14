import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import style from '../../../styles/index.module.scss'
import { Page } from '../../../types'
import ConditionalWrapper from '@/components/shared/ConditionalWrapper'
import Anchor from '@/components/shared/Anchor'
import Icon from '@/components/UI/Icon'

const LoginDropdown = ({ header, pages }: Page) => {
  const pathname = usePathname()
  const category = pathname?.split('/').filter(Boolean)?.[1]?.toLowerCase()
  const isPlural = category?.slice(-1) === 's'

  const loginPage = pages?.find(p => {
    const label = p?.header?.label?.toLowerCase() || ''
    return category === `${label + (isPlural ? 's' : '')}`
  })?.header?.url

  const hasOptions = !loginPage && pages && pages.length > 0
  const props = {
    ...(hasOptions ? {} : { href: loginPage ?? header?.url }),
  }

  return (
    <ConditionalWrapper
      className={clsx(style.login, { [style.noOptions]: !hasOptions })}
      wrapper="button"
      fallback={Anchor}
      condition={hasOptions}
      {...(props as any)}
    >
      <Icon type="lock" className={style.lockIcon} />
      {header?.label}
      {hasOptions && <Icon type="caretDown" className={style.caretDown} />}
      {hasOptions && (
        <ul className={style.dropdown}>
          {pages.map(page => (
            <li key={page.header?.label}>
              <Anchor href={page.header?.url || '#'} isExternal={page?.header?.isExternal}>
                {page.header?.label}
                <Icon type="caretRight" />
              </Anchor>
            </li>
          ))}
        </ul>
      )}
    </ConditionalWrapper>
  )
}

export default LoginDropdown
