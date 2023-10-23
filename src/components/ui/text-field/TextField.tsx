import { ChangeEvent, ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import { ClosedEye, Cross, Eye, Search } from '@/assets/icons'
import { Typography } from '@/components/ui'

import s from './textField.module.scss'

export type TextFieldPropsType = {
  className?: string
  disabled?: boolean
  error?: string
  label?: string
  onValueChange?: (value: string) => void
  password?: boolean
  search?: boolean
  value?: string
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldPropsType>(
  (
    {
      className,
      disabled,
      error,
      label,
      onChange,
      onValueChange,
      password,
      search,
      value,
      ...rest
    },
    ref
  ) => {
    const [passwordVisible, setPasswordVisible] = useState(false)
    const onChangeHandlerValue = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e)
      onValueChange?.(e.target.value)
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
          <div className={s.crossButton} onClick={() => onValueChange && onValueChange('')}>
            <Cross />
          </div>
        )}

        <input
          className={`${disabled && s.disabled} ${search && s.search} ${
            error ? s.error : ''
          } ${className}`}
          disabled={disabled}
          onChange={onChangeHandlerValue}
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
          variant={'error'}
        >
          {error}
        </Typography>
      </div>
    )
  }
)
