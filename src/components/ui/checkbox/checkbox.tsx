import { Typography } from '@/components/ui'
import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

import s from './checkbox.module.scss'

type SuperCheckboxProps = {
  checked?: boolean
  disabled?: boolean
  id: string
  onChange?: (checked: boolean) => void
}

export const SuperCheckbox = ({ checked, disabled, id, onChange }: SuperCheckboxProps) => {
  return (
    <div style={{ alignItems: 'center', display: 'flex' }}>
      <div className={s.wrapper}>
        <Checkbox.Root
          checked={checked}
          className={s.CheckboxRoot}
          defaultChecked
          disabled={disabled}
          id={id}
          onCheckedChange={onChange}
        >
          {checked && (
            <Checkbox.Indicator className={s.CheckboxIndicator} forceMount>
              <CheckIcon />
            </Checkbox.Indicator>
          )}
        </Checkbox.Root>
      </div>
      <Typography as={'label'} variant={'caption'}>
        Check-box
      </Typography>
    </div>
  )
}
