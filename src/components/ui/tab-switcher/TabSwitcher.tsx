import { ReactNode } from 'react'

import { Typography } from '@/components/ui'
import * as Tabs from '@radix-ui/react-tabs'

import s from './tabSwitcher.module.scss'

type TabSwitcherProps = {
  children: ReactNode
  defaultValue: string
  onChange: (select: string) => void
  title: string
}

export const TabSwitcher = ({ children, defaultValue, onChange, title }: TabSwitcherProps) => {
  return (
    <Tabs.Root className={s.root} defaultValue={defaultValue} onValueChange={onChange}>
      <Typography aria-label={'Manage your account'} as={'label'} variant={'body2'}>
        {title}
      </Typography>
      <Tabs.List className={s.list}>{children}</Tabs.List>
    </Tabs.Root>
  )
}

type TabTriggerProps = {
  title: string
  value: string
}

export const TabTrigger = ({ title, value }: TabTriggerProps) => {
  return (
    <Tabs.Trigger className={s.trigger} value={value}>
      {title}
    </Tabs.Trigger>
  )
}
