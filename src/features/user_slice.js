import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  profile: null
}

export const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login (state, action) {
      const { user } = action.payload
      state.profile = user
    },
    logout (state) {
      state.profile = null
    }
  },
})

export const actions = userReducer.actions
export default userReducer.reducer
