import { useSelector } from 'react-redux'

export const useUserProfile = () => {
  return useSelector((state) => state.user.profile)
}
