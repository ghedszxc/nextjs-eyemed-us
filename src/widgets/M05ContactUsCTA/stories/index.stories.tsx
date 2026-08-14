import type { Meta, StoryObj } from '@storybook/nextjs'
import M05ContactUsCTA from '..'

const meta = {
  title: 'Widgets/M05 Contact Us CTA',
  component: M05ContactUsCTA,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof M05ContactUsCTA>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    images: {
      desktop: {
        url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
        alt: 'Two people collaborating with books and tablets'
      },
      mobile: {
        url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        alt: 'Two people collaborating with books and tablets'
      }
    },
    icon: 'https://www.eyemed.com/resource/crblob/240/aa6fc4f819a7978029a81314a3be79b4/icon-mail-envelope-data.svg',
    title: 'Consumer newsletter',
    subtitle: 'Sign up to receive EyeMed\'s consumer e-newsletter',
    theme: 'leaf',
    cta: {
      label: 'Subscribe',
      url: '/newsletter-signup',
    },
  },
}

export const WithoutIcon: Story = {
  args: {
    images: {
      desktop: {
        url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
        alt: 'Two people collaborating with books and tablets'
      },
      mobile: {
        url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        alt: 'Two people collaborating with books and tablets'
      }
    },
    title: 'Get in touch with us',
    subtitle: 'Have questions about your vision benefits? Our team is here to help you understand your coverage and find the right solutions.',
    theme: 'grape',
    cta: {
      label: 'Contact Us',
      url: '/contact',
    },
  },
}
