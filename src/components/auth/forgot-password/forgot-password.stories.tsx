import { ForgotPassword } from '@/components/auth'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: ForgotPassword,
  tags: ['autodocs'],
  title: 'Auth/ForgotPassword',
} satisfies Meta<typeof ForgotPassword>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    onSubmit: data => console.info(data),
  },
}
