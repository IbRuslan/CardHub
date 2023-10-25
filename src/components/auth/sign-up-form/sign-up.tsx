import { useForm } from 'react-hook-form'

import { ControlledTextField } from '@/components/controlled'
import { Button, Card, Typography } from '@/components/ui'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './sign-up.module.scss'

const signUpSchema = z
  .object({
    email: z.string().email('Invalid email address').min(10),
    password: z.string().min(3, 'Too short password'),
    passwordConfirm: z.string().nonempty('Confirm your password'),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.passwordConfirm) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Passwords do not match',
        path: ['passwordConfirm'],
      })
    }

    return data
  })

type FormValues = z.infer<typeof signUpSchema>

export const SignUp = () => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: { email: '', password: '', passwordConfirm: '' },
    mode: 'onSubmit',
    resolver: zodResolver(signUpSchema),
  })

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <Card className={s.wrapper}>
      <Typography as={'h1'} className={s.title} variant={'large'}>
        Sign Up
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
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
          <ControlledTextField
            control={control}
            label={'Confirm Password'}
            name={'passwordConfirm'}
            password
            placeholder={'Confirm Password'}
          />
        </div>
        <Button className={s.button} fullWidth type={'submit'}>
          Sign In
        </Button>
      </form>
      <Typography className={s.caption} variant={'body2'}>
        {`Already have an account?`}
      </Typography>
      <Typography as={'a'} className={s.signup} variant={'link1'}>
        Sign In
      </Typography>
    </Card>
  )
}
