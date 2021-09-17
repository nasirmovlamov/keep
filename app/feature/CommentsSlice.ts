import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { autoErrorToaster } from '../../components/Notify/AutoErrorToaster'
import { autoSuccessToaster } from '../../components/Notify/AutoSuccessToast'
import { errorToastFunc } from '../../components/Notify/ErrorToasts'
import { successToast } from '../../components/Notify/SuccessToast'
import { CommentsInterface } from '../store/state-Interfaces/CommentInterface'
import { CommentsState } from '../store/states/CommentState'
import { RootState } from '../store/store'
import { addAnswerComment, addQuestionComment, getAnswerComments, getQuestionComments } from '../thunks/CommentsThunk'



export const CommentsSlice = createSlice({
    name: 'comments-slice',
    initialState:CommentsState ,
    reducers: {
        showComments(state, {payload}) {
            const {id , type , showComments, title, user}  = payload
            state.commentsType = {id:id, type:type , showComments:showComments, title:title, user:user} 
        },
        closeComments(state, {payload}) {
            state.commentsType = null 
        },
    },

    extraReducers: (builder) => {
        //GET QUESTION COMMETS Reducers
        builder.addCase(getQuestionComments.fulfilled, (state, {payload}) => {
            state.comments = payload.data
            state.commentsStatus = 'idle'
        }),
        builder.addCase(getQuestionComments.pending, (state, {payload}) => {
            state.commentsStatus = 'loading'
        }),
        builder.addCase(getQuestionComments.rejected, (state, action:any) => {
            state.commentsStatus = 'idle'
            if (action.payload) {        
                state.commentsErrors = action.payload.errors
            } 
            else 
            {
                state.commentsErrors = action.errors
            }
        }) ,

        //GET ANSWER COMMETS Reducers
        builder.addCase(getAnswerComments.fulfilled, (state, {payload}) => {
            state.comments = payload.data
            state.commentsStatus = 'idle'
        }),
        builder.addCase(getAnswerComments.pending, (state, {payload}) => {
            state.commentsStatus = 'loading'
        }),
        builder.addCase(getAnswerComments.rejected, (state, action:any) => {
            state.commentsStatus = 'idle'
            if (action.payload) {        
                state.commentsErrors = action.payload.errors
            } 
            else 
            {
                state.commentsErrors = action.errors
            }
        }) ,




        //ADD QUESTION COMMETS Reducers
        builder.addCase(addQuestionComment.fulfilled, (state, {payload}) => {
            state.comments = [...state.comments , payload.data]
            autoSuccessToaster(payload.message)
            }),
        builder.addCase(addQuestionComment.pending, (state, {payload}) => {
        }),
        builder.addCase(addQuestionComment.rejected, (state, action) => {
            autoErrorToaster(action.payload)
        }) ,


        //ADD ANSWER COMMETS Reducers
        builder.addCase(addAnswerComment.fulfilled, (state, {payload}) => {
            state.comments = [...state.comments , payload.data]
            autoSuccessToaster(payload.message)
        }),
        builder.addCase(addAnswerComment.pending, (state, {payload}) => {
        }),
        builder.addCase(addAnswerComment.rejected, (state, action) => {
            autoErrorToaster(action.payload)
        }) 
    }

})


// action
export const { showComments , closeComments } = CommentsSlice.actions;




// data
export const comments_errors = (state: RootState) => state.commentsReducer.commentsErrors
export const comments = (state: RootState) => state.commentsReducer.comments
export const comments_types = (state: RootState) => state.commentsReducer.commentsType
export const comments_status = (state: RootState) => state.commentsReducer.commentsStatus


export default CommentsSlice.reducer;






