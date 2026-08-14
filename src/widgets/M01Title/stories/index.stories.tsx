import type { Meta, StoryObj } from '@storybook/nextjs'
import M01Title from '..'

const meta = {
  title: 'Widgets/M01 Title and Paragraph',
  component: M01Title,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof M01Title>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    theme: 'leaf',
    bannerTitle: 'EyeMed Perks',
    bannerText:
      '<p>Being an EyeMed member has its perks.  We work to create a vivid member experience. We add choices. We invent savings, and we simplify at every turn. Just for you.</p>',
  },
}

export const BillOfRightsSample: Story = {
  args: {
    theme: 'grape',
    bannerTitle: 'Member Bill of Rights',
    bannerText: '',
  },
}

export const MediaResourcesSample: Story = {
  args: {
    theme: 'leaf',
    bannerTitle: 'EyeMed Media \n Resources',
    bannerText: '<p>Welcome. We’re so glad you stopped by to learn about EyeMed Vision Care.</p>',
  },
}
