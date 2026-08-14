import type { Meta, StoryObj } from '@storybook/nextjs'
import M15 from '..'

const meta = {
  title: 'Widgets/M15',
  component: M15,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof M15>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    theme: 'leaf',
    title: 'Whitepapers',
    items: [
      {
        cta: {
          label: 'State of Vision Whitepaper',
          url: '/',
        },
      },
      {
        cta: {
          label: 'Communication matters whitepaper',
          url: '/',
        },
      },
      {
        cta: {
          label: 'Clear line of sight whitepaper',
          url: '/',
        },
      },
    ],
  },
}
