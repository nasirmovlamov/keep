import { useRouter } from 'next/router';
import React, { ReactElement, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer';
import { changeForumTabActive } from '../app/containers/PageTabsSlice';
import { useAppDispatch } from '../app/store/hooks';
import { AnswersCont } from '../styles/pages/SingleQuestionPage.styled'
import Answer from './Answer';



export interface USER_INTERFACE {
    user:{id:number , email:string, name:string}
}



export interface ANSWER_INTERFACE {
    asnwer:{id:number, parent_id:number|number,user:USER_INTERFACE , score:number,content:string,created_at:string,updated_at:string}
}



interface Props {
    answers:ANSWER_INTERFACE[]
}


function AnswersConts({answers}: Props): ReactElement {
    const { ref, inView, entry } = useInView({threshold: 0,});
    const dispatch = useAppDispatch();


    useEffect(() => {
        if (inView) {
            dispatch(changeForumTabActive([{tabName:"Answers" , link:"answersCont" , id:0 , isActive:true} , {tabName:"Products" , link:"productsCont" , id:1 , isActive:false}]))
        }
        else 
        {
            dispatch(changeForumTabActive([{tabName:"Answers" , link:"answersCont" , id:0 , isActive:false} , {tabName:"Products" , link:"productsCont" , id:1 , isActive:true}]))
        }
    }, [inView])
    

    return (
        <AnswersCont id="answersCont" ref={ref}>
            {answers.map((answer:ANSWER_INTERFACE) => <Answer answer={answer}/>)} 
        </AnswersCont>
    )
}

export default AnswersConts
