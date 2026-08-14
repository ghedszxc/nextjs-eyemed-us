import type { Meta, StoryObj } from '@storybook/nextjs'
import M04 from '..'

const meta = {
  title: 'Widgets/M04',
  component: M04,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof M04>

export default meta

type Story = StoryObj<typeof meta>

export const TogetherWeHelpTheWorldSee: Story = {
  args: {
    theme: '#308729',
    icon: '',
    title: 'Together, we help the world see',
    subtitle:
      '<p>EyeMed is a proud, long-time sponsor of the OneSight EssilorLuxottica Foundation. Together, we’re working to help eliminate uncorrected poor vision for the 2.7 billion people globally who lack access to vision care. Since 2013, the Foundation has provided 562 million people with access to sustainable vision care through 22,200 primary vision care entrepreneurs and 221 vision centers globally.<sup>2</sup></p>',
    alignment: 'right',
    cta: { label: 'Discover More', url: '/onesight', isExternal: false },
    picture: {
      crops: {
        square_ratio1x1: 385,
        landscape_ratio9x6: 990,
        landscape_ratio10x5: 702,
        blog_thumb: 180,
        portrait_ratio6x9: 660,
        landscape_ratio16x9: 702,
        heroTall: 1593,
        heroShort: 1593,
      },
      uriTemplate:
        '/caas/v1/media/65658/data/c96869d53a6a16fad1edfe26c6af6326/{cropName}/{width}/onesight-clinic-visit.jpg',
    },
  },
}

export const SeeEverydaySavingsOnLASIK: Story = {
  args: {
    theme: '#d04800',
    icon: 'https://preview-stageuatelec.luxgroup.net/caas/v1/media/70982/data/a1d09b06407f1afcbb8a229e9c7216c8/icon-eye-diagram.svg',
    title: 'See everyday savings on LASIK',
    subtitle:
      '<p>If you’ve decided that LASIK vision correction is right for you, EyeMed makes it affordable with extra savings.<sup>1</sup></p>',
    alignment: 'right',
    cta: {
      label: 'Save on LASIK',
      url: 'https://www.eyemedlasik.com/?utm_source=eyemed&utm_medium=homep&utm_campaign=public_saveonlasik_cta',
      isExternal: true,
    },
    picture: {
      crops: {
        square_ratio1x1: 385,
        landscape_ratio9x6: 990,
        landscape_ratio10x5: 702,
        blog_thumb: 180,
        portrait_ratio6x9: 660,
        landscape_ratio16x9: 702,
        heroTall: 1593,
        heroShort: 1593,
      },
      uriTemplate:
        '/caas/v1/media/65650/data/84a13d6dce4150631ab27085a0d1d388/{cropName}/{width}/45576804984-b081dea2b6-k.jpg',
    },
  },
}
