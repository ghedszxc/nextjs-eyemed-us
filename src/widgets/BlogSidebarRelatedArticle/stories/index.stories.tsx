import type { Meta, StoryObj } from '@storybook/nextjs'
import BlogSidebarRelatedArticle from '..'
import SidebarContainer from '@/components/SidebarContainer'

const meta = {
  title: 'Widgets/Blog Sidebar Related Article',
  component: BlogSidebarRelatedArticle,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof BlogSidebarRelatedArticle>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
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
  decorators: Story => (
    <SidebarContainer>
      <Story />
    </SidebarContainer>
  ),
}
