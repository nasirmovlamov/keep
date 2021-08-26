

export interface USER_INTERFACE {
    user:{},
    status:'idle'| 'loading' | 'failed',
    loggedIn:boolean,
    message:null|string,
    errors:{
        errors:{
            email:string[]|undefined
            password:string[]|undefined
            name:string[]|undefined
        }
        message:string
    }|null
}
