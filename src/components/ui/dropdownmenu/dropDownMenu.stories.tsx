import { DropDownMenu, TextField } from '@/components/ui'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: DropDownMenu,
  tags: ['autodocs'],
  title: 'Components/ui/DropDownMenu',
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const HeaderMenu: Story = {
  args: {
    children: <></>,
  },
}
