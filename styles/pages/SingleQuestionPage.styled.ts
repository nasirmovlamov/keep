import styled from 'styled-components';

export const SingleProductMiddle = styled.main`
    width: 894px;
    display: flex;
    flex-direction:column;
    border-left: 1px solid lightgray;
    border-right: 1px solid lightgray;
    margin: auto;
    align-items: center;
    padding-left: 100px;
    padding-right: 100px;
    row-gap: 20px;
    padding-bottom: 50px;
    padding-top: 50px;
    box-sizing: initial;
`


export const SingleProductAside = styled.aside`
    display: flex;
    width: 350px;
    height:500px;
    flex-direction:column;
    align-items: center;
    row-gap: 20px;
    padding-bottom: 50px;
    padding-top: 50px;
    position: sticky;
    z-index: 999;
    top:78px;
`



export const QuestionCont = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid gray;
    column-gap: 15px;
    padding-bottom: 20px;
`

export const PersonCont = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
`
export const Avatar = styled.div`
    width: 62px;
    height:62px;
    border-radius:50%;
    object-fit: cover;
    background-color: pink;
`
export const Name = styled.span`
    font-size: 15px;
    color: white;
    text-align: center;
`

export const ContentCont = styled.div`
    font-size: 15px;
    color: white;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    width: 100%;
`

export const QuestionTitle = styled.h2`
    font-size: 28px;
    color: #00578b;
`

export const QuestionContent = styled.p`
    font-size: 15px;
    color: #000e0e;
    line-height: 22px;
    font-family:r;
    text-align: justify;
`

export const QuestionTagsAndDate = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`    
export const QuestionDate = styled.p`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: gray;
    font-size: 12px;
`    

export const QuestionTags = styled.div`
    display: flex;
    column-gap: 10px;
    
`

export const QuestionTag = styled.div`
    height: 22px;
    font-size: 12px;
    color: #3d4856;
    background-color:#deefe7;
    padding: 0px 5px ;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 1px solid rgba(3, 39, 40, 0.1);
    transition: 0.2s;
    &:hover
    {
        background-color: #deefed;
    }
`

export const QuestionStatistics = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
`

export const QuestionStatisticElement = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 3px;
    column-gap: 5px;
    align-items: center;
`
export const QuestionStatisticButton = styled.button`
    display: flex;
    width: 35px;
    font-size: 12px;
    height: 30px;
    justify-content: center;
    background-color: ${(props) => props.color};
    border-radius: 10px;
    color:white;
    align-items: center;
`

export const QuestionStatisticText = styled.span`
    width: 100%;
    text-align: center;
    color: white;
    font-size: 12px;
`


export const AddAnswer = styled.textarea`
    width: 100%;
    height: 50px;
    border: none;
    padding: 0px;
    margin: 0px;
    padding-left: 10px;
    padding-top: 10px;
    border-radius:6px ;
    border: 1px solid lightgray;
    transition: 0.4s;
    border-right: 0px;
    resize:none;
    &:focus{
        outline: none;
    }
`

export const AddAnswerCont = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    height: auto;
    
`
export const AddAnswerSubmit = styled.button`
    width: 50px;
    margin: 0px;
    padding: 0px;
    height: 30px;
    background-color: green;
    color: white;
    border: 1px solid green;
    align-self:flex-end;
    border-radius:6px ;
    margin-top: 10px;
    
`


export const AnswersCont = styled.div`
    row-gap: 10px;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center ;
    box-sizing: border-box;
`


export const ProductsCont = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    align-items: center ;
    justify-content: center;
    height: 1500px;
    background-color: gray;
    border-radius: 6px;
    color: white;
`

