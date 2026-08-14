import type { Meta, StoryObj } from '@storybook/nextjs'
import Quiz from '..'
import M07 from '@/widgets/M07'

const meta = {
  title: 'Widgets/Quiz',
  component: Quiz,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Quiz>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Learn how to see life to the fullest by answering a few questions below',
    questions: [
      {
        title: 'Do you get regular eye exams?',
        id: 'regular-exams',
        cta: [
          {
            label: 'Yes',
            url: '#?regular-eye-yes',
            isExternal: true,
            ctaStyle: '',
          },
          {
            label: 'No',
            url: '#?regular-eye-yes',
            isExternal: true,
            ctaStyle: '',
          },
        ],
      },
      {
        title: 'Do you wear glasses or contacts?',
        id: 'glasses-contacts',
        cta: [
          {
            label: 'Yes',
            url: '#?wear-glasses-yes',
            isExternal: true,
            ctaStyle: '',
          },
          {
            label: 'No',
            url: '#?wear-glasses-no',
            isExternal: true,
            ctaStyle: '',
          },
        ],
      },
      {
        title: 'Do you have a child/children?',
        id: 'children',
        cta: [
          {
            label: 'yes',
            url: '#?children-yes',
            isExternal: true,
            ctaStyle: '',
          },
          {
            label: 'no',
            url: '#?children-no',
            isExternal: true,
            ctaStyle: '',
          },
        ],
      },
    ],
    results: [
      {
        title:
          'High-five. You’re on the right track to taking care of your health, and the health of your family',
        body: '<p>Eye exams are important at every age – whether it’s to detect vision changes as you age, or to ensure that an eye problem isn’t interfering with your child’s learning. That’s why your EyeMed vision benefits make it easy to get all-important eye exams, and save money, too.</p>',
        answer: { isRegular: true, isGlasses: true, isChildren: true },
      },
      {
        title: 'Looking to spruce up with a new pair of glasses or sunglasses?',
        body: '<p>Or maybe its enrollment time and you have some questions. Don’t worry – we make it easy to understand your benefits and save on the latest styles.</p>',
        answer: { isRegular: true, isGlasses: true, isChildren: false },
      },
      {
        title:
          'Or maybe its enrollment time and you have some questions. Don’t worry – we make it easy to understand your benefits and save on the latest styles.',
        body: '<p>You must already know that serious health problems show early signs through your eyes. That’s why EyeMed makes it easy for you to take care of your eyes – and your overall health.</p>',
        answer: { isRegular: true, isGlasses: false, isChildren: false },
      },
      {
        title: 'Think you don’t need vision care? Think again',
        body: '<p>Eye exams are important at every age – whether it’s to detect vision changes as you age, or to ensure that an eye problem isn’t interfering with your child’s learning. Your EyeMed vision benefits make it easy to get those important eye exams, and save money, too.</p>',
        answer: { isRegular: false, isGlasses: true, isChildren: true },
      },
      {
        title: 'Looking to spruce up with a new pair of glasses or sunglasses?',
        body: '<p>Or maybe its enrollment time and you have some questions. Don’t worry – we make it easy to understand your benefits and save on the latest styles.</p>',
        answer: { isRegular: false, isGlasses: true, isChildren: false },
      },
      {
        title: 'Think you don’t need vision care? Think again',
        body: '<p>Eye exams are important at every age – whether it’s to detect vision changes as you age, or to ensure that an eye problem isn’t interfering with your child’s learning. Your EyeMed vision benefits make it easy to get those important eye exams, and save money, too.</p>',
        answer: { isRegular: false, isGlasses: false, isChildren: true },
      },
      {
        title: 'Think you don’t need vision care? Think again ',
        body: '<p>Some health problems show signs through your eyes — signs you don’t want to miss. Your EyeMed vision benefits make it easy to get those important eye exams, and save money, too.</p>',
        answer: { isRegular: false, isGlasses: false, isChildren: false },
      },
    ],
  },
}

