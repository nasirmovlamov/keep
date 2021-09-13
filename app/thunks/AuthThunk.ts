import { accessToken, getAccessToken, setAccessToken } from '../../helpers/token/TokenHandle';
import { BASE_API_URL } from '../../helpers/urls/BASE_URL';
import * as types from '../constants/AppContants'
import {APP_API} from '../../helpers/api/AppApi'
import { AsyncThunk, createAction, createAsyncThunk, isRejectedWithValue} from '@reduxjs/toolkit'
import {getToken} from '../../logic/userToken'
import { AxiosError } from 'axios'
import { APP_INTERFACE, ForgetPasswordError, LoginAttributes, LoginAuthError, MyData, RegisterAttributes, RegisterAuthError } from '../store/state-Interfaces/AppInterface'
import BaseApi from '../../helpers/api/BaseApi';
import { BASE_API_INSTANCE } from '../../helpers/api/BaseInstance';
import {URL} from '../../helpers/urls/Urls'


export const userCheck= createAsyncThunk(
  types.GET_USER, async (token, {rejectWithValue}) => {
    try {
      const data = await BASE_API_INSTANCE.get(URL.CHECK_USER)
      return  data
    } catch (error:any) {
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
      } catch (error:any) {
        return rejectWithValue(error.response.data )
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
    } catch (error:any) {
      return rejectWithValue(error.response.data)
    }
  }
)






  
  
  
  export const userLogin = createAsyncThunk(
    types.LOGIN, async (user:{email:string,password:string} , {rejectWithValue}) => {
      try {
        const login_form = new FormData()
        login_form.append("email",user.email)
        login_form.append("password",user.password)
        const data = await BASE_API_INSTANCE.post(URL.LOGIN, login_form) 
        return data.data
      } catch (error:any) {
        return rejectWithValue(error.response.data)          
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
      return  data.data 
    } catch (error:any) {
      return rejectWithValue(error.response.data);
    }
  }
)


