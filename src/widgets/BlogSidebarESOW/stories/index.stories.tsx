import type { Meta, StoryObj } from '@storybook/nextjs'
import SideBarFeatureEsow from '..'
import SidebarContainer from '@/components/SidebarContainer'

const meta: Meta<typeof SideBarFeatureEsow> = {
  title: 'Widgets/Blog Sidebar Featured ESOW',
  component: SideBarFeatureEsow,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  decorators: Story => (
    <SidebarContainer>
      <Story />
    </SidebarContainer>
  ),
}
