import type { Meta, StoryObj } from '@storybook/react'
import Container from '../index'

const meta: Meta<typeof Container> = {
  title: 'Components/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['white', 'gray'],
    },
    noPaddingMobile: {
      control: { type: 'boolean' },
    },
    noPaddingTablet: {
      control: { type: 'boolean' },
    },
    noPaddingDesktop: {
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <div style={{ background: '#f0f0f0', padding: '2rem', textAlign: 'center' }}>
        <h2>Container Content</h2>
        <p>This is the default container with responsive padding on all breakpoints.</p>
      </div>
    ),
  },
}

export const WithCustomClass: Story = {
  args: {
    className: 'custom-container',
    children: (
      <div style={{ background: '#e0e0e0', padding: '2rem', textAlign: 'center' }}>
        <h2>Container with Custom Class</h2>
        <p>This container has an additional custom CSS class.</p>
      </div>
    ),
  },
}

export const White: Story = {
  args: {
    variant: 'white',
    children: (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>White Container</h2>
        <p>This container has a white background.</p>
      </div>
    ),
  },
}

export const Gray: Story = {
  args: {
    variant: 'gray',
    children: (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Gray Container</h2>
        <p>This container has a gray background.</p>
      </div>
    ),
  },
}

export const NoPaddingMobile: Story = {
  args: {
    noPaddingMobile: true,
    children: (
      <div style={{ background: '#f0f0f0', padding: '2rem', textAlign: 'center' }}>
        <h2>No Padding on Mobile</h2>
        <p>This container has no padding on mobile devices.</p>
      </div>
    ),
  },
}

export const NoPaddingTablet: Story = {
  args: {
    noPaddingTablet: true,
    children: (
      <div style={{ background: '#f0f0f0', padding: '2rem', textAlign: 'center' }}>
        <h2>No Padding on Tablet</h2>
        <p>This container has no padding on tablet devices.</p>
      </div>
    ),
  },
}

export const NoPaddingDesktop: Story = {
  args: {
    noPaddingDesktop: true,
    children: (
      <div style={{ background: '#f0f0f0', padding: '2rem', textAlign: 'center' }}>
        <h2>No Padding on Desktop</h2>
        <p>This container has no padding on desktop devices.</p>
      </div>
    ),
  },
}