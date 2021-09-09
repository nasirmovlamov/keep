import axios from 'axios'
import React, { ReactElement, useEffect, useState } from 'react'
import { getToken } from '../app/actions/getToken';
import { addNewAnswer, errorToast, successToast, userState } from '../app/containers/AppSlice';
import { useAppDispatch, useAppSelector } from '../app/store/hooks';
import { AddAnswer, AddAnswerCont, AddAnswerSubmit } from '../styles/pages/SingleQuestionPage.styled'

interface Props {
    id:string|string[]|undefined
}

function AnswerSubmitCont({id}: Props): ReactElement {
    const [answer, setanswer] = useState("")
    const userData = useAppSelector(userState);
    const dispatch = useAppDispatch()

    const submitAnswer = async (e:any) => {
        e.preventDefault()
        if(answer !== "" && localStorage.getItem("token") !== null)
        {
            try {
               const resp = await axios.post(`https://api.abysshub.com/api/forum/${id}/answer/submit` , {content:answer} , {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
               dispatch(addNewAnswer(resp.data.data))
               dispatch(successToast({content:resp.data.message , side:"top-right"}))

            } catch (error) {
                dispatch(errorToast({content:error.response.data.errors.email , side:"top-right"}))
            }
        }
        else 
        {
            dispatch(errorToast({content:"Login your account" , side:"top-right"}))
        }
    }

    return (
        <AddAnswerCont onSubmit={submitAnswer}> 
            <AddAnswer value={answer} onChange={(e)=> setanswer(e.target.value)}/>
            <AddAnswerSubmit> Post </AddAnswerSubmit>
        </AddAnswerCont>
    )
}

export default AnswerSubmitCont


