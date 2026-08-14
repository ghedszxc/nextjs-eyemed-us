import type { Meta, StoryObj } from '@storybook/nextjs'
import M16BlogPostBanner from '..'

const meta = {
  title: 'Widgets/M16 Blog Post Banner',
  component: M16BlogPostBanner,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof M16BlogPostBanner>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'This article is intended for our\nHealth & Ancillary Partners',
    theme: 'grape',
  },
}
