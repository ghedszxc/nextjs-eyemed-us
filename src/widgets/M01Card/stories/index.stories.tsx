import type { Meta, StoryObj } from '@storybook/nextjs'
import M01Card from '..'

const meta = {
  title: 'Widgets/M01 Card',
  component: M01Card,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof M01Card>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
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

export const NoCTA: Story = {
  args: {
    images: {
      desktop: {
        url: 'https://www.eyemed.com/resource/image/5360/heroTall/1593/566/99c44afa73275014a1c784e94c380ef1/3A3374BF8985281BF33B36515FB1D606/ethiopia-women-at-vision-screening.jpg',
        alt: 'Eyemed',
      },
      mobile: {
        url: 'https://www.eyemed.com/resource/image/5360/landscape_ratio9x6/990/660/470d5d5b3a9c76645adb865c00e9d898/276F6EA10D136360841F77CB27F8F96D/ethiopia-women-at-vision-screening.jpg',
        alt: 'Eyemed',
      },
    },
    theme: 'lips',
    bannerTitle: 'Giving back with OneSight EssilorLuxottica Foundation',
    bannerText: '<p>Community commitment, worldwide vision</p>',
    showTopBanner: false,
    topTitle: '',
    topText:
      '<p>Being an EyeMed member has its perks.  We work to create a vivid member experience. We add choices. We invent savings, and we simplify at every turn. Just for you.</p>',
    isShort: false,
    isCard: true,
  },
}

export const MultpleCTA: Story = {
  args: {
    images: {
      desktop: {
        url: 'https://www.eyemed.com/resource/image/2112/heroTall/1593/566/f7498d9be7623ab8b08853b4d8b5ef68/323E971D2BBD715C223252B4D6F20D1C/employers-hero.jpg',
        alt: 'Eyemed',
      },
      mobile: {
        url: 'https://www.eyemed.com/resource/blob/2110/40d137924b01a0ba17377e1aa3715d19/40520399205-527617cd60-k-m-data.jpg',
        alt: 'Eyemed',
      },
    },
    theme: 'grape',
    bannerTitle: 'Explore a new vision with us',
    bannerText:
      '<p>At EyeMed, we have a unique perspective on vision care insurance. It\'s through the eyes of our members. They\'re at the center of everything we do. We\'re here to "wow" them with vision benefits they\'ll actually "love" using. Making their lives not just easier, but better.</p>',
    showTopBanner: false,
    topTitle: 'EyeMed Perks',
    topText:
      '<p>Being an EyeMed member has its perks.  We work to create a vivid member experience. We add choices. We invent savings, and we simplify at every turn. Just for you.</p>',
    isShort: false,
    isCard: true,
    ctas: [
      {
        href: '/',
        text: 'Became a client',
      },
      {
        href: '/',
        text: 'Benefit administrator Login',
      },
    ],
  },
}
