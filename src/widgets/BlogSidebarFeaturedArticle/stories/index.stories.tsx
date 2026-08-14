import type { Meta, StoryObj } from '@storybook/nextjs'
import SidebarFeaturedArticle from '..'
import SidebarContainer from '@/components/SidebarContainer'
// import styles from './storybook.module.scss'

const meta: Meta<typeof SidebarFeaturedArticle> = {
  title: 'Widgets/Blog Sidebar Featured Article',
  component: SidebarFeaturedArticle,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    image:
      'https://www.eyemed.com/resource/image/3612/landscape_ratio10x5/1236/648/8413f6799ba1300ab02d8cc7080cf552/1073D0958C073589847E5BCCEADFD9CC/2020q1-modern-lenses-lc-feature-1-.jpg',
    title: 'Featured Article',
    text: 'Modern lenses for a modern workplace',
    theme: 'leaf',
  },
  decorators: Story => (
    <SidebarContainer>
      <Story />
    </SidebarContainer>
  ),
}
