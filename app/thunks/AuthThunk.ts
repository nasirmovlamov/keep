import * as types from '../constants/AuthContants'
import {AUTH_API} from '../../helpers/api/AuthApi'
import { AsyncThunk, createAction, createAsyncThunk, isRejectedWithValue} from '@reduxjs/toolkit'
import {getToken} from '../../logic/userToken'
import { AxiosError } from 'axios'


export const getUser= createAsyncThunk(
  types.GET_USER, async (token:string, {rejectWithValue}) => {
    try {
      const API = new AUTH_API({token:getToken()  ,user:null})
      return API.getUser() 
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)


export const userLogin = createAsyncThunk(
  types.LOGIN, async (user:{} , {rejectWithValue}) => {
    try {
      const API = new AUTH_API({token:"" , user:user})
      return API.login() 
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

interface MyData {  
  data:{
    data:{
      user:{
        id:number,
        name:string,
        email:string
      }
      access_token:string,
      token_type:string,
      expires_at:string
    }
    message:string,
    errors:null
  }
}


export interface AuthError {
  errors:{
        email:string[]|undefined
        password:string[]|undefined
        name:string[]|undefined
    }
  message:string
} 

interface UserAttributes {
  email: string
  name: string
  password: string
}

interface RejectedWithValueAction<ThunkArg, RejectedValue> {  
  type: string  
  payload: RejectedValue  
  error: { message: 'Rejected' }  
  meta: {    
    requestId: string    
    arg: ThunkArg    
    aborted: boolean  }
}



export const userRegister = createAsyncThunk<
MyData , 
UserAttributes , 
{
  rejectValue: AuthError 
}>
(
  types.REGISTER, async (user, {rejectWithValue}) => {
    try {
      const API = new AUTH_API({token:"" , user:user})
      const data = await API.register()
      return  data
    } catch (err) {
      return rejectWithValue(err.response.data as AuthError);
    }
  }
)













export const userLogout = createAsyncThunk(
  types.LOGOUT, async (token:string|null, {rejectWithValue}) => {
    try {
      const API = new AUTH_API({token:token , user:null})
      return API.logout() 
    } catch (errorPayload) {
      return rejectWithValue(errorPayload.response.data)
    }
  }
)





// const checkLogged = () => async (dispatch) => {
//   try {
//     const checkLogged_response = await AuthApi.get(``, {
//       params: {
//         token: types.TOKEN,
//       },
//     })
//   } catch (err) {
//     if (err.response.status === 400) {  
//       window.location.reload()
//     }
//     dispatch({ type: types.GETALL_FAILURE, payload: err.message })
//   }
// }
