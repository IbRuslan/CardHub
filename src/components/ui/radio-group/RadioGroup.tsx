import { ReactNode } from 'react'

import { Typography } from '@/components/ui'
import * as RadioGroup from '@radix-ui/react-radio-group'

import s from './radioGroup.module.scss'

type SuperRadioGroupProps = {
  children: ReactNode
  defaultValue: string
  onChange: (select: string) => void
}

export const SuperRadioGroup = ({ children, defaultValue, onChange }: SuperRadioGroupProps) => {
  return (
    <RadioGroup.Root
      className={s.radioGroupRoot}
      defaultValue={defaultValue}
      onValueChange={onChange}
    >
      {children}
    </RadioGroup.Root>
  )
}

type RadioGroupItemProps = {
  title: string
  value: string
}

export const RadioGroupItem = ({ title, value }: RadioGroupItemProps) => {
  return (
    <div className={s.wrapperItem}>
      <RadioGroup.Item className={s.radioGroupItem} value={value}>
        <RadioGroup.Indicator className={s.radioGroupIndicator} />
      </RadioGroup.Item>
      <Typography as={'label'} variant={'body2'}>
        {title}
      </Typography>
    </div>
  )
}
