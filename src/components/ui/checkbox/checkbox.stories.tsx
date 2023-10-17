import { SuperCheckbox } from '@/components/ui'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},

  component: SuperCheckbox,
  tags: ['autodocs'],
  title: 'Components/ui/Checkbox',
} satisfies Meta<typeof SuperCheckbox>

export default meta
type Story = StoryObj<typeof meta>

export const Checked: Story = {
  args: {
    checked: true,
    id: 'checked',
  },
}

export const UnChecked: Story = {
  args: {
    checked: false,
    id: 'unchecked',
  },
}
