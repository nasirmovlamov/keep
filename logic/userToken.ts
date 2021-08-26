

export const getToken = () => localStorage.getItem('token')

export const setToken = (token:string) => localStorage.setItem('token' , token)

export const deleteToken = () => localStorage.set('token', '', { expires: new Date(0) })