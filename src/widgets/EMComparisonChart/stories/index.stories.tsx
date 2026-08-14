import type { Meta, StoryObj } from '@storybook/nextjs'
import EMComparisonChart from '..'

const meta = {
  title: 'Widgets/EM Comparison Chart',
  component: EMComparisonChart,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof EMComparisonChart>

export default meta
type Story = StoryObj<typeof meta>

/** https://www.eyemed.com/en-us/member/individual */
export const Default: Story = {
  args: {
    title: 'A plan for every pair of eyes',
    subtitle:
      '<p>We love giving you choices.</p><p>Choice in providers, choice in your favorite frames, choice in add-ons and options. And, of course, choice in the vision insurance plan that fits you best.</p>',
    columns: [
      [
        'Vision plan comparison</p>',
        '<p>Comprehensive eye exam -covered after copay</p>',
        '<p>Frames</p>',
        '<p>Lenses SV / BV / TF</p>',
        '<p>Contact lenses</p>',
        '<p>Additional discounts</p>',
        '<p>Out-of-Network benefits</p>',
        '<p>Pricing</p>',
      ],
      [
        '<h3 class="leaf">EyeMed Healthy </h3><p>An eye exam plus great discounts on glasses &amp; contacts</p>',
        '-',
        '<h6>Discounts apply</h6>',
        '<h6>Discounts apply</h6>',
        '<h6>Discounts apply</h6>',
        '-',
        '-',
        {
          url: '#',
          label: '<span>Starting at</span><br>$5.00/month*',
        },
      ],
      [
        '<h3 class="leaf">EyeMed Bold </h3><p>Essential vision coverage to get what you need</p>',
        '-',
        '<h6>Covered allowance</h6>',
        '<h6>Covered with copay</h6>',
        '<h6>Covered allowance</h6>',
        '-',
        '-',
        {
          url: '#',
          label: '<span>Starting at</span><br>$17.50/month',
        },
      ],
      [
        '<h3 class="leaf">EyeMed Bright </h3><p>More coverage for you and your family </p>',
        '-',
        '<h6>Covered allowance</h6>',
        '<h6>Covered with copay</h6>',
        '<h6>Covered allowance</h6>',
        '-',
        '-',
        {
          url: '#',
          label: '<span>Starting at</span><br>$30.00/month',
        },
      ],
    ],
  },
}
