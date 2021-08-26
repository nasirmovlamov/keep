import API from './BaseApi'
import {URL} from '../urls/AuthUrl'
import * as types from '../../app/constants/AuthContants'
import { getToken } from '../../app/actions/getToken';

export class AUTH_API  {
    token:string | null 
    username:string
    email:string
    password:string

    constructor(auth_data:{token: string | null , user:any }) {
        this.token = auth_data.token;
        this.username = auth_data.user.username
        this.email    = auth_data.user.email
        this.password = auth_data.user.password
    }

    async getUser()
    {
        try {
            const getUser_response:any  = await API.post(URL.CHECK_USER, {headers: { 'Authorization': `Bearer ${this.token}`}}) 
            return getUser_response
        } catch (error) {
            return error.response.data
        }
    }

    async login()
    {
        try {

            const login_form = new FormData()
            login_form.append("email",this.email)
            login_form.append("password",this.password)
            const login_response:any  = await API.post(URL.LOGIN, login_form)
            return login_response
        } catch (error) {
            return error.response.data
        }
    }

    async logout()
    {
        try {
            if(this.token)
            {
                const logout_form = new FormData()
                logout_form.append("token" , this.token)
                const logout_response:any  = await API.post(URL.LOGOUT, logout_form)
                return logout_response
            }
            else 
            {
                return NaN
            }
        } catch (error) {
            return error
        }
    }
    async register()
    {
        const register_form = new FormData()
        register_form.append("email",this.email)
        register_form.append("password",this.password)
        register_form.append("name",this.username)
        const register_response:any  = await API.post(URL.REGISTER, register_form) 
        return register_response
    }
}

