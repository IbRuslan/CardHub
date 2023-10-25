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
      password = false,
      search,
      ...rest
    },
    ref
  ) => {
    const [passwordVisible, setPasswordVisible] = useState(password)

    function onChangeHandlerValue(e: ChangeEvent<HTMLInputElement>) {
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
        <div className={s.fieldContainer}>
          {search && (
            <div className={s.searchButton} onClick={() => {}}>
              <Search />
            </div>
          )}
          <input
            className={`${disabled && s.disabled} ${search && s.search} ${
              error ? s.error : ''
            } ${className}`}
            disabled={disabled}
            onChange={onChangeHandlerValue}
            ref={ref}
            type={passwordVisible ? 'password' : 'text'}
            {...rest}
          />
          {password && (
            <div className={s.passwordButton} onClick={() => setPasswordVisible(prev => !prev)}>
              {passwordVisible ? <ClosedEye /> : <Eye />}
            </div>
          )}
          {(search ? rest.value : false) && (
            <div className={s.crossButton} onClick={() => onValueChange && onValueChange('')}>
              <Cross />
            </div>
          )}
        </div>
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
