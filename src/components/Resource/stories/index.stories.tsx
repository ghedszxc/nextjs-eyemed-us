import type { Meta, StoryObj } from '@storybook/nextjs'
import Resource from '..'

const meta = {
  title: 'Components/Resource',
  component: Resource,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Resource>

export default meta
type Story = StoryObj<typeof meta>

export const ResourcePDF: Story = {
  args: {
    cta: {
      url: 'https://www.eyemed.com/resource/blob/1596/9bdbac3e0c5d1836326507b998cab85e/9728-em-b2b-state-of-vision-wp-ada-fa-data.pdf',
      label: 'State of Vision Whitepaper',
    },
    icon: 'https://preview-stageuatemus.luxgroup.net/caas/v1/media/283912/data/a9e77a626026663ca0f71252e3b22d1f/icon-document-eyemed-svg.svg',
    theme: 'leaf',
    textLimit: 54,
  },
}

export const ResourceVideo: Story = {
  args: {
    cta: {
      url: 'https://www.eyemed.com/resource/blob/1628/34d1391246f8f583b533459419c36952/core-story-video-data.mp4',
      label: 'Core Story Video',
    },
    icon: 'https://preview-stageuatemus.luxgroup.net/caas/v1/media/283978/data/99a2a5c6ce7546fdc4138007d4b8880d/icon-play-button-svg.svg',
    theme: 'grape',
    textLimit: 54,
  },
}

export const ResourceImage: Story = {
  args: {
    cta: {
      url: 'https://www.eyemed.com/resource/blob/5132/402c2a9d85dfbf2856717911f819f7a5/dr-john-lahr-photo--data.jpg',
      label: 'Download Photo: Andrew Neighbors, O.D Associate Medical Director',
    },
    icon: 'https://preview-stageuatemus.luxgroup.net/caas/v1/media/283912/data/a9e77a626026663ca0f71252e3b22d1f/icon-document-eyemed-svg.svg',
    theme: 'lips',
    textLimit: 54,
  },
}

export const ResourceLink: Story = {
  args: {
    cta: {
      url: 'mailto:EyeMedMarketing@eyemed.com',
      label: 'EyeMed Marketing',
    },
    icon: 'https://preview-stageuatemus.luxgroup.net/caas/v1/media/283912/data/a9e77a626026663ca0f71252e3b22d1f/icon-document-eyemed-svg.svg',
    theme: 'sun',
    textLimit: 54,
  },
}

export const ResourceHasDownload: Story = {
  args: {
    cta: {
      url: 'https://www.eyemed.com/resource/blob/5108/a301cba570aab7b8410e2806d119725b/challenge-the-status-quo-brochure-data-pdf-2203-cb-495-data.pdf',
      label: 'The EyeMed approach',
    },
    theme: 'leaf',
    hasDownload: true,
    textLimit: 17,
  },
}
