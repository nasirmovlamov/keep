import React, { ReactElement, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer';
import { changeForumTabActive } from '../app/containers/PageTabsSlice';
import { useAppDispatch } from '../app/store/hooks';
import { AnswerContent, AnswerStyle, Avatar, Name, PersonCont, ShowComments } from '../styles/components/styled-elements/Answer.style';
import { AnswersCont } from '../styles/pages/SingleQuestionPage.styled'
import { ANSWER_INTERFACE } from './AnswersCont';

interface Props {
    answer:ANSWER_INTERFACE
}

function Answer({answer}: Props): ReactElement {
    
    

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
                    <button>like</button>
                </div>
            </div>
            <div className="flexer fd-c a-end">
                <ShowComments>Show Comments</ShowComments>
            </div>
        </AnswerStyle>
    )
}

export default Answer
