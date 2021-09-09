import { useRouter } from 'next/router';
import React, { ReactElement, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer';
import { changeModalAction, single_question_data, userState } from '../app/containers/AppSlice';
import { changeForumTabActive } from '../app/containers/PageTabsSlice';
import { useAppDispatch, useAppSelector } from '../app/store/hooks';
import { unVoteAnswer, voteAnswer, voteQuestion } from '../app/thunks/AppThunk';
import { AnswerContent, AnswerStyle, Avatar, Name, PersonCont, ShowComments } from '../styles/components/styled-elements/Answer.style';
import { AnswersCont } from '../styles/pages/SingleQuestionPage.styled'
import { ANSWER_INTERFACE } from './AnswersCont';

interface Props {
    answer:ANSWER_INTERFACE
    index:number
}

function Answer({answer , index}: Props): ReactElement {
    const dispatch = useAppDispatch()
    const singleQuestionData = useAppSelector(single_question_data)
    const userData = useAppSelector(userState)
    
    return (
        <AnswerStyle>
            <div className="flexer c-gp-10">
                <PersonCont>
                    <Avatar></Avatar>
                    <Name>{answer.user.name}</Name>
                </PersonCont>
                <AnswerContent>
                    {answer.content}
                </AnswerContent>
                <div className="flexer fd-c a-end">
                    <button onClick={() => dispatch((singleQuestionData.answers[index].user_votes !== null && singleQuestionData.answers[index].user_votes.user_id === userData.id) ? unVoteAnswer({id: singleQuestionData.answers[index].id, type:"upvote"}) :voteAnswer({id:singleQuestionData.answers[index].id, type:"upvote"}))} style={{color:singleQuestionData.answers[index].user_votes === null ? "white" : "black"}}>like</button>
                </div>
            </div>
            <div className="flexer fd-c a-end">
                <ShowComments onClick={() => dispatch(changeModalAction("commentModal"))}>Show Comments</ShowComments>
            </div>
        </AnswerStyle>
    )
}

export default Answer
