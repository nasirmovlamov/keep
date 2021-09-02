import React, { ReactElement, useEffect, useState } from 'react'
import SinglePageTabs from '../../components/SinglePageTabs'
import { SingleProductPage } from '../../styles/global/styled-utils/styling-elements/Pages.style'
import { Avatar, Name, PersonCont, QuestionTags, ContentCont, QuestionCont, QuestionContent, QuestionDate, QuestionTag, QuestionTagsAndDate, QuestionTitle, QuestionStatistics, QuestionStatisticElement, QuestionStatisticButton, QuestionStatisticText, AddAnswer, AddAnswerCont, AddAnswerSubmit } from '../../styles/pages/SingleQuestionPage.styled'


interface Props {
    
}

function SingleQuestionPAge({}: Props): ReactElement {
    
    return (
        <SingleProductPage>
            <QuestionCont>
                <PersonCont>
                    <Avatar></Avatar>
                    <Name>Test</Name>
                </PersonCont>

                <ContentCont>
                    <QuestionTitle> 
                        How to disable text selection highlighting 
                    </QuestionTitle>    
                    <QuestionContent> 
                        For anchors that act like buttons (for example Questions, Tags, Users, etc. which are located on the top of the Stack Overflow page) or tabs, is there a CSS standard way to disable the highlighting effect if the user accidentally selects the text? I realize that this could be done with JavaScript and a little googling yielded the Mozilla-only -moz-user-select option. Is there a standard-compliant way to accomplish this with CSS, and if not, what is the "best practice" approach? 
                    </QuestionContent>

                    <QuestionTagsAndDate>
                        <QuestionTags>
                            <QuestionTag>test 1</QuestionTag>
                            <QuestionTag>test 2</QuestionTag>
                            <QuestionTag>test 3</QuestionTag>
                        </QuestionTags> 
                        
                        <QuestionDate> added 2d 7h ago </QuestionDate>
                    </QuestionTagsAndDate>
                    
                </ContentCont>


                <QuestionStatistics>
                    <QuestionStatisticElement>
                        <QuestionStatisticButton color={"#ffa361"}>317</QuestionStatisticButton>
                        <QuestionStatisticText>views</QuestionStatisticText>
                    </QuestionStatisticElement>

                    <QuestionStatisticElement>
                        <QuestionStatisticButton color={"#8b4261"}>17</QuestionStatisticButton>
                        <QuestionStatisticText>Answers</QuestionStatisticText>
                    </QuestionStatisticElement>

                    <QuestionStatisticElement>
                        <QuestionStatisticButton color={"#00578b"}>88</QuestionStatisticButton>
                        <QuestionStatisticText>Helpful</QuestionStatisticText>
                    </QuestionStatisticElement>
                </QuestionStatistics>
            </QuestionCont>


            
            <AddAnswerCont> 
                <AddAnswer/>
                <AddAnswerSubmit> Post </AddAnswerSubmit>
            </AddAnswerCont>

            <SinglePageTabs pageTabs={{tabs:[{tabName:"Answers"}]}}/>
            
        </SingleProductPage>
    )
}

export default SingleQuestionPAge
