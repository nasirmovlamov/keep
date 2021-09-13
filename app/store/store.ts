import { configureStore } from '@reduxjs/toolkit'
import appReducer from '../containers/AppSlice'
import tabsReducer from '../containers/PageTabsSlice'
import authReducer from '../containers/AuthSlice'
import commentsReducer from '../containers/CommentsSlice'
import questionReducer from '../containers/QuestionSlice'

const reducer = {  appReducer: appReducer , authReducer:authReducer , questionReducer:questionReducer, commentsReducer:commentsReducer  ,tabsReducer:tabsReducer }



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


