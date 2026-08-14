import type { Meta, StoryObj } from '@storybook/nextjs'
import Footer from '..'

const meta = {
  title: 'Widgets/EM Footer',
  component: Footer,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Footer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    mainLinks: [
      [
        {
          label: 'Members',
          url: '#',
        },
        {
          label: 'Why Vision?',
          url: '#',
        },
        {
          label: 'EyeMed Perks',
          url: '#',
        },
        {
          label: 'Member FAQ',
          url: '#',
        },
        {
          label: 'Online Options',
          url: '#',
        },
        {
          label: 'Become a Member',
          url: '#',
        },
      ],
      [
        {
          label: 'Employers',
          url: '#',
        },
        {
          label: 'Why EyeMed?',
          url: '#',
        },
        {
          label: 'Working with Us',
          url: '#',
        },
        {
          label: 'Why Vision?',
          url: '#',
        },
        {
          label: 'Resources',
          url: '#',
        },
      ],
      [
        {
          label: 'Brokers',
          url: '#',
        },
        {
          label: 'Why EyeMed?',
          url: '#',
        },
        {
          label: 'Why Vision Insurance?',
          url: '#',
        },
        {
          label: 'Resources',
          url: '#',
        },
        {
          label: 'Working with Us',
          url: '#',
        },
      ],
      [
        {
          label: 'Providers',
          url: '#',
        },
        {
          label: 'Why EyeMed?',
          url: '#',
        },
      ],
      [
        {
          label: 'Insurance Carriers',
          url: '#',
        },
        {
          label: 'Vision Expertise',
          url: '#',
        },
        {
          label: 'Industry Leading Platform',
          url: '#',
        },
        {
          label: 'Built To Partner',
          url: '#',
        },
      ],
      [
        {
          label: 'About Us',
          url: '#',
        },
      ],
      [
        {
          label: 'OneSight',
          url: '#',
        },
      ],
      [
        {
          label: 'Careers',
          url: '#',
        },
      ],
      [
        {
          label: 'Blog',
          url: '#',
        },
      ],
      [
        {
          label: 'Media Resources',
          url: '#',
        },
      ],
    ],
    imageLinks: [
      {
        image: {
          desktop: {
            url: 'https://www.eyemed.com/resource/crblob/8458/927a4e9a0378a7ef3adc27957691ec76/eyemed-logo-svg-data.svg',
            alt: 'EyeMed Logo and Home link',
          },
          mobile: {
            url: 'https://www.eyemed.com/resource/crblob/8458/927a4e9a0378a7ef3adc27957691ec76/eyemed-logo-svg-data.svg',
            alt: 'EyeMed Logo and Home link',
          },
        },
        cta: {
          url: '/',
          label: 'EyeMed Logo and Home link',
        },
      },
      {
        image: {
          desktop: {
            url: 'https://www.eyemed.com/resource/crblob/8712/fba4285159737023f70de1b8d76bee7e/lockup-desktop-png-data.png',
            alt: 'independant providers lenscrafter pearle vison optical sears optical',
          },
          mobile: {
            url: 'https://www.eyemed.com/resource/crblob/8714/18f933ea7865f071a0a00e820c8d498b/lockup-mobile-png-data.png',
            alt: 'independant providers lenscrafter pearle vison optical sears optical',
          },
        },
        cta: {
          url: '#',
          label: 'independant providers lenscrafter pearle vison optical sears optical',
        },
      },
    ],
    subLinks: [
      {
        label: 'Notice of Privacy Practices (HIPAA)',
        url: '#',
      },
      {
        label: 'Online Privacy Policy',
        url: '#',
      },
      {
        label: 'California Privacy Policy',
        url: '#',
      },
      {
        label: 'Member Bill of Rights',
        url: '#',
      },
      {
        label: 'Ad Choices',
        url: '#',
      },
      {
        label: 'Terms of Use',
        url: '#',
      },
      {
        label: 'Non-discrimination and Notice of Availability - Language',
        url: '#',
      },
      {
        label: 'Notice of Right to Request Confidential Communications - CA',
        url: '#',
      },
      {
        label: 'Notice of Confidentiality for Victims of Domestic Violence - NY',
        url: '#',
      },
      {
        label: 'CALIFORNIA GRIEVANCE FORM',
        url: '#',
      },
      {
        label: 'Natural Disaster Response',
        url: '#',
      },
    ],
    socialLinks: [
      {
        image:
          'https://www.eyemed.com/resource/crblob/974/fb7b54e785ebe40c3bda2447738cae48/icon-social-linkedin-svg-data.svg',
        cta: {
          label: 'eyemed on linkedin',
          url: 'https://www.linkedin.com/company/eyemed-vision-care/',
        },
      },
      {
        image:
          'https://www.eyemed.com/resource/crblob/302/1c091d2cb32bb773297e1f8ec55b698d/icon-social-facebook-data.svg',
        cta: {
          label: 'eyemed on facebook',
          url: 'https://www.facebook.com/eyemedvision/',
        },
      },
      {
        image:
          'https://www.eyemed.com/resource/crblob/304/7af0a7ca8b6c8d9626a352e513f628b9/icon-social-instagram-data.svg',
        cta: {
          label: 'eyemed on instagram',
          url: 'https://www.instagram.com/eyemedvisioncare/',
        },
      },
      {
        image:
          'https://www.eyemed.com/resource/crblob/300/85fcef039096986865eef9c9658fe450/icon-social-blog-data.svg',
        cta: {
          label: 'eyemed blog',
          url: 'https://eyemed.com/en-us/blog',
        },
      },
    ],
    privacyLink: {
      image:
        'https://www.eyemed.com/resource/blob/830/605a81aad319d38d92213b2e1e1154c3/privacyoptions-data.png',
      cta: {
        label: 'Your Privacy Choices',
        url: '#',
      },
    },
    contactLink: {
      label: 'Contact Us',
      url: '#',
    },
  },
}
