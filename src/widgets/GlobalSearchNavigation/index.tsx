import React from 'react'
import GlobalSearchNavigationContainer from './components/Container'
import styles from './styles/index.module.scss'
import clsx from 'clsx'
import { ThemeColor } from '@/types/theme'
import SearchBar from './components/SearchBar'

type TGlobalSearchNavigation = {
  globalTheme?: ThemeColor
  lang?: string
  searchParams?: any
}

const GlobalSearchNavigation: React.FC<TGlobalSearchNavigation> = async ({
  globalTheme,
  lang,
  searchParams,
}) => {
  return (
    <GlobalSearchNavigationContainer>
      <div className={clsx(styles.globalSearchNavigation, styles[globalTheme ?? 'leaf'])}>
        <h1>Search Results</h1>
        <SearchBar lang={lang} />
      </div>
    </GlobalSearchNavigationContainer>
  )
}

export default GlobalSearchNavigation
