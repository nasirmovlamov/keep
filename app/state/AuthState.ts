import { USER_INTERFACE } from "./state-Interfaces/AuthInterface";

export const USER_STATE:USER_INTERFACE = {
    user: {},
    status: 'idle',
    loggedIn:false,
    message:null,
    errors:null
}