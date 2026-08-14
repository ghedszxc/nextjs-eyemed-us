import type { Meta, StoryObj } from '@storybook/nextjs'
import M10TestimonialWithMedia from '..'

const meta = {
  title: 'Widgets/M10 Testimonial With Media',
  component: M10TestimonialWithMedia,
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: { type: 'select' },
      options: ['leaf', 'grape', 'lips', 'sun', 'moon', 'gray'],
    },
  },
} satisfies Meta<typeof M10TestimonialWithMedia>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    heading: 'Medicaid',
    bodyText: [
      'The world of Medicaid is full of growth—in membership, in variety of needs, in regulations. All of this adds up to a growing number of challenges for your plan.',
      'EyeMed understands these challenges and offers market-leading solutions to help you overcome them. When your Medicaid plan is Powered by EyeMed, you offer more of what members expect, and more of the unexpected.',
      "We know that every state is unique and we stand ready to deploy customized solutions to meet our partners' needs. We have a proven track record for developing networks that are Compliant, Accessible, Ready and Equipped to serve Medicaid beneficiaries.",
    ],
    cta: {
      label: 'MEDICAID SOLUTIONS OVERVIEW',
      url: '/medicaid-solutions',
    },
    media: {
      type: 'video',
      url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      transcriptText:
        'This is a sample transcript for the video content. It provides accessibility for users who prefer to read the content instead of watching the video.',
    },
    theme: 'grape',
  },
}

export const GrapeTheme: Story = {
  args: {
    heading: 'Innovative Vision Care Solutions',
    bodyText: [
      'Experience the future of vision benefits with cutting-edge technology and personalized care approaches that put your members first.',
      'Ready to transform your vision benefits program?',
    ],
    cta: {
      label: 'LEARN MORE',
      url: '/learn-more',
    },
    media: {
      type: 'video',
      url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      transcriptText:
        'Innovation in vision care is transforming how we approach eye health. This video explores the latest technologies and treatments that are revolutionizing the field.',
    },
    theme: 'grape',
  },
}

export const NoCTA: Story = {
  args: {
    heading: 'Vision Care Excellence',
    bodyText: [
      'Discover how EyeMed delivers exceptional vision care through our comprehensive network of providers and innovative solutions.',
      'Our commitment to quality and accessibility ensures that every member receives the care they deserve.',
      'Join thousands of satisfied members who trust EyeMed for their vision health needs.',
    ],
    media: {
      type: 'video',
      url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      transcriptText:
        'Vision care excellence is our commitment to providing the highest quality eye care services. Learn about our comprehensive approach to maintaining healthy vision.',
    },
    theme: 'leaf',
  },
}

export const DualCTA: Story = {
  args: {
    heading:
      'Register on eyemed.com or grab the member app on the Apple App Store or Google Play Store now',
    bodyText: [
      'Get access to your vision benefits, find in-network providers, and manage your account all in one place.',
      'Download our mobile app for convenient access to your vision care information on the go.',
    ],
    cta: {
      label: 'APPLE APP STORE',
      url: 'https://apps.apple.com/app/eyemed',
    },
    ctaSecondary: {
      label: 'GOOGLE PLAY',
      url: 'https://play.google.com/store/apps/details?id=com.eyemed',
    },
    media: {
      type: 'video',
      url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      transcriptText:
        'Download the EyeMed mobile app to access your vision benefits on the go. Find providers, manage your account, and get the most out of your vision care coverage.',
    },
    theme: 'leaf',
  },
}
