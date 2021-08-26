import { createSlice } from '@reduxjs/toolkit'
import { getUser, userLogin, userRegister } from '../thunks/AuthThunk'
import {USER_STATE} from '../state/AuthState'



export const authSlice = createSlice({
  name: 'authentication',
  initialState:USER_STATE,
  reducers: {
    
  },
  extraReducers: (builder) => {
    //Check Login Reducers
    builder.addCase(getUser.fulfilled, (state, {payload}) => {
      state.user = payload.data
      state.status = 'idle'
    }),
    builder.addCase(getUser.pending, (state, {payload}) => {
        state.status = 'loading'
    }),
    builder.addCase(getUser.rejected, (state, action) => {
      state.status = 'failed'
      state.errors = action.error
    })


    //Login Reducers
    builder.addCase(userLogin.fulfilled, (state, {payload}) => {
      state.user = payload.data.user
      localStorage.setItem("token" , payload.data.access_token)
      state.loggedIn = true
      state.status = 'idle'
    }),
    builder.addCase(userLogin.pending, (state, {payload}) => {
      state.status = 'loading'
    }),
    builder.addCase(userLogin.rejected, (state, action) => {
      state.status = 'failed'
      state.errors = action.error
    })


    //Register Reducers
    builder.addCase(userRegister.fulfilled, (state, {payload}) => {
      state.status = 'idle'
      state.user = payload.data.user
      state.loggedIn = true
      localStorage.setItem("token" , payload.token)

    }),
    builder.addCase(userRegister.pending, (state, {payload}) => {
      state.status = 'loading'
    }),
    builder.addCase(userRegister.rejected, (state, action) => {
      state.status = 'failed'
      state.errors = action.error
    })
  },

})


export default authSlice.reducer;











