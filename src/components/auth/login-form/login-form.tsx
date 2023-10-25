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

type LoginFormProps = {
  onSubmit: (data: FormValues) => void
}

export const LoginForm = (props: LoginFormProps) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: { email: '', password: '', rememberMe: false },
    mode: 'onSubmit',
    resolver: zodResolver(loginSchema),
  })

  const handleFormSubmitted = handleSubmit(props.onSubmit)

  return (
    <Card className={s.wrapper}>
      <Typography as={'h1'} className={s.title} variant={'large'}>
        Sign In
      </Typography>
      <form onSubmit={handleFormSubmitted}>
        <div className={s.textfields}>
          <ControlledTextField
            control={control}
            label={'Email'}
            name={'email'}
            placeholder={'Email'}
          />
          <ControlledTextField
            control={control}
            label={'Password'}
            name={'password'}
            password
            placeholder={'Password'}
          />
        </div>
        <ControlledCheckbox control={control} label={'Remember me'} name={'rememberMe'} />
        <Typography
          as={'a'}
          className={s.forgotpassword}
          variant={'body2'}
        >{`Forgot Password?`}</Typography>
        <Button className={s.button} fullWidth type={'submit'}>
          Sign In
        </Button>
      </form>
      <Typography className={s.caption} variant={'body2'}>
        {`Don't have an account?`}
      </Typography>
      <Typography as={'a'} className={s.signup} variant={'link1'}>
        Sign Up
      </Typography>
    </Card>
  )
}
