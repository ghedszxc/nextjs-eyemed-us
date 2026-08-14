'use client'

// Modules
import { IBlogTopNavigation } from './types'
import styles from './styles/index.module.scss'
import { ThemeColor } from '@/types/theme'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

// Components
import Button from '@/components/UI/Button'
import Anchor from '@/components/shared/Anchor'

const BlogTopNavigation = ({
  theme,
  icon,
  title,
  searchTitle,
  placeholder,
  cta,
  items,
}: IBlogTopNavigation) => {
  // Hooks
  const router = useRouter()
  const pathname = usePathname()?.slice(0, -1)
  const searchParams = useSearchParams()?.get('blog_search')

  // State
  const [searchKeyword, setSearchKeyWord] = useState('')
  const [selectedValue, setSelectedValue] = useState(pathname)
  const [submitAction, setSubmitAction] = useState('')

  // Variables
  // Functions
  const handleSearch = (event: any) => {
    event.preventDefault()

    if (!searchKeyword) {
      setSubmitAction('empty field')
    } else {
      setSubmitAction('')
      router.push(`/en-us/blog/search-results/?blog_search=${searchKeyword}`)
    }
  }

  function onSelectCategory(event: any) {
    const value = event.target.value

    setSelectedValue(value)
    router.push(value)
  }
  // Effects
  useEffect(() => {
    if (pathname == '/en-us/blog/search-results') setSearchKeyWord(searchParams || '')
  }, [pathname, searchParams])

  useEffect(() => {
    if (searchKeyword && submitAction) setSubmitAction('')
  }, [searchKeyword, submitAction])

  return (
    <div className={styles['blog_top_navigation']}>
      <div className={styles[`blog_container_${theme}`]}>
        <div className={styles['blog_header']}>
          <a href={items?.[0]?.url}>
            {icon && (
              <img
                src={icon}
                alt="Icon of a speech bubble with an eye symbol in it"
                className={clsx(styles['blog_header__icon'])}
              />
            )}
            <h1 className={clsx(styles[`blog_header__title_${theme}`])}>
              {pathname != '/en-us/blog/search-results' ? title : searchTitle}
            </h1>
          </a>

          <form onSubmit={handleSearch} className={styles['blog_header__secondDiv']}>
            <div className={styles['blog_header__divInput']}>
              <input
                type="text"
                id="blog_search"
                placeholder={placeholder}
                className={clsx(
                  styles['blog_header__input'],
                  submitAction && styles['input_is_empty']
                )}
                onChange={e => {
                  setSearchKeyWord(e?.target?.value)
                }}
                value={searchKeyword}
              />
              <label htmlFor="blog_search">{placeholder}</label>
            </div>
            <Button
              type="submit"
              theme={theme as ThemeColor}
              variant="primary"
              className={styles[`blog_header__btn_${theme}`]}
            >
              {cta?.label}
            </Button>
          </form>
        </div>

        <nav className={styles['blog_footer']} aria-label="blog nav">
          {items?.map(({ url, label }, key) => (
            <Anchor
              key={key}
              href={url || '#'}
              className={clsx(
                styles['blog_footer__anchor'],
                styles[pathname == url ? `blog_footer__anchor_bold_${theme}` : '']
              )}
            >
              {label}
            </Anchor>
          ))}
          <select defaultValue={selectedValue} onChange={onSelectCategory}>
            <option value="">Pick A Category</option>
            {items?.map(({ url, label }, index) => (
              <option value={url} key={index}>
                {label}
              </option>
            ))}
          </select>
        </nav>
      </div>
    </div>
  )
}
export default BlogTopNavigation
