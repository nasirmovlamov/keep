import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { forgetPasswordThunk,   userCheck, userLogin, userLogout, userRegister,  } from '../thunks/AuthThunk'
import {APP_STATE} from '../store/states/AppState'
import { setToken } from '../../logic/userToken'
import { RootState } from '../store/store'
import { getKeyValue } from '../../logic/getKeyValue'
import toast from 'react-hot-toast'
import { ToastPosition } from 'react-hot-toast/dist/core/types'
import { addAnswer, getAnswers, unVoteAnswer, unVoteQuestion, voteAnswer, voteQuestion } from '../thunks/QuestionThunk'
import { getSingleQuestion } from '../thunks/QuestionThunk'
import { autoErrorToaster } from '../../components/Notify/AutoErrorToaster'
import { QUESTION_STATE } from '../store/states/QuestionState'
import { successToast } from '../../components/Notify/SuccessToast'



export const QuestionSlice = createSlice({
  name: 'app-slice',
  initialState:QUESTION_STATE,
  reducers: {

    changeTopAnswersStatus(state, action) {
        state.answersData.topAnswers.status = action.payload.status
    },
    changeDownAnswersStatus(state, action) {
      state.answersData.downAnswers.status = action.payload.status
    },

  },





  extraReducers: (builder) => {

    //GET SINGLE QUESTION Reducers
    builder.addCase(getSingleQuestion.fulfilled, (state, {payload}) => {
      state.singleQuestionData = payload.data
      state.singleQuestionData.status = 'idle'
    }),
    builder.addCase(getSingleQuestion.pending, (state, {payload}) => {
      state.singleQuestionData.status = 'loading'
    }),
    builder.addCase(getSingleQuestion.rejected, (state, action) => {
      state.singleQuestionData.status = 'failed'
    })  


    //GET  QUESTION ANSWERS Reducers
    builder.addCase(getAnswers.fulfilled, (state, {payload}) => {
      const topAnswers = state.answersData.topAnswers
      const downAnswers = state.answersData.downAnswers
      if(payload === null)
      {
        
      }
      else 
      {
        if(payload.next)
        {
            topAnswers.answers = [... topAnswers.answers , ...payload.data.data]
            if(state.answersData.topPage === 1)
            {
              state.answersData.downPage = payload.data.meta.last_page
              state.answersData.totalPage  = payload.data.meta.total
            }
            state.answersData.topPage = state.answersData.topPage + 1
  
            if(topAnswers.answers.length + downAnswers.answers.length - state.answersData.submittedAnswer.length === state.answersData.totalPage && state.answersData.topPage > 1)
            {
                topAnswers.status = 'idle'
                downAnswers.status = 'idle'
            }
        }
        else 
        {
          downAnswers.answers = [ ...payload.data.data , ... downAnswers.answers ]
          state.answersData.downPage = state.answersData.downPage - 1
          if(downAnswers.answers.length + topAnswers.answers.length === state.answersData.totalPage )
          {
            downAnswers.status = 'idle'
            topAnswers.status = 'idle'
          }
      }
      
      }
    }),
    builder.addCase(getAnswers.pending, (state, {payload}) => {
      state.answersData.topAnswers.status = 'loading'

    }),
    builder.addCase(getAnswers.rejected, (state, action) => {
      state.answersData.topAnswers.answers = [...state.answersData.topAnswers.answers]
      state.answersData.topAnswers.status = 'failed'
    }) 


    //ADD NEW ANSWER to Question Reducers
    builder.addCase(addAnswer.fulfilled, (state, {payload}) => {
        successToast("top-right" ,payload.message)
        state.answersData.topAnswers.answers = [  payload.data , ...state.answersData.topAnswers.answers ]
    }),
    builder.addCase(addAnswer.pending, (state, {payload}) => {
      
    }),
    builder.addCase(addAnswer.rejected, (state, {payload}) => {
      autoErrorToaster(payload)
    })  


    //VOTE QUESTION Reducers
    builder.addCase(voteQuestion.fulfilled, (state, {payload}) => {
      if(state.singleQuestionData !== null)
      {
        state.singleQuestionData.user_votes = payload.data
        state.singleQuestionData.upvote += 1
      }
      successToast("top-right" ,payload.message)

    }),
    builder.addCase(voteQuestion.pending, (state, {payload}) => {
    }),
    builder.addCase(voteQuestion.rejected, (state, {payload}) => {
      autoErrorToaster(payload)
    })  


    //UN VOTE QUESTION Reducers
    builder.addCase(unVoteQuestion.fulfilled, (state, {payload}) => {
      if(state.singleQuestionData !== null)
      {
        state.singleQuestionData.user_votes = null
        state.singleQuestionData.upvote -= 1
      }
      successToast("top-right" ,payload.message)
    }),
    builder.addCase(unVoteQuestion.pending, (state, {payload}) => {
    }),
    builder.addCase(unVoteQuestion.rejected, (state, {payload}) => {
      autoErrorToaster(payload)
    }) 


    //VOTE ANSWER Reducers
    builder.addCase(voteAnswer.fulfilled, (state, {payload}) => {
      if(payload.direction === "bottom")
      {
        for (let i = 0; i < state.answersData.downAnswers.answers.length; i++) {
          if(state.answersData.downAnswers.answers[i].id === payload.data.data.answer_id)
          {
            state.answersData.downAnswers.answers[i].user_votes = payload.data.data
          } 
        }
      }
      else if (payload.direction === "top")
      {
        for (let i = 0; i < state.answersData.topAnswers.answers.length; i++) {
          if(state.answersData.topAnswers.answers[i].id === payload.data.data.answer_id)
          {
            state.answersData.topAnswers.answers[i].user_votes = payload.data.data
          } 
        }
      }
      else if (payload.direction === "new-submitted")
      {
        for (let i = 0; i < state.answersData.submittedAnswer.length; i++) {
          if(state.answersData.submittedAnswer[i].id === payload.data.data.answer_id)
          {
            state.answersData.submittedAnswer[i].user_votes = payload.data.data
          } 
        }
      }
      successToast("top-right" ,payload.data.message)
      
    }),
    builder.addCase(voteAnswer.pending, (state, {payload}) => {
    }),
    builder.addCase(voteAnswer.rejected, (state, {payload}) => {
      autoErrorToaster(payload)
    })  


    //UN VOTE ANSWER Reducers
    builder.addCase(unVoteAnswer.fulfilled, (state, {payload}) => {
      if(payload.direction === "bottom")
      {
        for (let i = 0; i < state.answersData.downAnswers.answers.length; i++) {
          if(state.answersData.downAnswers.answers[i].id === payload.id)
          {
            state.answersData.downAnswers.answers[i].user_votes = null
          } 
        }
      }
      else if (payload.direction === "top")
      {
        for (let i = 0; i < state.answersData.topAnswers.answers.length; i++) {
          if(state.answersData.topAnswers.answers[i].id === payload.id)
          {
            state.answersData.topAnswers.answers[i].user_votes = null
          } 
        }
      }
      else if (payload.direction === "new-submitted")
      {
        for (let i = 0; i < state.answersData.topAnswers.answers.length; i++) {
          if(state.answersData.submittedAnswer[i].id === payload.data.data.answer_id)
          {
            state.answersData.submittedAnswer[i].user_votes = null
          } 
        }
      }
      else {}
      successToast("top-right" ,payload.data.message)
    }),
    builder.addCase(unVoteAnswer.pending, (state, {payload}) => {
    }),
    builder.addCase(unVoteAnswer.rejected, (state, {payload}) => {
      autoErrorToaster(payload)
    }) 


    
  },

})


// action

export const {changeTopAnswersStatus} = QuestionSlice.actions;
export const {changeDownAnswersStatus} = QuestionSlice.actions;


// data
export const single_question_data = (state: RootState) => state.questionReducer.singleQuestionData
export const single_question_status = (state: RootState) => state.questionReducer.singleQuestionData.status

export const submitted_answer = (state: RootState) => state.questionReducer.answersData.submittedAnswer
export const down_answers = (state: RootState) => state.questionReducer.answersData.downAnswers.answers
export const top_answers = (state: RootState) => state.questionReducer.answersData.topAnswers.answers
export const top_answers_status = (state: RootState) => state.questionReducer.answersData.topAnswers.status
export const down_answers_status = (state: RootState) => state.questionReducer.answersData.downAnswers.status


export const top_page = (state: RootState) => state.questionReducer.answersData.topPage
export const down_page = (state: RootState) => state.questionReducer.answersData.downPage
export const total_page = (state: RootState) => state.questionReducer.answersData.totalPage



export default QuestionSlice.reducer;








