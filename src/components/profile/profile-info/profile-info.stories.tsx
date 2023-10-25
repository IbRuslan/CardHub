import { ProfileInfo } from '@/components/profile'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: ProfileInfo,
  tags: ['autodocs'],
  title: 'Profile/ProfileInfo',
} satisfies Meta<typeof ProfileInfo>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    changeName: () => {},
    onLogout: () => {},
    userInfo: { avatar: '', email: 'ribragimov2003@gmail.com', name: 'Ruslan' },
  },
}
