import axios from "axios";
import { getAccessToken } from "../token/TokenHandle";

export const BASE_API_INSTANCE = axios.create({baseURL:'https://api.abysshub.com/api'});

// Request interceptor for API calls
BASE_API_INSTANCE.interceptors.request.use(
  async config => {
    const accessToken = await localStorage.getItem("token")
    if(accessToken !== null && accessToken !== "")
    {
      config.headers = { 
        'Authorization': `Bearer ${accessToken}`,
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    return config;
  },
  error => {
    Promise.reject(error)
});

