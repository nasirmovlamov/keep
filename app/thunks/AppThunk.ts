import { accessToken, getAccessToken, setAccessToken } from './../../helpers/token/TokenHandle';
import { BASE_API_URL } from './../../helpers/urls/BASE_URL';
import * as types from '../constants/AuthContants'
import {APP_API} from '../../helpers/api/AppApi'
import { AsyncThunk, createAction, createAsyncThunk, isRejectedWithValue} from '@reduxjs/toolkit'
import {getToken} from '../../logic/userToken'
import { AxiosError } from 'axios'
import { APP_INTERFACE } from '../state/state-Interfaces/AppInterface'
import BaseApi from '../../helpers/api/BaseApi';
import { BASE_API_INSTANCE } from '../../helpers/api/BaseInstance';
import { errorToast } from '../containers/AppSlice';


export const userCheck= createAsyncThunk(
  types.GET_USER, async (token, {rejectWithValue}) => {
    try {
      const token = getToken()
      if(token!==null)
      {
        const API = new APP_API({token:token, user:null})
        const data = await API.getUser()
        setAccessToken(token)
        return  data
      }
      else {
        if(localStorage.getItem('token') !== null)
        {
          localStorage.removeItem('token')
          setAccessToken('idle')
        }
        throw new Error("not logged");
      }
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const forgetPasswordThunk= createAsyncThunk<
{data:null , message:string, errors:null},
{name:string, email:string, password:string},
{rejectValue:ForgetPasswordError}
>(
  types.FORGET_PASSWORD, async (user:{name:string, email:string, password:string}, {rejectWithValue}) => {
      try {
        const API = new APP_API({token:"" , user:user})
        const data = await API.forgetPassword() 
        return data
      } catch (error) {
        return rejectWithValue(error.response.data )
      }
  }
)


export const getSingleQuestion = createAsyncThunk(
  types.GET_SINGLE_QUESTION, async (url:string, {rejectWithValue}) => {
      try {
        const resp = await BASE_API_INSTANCE.get(`${url}`)
        console.log(resp.data)
        return resp.data
      } catch (error) {
        return rejectWithValue(error.response.data)
      }
  }
)

export const voteQuestion = createAsyncThunk(
  types.VOTE_QUESTION, async (vote:{id:string | string[] | undefined , type:string}, {rejectWithValue}) => {
      try {
        const formData = new FormData()
        formData.append("type" , vote.type)
        const resp = await BASE_API_INSTANCE.post(`/forum/${vote.id}/thread/vote` , formData)
        return resp.data
      } catch (error) {
        console.log(error.response.data)
        return rejectWithValue(error.response.data.errors.thread_id[0])
      }
  }
)


export const unVoteQuestion = createAsyncThunk(
  types.UN_VOTE_QUESTION, async (vote:{id:string | string[] | undefined , type:string}, {rejectWithValue}) => {
      try {
        const formData = new FormData()
        formData.append("type" , vote.type)
        const resp = await BASE_API_INSTANCE.post(`/forum/${vote.id}/thread/unvote` , formData)
        return resp.data
      } catch (error) {
        return rejectWithValue(error.response.data.errors.thread_id[0])
      }
  }
)



export const voteAnswer = createAsyncThunk(
  types.VOTE_ANSWER, async (vote:{id:string | string[] | undefined , type:string}, {rejectWithValue}) => {
      try {
        const formData = new FormData()
        formData.append("type" , vote.type)
        const resp = await BASE_API_INSTANCE.post(`/forum/${vote.id}/answer/vote` , formData)
        return resp.data
      } catch (error) {
        console.log(error.response.data)
        return rejectWithValue(error.response.data.errors.answer_id[0])
      }
  }
)


export const unVoteAnswer = createAsyncThunk(
  types.UN_VOTE_ANSWER, async (vote:{id:string | string[] | undefined , type:string}, {rejectWithValue}) => {
      try {
        const formData = new FormData()
        formData.append("type" , vote.type)
        const resp = await BASE_API_INSTANCE.post(`/forum/${vote.id}/answer/unvote` , formData)
        return vote.id
      } catch (error) {
        return rejectWithValue(error.response.data.errors.answer_id[0])
      }
  }
)





export const userLogout = createAsyncThunk(
  types.LOGOUT, async (token, {rejectWithValue}) => {
    try {
      const token = getToken()
      if(token!==null)
      {
        localStorage.removeItem('token')
        setAccessToken(null)
        const API = new APP_API({token:token, user:null})
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
    email:string[]
    password:string[]
    name:string[]
  }
  message:string
} 

export interface LoginAuthError {
  errors:{
    email:string[]
    password:string[]
  }
  message:string
} 

export interface ForgetPasswordError {
  errors:{
    attempt:string[]
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
    types.LOGIN, async (user:{email:string,password:string} , {rejectWithValue}) => {
      try {
        const API = new APP_API({token:"" , user:user})
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
      const API = new APP_API({token:"" , user:user})
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
