import type { Meta, StoryObj } from '@storybook/nextjs'
import M16RichTextCitation from '..'

const meta = {
  title: 'Widgets/M16 Rich Text Citation',
  component: M16RichTextCitation,
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: { type: 'select' },
      options: ['leaf', 'grape', 'lips', 'sun', 'moon', 'gray'],
    },
  },
} satisfies Meta<typeof M16RichTextCitation>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    body: '<ol><li>Discounts are in-network only and are not insured benefits. May not be available on all plans. Confirm if offered by your provider. Listed offers expire 12/31/2024. See offer for exclusions.</li><li>OneSight internal book of business, 2022.</li></ol>',
  },
}

export const WithSuperscriptCitations: Story = {
  args: {
    body: '<p>¹ - EyeMed client satisfaction survey conducted by Walker, 2016.</p><p>² - Internal analysis of EyeMed membership data compared to data from leading vision benefit companies, as reported in Freedom of Information Act (FOIA) requests and new alerts.</p>',
  },
}

export const WithUnorderedList: Story = {
  args: {
    body: '<ul><li>Comprehensive vision coverage for all family members</li><li>Access to the largest network of eye care providers</li><li>Flexible plan options to meet diverse needs</li><li>Online tools and resources for members</li><li>24/7 customer support and assistance</li></ul>',
  },
}
