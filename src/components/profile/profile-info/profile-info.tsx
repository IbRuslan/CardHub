import { ChangeEvent, useState } from 'react'

import { ChangeIcon, LogoutIcon } from '@/assets/icons'
import { Avatar, Button, Card, TextField, Typography } from '@/components/ui'

import s from './profile-info.module.scss'

export const ProfileInfo = () => {
  const onLogoutHandler = () => {
    console.log('logout')
  }

  const profileInfo = {
    avatar: '',
    email: 'ribragimov2003@gmail.com',
    name: 'Ivan',
  }

  const [value, setValue] = useState(profileInfo.name)
  const [open, setOpen] = useState(false)
  const [error, setError] = useState('')

  const changeNameHandler = () => {
    setOpen(false)
    setError('')
  }

  const onChangeValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (value.length > 2) {
      setError('')
    } else {
      setError('Too short name')
    }
    setValue(event.currentTarget.value)
  }

  return (
    <Card className={s.wrapper}>
      <Typography as={'h2'} className={s.title} variant={'large'}>
        Personal Information
      </Typography>
      <div className={s.icon}>
        <Avatar size={'100'} src={profileInfo.avatar ? profileInfo.avatar : ''} />
      </div>
      {open ? (
        <>
          <TextField onChange={onChangeValueHandler} value={value} />
          {error && (
            <Typography className={s.error} variant={'caption'}>
              {error}
            </Typography>
          )}
        </>
      ) : (
        <Typography as={'h3'} className={s.name} variant={'body2'}>
          <>
            {profileInfo.name}
            <div className={s.editIcon} onClick={() => setOpen(true)}>
              <ChangeIcon />
            </div>
          </>
        </Typography>
      )}

      <Typography className={s.email} variant={'body2'}>
        {profileInfo.email}
      </Typography>
      <div className={s.buttons}>
        <Button
          className={s.button}
          disabled={error.trim() !== ''}
          onClick={open ? changeNameHandler : onLogoutHandler}
          variant={open ? 'primary' : 'secondary'}
        >
          {open ? (
            'Save Changes'
          ) : (
            <>
              <LogoutIcon /> Logout
            </>
          )}
        </Button>
      </div>
    </Card>
  )
}
