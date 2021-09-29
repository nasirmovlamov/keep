/* eslint-disable react-hooks/exhaustive-deps */
import React, { ReactElement, useEffect, useState } from 'react'
import { user_data } from '../app/feature/AuthSlice'
import { useInView } from 'react-intersection-observer';

import { chat_rooms, closeChat, opened_chat_room_id, setRoomId } from '../app/feature/ChatBoxSlice'
import { useAppDispatch, useAppSelector } from '../app/store/hooks'
import { openRooms, reqRoomMessages, checkRoomChat, sendMessageToRoom } from '../app/thunks/ChatBoxThunks'
import { getLastMessageId,  getRooms } from '../logic/chatBoxLogic'
import { ChatMain, ChatMessage, ChatMessages, ChatMessagesFix, ChatMessagesTab, ChatNav, ChatNavName, ChatRoom, ChatRooms, ChatSendMessage, ChatWindow, CloseChatBox } from '../styles/components/styled-elements/ChatBox.style'

interface Props {
    
}

export default function ChatBox({}: Props): ReactElement {

    const [inViewRefChatLoaderCont, inViewChatLoaderCont] = useInView()


    const userData = useAppSelector(user_data)
    const dispatch = useAppDispatch()
    const chatRooms = useAppSelector(chat_rooms)
    const openedChatRoomId = useAppSelector(opened_chat_room_id)
    const [userMessage, setuserMessage] = useState<string>("")


    const closeChatBox = () => {
        dispatch(closeChat(""))
    }


    useEffect(() => {
        if(openedChatRoomId)
        {
            dispatch(checkRoomChat(chatRooms[openedChatRoomId].opponent_user.id))
        }
    }, [openedChatRoomId])


    useEffect(() => {
        if(inViewChatLoaderCont)
        {
            console.log("chatRooms")
        }
    }, [inViewChatLoaderCont])


    return (
        <ChatWindow>
            <ChatNav><ChatNavName>{userData!.name}</ChatNavName>  <CloseChatBox onClick={closeChatBox}>X</CloseChatBox></ChatNav>
            
            <ChatMain>
                <ChatRooms>
                    {getRooms(chatRooms).map((room: any) => <ChatRoom onClick={()=> dispatch(setRoomId(room.id))} key={room.id}>{room.opponent_user.name}</ChatRoom>)}
                </ChatRooms>
                <ChatMessagesTab>
                    { openedChatRoomId !== null &&
                    <>
                    <div ref={inViewRefChatLoaderCont}>loader</div>
                    <ChatMessages>
                        <ChatMessagesFix></ChatMessagesFix>
                        {openedChatRoomId !== null && chatRooms[openedChatRoomId].messages.map((message: any) => <ChatMessage isMe={userData!.id === message.user.id} key={message.id}>{message.content}</ChatMessage>)}
                    </ChatMessages>
                    <ChatSendMessage>
                        <input value={userMessage} onChange={(e:any) => setuserMessage(e.target.value)} type="text" placeholder="Type your message here..."/>
                        {<button onClick={() => dispatch(sendMessageToRoom({roomId:openedChatRoomId, content:userMessage }))}>Send</button>}
                    </ChatSendMessage>
                    </>
                    }
                </ChatMessagesTab>
            </ChatMain>
            
        </ChatWindow>
    )
}
