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
        Cookies.remove('laravel_session',{ path: '/'});
        Cookies.remove('XSRF-TOKEN');
    }
}

export const SignIn = (email, password, modalFunc, LoginAfterRegistration = false) => {
    let data = { email, password }
    api(true).get('/sanctum/csrf-cookie').then(response => {
        api(true).post("/api/login", data).then(result => {
            if (result.status === 200) {
                SetAuthCookie()
                modalFunc.SetAlertMistake(false)
                modalFunc.WhenSignIn(result.data.name, modalFunc.AuthModalsSwitcher, LoginAfterRegistration)
            }
        }).catch(err => {
            modalFunc.SetAlertMistake(true)
            console.log('Невірний логін або пароль');
        })
    });
}


export const SingUp = (name, email, password, modalFunc) => {
    let data = { name, email, password }
    api(true).get('/sanctum/csrf-cookie').then(response => {
        api(true).post("/api/register", data).then(result => {
            if (result.status === 200) {
                SignIn(email, password, modalFunc, true)
                modalFunc.SetAlertMistake(false)
                modalFunc.ToggleRegisterModal(modalFunc.AuthModalsSwitcher);
            }
        }).catch(err => {
            modalFunc.SetAlertMistake(true)
            console.log('Цей email вже зайнятий');
        })
    })
}

export const SignOut = (isLoggedIn, setLogged) => {
    api(true).get('/sanctum/csrf-cookie').then(response => {
        api(true).post("/api/logout").then(result => {
            if (result.status === 200) {
                DeleteAuthCookie()
                setLogged(!isLoggedIn)
            }
        })
    })
}


export const GoogleSignInResponse = (response, modalFunc) => {
    if (response) {
        if (response.error === undefined) {
            response = response.profileObj;
            SignIn(response.email, response.googleId, modalFunc)
        } else {
            console.log(response.error)
        }
    }
}


export const GoogleSignUpResponse = (response, modalFunc) => {
    if (response && response.error === undefined) {
        response = response.profileObj;
        SingUp(response.name, response.email, response.googleId, modalFunc)
    } else {
        console.log(response.error)
    }
}

export const FacebookSignInResponse = (response, modalFunc) => {
    if (response.error === undefined) {
        SignIn(response.email, response.userID, modalFunc)
    }
}


export const FacebookSignUpResponse = (response, modalFunc) => {
    SingUp(response.name, response.email, response.userID, modalFunc)
}
