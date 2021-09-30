import React, {ReactElement, useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { getToken } from '../app/actions/getToken';
import { useAppDispatch, useAppSelector } from '../app/store/hooks';
import { AddAnswer, AddAnswerCont, AddAnswerSubmit } from '../styles/pages/SingleQuestionPage.styled'
import { user_data } from '../app/feature/AuthSlice';
import { errorToastFunc } from './Notify/ErrorToasts';
import { autoSuccessToaster } from './Notify/AutoSuccessToast';
import { autoErrorToaster } from './Notify/AutoErrorToaster';
import { addAnswer } from '../app/thunks/QuestionThunk';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


interface Props {
    id:string | string[] | undefined
}

function AnswerSubmitCont({id}: Props): ReactElement {
    const [answer, setanswer] = useState("")
    const userData = useAppSelector(user_data);
    const dispatch = useAppDispatch()
    const [textAreaHeight, settextAreaHeight] = useState(50)
    const [textAreaBlur, settextAreaBlur] = useState(true)
    const buttonRef = useRef<HTMLButtonElement>(null)
    const textAreaRef = useRef<HTMLTextAreaElement>(null)

    const submitAnswer = async (e:any) => {
        e.preventDefault()
        if(userData === null )
        {
            errorToastFunc("top-right" , "You must be logged in to submit an answer")
            return 0
        }
        if(answer === "")
        {
            errorToastFunc("top-right" , "Describe your answer with at least 50 character.")
            return 0
        }
        if(answer.length < 50)
        {
            errorToastFunc("top-right" , "Your answer must be at least 50 charachter.")
            return 0
        }
        dispatch(addAnswer({content: answer, questionId: id}))
    }

    const checkTextAreaHeight = () =>{
        if(textAreaHeight === 150)
        {
            settextAreaHeight(150)
            settextAreaBlur(false)
        }
    }

    const blurToggler = () =>{
        settextAreaBlur(true)
        if(textAreaBlur)
        {
            if(textAreaHeight === 150)
            {
                settextAreaHeight(50)
            }
        }
    }
    
    const textAreaChange = (e:any) =>{
        if (e.scrollHeight !== textAreaHeight && e.scrollHeight < 500) {
            settextAreaHeight(e.scrollHeight+1.5)
        }
        setanswer(e.value)
    }


    const changeTextAreaHeight = () =>{
        if(textAreaHeight < 150)
        {
            settextAreaHeight(150)
        }
    }
    return (
        <AddAnswerCont onSubmit={submitAnswer}> 


            {/* <AddAnswer 
                ref={textAreaRef}  
                style={{height:`${textAreaHeight}px`}} 
                onClick={changeTextAreaHeight}
                onBlur={blurToggler} 
                placeholder='Add new answer' 
                value={answer} 
                onChange={(e)=> textAreaChange(e.target)}
                autoComplete="on"
            /> */}
             <h2>Using CKEditor 5 build in React</h2>
                <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Hello from CKEditor 5!</p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />

                
            <AddAnswerSubmit   
                ref={buttonRef} 
                onMouseDown={checkTextAreaHeight}> 
                Post 
            </AddAnswerSubmit>

        </AddAnswerCont>
    )
}

export default AnswerSubmitCont


