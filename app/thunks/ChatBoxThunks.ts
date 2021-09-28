import { createAsyncThunk } from "@reduxjs/toolkit"
import { BASE_API_INSTANCE } from "../../helpers/api/BaseInstance"
import * as types from '../constants/AppContants'




export const checkChat = createAsyncThunk(
    types.CHECK_CHAT, async (user_id:number, {rejectWithValue}) => {
      try {
          const resp = await BASE_API_INSTANCE.get(`/chat/${user_id}//getcomment`)
          return resp.data
      } catch (error:any) {
        return rejectWithValue(error.response.data)
      }
    }
)

export const openRooms = createAsyncThunk(
    types.OPEN_CHATBOX, async (_, {rejectWithValue}) => {
      try {
        const resp = await BASE_API_INSTANCE.get(`/chat`)
        return resp.data
      } catch (error:any) {
        return rejectWithValue(error.response.data)
      }
    }
)