import { RadioGroupItem, SuperRadioGroup } from '@/components/ui'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},

  component: SuperRadioGroup,
  tags: ['autodocs'],
  title: 'Components/ui/SuperRadioGroup',
} satisfies Meta<typeof SuperRadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const SuperRadioGroupDefault: Story = {
  args: {
    children: (
      <>
        <RadioGroupItem title={'Did not know'} value={'not'} />
        <RadioGroupItem title={'Forgot'} value={'Forgot'} />
        <RadioGroupItem title={'Knew the answer'} value={'know'} />
      </>
    ),
    defaultValue: 'not',
    onChange: (select: string) => {
      console.log(select)
    },
  },
}
