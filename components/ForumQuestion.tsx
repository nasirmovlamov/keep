import React, { ReactElement} from 'react'
import Image from 'next/image'
import { AnswerCount,  Avatar, BottomSide, Content, DateCont, FormQuestionCont, Name, PersonCont, QuestionTags, StatisticCont, Tags, TextCont, Title, Text, HelpfulCont, HelpfulCount, AnswerCont, ViewsCont, ViewsCount } from '../styles/components/styled-elements/FormQuestion.style'
import Link from 'next/link'

interface Props {
    data:{
        avatar:string
        name:string
        title:string
        content:string
        tags:string[]
        createdAt:string
        answerCount:string
        helpfulCount:string
        viewsCount:string
    }
}

function FormQuestion({data}: Props): ReactElement {
    
    
    return (
        <FormQuestionCont>
            <PersonCont>
                <Avatar src={data.avatar}></Avatar>
                <Name>{data.name}</Name>
            </PersonCont>

            <TextCont>
                <Link href={`/questions/${data.title}`}>
                    <Title> 
                        {data.title}
                    </Title>
                </Link>
                <Content> 
                    {data.content}
                </Content>

                <BottomSide>
                    <QuestionTags>
                        {data.tags.map( (tags, index ) =>  index < 3 && <Tags>{tags}</Tags>)}
                    </QuestionTags>

                    <DateCont> {data.createdAt}</DateCont>
                </BottomSide>
            </TextCont>

            <StatisticCont>

                    <AnswerCont>
                        <AnswerCount>{data.answerCount}</AnswerCount>
                        <Text>Answers</Text>
                    </AnswerCont>

                    <HelpfulCont>
                        <HelpfulCount>{data.helpfulCount}</HelpfulCount>
                        <Text>Helpful</Text>
                    </HelpfulCont>

                    <ViewsCont>
                        <ViewsCount>{data.viewsCount}</ViewsCount>
                        <Text>Views</Text>
                    </ViewsCont>

            </StatisticCont>


        </FormQuestionCont>
    )
}

export default FormQuestion

