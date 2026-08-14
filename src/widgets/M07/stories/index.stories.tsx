import type { Meta, StoryObj } from '@storybook/nextjs'
import M07 from '..'

const meta = {
  title: 'Widgets/M07',
  component: M07,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof M07>

export default meta

type Story = StoryObj<typeof meta>

export const WithLogo: Story = {
  args: {
    theme: 'lips',
    title: 'Something to see for everyone',
    subtitle:
      '<div><p>Some members like convenience, others prefer a personal touch. And while one wants the latest fashion, another chooses low to no out-of-pocket cost. Our goal is for EyeMed members to have it all.</p></div>',
    items: [
      {
        icon: 'cart',
        title: 'Longer hours',
        subtitle:
          '<div><p>Our in-network options include extended evening and weekend hours for maximum convenience.</p></div>',
      },
      {
        icon: 'cart',
        title: 'One-stop shopping',
        subtitle:
          '<div><p>Members can easily get an eye exam and materials in the same location since nearly 100% of our locations offer both eye care and eyewear.</p></div>',
      },
      {
        icon: 'cart',
        title: 'Advanced technology',
        subtitle:
          '<div><p>Many providers offer cutting-edge exam and fit technologies, lens simulators and virtual frame side-by-side comparisons.</p></div>',
      },
      {
        icon: 'cart',
        title: 'High-end fashion',
        subtitle:
          '<div><p>Lots of frame options from brands like Oakley, Ray-Ban, Coach, Tory Burch, Tiffany & Co. and so many more.</p></div>',
      },
      {
        icon: 'cart',
        title: 'Budget-savvy options',
        subtitle:
          '<div><p>All in-network locations have at least 100 frames priced $130 or lower so that members can minimize (or eliminate) their out-of-pocket cost.</p></div>',
      },
      {
        icon: 'cart',
        title: 'On-site labs',
        subtitle:
          '<div><p>Some providers even have the ability to make eyewear on-site for same-day glasses.</p></div>',
      },
    ],
  },
}

export const WithoutLogo: Story = {
  args: {
    theme: 'lips',
    title: 'Something to see for everyone',
    subtitle:
      '<div><p>Some members like convenience, others prefer a personal touch. And while one wants the latest fashion, another chooses low to no out-of-pocket cost. Our goal is for EyeMed members to have it all.</p></div>',
    items: [
      {
        title: 'Longer hours',
        subtitle:
          '<div><p>Our in-network options include extended evening and weekend hours for maximum convenience.</p></div>',
      },
      {
        title: 'One-stop shopping',
        subtitle:
          '<div><p>Members can easily get an eye exam and materials in the same location since nearly 100% of our locations offer both eye care and eyewear.</p></div>',
      },
      {
        title: 'Advanced technology',
        subtitle:
          '<div><p>Many providers offer cutting-edge exam and fit technologies, lens simulators and virtual frame side-by-side comparisons.</p></div>',
      },
    ],
  },
}
