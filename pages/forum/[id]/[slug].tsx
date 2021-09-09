import axios from 'axios'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import React, { ReactElement, useEffect, useState } from 'react'
import { changeModalAction, is_loading, single_question_data, userState } from '../../../app/containers/AppSlice'
import { forum_tabs} from '../../../app/containers/PageTabsSlice'
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks'
import { getSingleQuestion, unVoteQuestion, voteQuestion } from '../../../app/thunks/AppThunk'
import AnswersConts from '../../../components/AnswersCont'
import AnswerSubmitCont from '../../../components/AnswerSubmit'
import AnswerSubmit from '../../../components/AnswerSubmit'
import ProductsConts from '../../../components/ProductsCont'
import SinglePageTabs from '../../../components/SinglePageTabs'
import { getSingleUser } from '../../../helpers/api/getSingleUserData'
import { accessToken } from '../../../helpers/token/TokenHandle'
import { setToken } from '../../../logic/userToken'
import { SingleProductPage } from '../../../styles/global/styled-utils/styling-elements/Pages.style'
import { Avatar, Name, PersonCont, QuestionTags, ContentCont, QuestionCont, QuestionContent, QuestionDate, QuestionTag, QuestionTagsAndDate, QuestionTitle, QuestionStatistics, QuestionStatisticElement, QuestionStatisticButton, QuestionStatisticText, AddAnswer, AddAnswerCont, AddAnswerSubmit, AnswersCont, ProductsCont, SingleProductMiddle, SingleProductAside } from '../../../styles/pages/SingleQuestionPage.styled'

interface Props {
}



function SingleQuestionPAge({}: Props): ReactElement {
    const router = useRouter()
    const {query} = router
    const dispatch = useAppDispatch()
    const singleQuestionData = useAppSelector(single_question_data)
    const loading  = useAppSelector(is_loading)
    const userData = useAppSelector(userState)

    useEffect(() => {
        if(router.isReady && accessToken !== null)
        {
            dispatch(getSingleQuestion(router.asPath))
        }
    }, [router , accessToken])

    if(singleQuestionData === null )
    {
        return <h2>loading ... </h2>
    }

    return (
        <SingleProductPage>
            <SingleProductAside> Left SIDE</SingleProductAside>

            <SingleProductMiddle>
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
                            <QuestionStatisticButton onClick={() => dispatch((singleQuestionData.user_votes !== null && singleQuestionData.user_votes.user_id === userData.id) ? unVoteQuestion({id:query.id , type:"upvote"}) :voteQuestion({id:query.id , type:"upvote"}))} color={singleQuestionData.user_votes === null ? "red" : "green"}>like</QuestionStatisticButton>
                            <QuestionStatisticText>Give Vote</QuestionStatisticText>
                        </QuestionStatisticElement>
                    </QuestionStatistics>
                </QuestionCont>


                
                <AnswerSubmitCont id={query.id}/>


                
                <SinglePageTabs/>
                
                <AnswersConts answers={singleQuestionData.answers}/>
                <ProductsConts />

            </SingleProductMiddle>

            <SingleProductAside>Right Side</SingleProductAside>

        </SingleProductPage>
    )
}

export default SingleQuestionPAge


