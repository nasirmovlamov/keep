import axios from 'axios';
import { useRouter } from 'next/router';
import React, { ReactElement, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer';
import { changeForumTabActive } from '../app/feature/PageTabsSlice';
import {  changeDownAnswersStatus, changeTopAnswersStatus,  down_answers, down_answers_status, down_page, single_question_data, top_answers, top_answers_status, top_page, total_page } from '../app/feature/QuestionSlice';
import { useAppDispatch, useAppSelector } from '../app/store/hooks';
import { ANSWER_INTERFACE } from '../app/store/state-Interfaces/QuestionInterface';
import { getAnswers } from '../app/thunks/QuestionThunk';
import { AnswersCont } from '../styles/pages/SingleQuestionPage.styled'
import Answer from './Answer';
import AnswerSkeleton from './Skeletons/AnswerSkeleton';



export interface USER_INTERFACE {
    id:number , 
    email:string, 
    name:string
}

export interface GET_ANSWER_INTERFAC{
    page:number,
    direction:string,
    questionId:number
}




interface Props {
    // answers:ANSWER_INTERFACE[]
}


function AnswersConts({}: Props): ReactElement {
    
    const [inViewRefAnswersCont, inViewAnswersCont] = useInView()
    const [inViewRefLoaderDown, inViewLoaderDown] = useInView()
    const [inViewRefLoaderUp, inViewLoaderUp] = useInView()


    const topAnswers = useAppSelector(top_answers);
    const downAnswers = useAppSelector(down_answers);
    
    
    const downAnswersStatus = useAppSelector(down_answers_status);
    const topAnswersStatus = useAppSelector(top_answers_status);


    const topPage = useAppSelector(top_page);
    const downPage = useAppSelector(down_page);
    const totalPage = useAppSelector(total_page);


    const dispatch = useAppDispatch();
    const SingleQuestionData = useAppSelector(single_question_data)



    useEffect(() => {
        if (inViewAnswersCont) {
            dispatch(changeForumTabActive([{tabName:"Answers" , link:"answersCont" , id:0 , isActive:true} , {tabName:"Products" , link:"productsCont" , id:1 , isActive:false}]))
        }
        else 
        {
            dispatch(changeForumTabActive([{tabName:"Answers" , link:"answersCont" , id:0 , isActive:false} , {tabName:"Products" , link:"productsCont" , id:1 , isActive:true}]))
        }
    }, [inViewAnswersCont])
    

    


    useEffect(() => {
        if(inViewLoaderDown)
        {
            if(topAnswersStatus ==="loading" && downAnswersStatus ==="loading")
            {
                const data:GET_ANSWER_INTERFAC ={page:topPage,direction:"next",questionId:1}
                dispatch(getAnswers(data))
            }
        }
        else if(inViewLoaderUp)
        {
            if(topAnswersStatus ==="loading" && downAnswersStatus ==="loading")
            {
                const data:GET_ANSWER_INTERFAC ={page:downPage,direction:"previous",questionId:1}
                dispatch(getAnswers(data))
                window.scrollBy({    top:400,behavior: "smooth"}) 
            }
        }
    }, [inViewLoaderDown ,  inViewLoaderUp])
    
   const main = () => {}

    return (
        <AnswersCont ref={inViewRefAnswersCont} id="answersCont"  style={{scrollMarginTop: "250px"}}>
                <ul >{topAnswers.map((answer , index) => <Answer index={index} answer={answer}/>)} </ul>
                    {topAnswersStatus === "loading" && <div ref={inViewRefLoaderDown}><AnswerSkeleton/><AnswerSkeleton/><AnswerSkeleton/><AnswerSkeleton/><AnswerSkeleton/><AnswerSkeleton/></div>}
                    <div style={{height:"100vh"}}></div>
                    {downAnswersStatus === "loading" && <div ref={inViewRefLoaderUp}><AnswerSkeleton/><AnswerSkeleton/><AnswerSkeleton/><AnswerSkeleton/><AnswerSkeleton/><AnswerSkeleton/><AnswerSkeleton/></div>}
                <ul >{downAnswers.map((answer , index) => <Answer index={index} answer={answer}/>)} </ul>
        </AnswersCont>
    )
}

export default AnswersConts
