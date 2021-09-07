import axios from 'axios'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import React, { ReactElement, useEffect, useState } from 'react'
import { forum_tabs} from '../../../app/containers/PageTabsSlice'
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks'
import AnswersConts from '../../../components/AnswersCont'
import ProductsConts from '../../../components/ProductsCont'
import SinglePageTabs from '../../../components/SinglePageTabs'
import { getSingleUser } from '../../../helpers/api/getSingleUserData'
import { SingleProductPage } from '../../../styles/global/styled-utils/styling-elements/Pages.style'
import { Avatar, Name, PersonCont, QuestionTags, ContentCont, QuestionCont, QuestionContent, QuestionDate, QuestionTag, QuestionTagsAndDate, QuestionTitle, QuestionStatistics, QuestionStatisticElement, QuestionStatisticButton, QuestionStatisticText, AddAnswer, AddAnswerCont, AddAnswerSubmit, AnswersCont, ProductsCont } from '../../../styles/pages/SingleQuestionPage.styled'


interface Props {
    test:string
}
interface SingleFormDataInterface{
    id?:number ,
    answer_count?:number,
    answers:{content:string,id:number,parent_id:null,created_at:string , updated_at:string, score:number,user:{id:number,email:string,name:string}}[]
    category:{id:number, name:string, slug:string,sort:number}
    closed_at:null,
    comment_count:number,
    content:string,
    created_at:string,
    last_active_at:string,
    score:number,
    slug:string,
    tags:string,
    title:string,
    updated_at:string,
    user:{id:number,email:string,name:string}
    view_count:number
}

function SingleQuestionPAge({test}: Props): ReactElement {
    const router = useRouter()
    const {query} = router

    const [singleForumData, setsingleForumData] = useState<SingleFormDataInterface>()
    const [loading, setloading] = useState(true)
   

    const getSingleUser = async () => {
        try {
            const resp = await axios.get("https://api.abysshub.com/api/forum/180/laravel-property-user-does-not-exist-on-this-collection-instance")
            setsingleForumData(resp.data.data)
            setloading(false)
            return resp.data.data
        } catch (error) {
            console.error(error)
        }
    }

    

    useEffect(() => {
        getSingleUser()
    }, [loading])

    if(loading)
    {
        return <h2>alooooooooooooooooooooooo</h2>
    }

    return (
        <SingleProductPage>
            <QuestionCont>
                <PersonCont>
                    <Avatar></Avatar>
                    <Name>{singleForumData.user.name}</Name>
                </PersonCont>

                <ContentCont>
                    <QuestionTitle> 
                    {singleForumData.title}
                    </QuestionTitle>    
                    <QuestionContent> 
                        {singleForumData.content}
                    </QuestionContent>

                    <QuestionTagsAndDate>
                        <QuestionTags>
                            <QuestionTag>test 1</QuestionTag>
                            <QuestionTag>test 2</QuestionTag>
                            <QuestionTag>test 3</QuestionTag>
                        </QuestionTags> 
                        
                        <QuestionDate> {singleForumData.created_at} </QuestionDate>
                    </QuestionTagsAndDate>
                </ContentCont>


                <QuestionStatistics>
                    <QuestionStatisticElement>
                        <QuestionStatisticButton color={"#ffa361"}>{singleForumData.view_count}</QuestionStatisticButton>
                        <QuestionStatisticText>views</QuestionStatisticText>
                    </QuestionStatisticElement>

                    <QuestionStatisticElement>
                        <QuestionStatisticButton color={"#8b4261"}>{singleForumData.answer_count}</QuestionStatisticButton>
                        <QuestionStatisticText>Answers</QuestionStatisticText>
                    </QuestionStatisticElement>

                    <QuestionStatisticElement>
                        <QuestionStatisticButton color={"#00578b"}>{singleForumData.score}</QuestionStatisticButton>
                        <QuestionStatisticText>Helpful</QuestionStatisticText>
                    </QuestionStatisticElement>
                </QuestionStatistics>
            </QuestionCont>


            
            <AddAnswerCont> 
                <AddAnswer/>
                <AddAnswerSubmit> Post </AddAnswerSubmit>
            </AddAnswerCont>


            
            {/* {console.log(forumTabs)} */}
            <SinglePageTabs/>
            
            <AnswersConts answers={singleForumData.answers}/>
            <ProductsConts />

        </SingleProductPage>
    )
}

export default SingleQuestionPAge


