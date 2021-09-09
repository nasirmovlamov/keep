import { APP_INTERFACE } from "./state-Interfaces/AppInterface";

export const APP_STATE:APP_INTERFACE = {
    user: {
        id:0,
        name:"",
        email:""
    },
    status: 'loading',
    loggedIn:null,
    message:null,
    userModals:{
        login:false,
        register:false,
        forgetPassword:false,
        isEmailSend:false,
        questionCreate:false,
        commentModal:false,
    },
    forms:{
        registerForm:{
            email:"",
            name:"",
            password:""
        },
        loginForm:{
            email:"",
            password:""
        }
    },
    singleQuestionData:null,
    errors:{
        registerErrors:null,
        loginErrors:null,
        forgetPasswordErrors:null,
    },
}