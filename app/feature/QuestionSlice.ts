import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { forgetPasswordThunk,   userCheck, userLogin, userLogout, userRegister,  } from '../thunks/AuthThunk'
import {APP_STATE} from '../store/states/AppState'
import { setToken } from '../../logic/userToken'
import { RootState } from '../store/store'
import { getKeyValue } from '../../logic/getKeyValue'
import toast from 'react-hot-toast'
import { ToastPosition } from 'react-hot-toast/dist/core/types'
import { getAnswers, unVoteAnswer, unVoteQuestion, voteAnswer, voteQuestion } from '../thunks/QuestionThunk'
import { getSingleQuestion } from '../thunks/QuestionThunk'
import { autoErrorToaster } from '../../components/Notify/AutoErrorToaster'
import { QUESTION_STATE } from '../store/states/QuestionState'



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


    //GET SINGLE QUESTION ANSWERS Reducers
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
            console.log(payload.data.meta)
            console.log(state.answersData.topPage )
            if(state.answersData.topPage === 1)
            {
              state.answersData.downPage = payload.data.meta.last_page
              state.answersData.totalPage  = payload.data.meta.total
            }
            state.answersData.topPage = state.answersData.topPage + 1
  
            if(topAnswers.answers.length + downAnswers.answers.length === state.answersData.totalPage && state.answersData.topPage > 1)
            {
                topAnswers.status = 'idle'
                downAnswers.status = 'idle'
            }
        }
        else 
        {
          downAnswers.answers = [... downAnswers.answers , ...payload.data.data ]
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





    //VOTE QUESTION Reducers
    builder.addCase(voteQuestion.fulfilled, (state, {payload}) => {
      if(state.singleQuestionData !== null)
      {
        state.singleQuestionData.user_votes = payload.data
        state.singleQuestionData.upvote += 1
      }
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
    }),
    builder.addCase(unVoteQuestion.pending, (state, {payload}) => {
    }),
    builder.addCase(unVoteQuestion.rejected, (state, {payload}) => {
      autoErrorToaster(payload)
    }) 


    //VOTE ANSWER Reducers
    builder.addCase(voteAnswer.fulfilled, (state, {payload}) => {
      state.status = 'idle'
      if(state.singleQuestionData !== null)
      {
        // for (let i = 0; i < state.singleQuestionData.answers.length; i++) {
        //   if(state.singleQuestionData.answers[i].id === payload.data.answer_id)
        //   {
        //     state.singleQuestionData.answers[i].user_votes = payload.data
        //   } 
        // }
      }
    }),
    builder.addCase(voteAnswer.pending, (state, {payload}) => {
    }),
    builder.addCase(voteAnswer.rejected, (state, {payload}) => {
      autoErrorToaster(payload)
    })  


    //UN VOTE ANSWER Reducers
    builder.addCase(unVoteAnswer.fulfilled, (state, {payload}) => {
      if(state.singleQuestionData !== null)
      {
        // for (let i = 0; i < state.singleQuestionData.answers.length; i++) {
        //   if(state.singleQuestionData.answers[i].id === payload)
        //   {
        //     state.singleQuestionData.answers[i].user_votes = null
        //   } 
        // }
      }
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

export const down_answers = (state: RootState) => state.questionReducer.answersData.downAnswers.answers
export const top_answers = (state: RootState) => state.questionReducer.answersData.topAnswers.answers
export const top_answers_status = (state: RootState) => state.questionReducer.answersData.topAnswers.status
export const down_answers_status = (state: RootState) => state.questionReducer.answersData.downAnswers.status


export const top_page = (state: RootState) => state.questionReducer.answersData.topPage
export const down_page = (state: RootState) => state.questionReducer.answersData.downPage
export const total_page = (state: RootState) => state.questionReducer.answersData.totalPage



export default QuestionSlice.reducer;








