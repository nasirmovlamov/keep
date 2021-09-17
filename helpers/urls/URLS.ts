export const PREFIXE = {
      AUTH: '/auth',
}
interface URL_INTERFACE {
    HOME: string,
    LOGIN: string,
    LOGOUT: string,
    REGISTER: string,
    CHECK_USER: string,
    ABOUT: string,
    PASSWORD_RESET: string
}

export const URL:URL_INTERFACE = {
    HOME: '/',
    LOGIN: '/login',
    LOGOUT: '/logout',
    REGISTER: '/register',
    CHECK_USER: '/user',
    ABOUT: '/about',
    PASSWORD_RESET: '/password/create/'
}