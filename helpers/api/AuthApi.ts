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
            const login_response:any  = await API.post(URL.LOGIN, {params:{email:this.email , password:this.password}}) 
            return login_response
        } catch (error) {
            return error.response.data
            
        }
    }

    async register()
    {
        try {
            const register_response:any  = await API.post(URL.REGISTER, {params:{email:this.email , password:this.password , username:this.username}}) 
            return register_response
        } catch (error) {
            return error.response.data
        }
    }
}

