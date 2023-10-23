import { ChangeEvent, ComponentPropsWithoutRef, useState } from 'react'

export type TextFieldPropsType = {
  className?: string
  disabled?: boolean
  error?: string
  label?: string
  onChangeValue?: (value: string) => void
  password?: boolean
  search?: boolean
  value?: string
} & ComponentPropsWithoutRef<'input'>

import { ClosedEye, Cross, Eye, Search } from '@/assets/icons'
import { Typography } from '@/components/ui'

import s from './textField.module.scss'

export const TextField = (props: TextFieldPropsType) => {
  const { className, disabled, error, label, onChangeValue, password, search, value, ...rest } =
    props
  const [passwordVisible, setPasswordVisible] = useState(false)
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeValue && onChangeValue(e.currentTarget.value)
  }

  return (
    <div className={s.textFiled}>
      {label && (
        <Typography
          as={'label'}
          className={`${s.label} ${disabled ? s.disabled : ''}`}
          variant={'body1'}
        >
          {label}
        </Typography>
      )}
      {search && (
        <>
          <div className={s.searchButton} onClick={() => {}}>
            <Search />
          </div>
        </>
      )}
      {(search ? value : false) && (
        <div className={s.crossButton} onClick={() => onChangeValue && onChangeValue('')}>
          <Cross />
        </div>
      )}

      <input
        className={`${disabled && s.disabled} ${search && s.search} ${
          error ? s.error : ''
        } ${className}`}
        disabled={disabled}
        onChange={onChangeHandler}
        type={passwordVisible ? 'password' : 'text'}
        value={value}
        {...rest}
      />
      {password && (
        <div className={s.passwordButton} onClick={() => setPasswordVisible(prev => !prev)}>
          {passwordVisible ? <Eye /> : <ClosedEye />}
        </div>
      )}
      <Typography
        as={'label'}
        className={`${s.errorSpan} ${disabled ? s.disabled : ''}`}
        variant={'body1'}
      >
        {error}
      </Typography>
    </div>
  )
}
