import defaultAvatarPhoto from '@/assets/icons/avatar.png'

import s from './avatar.module.scss'

type AvatarProps = {
  size?: string
  src?: string
}

export const Avatar = ({ size = '35', src }: AvatarProps) => {
  const finalSrc = src ? src : defaultAvatarPhoto

  return <img alt={'avatar'} className={s.avatar} height={src} src={finalSrc} width={size} />
}
