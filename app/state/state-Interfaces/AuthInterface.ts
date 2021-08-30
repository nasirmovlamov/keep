import { ForgetPasswordError, LoginAuthError, RegisterAuthError } from "../../thunks/AuthThunk";


export interface USER_INTERFACE {
    user:{},
    status:'idle'| 'loading' | 'failed',
    loggedIn:boolean|null,
    message:null|string,
    userModals:{
        login:boolean
        register:boolean
        forgetPassword:boolean,
        isEmailSend:boolean
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
    }
    errors:{
        registerErrors: RegisterAuthError | null
        loginErrors: LoginAuthError | null
        forgetPasswordErrors: ForgetPasswordError | null
    }|null
}
