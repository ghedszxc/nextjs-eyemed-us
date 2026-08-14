'use client'

import { IBlogSidebar } from './types'
import BlogFeaturedResources from '../BlogFeaturedResources'
import SideBarFeaturedArticle from '../BlogSidebarFeaturedArticle'
import SideBarFeatureEsow from '../BlogSidebarESOW'
import BlogSidebarStayConnected from '../BlogSidebarStayConnected'
import BlogSidebarRelatedArticle from '../BlogSidebarRelatedArticle'
import SidebarContainer from '@/components/SidebarContainer'
import SidebarContent from '@/components/SidebarContainer/components/SidebarContent'

const BlogSidebar = ({
  featuredResources,
  featuredArticle,
  featuredEsow,
  stayConnected,
  relatedArticle,
}: IBlogSidebar) => {
  return (
    <SidebarContainer>
      {featuredResources && (
        <>
          <SidebarContent>
            <BlogFeaturedResources {...featuredResources} />
          </SidebarContent>
          <SidebarContent></SidebarContent>
        </>
      )}
      {featuredArticle && (
        <SidebarContent>
          <SideBarFeaturedArticle {...featuredArticle} />
        </SidebarContent>
      )}
      {featuredEsow && (
        <SidebarContent>
          <SideBarFeatureEsow {...featuredEsow} />
        </SidebarContent>
      )}
      {stayConnected && (
        <SidebarContent>
          <BlogSidebarStayConnected {...stayConnected} />
        </SidebarContent>
      )}
      {relatedArticle && (
        <SidebarContent>
          <BlogSidebarRelatedArticle {...relatedArticle} />
        </SidebarContent>
      )}
    </SidebarContainer>
  )
}

export default BlogSidebar
