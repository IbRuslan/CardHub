import { useForm } from 'react-hook-form'

import { ControlledCheckbox } from '@/components/controlled'
import { Button, TextField } from '@/components/ui/'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const loginSchema = z.object({
  email: z.string().email('Invalid email address').min(10),
  password: z.string().min(3, 'Too short password'),
  rememberMe: z.boolean().default(false),
})

type FormValues = z.infer<typeof loginSchema>

export const LoginForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    defaultValues: { email: '', password: '', rememberMe: false },
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField {...register('email')} error={errors.email?.message} label={'email'} />
      <TextField
        {...register('password')}
        error={errors.password?.message}
        label={'password'}
        password
      />
      <ControlledCheckbox control={control} label={'Remember me'} name={'rememberMe'} />
      <Button type={'submit'}>Submit</Button>
    </form>
  )
}
