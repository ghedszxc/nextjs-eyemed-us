import type { Meta, StoryObj } from '@storybook/nextjs'
import IconTextWide from '..'

const meta = {
  title: 'Widgets/IconTextWide',
  component: IconTextWide,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof IconTextWide>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    theme: 'sun',
    icon: 'eye',
    title: 'Current providers',
    cta: {
      label: 'learn more',
      url: '',
    },
  },
}
