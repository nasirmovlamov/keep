import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { forgetPasswordThunk, getSingleQuestion, unVoteAnswer, unVoteQuestion, userCheck, userLogin, userLogout, userRegister, voteAnswer, voteQuestion } from '../thunks/AppThunk'
import {APP_STATE} from '../state/AppState'
import { setToken } from '../../logic/userToken'
import { RootState } from '../store/store'
import { getKeyValue } from '../../logic/getKeyValue'
import toast from 'react-hot-toast'
import { ToastPosition } from 'react-hot-toast/dist/core/types'
import { ANSWER_INTERFACE } from '../../components/AnswersCont'



export const AppSlice = createSlice({
  name: 'app-slice',
  initialState:APP_STATE,
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

    addNewAnswer(state, {payload}) {
      if(state.singleQuestionData !== null)
      {
        const newAnswer:ANSWER_INTERFACE = payload
        state.singleQuestionData.answers =  [...state.singleQuestionData.answers , newAnswer]
      }
    },

    


    errorToast(state, action) {
            const position:ToastPosition = action.payload.side
            toast(action.payload.content , {
              position: `${position}`,
              // Styling
              style: {background:"red", padding:"10px", transition:"5s", color:"white"},
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

    successToast(state, action) {
      const position:ToastPosition = action.payload.side
      toast(action.payload.content , {
        position: `${position}`,
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
    builder.addCase(userLogin.rejected, (state, {payload}) => {
      state.status = 'failed'
      state.loggedIn = false
      if (payload !== null && payload !== undefined) {        
        state.errors.loginErrors = payload
        toast(payload.message , {
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
      } 



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


    //GET SINGLE QUESTION Reducers
    builder.addCase(getSingleQuestion.fulfilled, (state, {payload}) => {
      state.singleQuestionData = payload.data
      state.status = 'idle'
    }),
    builder.addCase(getSingleQuestion.pending, (state, {payload}) => {
      state.status = 'loading'
    }),
    builder.addCase(getSingleQuestion.rejected, (state, action) => {
      state.status = 'failed'
    })  


    //VOTE QUESTION Reducers
    builder.addCase(voteQuestion.fulfilled, (state, {payload}) => {
      state.status = 'idle'
      if(state.singleQuestionData !== null)
      {
        state.singleQuestionData.user_votes = payload.data
      }
    }),
    builder.addCase(voteQuestion.pending, (state, {payload}) => {
      state.status = 'loading'
    }),
    builder.addCase(voteQuestion.rejected, (state, {payload}) => {
      state.status = 'failed'
      if(typeof payload === "string")
      {
        errorToastReducer(payload)
      }
    })  


    //UN VOTE QUESTION Reducers
    builder.addCase(unVoteQuestion.fulfilled, (state, {payload}) => {
      state.status = 'idle'
      if(state.singleQuestionData !== null)
      {
        state.singleQuestionData.user_votes = null
      }
    }),
    builder.addCase(unVoteQuestion.pending, (state, {payload}) => {
      state.status = 'loading'
    }),
    builder.addCase(unVoteQuestion.rejected, (state, {payload}) => {
      state.status = 'failed'
      if(typeof payload === "string")
      {
        errorToastReducer(payload)
      }
    }) 


    //VOTE ANSWER Reducers
    builder.addCase(voteAnswer.fulfilled, (state, {payload}) => {
      state.status = 'idle'
      if(state.singleQuestionData !== null)
      {
        for (let i = 0; i < state.singleQuestionData.answers.length; i++) {
          if(state.singleQuestionData.answers[i].id === payload.data.answer_id)
          {
            console.log(state.singleQuestionData.answers[i].id)
            console.log(payload.data.answer_id)
            state.singleQuestionData.answers[i].user_votes = payload.data
          } 
        }
      }
    }),
    builder.addCase(voteAnswer.pending, (state, {payload}) => {
      state.status = 'loading'
    }),
    builder.addCase(voteAnswer.rejected, (state, {payload}) => {
      state.status = 'failed'
      if(typeof payload === "string")
      {
        errorToastReducer(payload)
      }
    })  


    //UN VOTE ANSWER Reducers
    builder.addCase(unVoteAnswer.fulfilled, (state, {payload}) => {
      state.status = 'idle'
      console.log(payload)

      if(state.singleQuestionData !== null)
      {
        for (let i = 0; i < state.singleQuestionData.answers.length; i++) {
          if(state.singleQuestionData.answers[i].id === payload)
          {
            state.singleQuestionData.answers[i].user_votes = null
          } 
        }
      }
    }),
    builder.addCase(unVoteAnswer.pending, (state, {payload}) => {
      state.status = 'loading'
    }),
    builder.addCase(unVoteAnswer.rejected, (state, {payload}) => {
      state.status = 'failed'
      if(typeof payload === "string")
      {
        errorToastReducer(payload)
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
export const { changeModalAction } = AppSlice.actions;
export const { login_Form_OnChange } = AppSlice.actions;
export const { register_Form_OnChange } = AppSlice.actions;
export const { addNewAnswer } = AppSlice.actions;


//Notifications
export const { errorToast } = AppSlice.actions;
export const { successToast } = AppSlice.actions;




// data
export const registerErrors = (state: RootState) => state.appReducer.errors?.registerErrors;
export const loginErrors = (state: RootState) => state.appReducer.errors?.loginErrors;
export const forget_Password_Errors = (state: RootState) => state.appReducer.errors?.forgetPasswordErrors;
export const userState = (state: RootState) => state.appReducer.user
export const user_modals = (state: RootState) => state.appReducer.userModals
export const single_question_data = (state: RootState) => state.appReducer.singleQuestionData

export const login_form = (state: RootState) => state.appReducer.forms.loginForm
export const register_form = (state: RootState) => state.appReducer.forms.registerForm



export const is_Logged = (state: RootState) => state.appReducer.loggedIn
export const is_loading = (state: RootState) => state.appReducer.status


export default AppSlice.reducer;








//TOASTERS
const errorToastReducer = (message:string) => {
  toast(message, {
    position: `top-right`,
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
}



