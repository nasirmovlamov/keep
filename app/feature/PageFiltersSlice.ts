import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PAGE_FILTERS_STATE } from '../store/states/PageFiltersState';
import { RootState } from '../store/store'



export const PageFiltersSlice = createSlice({
  name: 'app-slice',
  initialState:PAGE_FILTERS_STATE,
  reducers: {

    changePositionOfFilters(state, action) {
        state.isShown = !action.payload
    },
    changeToStayInFocus(state, action) {
      state.stayInFocus= !action.payload
    },

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
export const {changePositionOfFilters , changeToStayInFocus} = PageFiltersSlice.actions;


// data
export const is_focused = (state: RootState) => state.pageFiltersReducer.isShown
export const stay_in_focus = (state: RootState) => state.pageFiltersReducer.stayInFocus


export default PageFiltersSlice.reducer;








