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
}

export const URL:URL_INTERFACE = {
    HOME: '/',
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    REGISTER: '/auth/register',
    CHECK_USER: '/auth/check',
    ABOUT: '/about',
}