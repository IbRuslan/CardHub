import { ComponentPropsWithoutRef } from 'react'

export type TextFieldPropsType = {
  className?: string
  disabled?: boolean
} & ComponentPropsWithoutRef<'input'>

import { Typography } from '@/components/ui'

import s from './textField.module.scss'

export const TextField = (props: TextFieldPropsType) => {
  const { className, disabled, ...rest } = props

  return (
    <div className={s.textFiled}>
      <Typography
        as={'label'}
        className={`${s.label} ${disabled ? s.disabled : ''}`}
        variant={'body1'}
      >
        Input
      </Typography>
      <input className={` ${className}`} {...rest} />
    </div>
  )
}
