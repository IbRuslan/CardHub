import { Modal } from '@/components/ui'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},

  component: Modal,
  tags: ['autodocs'],
  title: 'Components/ui/Modal',
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const ModalDefault: Story = {
  args: {
    children: (
      <>
        {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamdsa\n' +
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamdsa\n' +
          'Select-box\n' +
          'Select-box\n' +
          'Input\n' +
          'Input\n' +
          'Input\n' +
          'Input\n' +
          'Check-box\n' +
          'Select-box\n' +
          'Select-box\n' +
          'Question:\n' +
          'Change Cover\n' +
          'Answer:\n' +
          'Change Cover\n' +
          'Input\n' +
          'Input\n' +
          'Check-box'}
      </>
    ),
    onClickSetChanges: () => {},
    onOpenChange: (open: boolean) => {
      console.log(open)
    },
    open: true,
    titleForButton: 'Add New Pack',
    titleModal: 'Add New Pack',
  },
}
