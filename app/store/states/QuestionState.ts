import { QUESTION_INTERFACE } from "../state-Interfaces/QuestionInterface";


export const QUESTION_STATE:QUESTION_INTERFACE = {
    singleQuestionData:{
        id:0 ,
        answer_count:0,
        answers:[],
        category:{id:0, name:"", slug:"",sort:0},
        closed_at:null,
        comment_count:0,
        content:"",
        created_at:"",
        last_active_at:"",
        upvote:0,
        slug:"",
        tags:"",
        title:"",
        updated_at:"",
        user:{id:0,email:"",name:""},
        user_votes:null,
        view_count:0
    },
    status:"loading"
}

