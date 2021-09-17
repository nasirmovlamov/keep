import { useRouter } from 'next/router';
import React, { ReactElement, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer';
import { changeForumTabActive } from '../app/feature/PageTabsSlice';
import { changeModalAction, user_data } from '../app/feature/AuthSlice';
import { useAppDispatch, useAppSelector } from '../app/store/hooks';
import { unVoteAnswer, voteAnswer } from '../app/thunks/QuestionThunk';
import { AnswerContent, AnswerStyle, Avatar, Name, PersonCont, ShowComments } from '../styles/components/styled-elements/Answer.style';
import { AnswersCont } from '../styles/pages/SingleQuestionPage.styled'
import { showComments } from '../app/feature/CommentsSlice';
import { getAnswerComments } from '../app/thunks/CommentsThunk';
import { single_question_data } from '../app/feature/QuestionSlice';
import { errorToastFunc, loginError } from './Notify/ErrorToasts';
import { ANSWER_INTERFACE } from '../app/store/state-Interfaces/QuestionInterface';

interface Props {
    answer:ANSWER_INTERFACE
    index:number,
}

function Answer({answer , index  }: Props): ReactElement {
    const dispatch = useAppDispatch()
    const singleQuestionData = useAppSelector(single_question_data)
    const userData = useAppSelector(user_data)
    const [color, setcolor] = useState("gray")
    const voting = () => {
        console.log(answer)
        if(userData === null)
        {
            loginError()
            return null
        }
        if(answer.user_votes === null)
        {
            dispatch(voteAnswer({id:answer.id, type:"upvote"}))
        }
        else if (answer.user_votes !== null && answer.user_votes.user_id === userData.id)
        {
            dispatch(unVoteAnswer({id: answer.id, type:"upvote"}))
        }
        else{}
    }
    
    const openComments = () =>{
        dispatch(getAnswerComments(answer.id))
        dispatch(
            showComments(
                {
                    id:answer.id, 
                    user:answer.user, 
                    title:answer.content, 
                    type:"answer",
                    showComments:true
                }
            )
        )
    }

    useEffect(() => {
        if(userData)
        {
            answer.user_votes === null ? setcolor("gray") : setcolor("red")
        }
        else 
        {
            setcolor("gray")
        }
    }, [userData])

    return (
        <AnswerStyle key={answer.id}>
            <div  className="flexer c-gp-10">
                <PersonCont>
                    <Avatar></Avatar>
                    <Name>{answer.user.name}</Name>
                </PersonCont>
                <AnswerContent>
                    {answer.content}
                </AnswerContent>
                <div className="flexer fd-c a-end">
                    <button onClick={voting} style={{color:  color}}>like</button>
                </div>
            </div>
            <div className="flexer fd-c a-end">
                <ShowComments onClick={openComments}>Show Comments</ShowComments>
            </div>
        </AnswerStyle>
    )
}

export default Answer
