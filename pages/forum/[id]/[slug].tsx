/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import React, { ReactElement, useEffect, useState } from 'react'
import {  changeModalAction, is_loading,   user_data } from '../../../app/feature/AuthSlice'
import { forum_tabs} from '../../../app/feature/PageTabsSlice'
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks'
import AnswersConts from '../../../components/AnswersCont'
import AnswerSubmitCont from '../../../components/AnswerSubmit'
import AnswerSubmit from '../../../components/AnswerSubmit'
import ProductsConts from '../../../components/ProductsCont'
import SinglePageTabs from '../../../components/SinglePageTabs'
import { SingleProductPage } from '../../../styles/global/styled-utils/styling-elements/Pages.style'
import { Avatar, Name, PersonCont, QuestionTags, ContentCont, QuestionCont, QuestionContent, QuestionDate, QuestionTag, QuestionTagsAndDate, QuestionTitle, QuestionStatistics, QuestionStatisticElement, QuestionStatisticButton, QuestionStatisticText, AddAnswer, AddAnswerCont, AddAnswerSubmit, AnswersCont, ProductsCont, SingleProductMiddle, SingleProductAside } from '../../../styles/pages/SingleQuestionPage.styled'
import CommentModal from '../../../components/CommentsTab'
import { comments,   comments_status,   comments_types, is_comment_opened, showComments } from '../../../app/feature/CommentsSlice'
import { ShowComments } from '../../../styles/components/styled-elements/Answer.style'
import { getQuestionComments } from '../../../app/thunks/CommentsThunk'
import { single_question_data, single_question_status } from '../../../app/feature/QuestionSlice'
import { getSingleQuestion, unVoteQuestion, voteQuestion } from '../../../app/thunks/QuestionThunk'
import { SkeletonBox } from '../../../styles/global/styled-utils/Global.style'
import Loader from '../../../components/Loader'
import QuestionSkeleton from '../../../components/Skeletons/QuestionSkeleton'

interface Props {
}



function SingleQuestionPAge({}: Props): ReactElement {
    const router = useRouter()
    const {id} = router.query
    const dispatch = useAppDispatch()
    const singleQuestionData = useAppSelector(single_question_data)
    const singleQuestionStatus = useAppSelector(single_question_status)
    const loading  = useAppSelector(is_loading)
    const userData = useAppSelector(user_data)
    const commentsStatus = useAppSelector(comments_status)
    const isCommentOpened = useAppSelector(is_comment_opened)


    useEffect(() => {
        if(router.isReady && singleQuestionStatus === "loading")
        {
            dispatch(getSingleQuestion(router.asPath))
        }
    }, [router , userData])

    
    const voting = () => {
        if(userData === null)
        {
            dispatch(changeModalAction('login'))
            return null
        }
        if(singleQuestionData === null )
        {
            return null
        }
        
        if( singleQuestionData.user_votes !== null && singleQuestionData.user_votes.user_id === userData.id) 
        {
            dispatch(unVoteQuestion({id:id , type:"upvote"}) )
            return null
        }
        else 
        {
            dispatch(voteQuestion({id:id , type:"upvote"}))
            return null
        }
    }



    const openQuestionComments = () =>{
        if(singleQuestionData !== null)
        {
            dispatch(getQuestionComments(singleQuestionData.id))
            dispatch(
                showComments(
                    {
                        id:singleQuestionData.id, 
                        user:singleQuestionData.user, 
                        title:singleQuestionData.title, 
                        type:"question",
                        showComments:true
                    }
                )
            )
        }

    }


    return (
        <SingleProductPage>
            <SingleProductAside>
             {
                singleQuestionStatus === "loading" ? 
                <Loader/>
                :
                <>Left SIDE</>
            }
            

            </SingleProductAside>

            <SingleProductMiddle>

            
            {/* Single Question Title Content Answer Posting */}
            <>  
                {              
                    singleQuestionStatus === "loading" ? 

                    <QuestionSkeleton/>
                    
                    :

                    <>
                        <button style={{alignSelf:'flex-end'}} onClick={() => dispatch(changeModalAction("questionCreate"))}>QuestionCreate</button>

                        <QuestionCont>
                            <PersonCont>
                                <Avatar></Avatar>
                                <Name>{singleQuestionData.user.name}</Name>
                            </PersonCont>

                            <ContentCont>
                                <QuestionTitle> 
                                    {singleQuestionData.title}
                                </QuestionTitle>    
                                <QuestionContent> 
                                    {singleQuestionData.content}
                                </QuestionContent>

                                <QuestionTagsAndDate>
                                    <QuestionTags>
                                        <QuestionTag>test 1</QuestionTag>
                                        <QuestionTag>test 2</QuestionTag>
                                        <QuestionTag>test 3</QuestionTag>
                                    </QuestionTags> 
                                    
                                    <QuestionDate> {singleQuestionData.created_at} </QuestionDate>
                                    <ShowComments type="button" onClick={openQuestionComments}/> 
                                </QuestionTagsAndDate>
                            </ContentCont>


                            <QuestionStatistics>
                                <QuestionStatisticElement>
                                    <QuestionStatisticButton color={"#ffa361"}>{singleQuestionData.view_count}</QuestionStatisticButton>
                                    <QuestionStatisticText>views</QuestionStatisticText>
                                </QuestionStatisticElement>

                                <QuestionStatisticElement>
                                    <QuestionStatisticButton color={"#8b4261"}>{singleQuestionData.answer_count}</QuestionStatisticButton>
                                    <QuestionStatisticText>Answers</QuestionStatisticText>
                                </QuestionStatisticElement>

                                <QuestionStatisticElement>
                                    <QuestionStatisticButton color={"#00578b"}>{singleQuestionData.upvote}</QuestionStatisticButton>
                                    <QuestionStatisticText>Helpful</QuestionStatisticText>
                                </QuestionStatisticElement>

                                <QuestionStatisticElement>
                                    <QuestionStatisticButton onClick={voting} color={singleQuestionData.user_votes === null ? "red" : "green"}>like</QuestionStatisticButton>
                                    <QuestionStatisticText>Give Vote</QuestionStatisticText>
                                </QuestionStatisticElement>
                            </QuestionStatistics>
                        </QuestionCont>

                        <AnswerSubmitCont id={id}/>
                    </>
                } 
            </>

                
                
                {/* Answers and Products */}
                <SinglePageTabs/>
                <AnswersConts />
                <ProductsConts />

            </SingleProductMiddle>

            <SingleProductAside>
            {
                singleQuestionStatus=== "loading" ? 
                <Loader/>
                :
                <> 
                    {isCommentOpened && <CommentModal/>}
                    {/* {chatBoxStatus === "idle" && <CommentModal/>} */}
                </>
            }
            </SingleProductAside>

        </SingleProductPage>
    )
}

export default SingleQuestionPAge


