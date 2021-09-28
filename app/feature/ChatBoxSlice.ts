import { createSlice } from "@reduxjs/toolkit"
import { ChatBoxState } from "../store/states/ChatBoxState"
import { RootState } from "../store/store";
import { checkChat, openRooms } from "../thunks/ChatBoxThunks";



export const ChatBoxSlice = createSlice({
    name: 'ChatBox-slice',
    initialState:ChatBoxState ,
    reducers: {
        showComments(state, {payload}) {
        
        },
        closeComments(state, {payload}) {
            
        },
    },

    extraReducers: (builder) => {
        // CHECK USER CHAT
        builder.addCase(checkChat.fulfilled, (state, {payload}) => {
        }),
        builder.addCase(checkChat.pending, (state, {payload}) => {
        }),
        builder.addCase(checkChat.rejected, (state, action:any) => {
        })


        // OPEN USER CHATBOX
        builder.addCase(openRooms.fulfilled, (state, {payload}) => {
            state.status = 'idle'
        }),
        builder.addCase(openRooms.pending, (state, {payload}) => {
            state.status = 'loading'
        }),
        builder.addCase(openRooms.rejected, (state, action:any) => {
            state.status = 'idle'
        })

    }

})


// action
// export const { showComments , closeComments } = ChatBoxSlice.actions;




// data
// export const comments_errors = (state: RootState) => state.chatBoxReducer.commentsErrors


export default ChatBoxSlice.reducer;






