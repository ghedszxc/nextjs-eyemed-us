'use client'

import Link from 'next/link'
import Image from 'next/image'
import styles from './styles/index.module.scss'

export default function NotFound() {
  return (
    <div className={styles['parent-container']}>
      <div>
        <Image
          src="/images/essilor-compass.svg"
          alt="404 illustration"
          width={100}
          height={100}
          priority
          style={{ marginBottom: '2rem' }}
        />

        <h1>404 - File not found</h1>
        <p>The requested resource does not exist.</p>
        <Link href="/en-us/">BACK TO HOMEPAGE</Link>
      </div>
    </div>
  )
}
