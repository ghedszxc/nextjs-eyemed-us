import type { Meta, StoryObj } from '@storybook/nextjs'
import M16RichTextBlogPostNote from '..'

const meta = {
  title: 'Widgets/M16 Rich Text Blog Post Note',
  component: M16RichTextBlogPostNote,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof M16RichTextBlogPostNote>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Looking ahead to 2050:²',
    body: '<ul><li>It\'s estimated that half the world will be living with myopia, a condition where the person can see near objects clearly but far objects are blurry</li><li>Blindness rates will be 50% higher</li></ul>',
    theme: 'grape',
  },
}
