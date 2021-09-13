import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { forgetPasswordThunk,   userCheck, userLogin, userLogout, userRegister,  } from '../thunks/AuthThunk'
import {APP_STATE} from '../store/states/AppState'
import { setToken } from '../../logic/userToken'
import { RootState } from '../store/store'
import { getKeyValue } from '../../logic/getKeyValue'
import toast from 'react-hot-toast'
import { ToastPosition } from 'react-hot-toast/dist/core/types'
import { ANSWER_INTERFACE } from '../../components/AnswersCont'
import { unVoteAnswer, unVoteQuestion, voteAnswer, voteQuestion } from '../thunks/VotingThunk'
import { getSingleQuestion } from '../thunks/VotingThunk'
import { autoErrorToaster } from '../../components/Notify/AutoErrorToaster'
import { QUESTION_STATE } from '../store/states/QuestionState'



export const QuestionSlice = createSlice({
  name: 'app-slice',
  initialState:QUESTION_STATE,
  reducers: {

    addNewAnswer(state, {payload}) {
      if(state.singleQuestionData !== null)
      {
        const newAnswer:ANSWER_INTERFACE = payload
        console.log(payload)
        state.singleQuestionData.answers =  [...state.singleQuestionData.answers , newAnswer]
        state.singleQuestionData.answer_count += 1
      }
    },

  },



  extraReducers: (builder) => {

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
        for (let i = 0; i < state.singleQuestionData.answers.length; i++) {
          if(state.singleQuestionData.answers[i].id === payload.data.answer_id)
          {
            state.singleQuestionData.answers[i].user_votes = payload.data
          } 
        }
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
        for (let i = 0; i < state.singleQuestionData.answers.length; i++) {
          if(state.singleQuestionData.answers[i].id === payload)
          {
            state.singleQuestionData.answers[i].user_votes = null
          } 
        }
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
export const { addNewAnswer } = QuestionSlice.actions;



// data
export const single_question_data = (state: RootState) => state.questionReducer.singleQuestionData
export const question_answers = (state: RootState) => state.questionReducer.singleQuestionData.answers
export const single_question_status = (state: RootState) => state.questionReducer.status



export default QuestionSlice.reducer;








