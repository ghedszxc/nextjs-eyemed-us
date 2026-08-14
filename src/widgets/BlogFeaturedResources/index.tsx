import { IBlogFeaturedResources } from './types'
import style from './styles/index.module.scss'
import Resource from '@/components/Resource'

const BlogFeaturedResources = ({ title, resources }: IBlogFeaturedResources) => {
  return (
    <div className={style['blog-featured-resources']}>
      <h5 className={style.title}>{title}</h5>
      {resources?.map((resource, i) => (
        <Resource key={`resource-${i}`} className={style.resource} {...resource} />
      ))}
    </div>
  )
}

export default BlogFeaturedResources
