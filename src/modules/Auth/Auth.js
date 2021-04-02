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
        Cookies.remove('ticket_management_is_user_logged_in', { expires: 86400, sameSite: 'lax' });
    }
}

export const SignIn = (name, password, WhenSignIn,SetAlertMistake, LoginAfterRegistration = false) => {
    let data = { name, password }
    api().get('/sanctum/csrf-cookie').then(response => {
        api().post("/api/login", data).then(result => {
            if (result.status === 200) {
                SetAuthCookie()
                SetAlertMistake(false)
                WhenSignIn(result.data.name, LoginAfterRegistration)
            }
        }).catch(err => {
            SetAlertMistake(true)
            console.log('Цей email вже зайнятий');
        })
    });
}


export const SingUp = (name, email, password, ToggleRegisterModal, WhenSignIn , SetAlertMistake) => {
    let data = { name, email, password }
    api().get('/sanctum/csrf-cookie').then(response => {
        api().post("/api/register", data).then(result => {
            if (result.status === 200) {
                SignIn(name, password, WhenSignIn,SetAlertMistake, true)
                SetAlertMistake(false)
                ToggleRegisterModal();
            }
        }).catch(err => {
            SetAlertMistake(true)
            console.log('Цей email вже зайнятий');
        })
    })
}

export const SignOut = (isLoggedIn, setLogged) => {
    api().get('/sanctum/csrf-cookie').then(response => {
        api().post("/api/logout").then(result => {
            if (result.status === 200) {
                DeleteAuthCookie()
                setLogged(!isLoggedIn)
            }
        }).catch(err => {
            console.log('Невірний логін або пароль');
        })
    })
}