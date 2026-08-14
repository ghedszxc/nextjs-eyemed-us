import type { Meta, StoryObj } from '@storybook/nextjs'
import BlogFeaturedPostCard from '..'

const meta = {
  title: 'Widgets/BlogFeaturedPostCard',
  component: BlogFeaturedPostCard,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof BlogFeaturedPostCard>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    theme: 'grape',
    date: 'September 9, 2025',
    title: 'Setting sights on the online eyewear experience',
    text: 'Take a closer look at the online eyewear experience',
    url: '/en-us/blog/benefits-101/setting-sights-on-the-online-eyewear-experience-32966',
    picture:
      'https://www.eyemed.com/resource/blob/32968/433a2c85d04ad290debeb11835900ea9/ecommerce-hero-data.jpg',
    subtext: 'Benefits 101',
  },
}
