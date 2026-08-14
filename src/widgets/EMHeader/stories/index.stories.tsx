import type { Meta, StoryObj } from '@storybook/nextjs'
import Header from '..'

const meta = {
  title: 'Widgets/EM Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
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
  },
}
