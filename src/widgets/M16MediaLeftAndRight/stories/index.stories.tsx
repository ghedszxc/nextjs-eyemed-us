import type { Meta, StoryObj } from '@storybook/nextjs'
import M16MediaLeftAndRight from '..'

const meta = {
  title: 'Widgets/M16 Media Left And Right',
  component: M16MediaLeftAndRight,
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: { type: 'select' },
      options: ['leaf', 'grape', 'lips', 'sun', 'moon', 'gray'],
    },
  },
} satisfies Meta<typeof M16MediaLeftAndRight>

export default meta

type Story = StoryObj<typeof meta>

export const WithVideo: Story = {
  args: {
    title: 'Understanding Vision Benefits',
    body: '<p>Learn more about our comprehensive vision benefits and how they can help you and your family maintain healthy eyesight. Our plans are designed to provide affordable access to quality eye care services.</p><p>With our extensive network of providers, you can easily find an eye care professional near you. We offer flexible coverage options that fit your budget and lifestyle needs.</p><ul><li>Comprehensive coverage options for individuals and families</li><li>Access to top-rated eye care providers nationwide</li><li>Easy online management of your benefits</li><li>Annual eye exams and prescription updates</li><li>Frame and lens allowances with every plan</li></ul><p>Don\'t wait to protect your vision. Contact us today to learn more about our vision benefit plans and find the perfect coverage for your needs.</p>',
    media: {
      type: 'video',
      url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      alt: 'Sample video'
    },
  },
}

export const WithImage: Story = {
  args: {
    title: 'Lens Materials Guide',
    body: '<p>Understanding different lens materials can help you make the best choice for your vision needs. Each material offers unique benefits and characteristics that affect comfort, durability, and visual clarity.</p><h4>Plastic Lenses</h4><p>Plastic lenses are the most economical choice and commonly used for everyday eyewear. They are lightweight, thinner than glass, and more impact resistant. These lenses are perfect for basic prescription needs and offer excellent value for money.</p><h4>Polycarbonate Lenses</h4><p>Originally created for helmet visors, polycarbonate lenses are extremely impact resistant and ideal for active lifestyles. They are thinner and lighter than plastic while providing 99% UV protection. Perfect for children, safety glasses, and anyone with an active lifestyle.</p><h4>High Index Lenses</h4><p>High-index lenses are super thin and lightweight, offering the same visual correction with less material. They are the best choice for strong prescriptions, providing comfort and aesthetics without compromising on visual quality.</p>',
    media: {
      type: 'image',
      url: 'https://picsum.photos/400/300',
      alt: 'Lens materials comparison'
    },
  },
}

