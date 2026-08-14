import type { Meta, StoryObj } from '@storybook/nextjs'
import BlogCards from '..'

const meta: Meta<typeof BlogCards> = {
  title: 'Widgets/BlogCards',
  component: BlogCards,
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    theme: 'leaf',
    articleCount: 3,
    cards: [
      {
        imageSrc:
          'https://www.eyemed.com/resource/blob/20654/64b3339d068bdc406641d0675e961e75/lasik-hero-data.jpg',
        category: 'BENEFITS 101',
        title: 'LASIK and other surgeries for vision correction',
        description: `
Learn who is a good candidate for LASIK and how EyeMed helps with the cost.`,
        link: '/blogs/lasik-and-other-surgeries-for-vision-correction',
      },
      {
        imageSrc:
          'https://www.eyemed.com/resource/blob/32848/de63ca97b7f6ae2ec1ef5be9ad17c59f/digital-tool-hero-data.jpg',
        category: 'WORKING WITH US',
        date: 'September 2, 2025',
        title: 'How digital tools empower smarter benefit...',
        description:
          'Up to 53% of employees regret their benefit choices. See how interactive decision tools can help.',
        link: '/blog/working-with-us/how-digital-tools-empower-smarter-benefit-decisions-before-and-after-open-enrollment--32844',
      },
      {
        imageSrc:
          'https://www.eyemed.com/resource/blob/32730/805e9c3fc53e42806aa7b0adad511f69/eye360-hero-2025-data.jpg',
        category: 'BENEFITS 101',
        date: 'April 17, 2025',
        title: 'Eye360 puts members at the center of savings and...',
        description:
          'Healthcare costs are on the rise. Eye360 was created to help members save without limiting choice.',
        link: '/blog/working-with-us/how-digital-tools-empower-smarter-benefit-decisions-before-and-after-open-enrollment--32844',
      },
      {
        imageSrc:
          'https://www.eyemed.com/resource/blob/20654/64b3339d068bdc406641d0675e961e75/lasik-hero-data.jpg',
        category: 'BENEFITS 101',
        title: 'LASIK and other surgeries for vision correction',
        description: `
Learn who is a good candidate for LASIK and how EyeMed helps with the cost.`,
        link: '/blogs/lasik-and-other-surgeries-for-vision-correction',
      },
      {
        imageSrc:
          'https://www.eyemed.com/resource/blob/32848/de63ca97b7f6ae2ec1ef5be9ad17c59f/digital-tool-hero-data.jpg',
        category: 'WORKING WITH US',
        date: 'September 2, 2025',
        title: 'How digital tools empower smarter benefit...',
        description:
          'Up to 53% of employees regret their benefit choices. See how interactive decision tools can help.',
        link: '/blog/working-with-us/how-digital-tools-empower-smarter-benefit-decisions-before-and-after-open-enrollment--32844',
      },
      {
        imageSrc:
          'https://www.eyemed.com/resource/blob/32730/805e9c3fc53e42806aa7b0adad511f69/eye360-hero-2025-data.jpg',
        category: 'BENEFITS 101',
        date: 'April 17, 2025',
        title: 'Eye360 puts members at the center of savings and...',
        description:
          'Healthcare costs are on the rise. Eye360 was created to help members save without limiting choice.',
        link: '/blog/working-with-us/how-digital-tools-empower-smarter-benefit-decisions-before-and-after-open-enrollment--32844',
      },
      {
        imageSrc:
          'https://www.eyemed.com/resource/blob/32848/de63ca97b7f6ae2ec1ef5be9ad17c59f/digital-tool-hero-data.jpg',
        category: 'WORKING WITH US',
        date: 'September 2, 2025',
        title: 'How digital tools empower smarter benefit...',
        description:
          'Up to 53% of employees regret their benefit choices. See how interactive decision tools can help.',
        link: '/blog/working-with-us/how-digital-tools-empower-smarter-benefit-decisions-before-and-after-open-enrollment--32844',
      },
      {
        imageSrc:
          'https://www.eyemed.com/resource/blob/32730/805e9c3fc53e42806aa7b0adad511f69/eye360-hero-2025-data.jpg',
        category: 'BENEFITS 101',
        date: 'April 17, 2025',
        title: 'Eye360 puts members at the center of savings and...',
        description:
          'Healthcare costs are on the rise. Eye360 was created to help members save without limiting choice.',
        link: '/blog/working-with-us/how-digital-tools-empower-smarter-benefit-decisions-before-and-after-open-enrollment--32844',
      },
      {
        imageSrc:
          'https://www.eyemed.com/resource/blob/32848/de63ca97b7f6ae2ec1ef5be9ad17c59f/digital-tool-hero-data.jpg',
        category: 'WORKING WITH US',
        date: 'September 2, 2025',
        title: 'How digital tools empower smarter benefit...',
        description:
          'Up to 53% of employees regret their benefit choices. See how interactive decision tools can help.',
        link: '/blog/working-with-us/how-digital-tools-empower-smarter-benefit-decisions-before-and-after-open-enrollment--32844',
      },
    ],
  },
}
