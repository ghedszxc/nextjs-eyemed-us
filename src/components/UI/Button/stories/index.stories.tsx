import type { Meta, StoryObj } from '@storybook/react'
import Button from '../index'

const meta: Meta<typeof Button> = {
  title: 'UI Elements/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Button>

export const Leaf: Story = {
  args: {
    children: 'Lorem ipsum',
    theme: 'leaf',
  },
}

export const Grape: Story = {
  args: {
    children: 'Lorem ipsum',
    theme: 'grape',
  },
}

export const Lips: Story = {
  args: {
    children: 'Lorem ipsum',
    theme: 'lips',
  },
}

export const Sun: Story = {
  args: {
    children: 'Lorem ipsum',
    theme: 'sun',
  },
}

export const Moon: Story = {
  args: {
    children: 'Lorem ipsum',
    theme: 'moon',
  },
}

export const LeafSecondary: Story = {
  args: {
    children: 'Lorem ipsum',
    theme: 'leaf',
    variant: 'secondary',
  },
}

export const GrapeSecondary: Story = {
  args: {
    children: 'Lorem ipsum',
    theme: 'grape',
    variant: 'secondary',
  },
}

export const LipsSecondary: Story = {
  args: {
    children: 'Lorem ipsum',
    theme: 'lips',
    variant: 'secondary',
  },
}

export const SunSecondary: Story = {
  args: {
    children: 'Lorem ipsum',
    theme: 'sun',
    variant: 'secondary',
  },
}

export const MoonSecondary: Story = {
  args: {
    children: 'Lorem ipsum',
    theme: 'moon',
    variant: 'secondary',
  },
}
