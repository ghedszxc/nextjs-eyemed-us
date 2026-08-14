import type { Meta, StoryObj } from '@storybook/nextjs'
import BlogSidebar from '..'

const meta = {
  title: 'Widgets/Blog Sidebar',
  component: BlogSidebar,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof BlogSidebar>

export default meta
type Story = StoryObj<typeof meta>

/** https://www.eyemed.com/en-us/blog/benefits-101 */
export const CategoryBlogPage: Story = {
  args: {
    featuredResources: {
      title: 'Featured Resources',
      resources: [
        {
          cta: {
            url: 'https://www.eyemed.com/resource/blob/5108/a301cba570aab7b8410e2806d119725b/challenge-the-status-quo-brochure-data-pdf-2203-cb-495-data.pdf',
            label: 'The EyeMed approach',
          },
          hasDownload: true,
          textLimit: 17,
        },
        {
          cta: {
            url: 'https://www.eyemed.com/resource/blob/32700/ba1381a017617c782430aaa0bff8d41e/core-story-overview-member-at-the-center-pdf-2410-cb-614-data.pdf',
            label: 'Core story overview',
          },
          hasDownload: true,
          textLimit: 17,
        },
      ],
    },
    featuredArticle: {
      image:
        'https://www.eyemed.com/resource/image/3612/landscape_ratio10x5/1236/648/8413f6799ba1300ab02d8cc7080cf552/1073D0958C073589847E5BCCEADFD9CC/2020q1-modern-lenses-lc-feature-1-.jpg',
      title: 'Featured Article',
      text: 'Modern lenses for a modern workplace',
      theme: 'leaf',
    },
  },
}

/** https://www.eyemed.com/en-us/blog/benefits-101/understanding-bifocal-and-multifocal-contact-lenses-clear-vision-for-presbyopia-30174 */
export const SingleBlogPage: Story = {
  args: {
    stayConnected: {
      icon: '/caas/v1/media/71006/data/6e4f5f81961b8d5f330e35f63a3751a2/icon-mail-envelope.svg',
      subtitle:
        'Sign up to receive vision resources, industry news and insightful blogs for brokers and employers.',
      theme: '#9f248f',
      cta: {
        label: 'STAY CONNECTED',
        url: '/newsletter-signup',
      },
    },
    relatedArticle: {
      image: {
        url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        alt: 'Two people collaborating with books and tablets',
      },
      title:
        'RELATED ARTICLE: Seeing eye to eye—Understanding generational attitudes improves open enrollment experiences.',
      cta: {
        label: 'READ MORE',
        url: '/article',
      },
    },
  },
}
