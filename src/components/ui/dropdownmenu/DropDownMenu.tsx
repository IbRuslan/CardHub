import { ReactNode } from 'react'

import { Typography } from '@/components/ui'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './dropDownMenu.module.scss'

type DropDownMenuType = {
  arrow?: boolean
  children: ReactNode
  trigger: ReactNode
  variant: 'default' | 'profiledrop'
}

export const DropDownMenu = (props: DropDownMenuType) => {
  const { arrow = false, children, trigger, variant } = props

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild className={s.trigger}>
        <div className={s.iconButton}>{trigger}</div>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className={`${s[variant]}`} sideOffset={5}>
          {arrow && (
            <DropdownMenu.Arrow asChild className={s.arrowBox}>
              <div className={s.arrow} />
            </DropdownMenu.Arrow>
          )}
          <div className={s.itemwrapper}>{children}</div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

type DropDownItemProps = {
  el: {
    email?: string
    icon: ReactNode
    title: string
  }
  onSelect: () => void
}

export const DropDownItem = ({ el, onSelect }: DropDownItemProps) => {
  return (
    <DropdownMenu.Item className={s.item} onSelect={onSelect}>
      <div className={s.icon}>{el.icon}</div>
      <div>
        <Typography variant={'caption'}>{el.title}</Typography>
        {el.email && (
          <Typography className={s.email} variant={'caption'}>
            {el.email}
          </Typography>
        )}
      </div>
    </DropdownMenu.Item>
  )
}
