import { ReactNode } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './dropDownMenu.module.scss'

type DropDownMenuType = {
  callback: () => void
  children: ReactNode
  content: Array<any>
  variant: 'default' | 'profiledrop'
}

export const DropDownMenu = (props: DropDownMenuType) => {
  const { children, content, variant } = props

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild className={s.trigger}>
        <div className={s.iconButton}>{children}</div>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className={`${s[variant]}`} onClick={props.callback} sideOffset={5}>
          <DropdownMenu.Arrow asChild className={s.arrowBox}>
            <div className={s.arrow} />
          </DropdownMenu.Arrow>
          <div className={s.itemwrapper}>
            {content.map(el => (
              <DropdownMenu.Item className={s.item} key={el.id}>
                <div className={s.icon}>{el.icon}</div>
                <div>
                  {el.title}
                  <div className={s.email}>{el.email}</div>
                </div>
              </DropdownMenu.Item>
            ))}
          </div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
