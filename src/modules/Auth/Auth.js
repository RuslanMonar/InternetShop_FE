import Cookies from 'js-cookie'
import api from './ApiAxios';

export const CheckAuthCookie = () => {
    return !!Cookies.get('ticket_management_is_user_logged_in')
};

export const SetAuthCookie = () => {
    Cookies.set('ticket_management_is_user_logged_in', true, { expires: 86400, sameSite: 'lax' })
}

export const DeleteAuthCookie = () => {
    //Щоб перевірити, чи виконується script в веб-браузері чи ні.
    if (typeof window !== 'undefined') {
        //expires -> час життя кукі sameSite -> параметр безпеки для захисту кукі
        Cookies.remove('ticket_management_is_user_logged_in', { expires: 86400, sameSite: 'lax' })
    }
}

export const SignIn = (name, password, WhenSignIn, LoginAfterRegistration = false) => {
    let data = { name, password }
    api().get('/sanctum/csrf-cookie').then(response => {
        api().post("/api/login", data).then(result => {
            if (result.data.status === "Login succes") {
                SetAuthCookie()
                WhenSignIn(result.data.name, LoginAfterRegistration)
            }
            else if (result.data.status === "Invalid email or password") {
                console.log("Invalid email or password")
            }
        })
    });
}


export const SingUp = (name, email, password, ToggleRegisterModal, WhenSignIn) => {
    let data = { name, email, password }
    api().get('/sanctum/csrf-cookie').then(response => {
        api().post("/api/register", data).then(result => {
            if (result.data.status == "User Registered succsesfuly") {
                SignIn(name, password, WhenSignIn, true)
                ToggleRegisterModal();
            }
            else if (result.data.status == "Invalid email or password") {
                console.log("Invalid email or password")
            }
        })
    });
}

export const SignOut = (isLoggedIn, setLogged) => {
    api().get('/sanctum/csrf-cookie').then(response => {
        api().post("/api/logout").then(result => {
            if (result.data.status == "Logedout") {
                DeleteAuthCookie()
                setLogged(!isLoggedIn)
            }
            else {
                console.log("Invalid logout")
            }
        })
    });
}