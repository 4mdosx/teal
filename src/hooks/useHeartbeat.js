import { useEffect } from 'react'
import request from '../api/request'
import { actions } from '../features/user_slice'

export const useHeartbeat = (dispatch, finish) => {
  useEffect(() => {
    const beat = async () => {
      const authorization = window.localStorage.getItem('authorization')
      if (!authorization) return
      const { status, data } = await request.get('/me').catch((res) => null)
      if (status === 200) {
        dispatch(actions.login(data))
      } else {
        window.localStorage.setItem('authorization', null)
        dispatch(actions.logout())
      }
    }
    beat().then(() => finish && finish())
    setInterval(beat, 20 * 1000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
