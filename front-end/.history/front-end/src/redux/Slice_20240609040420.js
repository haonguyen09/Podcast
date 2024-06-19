import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    first_name: '',
    last_name: '',
    email: '',
    access_token: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
      updateUser: (state, action) => {
          const { access_token, first_name, last_name, email } = action.payload
          console.log('action', action.payload)
          state.first_name = first_name
          state.last_name = last_name
          state.email = email
          state.access_token = access_token
      },
      resetUser: (state) => {
          state.first_name = ''
          state.last_name = ''
          state.email = ''
          state.access_token = ''
      }
  }
})

export const { updateUser, resetUser } = userSlice.actions 

export default userSlice.reducer