import { LoginForm } from '@/components/auth'
import { Header } from '@/components/ui'

export const SignInPage = () => {
  return (
    <div>
      <Header />
      <LoginForm onSubmit={() => {}} />
    </div>
  )
}
