import type { Meta, StoryObj } from '@storybook/nextjs'
import M02 from '..'

const meta = {
  title: 'Widgets/M02',
  component: M02,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof M02>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    items: [
      {
        theme: 'grape',
        icon: 'savings',
        text: 'See benefits and savings',
      },
      {
        theme: 'leaf',
        icon: 'family',
        text: 'Buy individual vision insurance',
      },
      {
        theme: 'lips',
        icon: 'lightOn',
        text: '<p>Questions about your benefits? <br /><u><b>Get Answers</b></u></p>',
      },
      {
        theme: 'sun',
        icon: 'bookFlip',
        text: 'A step-by-step guide to understanding your benefits',
      },
    ],
  },
}
