import { SignUp } from '@/components/auth'
import { Header } from '@/components/ui'

export const RegistrationPage = () => {
  return (
    <div>
      <Header />
      <SignUp onSubmit={() => {}} />
    </div>
  )
}
