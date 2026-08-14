import type { Meta, StoryObj } from '@storybook/nextjs'
import BlogSidebarStayConnected from '..'
import SidebarContainer from '@/components/SidebarContainer'

const meta = {
  title: 'Widgets/Blog Sidebar Stay Connected',
  component: BlogSidebarStayConnected,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof BlogSidebarStayConnected>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    icon: '/caas/v1/media/71006/data/6e4f5f81961b8d5f330e35f63a3751a2/icon-mail-envelope.svg',
    subtitle:
      'Sign up to receive vision resources, industry news and insightful blogs for brokers and employers.',
    theme: '#9f248f',
    cta: {
      label: 'STAY CONNECTED',
      url: '/newsletter-signup',
    },
  },
  decorators: Story => (
    <SidebarContainer>
      <Story />
    </SidebarContainer>
  ),
}
