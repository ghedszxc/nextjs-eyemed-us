import type { Meta, StoryObj } from '@storybook/nextjs'
import SimpleCopy from '..'

const meta = {
  title: 'Widgets/SimpleCopy',
  component: SimpleCopy,
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: { type: 'select' },
      options: ['leaf', 'grape', 'lips', 'sun', 'moon', 'gray'],
    },
  },
} satisfies Meta<typeof SimpleCopy>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Dennis Williams, head of EyeMed\'s Customer Care Center, shares EyeMed\'s approach to customer care',
    body: 'As a 2022 BenchmarkPortal Center of Excellence, the EyeMed Customer Care Center is one of very few companies to have received this distinction for 14 straight years, delivering extraordinary customer service time and again.¹',
    theme: 'leaf',
  },
}

export const ComplexContent: Story = {
  args: {
    title: 'Meet the expert',
    body: '<p>Dennis stands behind his super team and the ultimate experience they create for EyeMed members. Read on to discover the 3 key elements his team focuses on to create and maintain outstanding customer service.</p><h5>Our call center reps are the lynchpin to outstanding service</h5><p>EyeMed\'s number one commitment is to hiring, training and retaining the best customer service agents. In fact, EyeMed scored 20 points higher than the industry average in Top Box Customer Satisfaction.<sup class="footnote">2</sup> Bottom line, happy and engaged call center agents make happy customers. Dennis explains that these impressive stats are the result of hiring the right agents and training led by experts who were once agents themselves.</p><h5>Knowledge is king when interacting with customers</h5><p>Dennis knows that members interacting with the call center will get the information they need if leaders provide the right tools and resources for agents to support customers. "We do the leg work so members don\'t have to," he explains. "When our members call in, agents are able to answer even the most complicated of questions."</p>',
    theme: 'grape',
  },
}

export const MetricsContent: Story = {
  args: {
    title: 'We regularly re-evaluate metrics to create the most value for customers',
    body: '<p>When members call our Customer Care Center, their expectation is quick resolution, no matter the complexity of their benefit concern. While there are a slew of metrics we measure to ensure our service exceeds expectations, there are 3 metrics we consistently hone to make sure we always deliver an extraordinary experience: Average Speed of Answer, Abandonment Rate and First-Call Resolution.<br><br>There is a direct correlation between the speed a call is picked up and a better customer experience. Once a customer call is answered by our Interactive Voice Response (IVR), our aim is to reduce this time as much as possible to eliminate customer frustration.<br><br>Longer hold times can result in the customer hanging up before they even reach an agent. EyeMed previously won a BenchmarkPortal contest for effectiveness boasting a lower <strong>Average Speed of Answer</strong> and lower <strong>call Abandonment Rate</strong> than the industry average of contact centers based on key operating metrics.<sup class="footnote">2</sup><br><br>And to boot, <strong>our call center resolves 99% of issues during the first call.</strong><sup class="footnote">4</sup></p><h5>Putting it all together</h5><p>With top-notch, highly trained agents, EyeMed\'s Customer Care is at the ready to help members understand and use their benefits. Don\'t just take our word for it, our numbers speak for themselves. Live agents are standing by on average 362 days a year, over 100 hours per week.</p><p>Learn more about how EyeMed provides a best-in-class customer care experience for our members. Reach out to your EyeMed representative or visit <a href="https://eyemed.com/en-us" target="_blank" rel="noopener">eyemed.com</a>.</p><p><br>••••</p><p><br><em>1 - Purdue University BenchmarkPortal independent assessment of call centers nationwide, 2022.<br><br>2- Purdue University BenchmarkPortal independent assessment of call centers nationwide, 2021.<br><br>3 - EyeMed internal member satisfaction survey conducted by Concentrix, 2022.<br><br>4 - EyeMed incoming call analysis, 2021.</em></p>',
    theme: 'leaf',
  },
}
