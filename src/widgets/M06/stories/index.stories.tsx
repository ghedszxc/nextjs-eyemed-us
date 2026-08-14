import type { Meta, StoryObj } from '@storybook/nextjs'
import M06 from '..'

const meta = {
  title: 'Widgets/M06',
  component: M06,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof M06>

export default meta

type Story = StoryObj<typeof meta>

// https://www.eyemed.com/en-us/broker
export const OurFocusOnChoiceMakesItEasyForYouAndYourClients: Story = {
  args: {
    theme: 'leaf',
    title: 'Our focus on choice makes it easy for you – and your clients',
    subtitle: '',
    subtitleAlignment: '',
    items: [
      {
        type: '',
        theme: 'grape',
        icon: 'eye',
        title: 'Why EyeMed?',
        subtitle:
          '<div><p>You want a vision care partner. Your clients want quality benefits and no-noise administration. And your employees want an outstanding member experience with choice, convenience, flexibility, value and transparency all rolled into one.</p></div>',
        cta: {
          label: 'learn more',
          url: '',
        },
      },
      {
        type: '',
        theme: 'lips',
        icon: 'eyeGlassesTilt',
        title: 'Why vision insurance?',
        subtitle:
          '<div><p>Vision benefits are so much more than a vision care exam. They help employees stay healthy and see everything life has to offer. For employers, they can help save money, improve productivity and attract and retain talent.</p></div>',
        cta: {
          label: 'read more',
          url: '',
        },
      },
      {
        type: '',
        theme: 'sun',
        icon: 'eyemedPaper',
        title: 'Broker resources',
        subtitle:
          '<div><p>When you’re an EyeMed broker, we provide you with all the tools you need to help your clients make sound decisions, as well as resources to continue building your client base.</p></div>',
        cta: {
          label: 'see resources',
          url: '',
        },
      },
    ],
  },
}

// https://www.eyemed.com/en-us/broker/why-eyemed
export const SeeTheDifference: Story = {
  args: {
    theme: 'leaf',
    title: 'Our focus on choice makes it easy for you – and your clients',
    subtitle: '',
    subtitleAlignment: '',
    items: [
      {
        type: '',
        theme: 'grape',
        icon: 'map',
        title: 'Choice and convenience',
        subtitle:
          "<div><p>EyeMed is all about choice. With America's largest vision network, we have the right mix of providers—independent, retail and online. That means members can go where they want, when they want. It's important. Because when members stay in-network, they get the most value from their vision benefits.</p></div>",
      },
      {
        type: '',
        theme: 'lips',
        icon: 'eyeGlasses',
        title: 'Redefining flexibility and value',
        subtitle:
          '<div><p>We know your clients have a diverse workforce—and our benefits are designed to meet their diverse needs. So, we will work with you to design a benefits package that aligns with your clients’ needs, Plus, with us, employees get more bang for their buck – saving an average of 76% versus retail. All with the freedom to choose what works best—or looks best—for them. All with freedom of choice on what they want to purchase.</p></div>',
      },
      {
        type: '',
        theme: 'sun',
        icon: 'monitorClick',
        title: 'Re-imagining simple and transparent',
        subtitle:
          "<div><p>We keep vision benefits easy with an eye on value. Our innovative online tools, personalized member communications and award-winning customer service center (for 14 years in a row) make it easy for members. And easy for them means easy for you and your clients. In fact, 98% of clients say we're easy to work with.</p></div>",
      },
    ],
  },
}

// https://www.eyemed.com/en-us/broker/working-with-us
export const WhoWeWorkWith: Story = {
  args: {
    theme: 'lips',
    title: 'Who we work with',
    subtitle:
      '<div><p>In addition to group business, we also support consumers through other channels.</p></div>',
    subtitleAlignment: '',
    items: [
      {
        type: '',
        theme: 'leaf',
        icon: 'women',
        title: 'Individual',
        subtitle:
          '<div><p>We sell direct to individual consumers and their family members (and you can, too)</p></div>',
        cta: {
          label: 'learn more',
          url: '',
        },
      },
      {
        type: '',
        theme: 'grape',
        icon: 'cart',
        title: 'Exchanges',
        subtitle: '<div><p>We also participate on many popular exchange platforms</p></div>',

        cta: {
          label: 'learn more',
          url: '',
        },
      },
    ],
  },
}

// https://www.eyemed.com/en-us/broker/working-with-us/become-appointed/individual
export const PlentyOfSupportToHelpYouSell: Story = {
  args: {
    theme: 'lips',
    title: 'Plenty of support to help you sell',
    subtitle:
      '<div><p>In addition to your unique writing link, we’ll provide you with resources to help you manage your sales.</p></div>',
    subtitleAlignment: '',
    items: [
      {
        type: '',
        theme: 'lips',
        icon: 'eyemedInsideMonitor',
        title: 'Landing page',
        subtitle:
          '<div><p>You’ll get a custom landing page with your phone number for easy customer contact</p></div>',
      },
      {
        type: '',
        theme: 'lips',
        icon: 'pieChartInsideTablet',
        title: 'Broker Portal',
        subtitle:
          '<div><p>We’ll provide you with a place to track commissions, sales and manage personal data. Plus, we’ll regularly add additional support material</p></div>',
      },
      {
        type: '',
        theme: 'lips',
        icon: 'dollarBill',
        title: 'Commissions',
        subtitle: '<div><p>Your commissions will be paid monthly via electronic deposits</p></div>',
      },
    ],
  },
}

// https://www.eyemed.com/en-us/employers/why-eyemed
export const SeeSomethingNew: Story = {
  args: {
    theme: 'grape',
    title: 'See something new',
    subtitle:
      '<div><p>Healthcare costs are rising. Needs are shifting. People have more to do and less time to do it. We’re changing the industry by doing more to help solve these real-world, everyday challenges. Although we have millions of members, we build vision benefits 1 member, 1 challenge, 1 solution at a time – by focusing on 3 key areas.</p></div>',

    subtitleAlignment: '',
    items: [
      {
        type: '',
        theme: 'grape',
        icon: '',
        title: 'Reinventing choice and convenience',
        subtitle:
          '<div><p>Our diverse network gives your employees access to quality eye care and eyewear wherever they are, whenever they need it. By offering the right mix of independent providers, national and regional retailers and online options, it’s no wonder 98% of our members stay in-network.</p></div>',
        cta: {
          label: 'our network',
          url: '',
        },
      },
      {
        type: '',
        theme: 'grape',
        icon: '',
        title: 'Redefining flexibility and value',
        subtitle:
          '<div><p>We know each company is as unique as its employees. So, we will work with you to design a benefits package that aligns with your clients’ needs, culture and wellness strategies. Plus, with us, employees get more bang for their buck – saving an average of 76% on frames, lenses, contacts, exams and more.  All with freedom of choice on what they want to purchase.</p></div>',
        cta: {
          label: 'our benefits',
          url: '',
        },
      },
      {
        type: '',
        theme: 'grape',
        icon: '',
        title: 'Reimagining simple and transparent',
        subtitle:
          '<div><p>We want to make it as simple as possible for your employees to take care of their vision health. With our innovative online tools, personalized member communications and award-winning customer service center (for 14 years in a row), we make it easy for members. Plus, easy for them means easier for you, too.</p></div>',
        cta: {
          label: 'learn how we make it easy',
          url: '',
        },
      },
    ],
  },
}

// https://www.eyemed.com/en-us/contact-us/members-providers
export const MemberResources: Story = {
  args: {
    theme: 'leaf',
    title: 'Member Resources',
    subtitle: '',
    subtitleAlignment: '',
    items: [
      {
        type: '',
        theme: 'leaf',
        icon: '',
        titleTagHeader: 'Member Web is your hub for all things vision',
        subtitle:
          '<div><p>View your benefits, check eligibility, print your ID card and more.</p></div>',
        cta: {
          label: 'Login',
          url: '',
        },
      },
      {
        type: '',
        theme: 'leaf',
        icon: '',
        titleTagHeader: 'Let’s answer some FAQs',
        subtitle:
          '<div><p>Whether you’re a vision benefits veteran or a newbie, you’re bound to have some questions.</p></div>',
        cta: {
          label: 'read more',
          url: '',
        },
      },
      {
        type: '',
        theme: 'leaf',
        icon: '',
        titleTagHeader: 'Find an in-network eye doctor',
        subtitle:
          '<div><p>Staying in-network means you save money, with no paperwork. If you go out-of-network, you’ll need to fill out a claim form.</p></div>',
        cta: {
          label: 'provider locator',
          url: '',
        },
      },
    ],
  },
}

// https://www.eyemed.com/en-us/employers/why-eyemed
export const OurSolutionsCreateResults: Story = {
  args: {
    theme: 'leaf',
    title: 'Our solutions create results',
    subtitle: '',
    subtitleAlignment: '',
    items: [
      {
        type: '',
        theme: 'grape',
        icon: '',
        title: '97%',
        subtitle: '<div><p>of members are satisfied with their benefits</p></div>',
      },
      {
        type: '',
        theme: 'lips',
        icon: '',
        title: '98%',
        subtitle: '<div><p>of clients agree our benefits are easy to understand</p></div>',
      },
      {
        type: '',
        theme: 'sun',
        icon: '',
        title: '98%',
        subtitle: '<div><p>overall client satisfaction</p></div>',
      },
    ],
  },
}
