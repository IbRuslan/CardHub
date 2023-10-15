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
    placeholder: 'Input',
  },
}
