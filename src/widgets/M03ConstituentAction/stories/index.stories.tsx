import type { Meta, StoryObj } from '@storybook/nextjs'
import M03ConstituentAction from '..'

const meta = {
  title: 'Widgets/M03 Constituent Action',
  component: M03ConstituentAction,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof M03ConstituentAction>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Provider Locator',
    subtitle: 'With thousands of in-network independent eye doctors, top optical retailers, and a variety of online providers, choose the brands and services you want. Use our Provider Locator and filter by what\'s important to you.',
    theme: 'leaf',
    cta: {
      label: 'Find an Eye Doctor',
      url: '/provider-locator',
    },
  },
}
