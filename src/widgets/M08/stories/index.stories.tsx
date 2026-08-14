import type { Meta, StoryObj } from '@storybook/nextjs'
import M08 from '..'

const meta = {
  title: 'Widgets/M08',
  component: M08,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof M08>

export default meta
type Story = StoryObj<typeof meta>

/** https://www.eyemed.com/en-us/member/benefits/lasik */
export const FreedomToChooseSample: Story = {
  args: {
    theme: 'leaf',
    title: 'Freedom to choose, freedom to save, freedom to see',
    subtitle:
      'Your EyeMed membership lets you see on your own terms, with added savings on alternatives to traditional glasses. EyeMed members get either 15% off standard LASIK prices or 5% off promotional LASIK prices.* And, there’s even more value with LasikPlus.',
    banners: [
      {
        icon: 'savings',
        title: '$1,000 savings on custom LASIK**',
      },
      {
        icon: 'eyeDiagram',
        title: 'Free LASIK exam (more than $100 value)***',
      },
      {
        icon: 'checkmark',
        title: 'Free lifetime enhancements on most procedures',
      },
      {
        icon: 'doctor',
        title: 'Access to credentialed LASIK providers',
      },
    ],
    bannerImage: {
      image: {
        desktop: {
          url: 'https://www.eyemed.com/resource/image/1338/square_ratio1x1/385/385/4fc8140d15f8226dfcba2daec1babf93/FAE6396891DAB8304450890E5CD91FC0/45576804984-b081dea2b6-k.jpg',
          alt: 'Young man in winter attire uses a smartphone.',
        },
        mobile: {
          url: 'https://www.eyemed.com/resource/image/1338/landscape_ratio9x6/990/660/cbb5a5a6e306c26bd2192e89a0955ee2/9AFD2759C6C898E587476632851EBBC5/45576804984-b081dea2b6-k.jpg',
          alt: 'Young man in winter attire uses a smartphone.',
        },
      },
    },
  },
}

/** https://www.eyemed.com/en-us/broker/why-eyemed/easy-experience */
export const BenefitsGoneMobileSample: Story = {
  args: {
    theme: 'lips',
    title: 'Benefits gone mobile',
    subtitle:
      'Our benefits are as connected as every other part of employees’ lives. Whether they want to manage their benefit and get answers on their computer, in the palm of their hands via their smartphone or by talking to a real person, we’ve got them covered.',
    banners: [
      {
        icon: 'laptop',
        title: 'Member Portal',
        subtitle:
          'Members can view their benefits, locate a provider (with enhanced search criteria) and schedule an appointment , view special offers and more',
      },
      {
        icon: 'phone',
        title: 'Mobile app',
        subtitle:
          'Or, they can manage their benefits on the EyeMed Members App with many of the same features, plus the ability to store prescriptions and reminders',
      },
      {
        icon: 'chat',
        title: 'Text alerts',
        subtitle:
          'For those who opt-in, we’ll share things like benefit information, quick tips and guides, special offers and wellness information',
      },
      {
        icon: 'callCenter',
        title: 'Our Customer Care Center',
        subtitle:
          'If members have questions beyond our online or printed resources, our award-winning call center agents are available 7 days a week.',
      },
    ],
    bannerImage: {
      image: {
        desktop: {
          url: 'https://www.eyemed.com/resource/image/1726/square_ratio1x1/385/385/2f4ea5ebf17cff5d499ae1aaeeb9e1/8F2458DEDF9E5BCAFA4F4C1382093235/brokermobilebenefits-sq.jpg',
          alt: 'Businessman uses an app in a car while a woman drives',
        },
        mobile: {
          url: 'https://www.eyemed.com/resource/image/1726/landscape_ratio9x6/990/660/a22fb71042527ae9aa352c24fd28ebdb/7260966D70D0CE10C46AB5EB6816FCF1/brokermobilebenefits-sq.jpg',
          alt: 'Businessman uses an app in a car while a woman drives',
        },
      },
    },
  },
}

/** https://www.eyemed.com/en-us/broker/working-with-us/individual */
export const WhatIsEyemedIndividualSample: Story = {
  args: {
    theme: 'lips',
    title: 'What is EyeMed Individual?',
    subtitle:
      'Different from our group business, EyeMed Individual and Family Vision Plans offer 3 standard levels of coverage for individual purchase. Offering it is a win-win (for you and for consumers).',
    banners: [
      {
        icon: 'graphLine',
        title: 'Grow your book',
        subtitle: 'Great product for multi-lining and retention improvement',
      },
      {
        icon: 'dollarSign',
        title: 'Make money',
        subtitle: '10% new and renewal commissions for appointed producers',
      },
      {
        icon: 'group',
        title: 'Offer affordable options',
        subtitle:
          '<a href="https://www.eyemed.com/en-us/member/individual" taget="_blank">3 standard plans with rates starting at just $5/month</a>',
      },
      {
        icon: 'family',
        title: 'Provide flexibility',
        subtitle: 'Single, single +1 and family tiers available',
      },
    ],
    bannerImage: {
      image: {
        desktop: {
          url: 'https://www.eyemed.com/resource/image/1984/square_ratio1x1/385/385/f347f45c0881cd4a3a8cc34e9f0da2e3/EFA06B7E4E7FF36A2DF1CE0BAF278323/brokerindividual-sq.jpg',
          alt: 'brokerindividual-sq',
        },
        mobile: {
          url: 'https://www.eyemed.com/resource/image/1984/landscape_ratio9x6/990/660/b01c914a0c0fd8d4b1830495b7caea7e/D9335D411519401CA3C427B6A97AF602/brokerindividual-sq.jpg',
          alt: 'brokerindividual-sq',
        },
      },
    },
  },
}

/** https://www.eyemed.com/en-us/member/benefits */
export const BenefitsSample: Story = {
  args: {
    theme: 'lips',
    title: 'Benefits and services that cater to your lifestyle',
    subtitle:
      'We’re out to wow you with members-only savings and an eye-opening experience. Here are some insider tips to help you take advantage of your benefits.',
    banners: [
      {
        title: 'Save the EyeMed member way – everyday',
        subtitle:
          '<p>We think good things should stick around. That’s why you can count on evergreen offers like 40% off a second pair of glasses or 20% off your balance for frames, lenses or lens options—even after you’ve maxed your benefits.<sup class="footnote">2</sup></p>',
      },
      {
        title: 'Lean into LASIK ',
        subtitle:
          '<p>With your EyeMed membership, you get discounts<sup class="footnote">3</sup> on laser vision correction through nationwide providers who are part of the U.S. Laser Vision network. <a href="#" target="_blank">Learn more about LASIK ></a></p>',
      },
      {
        title: 'Hear all of life’s sweet sounds',
        subtitle:
          '<p>We’ve teamed up with Amplifon, the nation’s largest independent hearing discount network, to add affordable hearing care to every EyeMed vision benefits package. Now hear this: it’s all part of being an EyeMed member. <a href="#" target="_blank">Learn more about hearing benefits ></a></p>',
      },
      {
        title: 'Travel with confidence',
        subtitle:
          'If you lose or break your glasses while traveling abroad, our Vision Abroad benefit ensures you’ll be taken care of.<sup class="footnote">4</sup>',
      },
    ],
    bannerImage: {
      icon: 'eyemedInsideMonitor',
      title: 'Browse and buy online',
      subtitle:
        'The EyeMed life is even easier when you use your benefits online to shop and buy the latest brands at major retail sites.',
      cta: {
        label: 'Learn more',
        url: '#',
      },
    },
  },
}

/** https://www.eyemed.com/en-us/provider/why-eyemed */
export const TheEyemedDifferenceSample: Story = {
  args: {
    theme: 'leaf',
    title: 'The EyeMed Difference',
    subtitle:
      'Different from our group business, EyeMed Individual and Family Vision Plans offer 3 standard levels of coverage for individual purchase. Offering it is a win-win (for you and for consumers).',
    banners: [
      {
        title: 'We Encourage Plan Usage through Member Education',
        subtitle:
          'Our members’ loyalty and our ongoing eye health education can help grow your practice and optimize lifetime value. The average revenue per eye exam is 14% higher with EyeMed compared to other vision plans, and you can earn a full year of revenue in just 11 months with EyeMed members.<sup class="footnote">1</sup>',
      },
      {
        title: 'Opportunities for practice growth',
        subtitle:
          '<p>We provide the network our members want with the right profile of providers and the right size of panel. The numbers speak for themselves:</p><h5>98% of members use their benefits at in-network providers<sup class="footnote">1</sup></h5>',
      },
      {
        title: 'Freedom of choice for lab products',
        subtitle:
          'EyeMed has labs all across the country, including independent labs. Our product catalog offers thousands of lenses and add-on choices to meet your patients’ needs – and yours.  Or, take advantage of in-office lab and finishing services.',
      },
      {
        title: 'We keep it hassle-free',
        subtitle:
          '<p>If you’re already on the network, don’t miss out on the hundreds of tools and resources available online.</p><p>Visit inFocus for easy access to training, resources and news.</p>',
      },
    ],
    bannerImage: {
      image: {
        desktop: {
          url: 'https://www.eyemed.com/resource/image/3476/square_ratio1x1/385/385/ae073ca58b6771a8234cc0c6feed6ca/BD32453049C8FB4933122B83EBB483F6/24304673777-5a8e38d05d-k-tall.jpg',
          alt: 'Two women looking at a large variety of glasses.',
        },
        mobile: {
          url: 'https://www.eyemed.com/resource/blob/3474/7c19d95b389615f988789e369822ab89/24304673777-5a8e38d05d-k-m-data.jpg',
          alt: 'Two women looking at a large variety of glasses.',
        },
      },
    },
    cta: {
      label: 'Visit inFocus',
      url: '#',
    },
  },
}
