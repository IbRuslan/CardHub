import { useController, useForm } from 'react-hook-form'

import { Button, SuperCheckbox, TextField } from '@/components/ui/'

type FormValues = {
  email: string
  password: string
  rememberMe: boolean
}

export const LoginForm = () => {
  const { control, handleSubmit, register } = useForm<FormValues>()

  const {
    field: { onChange, value },
  } = useController({
    control,
    defaultValue: false,
    name: 'rememberMe',
  })

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField {...register('email')} label={'email'} />
      <TextField {...register('password')} label={'password'} password />
      <SuperCheckbox checked={value} label={'remember me'} onChange={onChange} />
      <Button type={'submit'}>Submit</Button>
    </form>
  )
}
