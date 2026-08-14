'use client'
import clsx from 'clsx'
import style from '../../styles/index.module.scss'
import Button from '@/components/UI/Button'
import Icon from '@/components/UI/Icon'

interface NavSearchProps {
  label?: string
  sticky?: boolean
  onClose?: () => void
}

const NavSearch = ({ label, sticky, onClose }: NavSearchProps) => {
  return (
    <div className={clsx(style.searchWrap, { [style.sticky]: !!sticky })}>
      <form className={clsx(style.search, 'searchbar')} action={'/en-us/search'}>
        <label htmlFor="universal_search">{label || 'search'}</label>
        <input type="text" id="universal_search" name="universal_search" />
        <Button
          type="submit"
          leftIcon={<Icon type="search" />}
          className={style.toggle}
          aria-label="Search"
        />
      </form>
      <Icon type="close" color="gray" className={style.searchClose} onClick={onClose} />
    </div>
  )
}

export default NavSearch
