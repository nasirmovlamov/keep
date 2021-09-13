import styled from "styled-components";


export const AnswerStyle = styled.div`
    display: flex;
    width: 100%;
    column-gap: 10px;
    padding: 10px;
    box-sizing:border-box;
    border-bottom: 1px solid lightgray;
    padding-bottom: 20px;
    flex-direction: column;
    color: white;
`


export const PersonCont = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    align-items: center;    
    width: 100px !important;
    box-sizing: border-box;
`
export const Avatar = styled.div`
    width: 62px;
    height:62px;
    background-color: red;
    border-radius:50%;
    object-fit: cover;
`
export const Name = styled.span`
    font-size: 15px;
    text-align: center;
`

export const AnswerContent = styled.p`
    font-size: 15px;
    width: 100%;
    margin-top: 10px;
`
export const ShowComments = styled.button`
    border: none;
    background-color: black;
    color: white;
    border-radius: 6px;
    padding: 5px 7px;
    cursor: pointer;
`