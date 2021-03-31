import Cookies from 'js-cookie'
import cookie from 'cookie'

export const isLoggedInCookie = (reqCookies = null) => {
    if (! reqCookies) {
        return !! Cookies.get('ticket_management_is_user_logged_in')
    }
}

export const logIn = () => {
    Cookies.set('ticket_management_is_user_logged_in', true, {expires: 86400, sameSite: 'lax'})
}

export const logOut = () => {
    //Щоб перевірити, чи виконується script в веб-браузері чи ні.
    if (typeof window !== 'undefined') {
        //expires -> час життя кукі sameSite -> параметр безпеки для захисту кукі
        Cookies.remove('ticket_management_is_user_logged_in', {expires: 86400, sameSite: 'lax'})
    }
}