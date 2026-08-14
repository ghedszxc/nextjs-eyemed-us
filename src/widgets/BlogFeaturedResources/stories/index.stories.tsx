import type { Meta, StoryObj } from '@storybook/nextjs'
import BlogFeaturedResources from '..'
import SidebarContainer from '@/components/SidebarContainer'

const meta = {
  title: 'Widgets/Blog Sidebar Featured Resources',
  component: BlogFeaturedResources,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof BlogFeaturedResources>

export default meta
type Story = StoryObj<typeof meta>

/** https://www.eyemed.com/en-us/blog/benefits-101 */
export const Default: Story = {
  args: {
    title: 'Featured Resources',
    resources: [
      {
        cta: {
          url: 'https://www.eyemed.com/resource/blob/5108/a301cba570aab7b8410e2806d119725b/challenge-the-status-quo-brochure-data-pdf-2203-cb-495-data.pdf',
          label: 'The EyeMed approach',
        },
        hasDownload: true,
        textLimit: 17,
      },
      {
        cta: {
          url: 'https://www.eyemed.com/resource/blob/32700/ba1381a017617c782430aaa0bff8d41e/core-story-overview-member-at-the-center-pdf-2410-cb-614-data.pdf',
          label: 'Core story overview',
        },
        hasDownload: true,
        textLimit: 17,
      },
    ],
  },
  decorators: Story => (
    <SidebarContainer>
      <Story />
    </SidebarContainer>
  ),
}
