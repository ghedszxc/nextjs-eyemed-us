import type { Meta, StoryObj } from '@storybook/nextjs'
import BlogTopNavigation from '..'

const meta = {
  title: 'Widgets/BlogTopNavigation',
  component: BlogTopNavigation,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof BlogTopNavigation>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