/** https://www.eyemed.com/en-us/member/become-a-member/open-enrollment */
export const QuizWithM07: Story = {
  render: () => (
    <>
      <Quiz
        title="Learn how to see life to the fullest by answering a few questions below"
        questions={[
          {
            title: 'Do you get regular eye exams?',
            id: 'regular-exams',
            cta: [
              {
                label: 'Yes',
                url: '#?regular-eye-yes',
                isExternal: true,
                ctaStyle: '',
              },
              {
                label: 'No',
                url: '#?regular-eye-yes',
                isExternal: true,
                ctaStyle: '',
              },
            ],
          },
          {
            title: 'Do you wear glasses or contacts?',
            id: 'glasses-contacts',
            cta: [
              {
                label: 'Yes',
                url: '#?wear-glasses-yes',
                isExternal: true,
                ctaStyle: '',
              },
              {
                label: 'No',
                url: '#?wear-glasses-no',
                isExternal: true,
                ctaStyle: '',
              },
            ],
          },
          {
            title: 'Do you have a child/children?',
            id: 'children',
            cta: [
              {
                label: 'yes',
                url: '#?children-yes',
                isExternal: true,
                ctaStyle: '',
              },
              {
                label: 'no',
                url: '#?children-no',
                isExternal: true,
                ctaStyle: '',
              },
            ],
          },
        ]}
        results={[
          {
            title:
              'High-five. You’re on the right track to taking care of your health, and the health of your family',
            body: '<p>Eye exams are important at every age – whether it’s to detect vision changes as you age, or to ensure that an eye problem isn’t interfering with your child’s learning. That’s why your EyeMed vision benefits make it easy to get all-important eye exams, and save money, too.</p>',
            answer: { isRegular: true, isGlasses: true, isChildren: true },
          },
          {
            title: 'Looking to spruce up with a new pair of glasses or sunglasses?',
            body: '<p>Or maybe its enrollment time and you have some questions. Don’t worry – we make it easy to understand your benefits and save on the latest styles.</p>',
            answer: { isRegular: true, isGlasses: true, isChildren: false },
          },
          {
            title:
              'Or maybe its enrollment time and you have some questions. Don’t worry – we make it easy to understand your benefits and save on the latest styles.',
            body: '<p>You must already know that serious health problems show early signs through your eyes. That’s why EyeMed makes it easy for you to take care of your eyes – and your overall health.</p>',
            answer: { isRegular: true, isGlasses: false, isChildren: false },
          },
          {
            title: 'Think you don’t need vision care? Think again',
            body: '<p>Eye exams are important at every age – whether it’s to detect vision changes as you age, or to ensure that an eye problem isn’t interfering with your child’s learning. Your EyeMed vision benefits make it easy to get those important eye exams, and save money, too.</p>',
            answer: { isRegular: false, isGlasses: true, isChildren: true },
          },
          {
            title: 'Looking to spruce up with a new pair of glasses or sunglasses?',
            body: '<p>Or maybe its enrollment time and you have some questions. Don’t worry – we make it easy to understand your benefits and save on the latest styles.</p>',
            answer: { isRegular: false, isGlasses: true, isChildren: false },
          },
          {
            title: 'Think you don’t need vision care? Think again',
            body: '<p>Eye exams are important at every age – whether it’s to detect vision changes as you age, or to ensure that an eye problem isn’t interfering with your child’s learning. Your EyeMed vision benefits make it easy to get those important eye exams, and save money, too.</p>',
            answer: { isRegular: false, isGlasses: false, isChildren: true },
          },
          {
            title: 'Think you don’t need vision care? Think again ',
            body: '<p>Some health problems show signs through your eyes — signs you don’t want to miss. Your EyeMed vision benefits make it easy to get those important eye exams, and save money, too.</p>',
            answer: { isRegular: false, isGlasses: false, isChildren: false },
          },
        ]}
      />
      <section className="M07">
        <M07
          theme="leaf"
          title="Join the millions of members who choose EyeMed"
          subtitle="<p>The life of an EyeMed member is a life of convenience, comfort, savings and choice. Explore a whole new vision with benefits that redefine expectations.</p>"
          items={[
            {
              icon: 'savings',
              title: 'Get savings that add up',
              subtitle:
                '<p>Vision care doesn’t need to cost a pretty penny. EyeMed members save an average of 75% off the retail price of eye exams and glasses at in-network eye doctors.<sup>1</sup></p>',
            },
            {
              icon: 'eyeSwim',
              title: 'Choose what works for you',
              subtitle:
                '<p>Visit an independent eye doctor near you, your favorite retail store or shop online — the choice is yours.</p>',
            },
            {
              icon: 'eyeGlassesTilt',
              title: 'See why 2 is better than 1',
              subtitle:
                '<p>You deserve savings like 40% off an additional complete pair of glasses2, discounts at leading retailers and offers on extras like <a href="#">LASIK</a>.</p>',
            },
            {
              icon: 'doctor',
              title: 'Spot health problems sooner',
              subtitle:
                '<p>Early signs of diabetes, high blood pressure, high cholesterol and heart disease may be detected by an eye exam<sup>3</sup>. See it sooner. Treat it sooner.</p>',
            },
            {
              icon: 'eyeGlasses',
              title: 'Spoil yourself in style',
              subtitle:
                '<p>Choose from any frame or lens in the store — name brands like Ray-Ban™, Oakley™, Coach™, Prada™ and more. <a href="#">Find an eye doctor and filter by brand</a>.</p>',
            },
            {
              icon: 'laptop',
              title: 'Don’t live with eye strain',
              subtitle:
                '<p>Every day, many of us spend hours in front of digital screens. All this exposure can put strain on our eyes and may be linked to blurred vision, dry eye and headaches.</p>',
            },
          ]}
        />
      </section>
    </>
  ),
}
