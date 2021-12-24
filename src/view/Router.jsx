import React from 'react'
import Main from './Main'
import Login from './Login'
import { useUserProfile } from '../hooks/useUserProfile'

export const RouterContext = React.createContext()

const ActiveRouter = () => {
  const ctx = React.useContext(RouterContext)
  const profile = useUserProfile()
  if (!profile) return <Login />

  switch (ctx.route) {
    default:
      return <Main />
  }
}

const Router = () => {
  const [route, navigator] = React.useState('main')

  return (
    <RouterContext.Provider value={{ route, navigator }}>
      <ActiveRouter />
    </RouterContext.Provider>
  )
}

export default Router
