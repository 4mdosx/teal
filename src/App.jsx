import Router from './view/Router'
import { useDispatch } from 'react-redux'
import { useHeartbeat } from './hooks/useHeartbeat'
import { useState } from 'react'
import GlobalStyle from './components/atoms/Global'
import PageError from './components/PageError'

function App() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  useHeartbeat(dispatch, () => setLoading(false))
  if (loading) {
    return <h1>loading...</h1>
  }

  return (
    <PageError>
      <div className="app">
        <GlobalStyle />
        <Router />
      </div>
    </PageError>
  )
}

export default App
