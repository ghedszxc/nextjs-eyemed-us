export const BLOG_CONSTANTS = {
  BLOG_ROOT: 'blog',
  ARTICLES_PER_PAGE: 10,
}

export const BLOG_WIDGETS = {
  blogTopNavigation: 'em top navigation blog',
  blogFeaturedPostCard: 'blog-featured-post-card',
  blogBanner: 'blog-page-main-image-and-info',
  blogCards: 'card-grid',
  blogArticle: 'blog-article',
  m16RichTextArticle: 'm16richtextarticle',
  m16RichTextBlogPostNote: 'm16blogpostnote',
  m16RichTextCitation: 'm16richtextcitation',
  // m16MediaLeftAndRight: 'm16medialeftandright',
  m16blogmediaRight: 'm16blogmediaRight',
  m16blogmediaLeft: 'm16blogmediaLeft',
  m16blogpostbanner: 'm16blogpostbanner',
  blogSidebar: 'blog navigation sidebar',
  blogSidebarFeaturedResources: 'blogsidebarFeaturedResources',
  blogSidebarFeaturedArticle: 'blog side bar featured article',
  blogSidebarStayConnected: 'blogsidebar-stayconnected',
  blogSidebarRelatedArticle: 'blogsidebarRelatedArticle',
  blogSidebarESOW: 'blogsidebarESOW',
  blogReadMore: 'blog-related-posts',
  blogSearchResult: 'em search result list',
}

/**
 * Blog html fragment styles override, since it uses Shadow DOM
 */
export const BLOG_HTML_STYLES = `
  a {
    text-decoration: underline;
  }
`
