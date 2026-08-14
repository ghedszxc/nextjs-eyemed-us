import type { Meta, StoryObj } from '@storybook/nextjs'
import M13 from '..'

const meta = {
  title: 'Widgets/M13',
  component: M13,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof M13>

export default meta
type Story = StoryObj<typeof meta>

/** https://www.eyemed.com/en-us/broker/why-eyemed/benefits */
export const ExtraDiscounts: Story = {
  args: {
    theme: 'lips',
    title: 'Extra discounts, extra value',
    subtitle:
      '<p>Standard discounts, plus exclusive special offers<sup>7</sup> (all above and beyond the insured benefit) help members save even more on glasses, lenses, contacts and other materials.<sup>8</sup></p>',
    features: [
      {
        subtitle:
          '<h6>40% off additional pairs of glasses<sup>8</sup></h6><h6>Discounted, set pricing on hearing aids with Amplifon — up to 64% savings<sup>9</sup></h6>',
      },
      {
        subtitle:
          '<h6>20% off any balance over the frame allowance</h6><h6>15% off LASIK (or 5% off promotional pricing)<sup>10</sup></h6><h6>20% off non-covered items</h6>',
      },
      {
        subtitle:
          '<h6>Low, fixed pricing for blue light filtration</h6><h6>Up to $50 off at Sunglass Hut with eyeRewards<sup>11</sup></h6>',
      },
    ],
    subtitle2:
      '<p>Extra in-network savings are added and updated all year long. Plus, offers are always just a click away on our Member Portal or through the EyeMed Members App.</p>',
  },
}

/** https://www.eyemed.com/en-us/broker/why-eyemed/benefits */
export const OurNumbers: Story = {
  args: {
    theme: 'leaf',
    title: 'Our numbers speak for themselves',
    features: [
      {
        title: '97% of members',
        subtitle: '<p>are satisfied with their benefits<sup>3</sup></p>',
      },
      {
        title: '97% of clients',
        subtitle:
          '<p>think our benefits result in low out-of-pocket costs for members<sup>4</sup></p>',
      },
      {
        title: '76% average member savings',
        subtitle: '<p>with our benefits (vs. retail pricing)<sup>5</sup></p>',
      },
    ],
  },
}

/** https://www.eyemed.com/en-us/why-eyemed */
export const ABenefitEmployeesExpect: Story = {
  args: {
    theme: 'lips',
    title: 'A benefit employees expect to see',
    subtitle:
      '<p>Today’s employees know what they want – and what they want is vision care. According to a recent study, more than 80% of employees say vision benefits are as important as general medical insurance.<sup>1</sup> What was once a nice-to-have perk is now a must-have method for recruiting and retaining top talent.</p>',
    features: [
      {
        titleType: 'h2',
        title: '94%',
        subtitle:
          '<p>of U.S. Americans surveyed say vision care coverage is valuable.<sup>2</sup></p>',
      },
      {
        titleType: 'h2',
        title: '40%',
        subtitle:
          '<p>of employers say they believe workers leave their job to find employment that offers better benefits.<sup>3</sup></p>',
      },
      {
        titleType: 'h2',
        title: '70%',
        subtitle: '<p>say that vision problems affect their work and productivity.<sup>4</sup></p>',
      },
    ],
  },
}

/** https://www.eyemed.com/en-us/why-eyemed */
export const TheBroaderBenefits: Story = {
  args: {
    theme: 'grape',
    title: 'The broader benefits of vision care',
    subtitle:
      '<p>Eye exams are an important part of any preventative health care program. With an unobstructed view of blood vessels, eye exams can provide an early diagnosis of serious health problems, such as: diabetes, heart disease, high cholesterol, blood pressure, glaucoma and cataracts.<sup>6</sup> Employers who offer a vision plan experience cost savings.<sup>7</sup> The sooner they’re found, the sooner they can be treated. Healthier employees. Lower health care expenses. A more productive workplace. That’s value that’s easy to see. Find out what we have to offer.</p>',
  },
}
