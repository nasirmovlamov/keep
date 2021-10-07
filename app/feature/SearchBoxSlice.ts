import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store/store'
import { SEARCHBOX_STATE } from '../store/states/SearchBoxState'



export const SearchBoxSlice = createSlice({
  name: 'app-slice',
  initialState:SEARCHBOX_STATE,
  reducers: {

    // changeTopAnswersStatus(state, action) {
    //     state.answersData.topAnswers.status = action.payload.status
    // },
    

  },





  extraReducers: (builder) => {

    //ADD NEW ANSWER to Question Reducers
    // builder.addCase(addAnswer.fulfilled, (state, {payload}) => {
    //     successToast("top-right" ,payload.message)
    //     state.answersData.topAnswers.answers = [  payload.data , ...state.answersData.topAnswers.answers ]
    // }),
    // builder.addCase(addAnswer.pending, (state, {payload}) => {
      
    // }),
    // builder.addCase(addAnswer.rejected, (state, {payload}) => {
    //   autoErrorToaster(payload)
    // })  

  },

})


// action
// export const {changeDownAnswersStatus} = QuestionSlice.actions;


// data
export const searchbox_data = (state: RootState) => state.searchBoxReducer.searchBoxData




export default SearchBoxSlice.reducer;








