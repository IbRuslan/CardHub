import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { TextField, TextFieldPropsType } from '@/components/ui'

type ControlledTextFieldProps<T extends FieldValues> = {} & UseControllerProps<T> &
  Omit<TextFieldPropsType, 'id' | 'onChange' | 'value'>

export const ControlledTextField = <T extends FieldValues>({
  control,
  disabled,
  name,
  rules,
  shouldUnregister,
  ...rest
}: ControlledTextFieldProps<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    control,
    disabled,
    name,
    rules,
    shouldUnregister,
  })

  return <TextField {...rest} {...field} error={error?.message} id={name} />
}
