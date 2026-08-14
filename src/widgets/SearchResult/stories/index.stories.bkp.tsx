import type { Meta, StoryObj } from '@storybook/nextjs'
import SearchResult from '..'
import BlogTopNavigation from '@/widgets/BlogTopNavigation'
import EMHeader from '@/widgets/EMHeader'
import EMFooter from '@/widgets/EMFooter'

const meta: Meta<typeof SearchResult> = {
  title: 'Widgets/Blog Search',
  component: SearchResult,
}

export default meta
type Story = StoryObj<typeof meta>

const HEADER_DATA = {
  crumbs: [],
  cta: [{ label: 'Find an eye doctor', url: '#' }],
  loginOptions: {
    header: { label: 'Login', url: '#' },
    pages: [
      { header: { label: 'Member', url: '#' } },
      { header: { label: 'Employer', url: '#' } },
      { header: { label: 'Broker', url: '#' } },
      { header: { label: 'Provider', url: '#' } },
    ],
  },
  pages: [
    {
      header: {
        label: 'Members & Consumers',
        url: '#',
      },
      pages: [
        {
          header: { label: 'Members Home', url: '#' },
          pages: [
            { header: { label: 'Why Vision?', url: '#' } },
            { header: { label: 'Member FAQ', url: '#' } },
            { header: { label: 'Understanding your benefits', url: '#' } },
          ],
        },
        {
          header: { label: 'EyeMed Perks', url: '#' },
          pages: [
            { header: { label: 'Online options', url: '#' } },
            { header: { label: 'Lasik', url: '#' } },
            { header: { label: 'Hearing', url: '#' } },
          ],
        },
        {
          header: { label: 'Become a member', url: '#' },
          pages: [
            { header: { label: 'Individual and family vision plans', url: '#' } },
            { header: { label: 'Open enrollment', url: '#' } },
            { header: { label: 'Benefits explained', url: '#' } },
          ],
        },
        {
          header: { label: 'Find an eye doctor', url: '#' },
        },
        {
          header: { label: 'Member login', url: '#' },
        },
      ],
    },
    {
      header: {
        label: 'Employers',
        url: '#',
      },
      pages: [
        {
          header: { label: 'Employers Home', url: '#' },
          pages: [{ header: { label: 'Employer login', url: '#' } }],
        },
        {
          header: { label: 'Why Vision?', url: '#' },
        },
        {
          header: { label: 'Why EyeMed?', url: '#' },
          pages: [
            { header: { label: 'Our network', url: '#' } },
            { header: { label: 'Vision benefits', url: '#' } },
            { header: { label: 'An easy experience', url: '#' } },
          ],
        },
        {
          header: { label: 'Working with us', url: '#' },
          pages: [{ header: { label: 'Find your EyeMed rep', url: '#' } }],
        },
        {
          header: { label: 'Resources', url: '#' },
        },
        {
          header: { label: 'Blog', url: '#' },
        },
      ],
    },
    {
      header: {
        label: 'Brokers',
        url: '#',
      },
      pages: [
        {
          header: { label: 'Brokers Home', url: '#' },
          pages: [{ header: { label: 'Broker login', url: '#' } }],
        },
        {
          header: { label: 'Why Vision?', url: '#' },
        },
        {
          header: { label: 'Why EyeMed?', url: '#' },
          pages: [
            { header: { label: 'Our network', url: '#' } },
            { header: { label: 'Vision benefits', url: '#' } },
            { header: { label: 'An easy experience', url: '#' } },
          ],
        },
        {
          header: { label: 'Working with us', url: '#' },
          pages: [
            { header: { label: 'Become an appointed broker', url: '#' } },
            { header: { label: 'Find your EyeMed rep', url: '#' } },
            { header: { label: 'Exchanges', url: '#' } },
            { header: { label: 'Individual for brokers', url: '#' } },
          ],
        },
        {
          header: { label: 'Resources Home', url: '#' },
          pages: [{ header: { label: 'Brokers resources for EyeMed individuals', url: '#' } }],
        },
        {
          header: { label: 'Blog', url: '#' },
        },
      ],
    },
    {
      header: {
        label: 'Providers',
        url: '#',
      },
      pages: [
        {
          header: { label: 'Providers Home', url: '#' },
          pages: [{ header: { label: 'Why EyeMed?', url: '#' } }],
        },
        {
          header: { label: 'Resources', url: '#' },
          pages: [
            { header: { label: 'Submit claims (Login)', url: '#' } },
            { header: { label: 'EyeMed infocus', url: '#' } },
          ],
        },
      ],
    },
    {
      header: {
        label: 'Insurance Carriers',
        url: '#',
      },
      pages: [
        {
          header: { label: 'Insurance Carriers Home', url: '#' },
          pages: [
            { header: { label: 'Vision expertise', url: '#' } },
            { header: { label: 'Built to partner', url: '#' } },
            { header: { label: 'Lines of business', url: '#' } },
            { header: { label: 'Partner with us', url: '#' } },
            { header: { label: 'Events', url: '#' } },
          ],
        },
      ],
    },
  ],
}

