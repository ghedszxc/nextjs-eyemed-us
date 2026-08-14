import type { Meta, StoryObj } from '@storybook/nextjs'
import M01CopyBlock from '..'

const meta = {
  title: 'Widgets/M01 Copy Block',
  component: M01CopyBlock,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof M01CopyBlock>

export default meta
type Story = StoryObj<typeof meta>

export const HeroBanner: Story = {
  args: {
    images: {
      desktop: {
        url: 'https://www.eyemed.com/resource/image/370/heroShort/1593/428/f358bc985faf5a78d0d18f21c951664b/496C18505B167251E4C51E0E78BF4E0C/hero-short.jpg',
        alt: 'Eyemed',
      },
      mobile: {
        url: 'https://www.eyemed.com/resource/blob/368/a5a47774f3c7440377c5312e1dd5c415/hero-mobile-data.jpg',
        alt: 'Eyemed',
      },
    },
    theme: 'leaf',
    bannerTitle: 'Vision benefits for every pair of eyes',
    bannerText:
      '<p>Youre not like everyone else. And neither are we. EyeMed offers benefits that make it easy to get exactly what you want—and save.</p>',
    showTopBanner: false,
    topTitle: '',
    topText: '',
  },
}

export const WithTopText: Story = {
  args: {
    images: {
      desktop: {
        url: 'https://www.eyemed.com/resource/image/2786/heroShort/1593/428/8a272c5b1c45fc3429fe339c090018ae/0A8A0EBCA2AF451ED1AFAD5A5F692632/31361405817-76acd182cb-o.jpg',
        alt: 'Eyemed',
      },
      mobile: {
        url: 'https://www.eyemed.com/resource/blob/2784/3d05a90b57c1eac821cf100b248e876c/31361405817-76acd182cb-o-m-data.jpg',
        alt: 'Eyemed',
      },
    },
    theme: 'grape',
    bannerTitle: 'We have the network members want',
    bannerText:
      '<p>We offer the right mix of independent, national retail, regional retail and online options.</p>',
    showTopBanner: true,
    topTitle: 'Vision Expertise',
    topText: '<p>We’re the experts you can trust and rely on</p>',
  },
}
export const HeroBannerGrapeThemedText: Story = {
  args: {
    images: {
      desktop: {
        url: 'https://www.eyemed.com/resource/blob/2106/f1d8a8df66cc1c28289cffedb90f7917/39607009930-e2b6a21b5e-k-data.jpg',
        alt: 'Eyemed',
      },
      mobile: {
        url: 'https://www.eyemed.com/resource/blob/2104/b7b1e65233a7c11ed7d0a594aa878615/39607009930-e2b6a21b5e-k-m-data.jpg',
        alt: 'Eyemed',
      },
    },
    theme: 'grape',
    bannerTitle: 'Vision benefits—as youve never seen before',
    bannerText:
      '<p>To offer vision benefits that stand out, you need to offer an outstanding member experience. One thats focused on value and convenience. Thats where we excel.</p>',
    showTopBanner: false,
    topTitle: '',
    topText: '',
  },
}

export const HeroBannerLong: Story = {
  args: {
    images: {
      desktop: {
        url: 'https://www.eyemed.com/resource/image/3344/heroTall/1593/566/c6eb0900f6868ed66a46b8591abbd652/4F7CC083F5874D74F32C9D45ED2162C7/39696755204-6d1c2fe6a5-o.jpg',
        alt: 'Eyemed',
      },
      mobile: {
        url: 'https://www.eyemed.com/resource/blob/3342/f160b9edc171b0b6646b242403cd68a7/39696755204-6d1c2fe6a5-o-m-data.jpg',
        alt: 'Eyemed',
      },
    },
    theme: 'leaf',
    bannerTitle: 'Why Vision?',
    bannerText:
      '<p>Vision benefits are so much more than an eye exam. They may help you save money, stay healthy and see everything life has to offer.</p>',
    showTopBanner: false,
    topTitle: '',
    topText: '',
    isShort: false,
  },
}
