import API from './BaseApi'
import {URL} from '../urls/AuthUrl'
import * as types from '../../app/constants/AuthContants'
import { getToken } from '../../app/actions/getToken';

export class AUTH_API  {
    token:string 
    user:{name:string,email:string,password:string}|null 

    constructor(auth_data:{token: string , user:{name:string,email:string,password:string}|null }) {
        this.token = auth_data.token;
        this.user = auth_data.user
    }

    async getUser()
    {
        const user_response:any  = await API.get(URL.CHECK_USER, {headers:{Authorization:`Bearer ${this.token}`}})
        return user_response
    }
    async logout()
    {
        const logout_response:any  = await API.get(URL.LOGOUT, {headers:{Authorization:`Bearer ${this.token}`}})
        return logout_response
    }
    
    async login()
    {
        const login_form = new FormData()
        if(this.user !== null)
        {
            login_form.append("email",this.user.email)
            login_form.append("password",this.user.password)

        }
        const login_response:any  = await API.post(URL.LOGIN, login_form)
        return login_response
    }

    async forgetPassword()
    {
        const forgetPasswordForm = new FormData()
        if(this.user !== null)
        {
            forgetPasswordForm.append("email",this.user.email)
        }
        const login_response:any  = await API.post(URL.LOGIN, forgetPasswordForm)
        return login_response
    }

    
    async register()
    {
        const register_form = new FormData()
        if(this.user !== null)
        {
            register_form.append("email",this.user.email)
            register_form.append("password",this.user.password)
            register_form.append("name",this.user.name)
        }
        const register_response:any  = await API.post(URL.REGISTER, register_form) 
        return register_response
    }
}