const FOOTER_DATA = {
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
}

export const Default: Story = {
  args: {
    resultCount: 15,
    blogs: [
      {
        image:
          'https://www.eyemed.com/resource/blob/32558/c54195d7adf2c5c9df1902738753af07/vision-myth-image-data.jpg',
        alt: 'Vision Myth Image',
        caption: 'Health and wellness',
        title: 'Vision myths-separating fact from fiction',
        description: 'It can be difficult to see the truth about eye health',
        url: '/',
      },
      {
        image:
          'https://www.eyemed.com/resource/blob/32558/c54195d7adf2c5c9df1902738753af07/vision-myth-image-data.jpg',
        alt: 'Vision Myth Image',
        caption: 'Health and wellness',
        title: 'Vision myths-separating fact from fiction',
        description: 'It can be difficult to see the truth about eye health',
        url: '/',
      },
      {
        image:
          'https://www.eyemed.com/resource/blob/32558/c54195d7adf2c5c9df1902738753af07/vision-myth-image-data.jpg',
        alt: 'Vision Myth Image',
        caption: 'Health and wellness',
        title: 'Vision myths-separating fact from fiction',
        description: 'It can be difficult to see the truth about eye health',
        url: '/',
      },
      {
        image:
          'https://www.eyemed.com/resource/blob/32558/c54195d7adf2c5c9df1902738753af07/vision-myth-image-data.jpg',
        alt: 'Vision Myth Image',
        caption: 'Health and wellness',
        title: 'Vision myths-separating fact from fiction',
        description: 'It can be difficult to see the truth about eye health',
        url: '/',
      },
    ],
    theme: 'grape',
  },
}

export const NavigationIntegration: Story = {
  args: {
    resultCount: 15,
    blogs: [
      {
        image:
          'https://www.eyemed.com/resource/blob/32558/c54195d7adf2c5c9df1902738753af07/vision-myth-image-data.jpg',
        alt: 'Vision Myth Image',
        caption: 'Health and wellness',
        title: 'Vision myths-separating fact from fiction',
        description: 'It can be difficult to see the truth about eye health',
        url: '/',
      },
      {
        image:
          'https://www.eyemed.com/resource/blob/32558/c54195d7adf2c5c9df1902738753af07/vision-myth-image-data.jpg',
        alt: 'Vision Myth Image',
        caption: 'Health and wellness',
        title: 'Vision myths-separating fact from fiction',
        description: 'It can be difficult to see the truth about eye health',
        url: '/',
      },
      {
        image:
          'https://www.eyemed.com/resource/blob/32558/c54195d7adf2c5c9df1902738753af07/vision-myth-image-data.jpg',
        alt: 'Vision Myth Image',
        caption: 'Health and wellness',
        title: 'Vision myths-separating fact from fiction',
        description: 'It can be difficult to see the truth about eye health',
        url: '/',
      },
      {
        image:
          'https://www.eyemed.com/resource/blob/32558/c54195d7adf2c5c9df1902738753af07/vision-myth-image-data.jpg',
        alt: 'Vision Myth Image',
        caption: 'Health and wellness',
        title: 'Vision myths-separating fact from fiction',
        description: 'It can be difficult to see the truth about eye health',
        url: '/',
      },
    ],
    theme: 'grape',
  },
  decorators: Story => (
    <>
      <EMHeader {...HEADER_DATA} />
      <BlogTopNavigation
        theme="grape"
        title="Search Results"
        icon="eyemedLogo"
        placeholder="Search Visionary Blog"
        cta={{
          label: 'Search',
          url: '/',
        }}
        items={[
          { label: 'all posts', url: '/', color: 'grape' },
          { label: 'benefits 101', url: '/', color: 'moon' },
          { label: 'everyday life & culture', url: '/', color: 'moon' },
          { label: 'health & wellness', url: '/', color: 'moon' },
          { label: 'trending', url: '/', color: 'moon' },
          { label: 'working with us', url: '/', color: 'moon' },
        ]}
      />
      <Story />
      <EMFooter {...FOOTER_DATA} />
    </>
  ),
}
