import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from './'

const meta = {
  argTypes: {
    placeholder: TextField,
  },

  component: TextField,
  tags: ['autodocs'],
  title: 'Components/ui/TextField',
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    placeholder: 'Input Primary',
  },
}

export const Invalid: Story = {
  args: {
    error: 'Error!',
    placeholder: 'Input Invalid',
  },
}

export const Password: Story = {
  args: {
    password: true,
    placeholder: 'Input Password',
  },
}

export const Search: Story = {
  args: {
    disabled: true,
    placeholder: 'Input',
    search: true,
    value: 'Input Search',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Input',
    value: 'Input Disabled',
  },
}
