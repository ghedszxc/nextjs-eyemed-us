import type { Meta, StoryObj } from '@storybook/nextjs'
import React from 'react'
import Modal from '..'

const meta = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large', 'full'],
    },
  },
} satisfies Meta<typeof Modal>

export default meta

type Story = StoryObj<typeof meta>

export const TranscriptModal: Story = {
  render: function Render(args) {
    const [isOpen, setIsOpen] = React.useState(false)
    
    return (
      <div>
        <button onClick={() => setIsOpen(true)}>Open Transcript Modal</button>
        <Modal
          {...args}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      </div>
    )
  },
  args: {
    title: 'TRANSCRIPT:',
    theme: 'leaf',
    children: (
      <div>
        <p>
          EyeMed Vision Care has a proven track record of delivering innovative vision benefits
          solutions that drive member satisfaction and health outcomes. Our partnerships with
          leading health plans demonstrate our commitment to excellence and our ability to
          provide market-leading expertise, network access, and member experience.
        </p>
        <p>
          Our industry-leading platform delivers operational excellence, comprehensive
          compliance standards, and seamless integration capabilities. We maintain the
          highest standards of quality and have consistently passed CMS audits and
          regulatory reviews.
        </p>
        <p>
          But most importantly, Powered by EyeMed is built to partner. We understand
          the key drivers of successful relationships with health plans and work
          collaboratively to achieve shared goals and deliver exceptional value to
          members and stakeholders.
        </p>
      </div>
    ),
    size: 'medium',
  },
}

export const GrapeThemeModal: Story = {
  render: function Render(args) {
    const [isOpen, setIsOpen] = React.useState(false)
    
    return (
      <div>
        <button onClick={() => setIsOpen(true)}>Open Grape Theme Modal</button>
        <Modal
          {...args}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      </div>
    )
  },
  args: {
    title: 'GRAPE THEME:',
    theme: 'grape',
    children: (
      <div>
        <p>This modal demonstrates the grape theme with purple colors.</p>
        <p>The header background and close button will be styled with grape theme colors.</p>
      </div>
    ),
    size: 'medium',
  },
}

export const LongContentModal: Story = {
  render: function Render(args) {
    const [isOpen, setIsOpen] = React.useState(false)
    
    return (
      <div>
        <button onClick={() => setIsOpen(true)}>Open Long Content Modal</button>
        <Modal
          {...args}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      </div>
    )
  },
  args: {
    title: 'LONG CONTENT EXAMPLE:',
    children: (
      <div>
        <h3>Section 1: Introduction</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        
        <h3>Section 2: Detailed Information</h3>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
          in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        
        <h3>Section 3: Technical Specifications</h3>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
          veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
        
        <h3>Section 4: Implementation Details</h3>
        <p>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
          sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
        </p>
        
        <h3>Section 5: Best Practices</h3>
        <p>
          Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt
          ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
          veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.
        </p>
        
        <h3>Section 6: Troubleshooting</h3>
        <p>
          Nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure
          reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
          vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
        </p>
        
        <h3>Section 7: Conclusion</h3>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
          praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
          excepturi sint occaecati cupiditate non provident.
        </p>
        
        <h3>Section 8: Additional Resources</h3>
        <p>
          Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum
          et molestiae non recusandae.
        </p>
        
        <h3>Section 9: Contact Information</h3>
        <p>
          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
          quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est.
        </p>
        
        <h3>Section 10: Final Notes</h3>
        <p>
          Omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis
          aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et
          molestiae non recusandae.
        </p>
      </div>
    ),
    size: 'medium',
  },
}

export const VeryLongContentModal: Story = {
  render: function Render(args) {
    const [isOpen, setIsOpen] = React.useState(false)
    
    return (
      <div>
        <button onClick={() => setIsOpen(true)}>Open Very Long Content Modal</button>
        <Modal
          {...args}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      </div>
    )
  },
  args: {
    title: 'VERY LONG CONTENT:',
    children: (
      <div>
        <h3>Chapter 1: The Beginning</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        
        <h3>Chapter 2: The Middle</h3>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
          in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        
        <h3>Chapter 3: The Plot Thickens</h3>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
          veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
        
        <h3>Chapter 4: Complications Arise</h3>
        <p>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
          sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
        </p>
        
        <h3>Chapter 5: The Climax</h3>
        <p>
          Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt
          ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
          veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.
        </p>
        
        <h3>Chapter 6: Resolution</h3>
        <p>
          Nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure
          reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
          vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
        </p>
        
        <h3>Chapter 7: Epilogue</h3>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
          praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
          excepturi sint occaecati cupiditate non provident.
        </p>
        
        <h3>Chapter 8: Appendices</h3>
        <p>
          Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum
          et molestiae non recusandae. Et harum quidem rerum facilis est et expedita distinctio.
        </p>
        
        <h3>Chapter 9: References</h3>
        <p>
          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
          quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est.
        </p>
        
        <h3>Chapter 10: Index</h3>
        <p>
          Omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis
          aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et
          molestiae non recusandae.
        </p>
        
        <h3>Chapter 11: Glossary</h3>
        <p>
          Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
          voluptatibus maiores alias consequatur aut perferendis doloribus asperiores
          repellat.
        </p>
        
        <h3>Chapter 12: Bibliography</h3>
        <p>
          Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore,
          cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod
          maxime placeat facere possimus.
        </p>
        
        <h3>Chapter 13: Acknowledgments</h3>
        <p>
          Omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem
          quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet.
        </p>
        
        <h3>Chapter 14: About the Author</h3>
        <p>
          Ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum
          rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus.
        </p>
        
        <h3>Chapter 15: Final Thoughts</h3>
        <p>
          Maiores alias consequatur aut perferendis doloribus asperiores repellat.
          Et harum quidem rerum facilis est et expedita distinctio.
        </p>
      </div>
    ),
    size: 'large',
  },
}