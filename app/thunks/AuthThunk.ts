import * as types from '../constants/AuthContants'
import {AUTH_API} from '../../helpers/api/AuthApi'
import { AsyncThunk, createAction, createAsyncThunk} from '@reduxjs/toolkit'
import {getToken} from '../actions/getToken'


export const getUser= createAsyncThunk(
  types.GET_USER, async (token:string, {rejectWithValue}) => {
    try {
      const API = new AUTH_API({token:token ,user:null})
      return API.getUser() 
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)


export const userLogin = createAsyncThunk(
  types.LOGIN, async (user:{} , {rejectWithValue}) => {
    try {
      const API = new AUTH_API({token:null , user:user})
      return API.register() 
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const userRegister = createAsyncThunk(
  types.REGISTER, async (user:{}, {rejectWithValue}) => {
    try {
      const API = new AUTH_API({token:null , user:user})
      return API.register() 
    } catch (error) {
      return rejectWithValue(error.response.data)
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











// // export const getUser = () => async (dispatch) => {
// //   const user = JSON.parse(localStorage.getItem('authentication'))
// //   dispatch({ type: types.GET_USER, payload: user })
// // }


// export const login = (email, password) => async (dispatch) => {
//   try {
//     const { data } = await AuthApi.post('Users/login', { email, password })
//     localStorage.setItem('token', data.id)
//     dispatch({ type: types.LOGIN_SUCCESS, payload: data })
//     dispatch(loginRequest(data.userId, data.id))
//   } catch (err) {
//     dispatch({ type: types.LOGIN_FAILURE, payload: err.message })
//   }
// }

// export const register = (email, password, username) => async (dispatch) => {
//   try {
//     await AuthApi.post('Users', { email, password, username })
//     dispatch({ type: types.REGISTER_SUCCESS })
//     history.push('/auth/login', { register: 'success' })
//   } catch (err) {
//     dispatch({ type: types.REGISTER_FAILURE, payload: err.message })
//   }
// }

// export const logout = () => async (dispatch) => {
//   try {
//     localStorage.removeItem('authentication')
//     localStorage.removeItem('token')
//     dispatch({ type: types.LOGOUT })
//     history.push('/auth/login')
//   } catch (err) {
//     if (err.response.status === 401) {
//       history.push('/auth/login')
//     }
//     console.log(err)
//   }
// }







