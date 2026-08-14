import type { Meta, StoryObj } from '@storybook/nextjs'
import ContactForm from '..'

const meta = {
  title: 'Widgets/ContactForm',
  component: ContactForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ContactForm>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    supportCards: [
      {
        theme: 'grape',
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop&crop=center',
        title: 'Get Support',
        ctaText: 'MEMBERS AND PROVIDERS',
        ctaUrl: '/en-us/contact-us/members-providers',
        sections: [
          {
            heading: 'YOU ARE A MEMBER IF:',
            items: [
              { icon: 'laptop', text: 'You enrolled in a vision plan through your employer' },
              { icon: 'checkmark', text: 'You\'d like to confirm benefits or eligibility' },
              { icon: 'pinMap', text: 'You need to find an in-network eye doctor' }
            ]
          },
          {
            heading: 'YOU ARE A PROVIDER IF:',
            items: [
              { icon: 'eye', text: 'You\'re an eye care professional already on our network with a question' },
              { icon: 'dollarSign', text: 'You\'re an eye care professional wanting to join our network' }
            ]
          }
        ]
      },
      {
        theme: 'lips',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop&crop=center',
        title: 'Get Support',
        ctaText: 'BROKERS AND EMPLOYERS',
        ctaUrl: '/en-us/contact-us/brokers-employers',
        sections: [
          {
            heading: 'YOU ARE A BROKER IF:',
            items: [
              { icon: 'pieChartInsideTablet', text: 'You are a third party representative of an in force or prospective employer group' },
              { icon: 'checkmark', text: 'You want to get appointed to sell EyeMed vision plans' }
            ]
          },
          {
            heading: 'YOU ARE AN EMPLOYER IF:',
            items: [
              { icon: 'eye', text: 'You are responsible for vision benefit decision making at your company' },
              { icon: 'eyemedPaper', text: 'You need resources to explain the vision benefit for your company such as open enrollment, health fairs or companywide vision information' }
            ]
          }
        ]
      }
    ]
  },
}
