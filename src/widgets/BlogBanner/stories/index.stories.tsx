import type { Meta, StoryObj } from '@storybook/nextjs'
import BlogBanner from '..'

const meta = {
  title: 'Widgets/Blog Banner',
  component: BlogBanner,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof BlogBanner>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    categoryText: 'Benefits 101',
    title: 'Setting sights on the online eyewear experience',
    image:
      'https://www.eyemed.com/resource/blob/32968/433a2c85d04ad290debeb11835900ea9/ecommerce-hero-data.jpg',
    date: 'January 1, 2024',
    author: {
      image:
        'https://www.eyemed.com/resource/blob/6086/a071678492aa2875a1c81c586c427f66/erinputman-bio-pic-data.jpg',
      name: 'Erin Putman',
      desc: 'National Account Manager',
    },
    socialTitle: 'SHARE & PRINT',
    // shareable: true,
    externalLinks: [
      {
        logo: 'https://www.eyemed.com/resource/crblob/8464/1c091d2cb32bb773297e1f8ec55b698d/facebook-square-brands-svg-data.svg',
        url: 'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.eyemed.com%2Finsights%2Fsetting-sights-on-the-online-eyewear-experience',
      },
      {
        logo: 'https://www.eyemed.com/resource/crblob/8630/479b21e4d605d6e0e7577233b648d5ab/twitter-square-brands-svg-data.svg',
        url: 'https://twitter.com/intent/tweet?text=Setting%20sights%20on%20the%20online%20eyewear%20experience&url=https%3A%2F%2Fwww.eyemed.com%2Finsights%2Fsetting-sights-on-the-online-eyewear-experience',
      },
      {
        logo: 'https://www.eyemed.com/resource/crblob/8626/b80d38cc631a7184ad068fa1a83d47a8/linkedin-svg-data.svg',
        url: 'https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.eyemed.com%2Finsights%2Fsetting-sights-on-the-online-eyewear-experience&title=Setting%20sights%20on%20the%20online%20eyewear%20experience',
      },
      {
        logo: 'https://www.eyemed.com/resource/crblob/8452/eb58b01cf2594cd83c257da846873197/envelope-solid-svg-data.svg',
        url: 'mailto:?subject=Setting%20sights%20on%20the%20online%20eyewear%20experience&body=Check%20out%20this%20article:%20https%3A%2F%2Fwww.eyemed.com%2Finsights%2Fsetting-sights-on-the-online-eyewear-experience',
      },
    ],
    allowPrint: true,
    printIcon:
      'https://www.eyemed.com/resource/crblob/8628/c956d1b8630ddbc60fce6fd374fe7905/print-solid-svg-data.svg',
  },
}
export const NoHyperLinks: Story = {
  args: {
    theme: 'grape',
    categoryText: 'Benefits 101',
    title: 'Setting sights on the online eyewear experience',
    image:
      'https://www.eyemed.com/resource/blob/32968/433a2c85d04ad290debeb11835900ea9/ecommerce-hero-data.jpg',
    date: 'January 1, 2024',
    // shareable: true,
    externalLinks: [],
    allowPrint: false,
    printIcon:
      'https://www.eyemed.com/resource/crblob/8628/c956d1b8630ddbc60fce6fd374fe7905/print-solid-svg-data.svg',
  },
}

export const EmptyBottom: Story = {
  args: {
    theme: 'lips',
    categoryText: 'Benefits 101',
    title: 'Setting sights on the online eyewear experience',
    image:
      'https://www.eyemed.com/resource/blob/32968/433a2c85d04ad290debeb11835900ea9/ecommerce-hero-data.jpg',
    // date: 'January 1, 2024',
    // shareable: true,
    externalLinks: [],
    allowPrint: false,
    printIcon:
      'https://www.eyemed.com/resource/crblob/8628/c956d1b8630ddbc60fce6fd374fe7905/print-solid-svg-data.svg',
  },
}
