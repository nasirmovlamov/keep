import { LoginAuthError, RegisterAuthError } from "../../thunks/AuthThunk";


export interface USER_INTERFACE {
    user:{},
    status:'idle'| 'loading' | 'failed',
    loggedIn:boolean|null,
    message:null|string,
    userModals:{
        login:boolean
        register:boolean
        forgetPassword:boolean
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
    }|null
}
