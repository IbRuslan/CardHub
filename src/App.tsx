import { Provider } from 'react-redux'

import { Header } from '@/components/ui'
import { Router } from '@/router'
import { store } from '@/services/store'

export function App() {
  return (
    <Provider store={store}>
      <Header />
      <Router />
    </Provider>
  )
}
