import type { Meta, StoryObj } from '@storybook/nextjs'
import Banner from '..'

const meta = {
  title: 'Components / Banner',
  component: Banner,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Banner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
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
    isShort: true,
    showHero: true,
    isCard: false,
  },
}

export const Cards: Story = {
  args: {
    images: {
      desktop: {
        url: 'https://www.eyemed.com/resource/image/2152/heroTall/1593/566/49f6206e251af8c00f7069a18fbd2067/3BC18DD9C5FD23FF39704FE608B84CBB/38457550044-91150afed3-k.jpg',
        alt: 'Eyemed',
      },
      mobile: {
        url: 'https://www.eyemed.com/resource/blob/2154/d206306f53c5a2e8b7b13f2fab6c7c6e/38457550044-91150afed3-k-m-data.jpg',
        alt: 'Eyemed',
      },
    },
    theme: 'leaf',
    bannerTitle: 'Unlock your offers in minutes',
    bannerText:
      '<p>You get a mix of special offers<sup class="footnote">1</sup> and discounts that give your benefits a boost — so you can keep your eyes healthy and save some cash while you’re at it. Visit the special offers page exclusive to EyeMed members.<sup class="footnote">1</sup> It\'s chock-full of the latest deals on vision-related products and services.</p>',
    showTopBanner: true,
    topTitle: 'EyeMed Perks',
    topText:
      '<p>Being an EyeMed member has its perks.  We work to create a vivid member experience. We add choices. We invent savings, and we simplify at every turn. Just for you.</p>',
    isShort: false,
    showHero: true,
    isCard: true,
    ctas: [
      {
        href: '/',
        text: 'Log In to Member Web',
      },
    ],
    links: [
      {
        text: 'Need an account? Create one now ',
        href: '/',
      },
    ],
  },
}
