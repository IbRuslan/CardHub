import { DropDownItem, DropDownMenu } from '@/components/ui'
import { HomeIcon } from '@radix-ui/react-icons'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['default', 'profiledrop'],
    },
  },
  component: DropDownMenu,
  tags: ['autodocs'],
  title: 'Components/ui/DropDownMenu',
} satisfies Meta<typeof DropDownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const ProfileMenu: Story = {
  args: {
    children: (
      <DropDownItem
        el={{ email: 'ribragimov2003@gmail.com', icon: <HomeIcon />, title: 'Ivan' }}
        onSelect={() => {
          console.log('profile')
        }}
      />
    ),
    trigger: <HomeIcon />,
    variant: 'profiledrop',
  },
}

export const DefaultMenu: Story = {
  args: {
    children: (
      <DropDownItem
        el={{ icon: <HomeIcon />, title: 'Ivan' }}
        onSelect={() => {
          console.log('profile')
        }}
      />
    ),
    trigger: <HomeIcon />,
    variant: 'default',
  },
}
