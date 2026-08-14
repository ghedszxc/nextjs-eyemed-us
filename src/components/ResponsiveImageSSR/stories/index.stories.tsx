import type { Meta, StoryObj } from '@storybook/nextjs'
import ResponsiveImage from '..'

const meta = {
  title: 'Components / ResponsiveImageSSR',
  component: ResponsiveImage,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ResponsiveImage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    desktop: {
      url: 'https://www.eyemed.com/resource/image/370/heroShort/1593/428/f358bc985faf5a78d0d18f21c951664b/496C18505B167251E4C51E0E78BF4E0C/hero-short.jpg',
      alt: 'Eyemed text',
    },
    mobile: {
      url: 'https://www.eyemed.com/resource/blob/368/a5a47774f3c7440377c5312e1dd5c415/hero-mobile-data.jpg',
      alt: 'Eyemed text',
    },
  },
}
