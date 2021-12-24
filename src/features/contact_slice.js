import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  session: {},
  contacts: [],
}

export const contactReducer = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: {
    'user/login': (state, action) => {
      console.log(action, 'in contact')
    },
  },
})

export const actions = contactReducer.actions
export default contactReducer.reducer
