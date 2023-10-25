import { useForm } from 'react-hook-form'

import { ControlledCheckbox, ControlledTextField } from '@/components/controlled'
import { Button, Card, Typography } from '@/components/ui/'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './login.module.scss'

const loginSchema = z.object({
  email: z.string().email('Invalid email address').min(10),
  password: z.string().min(3, 'Too short password'),
  rememberMe: z.boolean().default(false),
})

type FormValues = z.infer<typeof loginSchema>

export const LoginForm = () => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: { email: '', password: '', rememberMe: false },
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <Card className={s.wrapper}>
      <Typography className={s.title} variant={'large'}>
        Sign In
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={s.textfields}>
          <ControlledTextField
            control={control}
            label={'email'}
            name={'email'}
            placeholder={'Email'}
            search
          />
          <ControlledTextField
            control={control}
            label={'password'}
            name={'password'}
            password
            placeholder={'Password'}
          />
        </div>
        <ControlledCheckbox control={control} label={'Remember me'} name={'rememberMe'} />
        <Typography className={s.caption} variant={'body2'}>{`Don't have an account?`}</Typography>
        <Button className={s.button} fullWidth type={'submit'}>
          Sign In
        </Button>
      </form>
    </Card>
  )
}
