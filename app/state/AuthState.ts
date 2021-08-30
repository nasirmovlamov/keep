import { USER_INTERFACE } from "./state-Interfaces/AuthInterface";

export const USER_STATE:USER_INTERFACE = {
    user: {},
    status: 'loading',
    loggedIn:null,
    message:null,
    userModals:{
        login:false,
        register:false,
        forgetPassword:false,
        isEmailSend:false
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
    errors:{
        registerErrors:null,
        loginErrors:null,
        forgetPasswordErrors:null
    },
}