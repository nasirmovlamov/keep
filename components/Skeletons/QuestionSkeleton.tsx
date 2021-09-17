import React, { ReactElement } from 'react'
import { SkeletonBox } from '../../styles/global/styled-utils/Global.style'
import { ContentCont, PersonCont, QuestionCont, QuestionStatisticButton, QuestionStatisticElement, QuestionStatistics, QuestionStatisticText, QuestionTags, QuestionTagsAndDate } from '../../styles/pages/SingleQuestionPage.styled'
import AnswerSubmitCont from '../AnswerSubmit'

interface Props {
    
}

function QuestionSkeleton({}: Props): ReactElement {
    return (
        <>
            <div style={{marginBottom:"25px"}}></div>
            <QuestionCont>
                <PersonCont>
                    <SkeletonBox className="skeleton-box" width="62px" height="62px" borderRadius="50%"/>
                    <SkeletonBox className="skeleton-box" width="62px" height="15px" borderRadius="8px"/>
                </PersonCont>

                <ContentCont>
                    <SkeletonBox className="skeleton-box" width="800px" height="35px" borderRadius="8px"/>
  
                    <SkeletonBox className="skeleton-box" width="800px" height="150px" borderRadius="8px"/>
                   
                    <QuestionTagsAndDate>
                        <QuestionTags>
                            <SkeletonBox className="skeleton-box" width="45px" height="15px" borderRadius="8px"/>
                            <SkeletonBox className="skeleton-box" width="45px" height="15px" borderRadius="8px"/>
                            <SkeletonBox className="skeleton-box" width="45px" height="15px" borderRadius="8px"/>
                        </QuestionTags> 
                        
                        <SkeletonBox className="skeleton-box" width="35px" height="15px" borderRadius="8px"/>
                    </QuestionTagsAndDate>
                </ContentCont>


                <QuestionStatistics>
                    <QuestionStatisticElement>
                        <SkeletonBox className="skeleton-box" width="35px" height="35px" borderRadius="8px"/>
                        <SkeletonBox className="skeleton-box" width="35px" height="10px" borderRadius="8px"/>
                    </QuestionStatisticElement>

                    <QuestionStatisticElement>
                        <SkeletonBox className="skeleton-box" width="35px" height="35px" borderRadius="8px"/>
                        <SkeletonBox className="skeleton-box" width="35px" height="10px" borderRadius="8px"/>
                    </QuestionStatisticElement>

                    <QuestionStatisticElement>
                        <SkeletonBox className="skeleton-box" width="35px" height="35px" borderRadius="8px"/>
                        <SkeletonBox className="skeleton-box" width="35px" height="10px" borderRadius="8px"/>
                    </QuestionStatisticElement>

                    <QuestionStatisticElement>
                        <SkeletonBox className="skeleton-box" width="35px" height="35px" borderRadius="8px"/>
                        <SkeletonBox className="skeleton-box" width="35px" height="10px" borderRadius="8px"/>
                    </QuestionStatisticElement>
                </QuestionStatistics>
            </QuestionCont>

            
        </>
    )
}

export default QuestionSkeleton

