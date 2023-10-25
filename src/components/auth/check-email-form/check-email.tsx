import { CheckEmailIcon } from '@/assets/icons'
import { Button, Card, Typography } from '@/components/ui'

import s from './check-email.module.scss'

export const CheckEmail = () => {
  return (
    <Card className={s.wrapper}>
      <Typography as={'h2'} className={s.title} variant={'large'}>
        Check Email
      </Typography>
      <div className={s.icon}>
        <CheckEmailIcon />
      </div>
      <Typography className={s.description} variant={'body2'}>
        We’ve sent an Email with instructions to example@mail.com
      </Typography>
      <Button as={'a'} className={s.button} fullWidth>
        Back to Sign In
      </Button>
    </Card>
  )
}
