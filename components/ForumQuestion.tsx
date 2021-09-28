import React, { ReactElement} from 'react'
import Image from 'next/image'
import { AnswerCount,  Avatar, BottomSide, Content, FormQuestionCont, Name, PersonCont, QuestionTags, StatisticCont, Tags, TextCont, Title, Text, HelpfulCont, HelpfulCount, AnswerCont, ViewsCont,  CountOfProducts, ProductCount, ProductsIcons, ProductIcon, ThumbIcon, DefaultLine, PercentageLine, DateCount } from '../styles/components/styled-elements/FormQuestion.style'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import NavLink from './NavLink'

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
                <NavLink href={`/forum/1/schema-builder-laravel-migrations-unique-on-two-columns`}>
                    <Title> 
                        {data.title}
                    </Title>
                </NavLink>
                <Content> 
                    {data.content}
                </Content>

                <BottomSide>
                    <QuestionTags>
                        {data.tags.map( (tags, index ) =>  index < 3 && <Tags>{tags}</Tags>)}
                    </QuestionTags>

                    <CountOfProducts> 
                        <ProductsIcons>
                            <ProductIcon index={3} backgroundColor="#e5f0f4"></ProductIcon>
                            <ProductIcon index={2} backgroundColor="#00578b"></ProductIcon>
                            <ProductIcon index={1} backgroundColor="white"></ProductIcon>
                        </ProductsIcons>
                        <ProductCount><span>11</span> Products</ProductCount>
                    </CountOfProducts>
                </BottomSide>
            </TextCont>

            <StatisticCont>

                    <AnswerCont>
                        <AnswerCount>7</AnswerCount>
                        <Text>Answers</Text>
                    </AnswerCont>

                    <HelpfulCont>
                        <HelpfulCount><ThumbIcon><FontAwesomeIcon  icon={faThumbsUp} /> </ThumbIcon> 16 </HelpfulCount>
                        <DefaultLine><PercentageLine percentage={(69/100*100)}/></DefaultLine>
                    </HelpfulCont>

                    <DateCount>
                        2d 7h ago
                    </DateCount>

            </StatisticCont>


        </FormQuestionCont>
    )
}

export default FormQuestion

