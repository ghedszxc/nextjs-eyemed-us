import type { Meta, StoryObj } from '@storybook/nextjs'
import BlogReadMore from '..'

const meta = {
  title: 'Widgets/BlogReadMore',
  component: BlogReadMore,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof BlogReadMore>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    theme: 'leaf',
    title: 'Read More',
    items: [
      {
        picture: '',
        fallbackImage:
          'https://www.eyemed.com/resource/blob/20654/64b3339d068bdc406641d0675e961e75/lasik-hero-data.jpg',
        text: 'LASIK and other surgeries for vision...',
        url: '/en-us/blog/health-wellness/seeing-and-hearing-as-we-age-32688',
      },
      {
        picture: '',
        fallbackImage:
          'https://www.eyemed.com/resource/blob/32958/00b68db2ba79f9aa6423f5deb7c8a86b/dei-hero-data.jpg',
        text: 'Vision benefits & DEI: expanding access for a...',
        url: '/en-us/blog/health-wellness/engagement-trends-the-growing-value-of-vision-care--32580',
      },
      {
        picture: '',
        fallbackImage:
          'https://www.eyemed.com/resource/image/32828/blog_thumb/180/140/cb5fd5bca12dfb480efb36dee32201fe/06EEC500ABD38FD84787C4657A308227/ma-mitigating-star-ratings-hero.jpg',
        text: 'Vision myths—separating fact from fiction',
        url: '/en-us/blog/health-wellness/optometrists-and-ophthalmologists-see-the-difference-32556',
      },
    ],
  },
}
