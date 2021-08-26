

export interface USER_INTERFACE {
    user:{},
    status:'idle'| 'loading' | 'failed',
    loggedIn:boolean,
    message:null|string,
    errors:null|{}
}
