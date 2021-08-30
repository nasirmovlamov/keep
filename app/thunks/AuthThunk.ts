import * as types from '../constants/AuthContants'
import {AUTH_API} from '../../helpers/api/AuthApi'
import { AsyncThunk, createAction, createAsyncThunk, isRejectedWithValue} from '@reduxjs/toolkit'
import {getToken} from '../../logic/userToken'
import { AxiosError } from 'axios'


export const userCheck= createAsyncThunk(
  types.GET_USER, async (token, {rejectWithValue}) => {
    try {
      const token = getToken()
      if(token!==null)
      {
        const API = new AUTH_API({token:token, user:null})
        const data = await API.getUser()
        return  data
      }
      else {
        throw new Error("not logged");
        
      }
      console.log(token)
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const forgetPasswordThunk= createAsyncThunk(
  types.FORGET_PASSWORD, async (user:{email:string}, {rejectWithValue}) => {
      try {
        const API = new AUTH_API({token:"" , user:user})
        const data = await API.forgetPassword() 
        return data
      } catch (err) {
        return rejectWithValue(err.response.data )
      }
  }
)



export const userLogout = createAsyncThunk(
  types.LOGOUT, async (token, {rejectWithValue}) => {
    try {
      const token = getToken()
      if(token!==null)
      {
        const API = new AUTH_API({token:token, user:null})
        const data = await API.logout()
        return  data
      }
      else {
        return false 
      }
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


export interface RegisterAuthError {
  errors:{
    email:string[]|undefined
    password:string[]|undefined
    name:string[]|undefined
  }
  message:string
} 

export interface LoginAuthError {
  errors:{
    email:string[]|undefined
    password:string[]|undefined
  }
  message:string
} 

export interface ForgetPasswordError {
  errors:{
    email:string[]|undefined
  }
  message:string
} 


interface RegisterAttributes {
  email: string
  name: string
  password: string
}

interface LoginAttributes {
  email: string
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
  
  
  
  export const userLogin = createAsyncThunk<
  MyData , 
  LoginAttributes , 
  {
    rejectValue: LoginAuthError 
  }>(
    types.LOGIN, async (user , {rejectWithValue}) => {
      try {
        const API = new AUTH_API({token:"" , user:user})
        const data = await API.login() 
        return data
      } catch (err) {
        return rejectWithValue(err.response.data )
      }
    }
  )






export const userRegister = createAsyncThunk<
MyData , 
RegisterAttributes , 
{
  rejectValue: RegisterAuthError 
}>
(
  types.REGISTER, async (user, {rejectWithValue}) => {
    try {
      const API = new AUTH_API({token:"" , user:user})
      const data = await API.register()
      return  data
    } catch (err) {
      return rejectWithValue(err.response.data);
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
