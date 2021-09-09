import axios from "axios"
import { BASE_API_URL } from "../urls/BASE_URL"

export const getSingleUser = async () => {
    try {
        const resp = await axios.get("https://api.abysshub.com/api/forum/180/laravel-property-user-does-not-exist-on-this-collection-instance")
        return resp.data.data
    } catch (error) {
        console.error(error)
    }
}
