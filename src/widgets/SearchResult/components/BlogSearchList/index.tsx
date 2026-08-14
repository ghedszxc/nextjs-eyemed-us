import React from 'react'
import { BlogSearch } from '../../types'
import styles from './styles/index.module.scss'
import BlogSearchCard from '../BlogSearchCard'

const BlogSearchList: React.FC<BlogSearch> = ({ blogs = [], theme = 'leaf' }) => {
  return (
    <div className={styles.blogSearchList}>
      {blogs && blogs.map(blog => <BlogSearchCard key={blog?.title} {...blog} theme={theme} />)}
    </div>
  )
}

export default BlogSearchList
