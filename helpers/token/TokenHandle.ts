export var accessToken:string|null = null
export const getAccessToken  = () => {return accessToken}
export const setAccessToken  = (token:string | null) => { 
    accessToken = token
    console.log(token)  
    if(token!==null) 
    {
        localStorage.setItem('token', token)
    }
}
