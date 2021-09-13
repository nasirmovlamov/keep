import { SerializedError } from "@reduxjs/toolkit";
import { ANSWER_INTERFACE } from "../../../components/AnswersCont";
import { AUTH_INTERFACE } from "./AuthInterface";
import { QUESTION_INTERFACE } from "./QuestionInterface";


export interface APP_INTERFACE {
    AUTH_STATE:AUTH_INTERFACE
    QUESTION_STATE:QUESTION_INTERFACE
    CommentsSection:{
        id:number | null,
        comments:[],
        isShown:boolean
    },
}



export interface SingleFormDataInterface{
    id:number ,
    answer_count:number,
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




















export interface MyData {  
      data:{
        user:{
          id:number,
          name:string,
          email:string
        }
        access_token:string,
        token_type:string,
        expires_at:string
      }
      message:string,
      errors:null 
}
  
  
  export interface RegisterAuthError {
    errors:{
      email:string[]
      password:string[]
      name:string[]
    } 
    message:string
  } 
  
  export interface LoginAuthError {
    errors:{
      email:string[]
      password:string[]
    }
    message:string
  } 
  
  export interface ForgetPasswordError {
    errors:{
      attempt:string[]
    }
    message:string
  } 
  
  export interface RegisterAttributes {
    email: string
    name: string
    password: string
  }
  
  export interface LoginAttributes {
    user:{
      email: string
      password: string
    }
  }
