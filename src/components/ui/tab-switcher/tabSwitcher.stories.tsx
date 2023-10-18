import { TabSwitcher, TabTrigger } from '@/components/ui'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},

  component: TabSwitcher,
  tags: ['autodocs'],
  title: 'Components/ui/TabSwitcher',
} satisfies Meta<typeof TabSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const TabSwitcherDefault: Story = {
  args: {
    children: (
      <>
        <TabTrigger title={'My Cards'} value={'tab1'} />
        <TabTrigger title={'All Cards'} value={'tab2'} />
      </>
    ),
    defaultValue: 'tab2',
    onChange: (select: string) => {
      console.log(select)
    },
    title: 'Show packs cards',
  },
}
