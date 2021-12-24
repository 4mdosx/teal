import { RouterContext } from '../view/Router'
import React from 'react'

function useNavigator() {
  const ctx = React.useContext(RouterContext)
  return ctx.navigator
}

export default useNavigator
