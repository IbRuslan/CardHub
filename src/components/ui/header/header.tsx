import { Link, useNavigate } from 'react-router-dom'

import { Avatar, Button, DropDownItem, DropDownMenu, Typography } from '@/components/ui'
import { ExitIcon, HomeIcon } from '@radix-ui/react-icons'

import s from './header.module.scss'

export const Header = () => {
  const isAuth = true
  const email = 'ribragimov2003@gmail.com'
  const name = 'Ruslan'

  const navigate = useNavigate()

  const onSelectProfile = () => {
    navigate('/profile')
  }
  const onSelectNavigateLogOut = () => {
    navigate('/login')
  }

  return (
    <header className={s.header}>
      <div className={s.container}>
        <div>
          <Typography as={Link} className={s.pageName} to={'/'} variant={'link1'}>
            CardHub
          </Typography>
        </div>
        <div className={s.auth}>
          <Typography className={s.email} variant={'body2'}>
            {email}
          </Typography>
          {isAuth ? (
            <DropDownMenu arrow trigger={<Avatar />} variant={'profiledrop'}>
              <DropDownItem
                el={{ email, icon: <Avatar />, title: name }}
                onSelect={onSelectProfile}
              />
              <DropDownItem
                el={{ icon: <HomeIcon />, title: 'Profile' }}
                onSelect={onSelectProfile}
              />
              <DropDownItem
                el={{ icon: <ExitIcon />, title: 'Log out' }}
                onSelect={onSelectNavigateLogOut}
              />
            </DropDownMenu>
          ) : (
            <Button as={Link} to={'/login'} variant={'primary'}>
              Sign in
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}
