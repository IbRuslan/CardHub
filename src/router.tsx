import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { NotFound, Packs, PasswordRecovery, Profile, RegistrationPage, SignInPage } from '@/pages'

const publicRoutes: RouteObject[] = [
  {
    element: <SignInPage />,
    path: '/login',
  },
  {
    element: <RegistrationPage />,
    path: '/registration',
  },
  {
    element: <PasswordRecovery />,
    path: '/password-recovery',
  },
]

const privateRoutes: RouteObject[] = [
  {
    element: <Packs />,
    path: '/',
  },
  {
    element: <div>not work for now</div>,
    path: '/decks/:deckId',
  },
  {
    element: <Profile />,
    path: '/profile',
  },
]

const router = createBrowserRouter([
  {
    children: privateRoutes,
    element: <PrivateRoutes />,
  },
  ...publicRoutes,
  {
    element: <NotFound />,
    path: '*',
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}

function PrivateRoutes() {
  const isAuthenticated = true

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}
