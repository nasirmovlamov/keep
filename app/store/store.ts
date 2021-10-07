import { configureStore } from '@reduxjs/toolkit'
import appReducer from '../feature/AppSlice'
import tabsReducer from '../feature/PageTabsSlice'
import authReducer from '../feature/AuthSlice'
import questionReducer from '../feature/QuestionSlice'
import commentsReducer from '../feature/CommentsSlice'
import chatBoxReducer from '../feature/ChatBoxSlice'
import searchBoxReducer from '../feature/SearchBoxSlice'
import pageFiltersReducer from '../feature/PageFiltersSlice'

const reducer = 
{  
  appReducer: appReducer , 
  authReducer:authReducer , 
  questionReducer:questionReducer, 
  commentsReducer:commentsReducer  ,
  tabsReducer:tabsReducer,
  chatBoxReducer:chatBoxReducer,
  searchBoxReducer:searchBoxReducer,
  pageFiltersReducer:pageFiltersReducer
}



export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


