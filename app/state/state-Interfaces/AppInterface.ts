import { ANSWER_INTERFACE } from "../../../components/AnswersCont";
import { ForgetPasswordError, LoginAuthError, RegisterAuthError } from "../../thunks/AppThunk";


export interface APP_INTERFACE {
    user:{
        name:string
        id:number
        email:string
    },
    status:'idle'| 'loading' | 'failed',
    loggedIn:boolean|null,
    message:null|string,
    userModals:{
        login:boolean
        register:boolean
        forgetPassword:boolean,
        isEmailSend:boolean,
        questionCreate:boolean
        commentModal:boolean
    }
    forms:{
        registerForm:{
            email:string,
            name:string,
            password:string
        },
        loginForm:{
            email:string,
            password:string
        }
    },
    singleQuestionData:SingleFormDataInterface | null
    errors:{
        registerErrors: RegisterAuthError | null
        loginErrors: LoginAuthError | null
        forgetPasswordErrors: ForgetPasswordError | null,
    }
}



export interface SingleFormDataInterface{
    id?:number ,
    answer_count?:number,
    answers:ANSWER_INTERFACE[]
    category:{id:number, name:string, slug:string,sort:number}
    closed_at:null,
    comment_count:number,
    content:string,
    created_at:string,
    last_active_at:string,
    upvote:number,
    slug:string,
    tags:string,
    title:string,
    updated_at:string,
    user:{id:number,email:string,name:string}
    user_votes:{
        created_at: string
        id: number
        thread_id: number
        type: string
        updated_at:string
        user_id: number}|null
    view_count:number
}