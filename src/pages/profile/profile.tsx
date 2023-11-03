import { ProfileInfo } from '@/components/profile'
import { Header } from '@/components/ui'

export const Profile = () => {
  const userInfo = { avatar: '', email: 'ribragimov2003@gmail.com', name: 'Ruslan' }

  const changeName = (value: string) => {
    return value
  }
  const onLogout = () => {}

  return (
    <div>
      <Header />
      <ProfileInfo changeName={changeName} onLogout={onLogout} userInfo={userInfo} />
    </div>
  )
}
