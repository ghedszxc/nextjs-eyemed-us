import type { Meta, StoryObj } from '@storybook/react'
import { getAkamayUrl } from '@/lib/utilities'
import Icon from '../index'

const meta: Meta<typeof Icon> = {
  title: 'UI Elements/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Icon>

export const Leaf: Story = {
  args: {
    type: 'savings',
    color: 'leaf',
    size: 60,
  },
}

export const Grape: Story = {
  args: {
    type: 'family',
    color: 'grape',
    size: 60,
  },
}

export const Lips: Story = {
  args: {
    type: 'lightOn',
    color: 'lips',
    size: 60,
  },
}

export const Sun: Story = {
  args: {
    type: 'bookFlip',
    color: 'sun',
    size: 60,
  },
}

export const Moon: Story = {
  args: {
    type: 'eyeDiagram',
    color: 'moon',
    size: 60,
  },
}

export const CMIcon: Story = {
  args: {
    src: getAkamayUrl(
      '/caas/v1/media/45696/data/b2633417d55b8a2217c3d869b565781c/icon-light-on.svg'
    ),
    color: 'leaf',
    size: 60,
  },
}
