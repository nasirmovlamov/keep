import { createSlice } from '@reduxjs/toolkit'
import { getUser, userLogin, userRegister } from '../thunks/AuthThunk'
import {USER_STATE} from '../state/AuthState'
import { setToken } from '../../logic/userToken'
import { RootState } from '../store/store'



export const authSlice = createSlice({
  name: 'authentication',
  initialState:USER_STATE,
  reducers: {
    
  },
  extraReducers: (builder) => {
    //Check Login Reducers
    builder.addCase(getUser.fulfilled, (state, {payload}) => {
      state.user = payload.data.data
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
        console.log( payload.data.data.user)
        state.user =  payload.data.data.user
        setToken(payload.data.data.access_token)
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
      state.user = payload.data.data.user
      state.loggedIn = true
      setToken(payload.data.data.access_token)
    }),
    builder.addCase(userRegister.pending, (state, {payload}) => {
      state.status = 'loading'
    }),
    builder.addCase(userRegister.rejected, (state, action) => {
      if (action.payload) {        
        // Since we passed in `MyKnownError` to `rejectValue` in `updateUser`, the type information will be available here.        
        state.errors = action.payload      
        console.log(action.payload)
      } 
      else 
      {        
        state.errors = action.error      
      }
    })
  },

})

export const userErrors = (state: RootState) => state.errors?.errors;

export default authSlice.reducer;











