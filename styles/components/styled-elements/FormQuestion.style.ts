import styled from "styled-components";

export const FormQuestionCont = styled.div`
    display: flex;
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 10px;
    padding-right: 10px;
    box-sizing: border-box;
    background-color: ${({theme}) => theme.pageTabs.contBG};
    border: 1px solid ${({theme}) => theme.pageTabs.border};
    margin-top: 10px;
    border-radius: 6px;
    column-gap: 5px;
    justify-content: space-between;
    width: 894px;
`
export const PersonCont = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    justify-content: center;
`
export const Avatar = styled.img`
    width: 62px;
    height:62px;
    border-radius:50%;
    object-fit: cover;
`
export const Name = styled.span`
    font-size: 15px;
    color: white;
`
export const TextCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 10px;
    width: 644px;
`

export const Title = styled.h2`
    font-size: 20px;
    color: #69aebf;
    cursor: pointer;
`
export const Content = styled.p`
    font-size: 18px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    color: lightgray;
`

export const BottomSide = styled.div`
    display: flex;
    justify-content: space-between;
`

export const QuestionTags = styled.div`
    display: flex;
    column-gap: 10px;
`


export const Tags = styled.button`
    height: 22px;
    font-size: 12px;
    color: white;
    background-color:rgba(105, 174, 191, 0.32);
    border: none;
    padding: 5px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const DateCont = styled.p`
    height: 22px;
    font-size: 12px;
    color:gray;
    font-family:m;
`

export const StatisticCont = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 95px;
    column-gap: 5px;
    row-gap:0px;
    flex-wrap: wrap;
    box-sizing: border-box;
`

export const AnswerCont = styled.div`
    width: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 5px;
`

export const AnswerCount = styled.div`
    width: 40px;
    height: 23px;
    background-color: #8b4261;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color:lightgray;
    justify-content: center;
    row-gap: 5px;
`

export const Text = styled.span`
    font-size: 13px;
    color:lightgray;
`




export const HelpfulCont = styled.div`
    width: 45px;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 5px;
`

export const HelpfulCount = styled.div`
    width: 45px;
    height: 23px;
    background-color: #00578B;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    row-gap: 5px;
    color:lightgray;
`



export const ViewsCont = styled.div`
    width: 95px;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 5px;
`

export const ViewsCount = styled.div`
    width: 95px;
    color:lightgray;    
    height: 23px;
    background-color: #E76D2E;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    align-items: center;
    row-gap: 5px;
`
