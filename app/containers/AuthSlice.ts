import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { forgetPasswordThunk, userCheck, userLogin, userLogout, userRegister } from '../thunks/AuthThunk'
import {USER_STATE} from '../state/AuthState'
import { setToken } from '../../logic/userToken'
import { RootState } from '../store/store'
import { getKeyValue } from '../../logic/getKeyValue'
import toast from 'react-hot-toast'



export const authSlice = createSlice({
  name: 'authentication',
  initialState:USER_STATE,
  reducers: {
    changeModalAction(state, action) {
      if(state.errors !== null)
      {
        for (const [key, value] of Object.entries(state.errors)) {
          state.errors = {...state.errors,[key]:null}
        }

      }
      for (const [key, value] of Object.entries(state.userModals)) {
        if(key !== action.payload)
        {
          state.userModals = {...state.userModals,[key]:false}
        }
      }
      state.userModals = {...state.userModals, [action.payload]:!getKeyValue(state.userModals, action.payload)}
    },

    register_Form_OnChange(state, action) {
      state.forms.registerForm =  {...state.forms.registerForm , [action.payload.target.name]:action.payload.target.value}
    },  
    login_Form_OnChange(state, action) {
      state.forms.loginForm =  {...state.forms.loginForm , [action.payload.target.name]:action.payload.target.value}
    },

    errorToast(state, action) {
            toast(action.payload.content , {
              position: `${action.payload.side}`,
              // Styling
              style: {background:"green", padding:"10px", transition:"5s", color:"white"},
              className: '',
              // Custom Icon
              icon: '👏',
              // Change colors of success/error/loading icon
              
              // Aria
              ariaProps: {
                role: 'status',
                'aria-live': 'polite',
              },
            });
    },



  },
  extraReducers: (builder) => {
    //Check User Reducers
    builder.addCase(userCheck.fulfilled, (state, {payload}) => {
      state.user = payload.data.data
      state.status = 'idle'
      state.loggedIn = true
    }),
    builder.addCase(userCheck.pending, (state, {payload}) => {
      state.status = 'loading'
    }),
    builder.addCase(userCheck.rejected, (state, {payload}) => {
      state.status = 'failed'
      state.loggedIn = false
    }),


    // Logout
    builder.addCase(userLogout.fulfilled, (state, {payload}) => {
      state.user = {name:"" , email:"" , id:0}
      state.status = 'idle'
      state.loggedIn = false
    }),
    builder.addCase(userLogout.pending, (state, {payload}) => {
      state.user = {name:"" , email:"" , id:0}
      state.status = 'loading'
    }),
    builder.addCase(userLogout.rejected, (state, {payload}) => {
      state.status = 'failed'
      state.loggedIn = false
    }),


    //Login Reducers
    builder.addCase(userLogin.fulfilled, (state, {payload}) => {
        state.userModals = {...state.userModals, 'login':false}
        setToken(payload.data.data.access_token)
        state.user =  payload.data.data.user
        state.loggedIn = true
        console.log(payload)
        toast("You logged your account!" , {
          position: `top-left`,
          // Styling
          style: {background:"green", padding:"10px", transition:"5s", color:"white"},
          className: '',
          // Custom Icon
          icon: '🔥',
          // Change colors of success/error/loading icon
          
          // Aria
          ariaProps: {
            role: 'status',
            'aria-live': 'polite',
          },
        });
        state.status = 'idle'
    }),
    builder.addCase(userLogin.pending, (state, {payload}) => {
      state.status = 'loading'
    }),
    builder.addCase(userLogin.rejected, (state, action) => {
      state.status = 'failed'
      state.loggedIn = false
      if (action.payload !== null && action.payload !== undefined) {        
        state.errors.loginErrors = action.payload
      } 
      console.log("TST")
      toast(action.payload.message , {
        position: `top-left`,
        // Styling
        style: {background:"red", padding:"10px", transition:"5s", color:"white"},
        className: '',
        // Custom Icon
        icon: '❌',
        // Change colors of success/error/loading icon
        
        // Aria
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      });



    })  


    //Forget Password Reducers
    builder.addCase(forgetPasswordThunk.fulfilled, (state, {payload}) => {
      state.userModals = {...state.userModals, 'forgetPassword':false , 'isEmailSend':true}
      state.status = 'idle'
    }),
    builder.addCase(forgetPasswordThunk.pending, (state, {payload}) => {
      state.status = 'loading'
    }),
    builder.addCase(forgetPasswordThunk.rejected, (state, action) => {
      state.status = 'failed'
      state.loggedIn = false
      if (action.payload !== null && action.payload !== undefined) {        
        state.errors.forgetPasswordErrors = action.payload
      } 
      else 
      {        
        // state.errors.forgetPasswordErrors = action.error      
      } 
    })  



    //Register Reducers
    builder.addCase(userRegister.fulfilled, (state, {payload}) => {
      setToken(payload.data.data.access_token)
      state.userModals = {...state.userModals, 'register':false}
      state.status = 'idle'
      state.user = payload.data.data.user
      state.loggedIn = true
    }),
    builder.addCase(userRegister.pending, (state, {payload}) => {
      state.status = 'loading'
    }),
    builder.addCase(userRegister.rejected, (state, action) => {
      state.status = 'failed'
      state.loggedIn = false
      if (action.payload) {        
        // Since we passed in `MyKnownError` to `rejectValue` in `updateUser`, the type information will be available here.        
        state.errors.registerErrors = action.payload      
      } 
      else 
      {        
        // state.errors.registerErrors = action.error      
      }
    })
  },

})


// action
export const { changeModalAction } = authSlice.actions;
export const { login_Form_OnChange } = authSlice.actions;
export const { register_Form_OnChange } = authSlice.actions;


//Notifications
export const { errorToast } = authSlice.actions;




// data
export const registerErrors = (state: RootState) => state.authReducer.errors?.registerErrors;
export const loginErrors = (state: RootState) => state.authReducer.errors?.loginErrors;
export const forget_Password_Errors = (state: RootState) => state.authReducer.errors?.forgetPasswordErrors;
export const userState = (state: RootState) => state.authReducer.user
export const user_modals = (state: RootState) => state.authReducer.userModals

export const login_form = (state: RootState) => state.authReducer.forms.loginForm
export const register_form = (state: RootState) => state.authReducer.forms.registerForm



export const is_Logged = (state: RootState) => state.authReducer.loggedIn
export const is_loading = (state: RootState) => state.authReducer.status


export default authSlice.reducer;











