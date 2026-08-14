import type { Meta, StoryObj } from '@storybook/nextjs'
import M12Columns from '..'

const meta = {
  title: 'Widgets/M12 Columns',
  component: M12Columns,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof M12Columns>

export default meta
type Story = StoryObj<typeof meta>

/** https://www.eyemed.com/en-us/health-and-ancillary/vision-expertise */
export const Default: Story = {
  args: {
    collection: [
      {
        title: 'Consumers choose to get exams at...',
        text: '',
        caption: '<p>Source: EyeMed book of business, 2022.</p>',
        image: {
          href: 'https://www.eyemed.com/resource/blob/2800/868eeadc458aa7465dc7c074399e3427/circle-customers-choose-exams-data2021-data.png',
          alt: 'Eye Exam',
        },
      },
      {
        title: 'but choose to buy their frames at...',
        text: '',
        caption: '<p>Source: EyeMed book of business, 2022.</p>',
        image: {
          href: 'https://www.eyemed.com/resource/blob/2802/74dafae5f9fe9e0daffa7957c794ac81/circle-customers-choose-exams-data-2-2021-v2-data.png',
          alt: 'Eye Exam',
        },
      },
      {
        title: 'and they get them when they want to…',
        text: '',
        caption: '<p>Source: EyeMed book of business, 2022.</p>',
        image: {
          href: 'https://www.eyemed.com/resource/blob/2804/a01f75fee07f5a1d5bb0efac80567667/circle-customers-choose-exams-data-3-text-2021-data.png',
          alt: 'Eye Exam',
        },
      },
    ],
    variant: 'TextImageColumn',
  },
}

/** https://www.eyemed.com/en-us/member/become-a-member/open-enrollment **/
export const Sample1: Story = {
  args: {
    collection: [
      {
        title1: 'America’s largest vision care network',
        title2: '130,000',
        text1: '<h6 class="align--center">providers in our network<sup>4</sup></h6>',
        text2: '',
        image: {
          href: 'https://preview-stageuattr.luxgroup.net/caas/v1/media/278984/data/c6ba9ddcd321225d8c91f891a5d39ded/em-provider-network-logos-example.png',
          alt: 'EM_Provider_network_logos_EXAMPLE',
        },
      },
      {
        title1: 'How much you keep in your pocket',
        title2: '',
        text1: '<p>75% savings<sup>1</sup></p><p><br/></p>',
        text2:
          '<h5 class="align--center">$266 out of pocket without insurance</h5><p class="align--center">vs</p><h5 class="align--center">$137 out of pocket with EyeMed</h5><p class="align--center">=</p><h5 class="align--center">$128 savings</h5>',
        image: { href: '', alt: undefined },
      },
      {
        title1: 'Get what you want when you want',
        title2: '',
        text1: '',
        text2: '',
        image: {
          href: 'https://preview-stageuattr.luxgroup.net/caas/v1/media/278988/data/37daaf7fa55c740a766830d47ca1abd7/em-brand-logo-list-example-data.png',
          alt: 'EM_brand_logo_list_EXAMPLE_data',
        },
      },
    ],
    variant: 'default',
  },
}
