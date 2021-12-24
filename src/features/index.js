import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user_slice'
import contactReducer from './contact_slice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    contact: contactReducer
  },
})
