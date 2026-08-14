import type { Meta, StoryObj } from '@storybook/react'
import Typography from '../index'

const meta: Meta<typeof Typography> = {
  title: 'UI Elements/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Typography>

/** fontSize: md */
export const Default: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet',
    as: 'p',
    fontSize: 'md',
  },
}

/** fontSize: 8xl */
export const Heading1Large: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet',
    as: 'h1',
    fontSize: '8xl',
  },
}

/** fontSize: 7xl */
export const Heading1Default: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet',
    as: 'h1',
    fontSize: '7xl',
  },
}

/** fontSize: 6xl */
export const Heading2: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet',
    as: 'h2',
    fontSize: '6xl',
  },
}

/** fontSize: 5xl */
export const Heading3: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet',
    as: 'h3',
    fontSize: '5xl',
  },
}

/** fontSize: 4xl */
export const Heading4: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet',
    as: 'h4',
    fontSize: '4xl',
  },
}

/** fontSize: 3xl */
export const Heading5: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet',
    as: 'h5',
    fontSize: '3xl',
  },
}

/** fontSize: 2xl */
export const Heading6: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet',
    as: 'h6',
    fontSize: '2xl',
  },
}

/** fontSize: xl */
export const BodyXL: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet',
    fontSize: 'xl',
  },
}

/** fontSize: lg */
export const BodyLarge: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet',
    fontSize: 'lg',
  },
}

/** fontSize: md */
export const BodyMedium: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet',
    fontSize: 'md',
  },
}

/** fontSize: sm */
export const Tag2: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet',
    fontSize: 'sm',
  },
}

/** fontSize: xs */
export const Tag1: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet',
    fontSize: 'xs',
  },
}
