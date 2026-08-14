'use client'

import React, { useState } from 'react'
import styles from './styles/index.module.scss'
import Button from '@/components/UI/Button'
import { useRouter, useSearchParams } from 'next/navigation'
import Icon from '@/components/UI/Icon'

const SearchBar = ({ lang }) => {
  const searchParams = useSearchParams()
  const querySearchedKeyword = searchParams?.get('universal_search') || ''
  const router = useRouter()
  const [inputText, setInputText] = useState(querySearchedKeyword)

  return (
    <div className={styles.searchBar}>
      <form className={styles.inputBar} id="search_results_search">
        <input
          onChange={e => setInputText(e?.target?.value)}
          type="text"
          id="results_search"
          name="universal_search"
          value={inputText}
          // onKeyDown={handleKeyDown}
          placeholder=" " // Important: adds a space placeholder
          required
        />
        <label htmlFor="results_search" className={styles.inputLabel}>
          Search *
        </label>
        <Button
          className={styles.searchButton}
          // onClick={handleSearch}
          leftIcon={<Icon type="search" size="17" />}
        ></Button>
      </form>
    </div>
  )
}

export default SearchBar
