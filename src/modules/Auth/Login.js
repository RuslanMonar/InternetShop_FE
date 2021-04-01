import React from 'react';
import axios from 'axios';
import classes from '../../css/style.module.css';
import api from './ApiAxios';
import { logIn } from './Auth';

const Login = ({ isLoggedIn, setLogged, ToggleLoginModal,ToggleRegisterModal, setUserName }) => {
    const [name, setName] = React.useState("")
    const [password, setPassword] = React.useState("")
    var csrf_token = '{{ echo csrf_token()}}';

    const Login = e => {
        e.preventDefault();
        let data = { name, password }
        //axios.defaults.withCredentials = true;
        api().get('/sanctum/csrf-cookie').then(response => {
            api().post("/api/login", data).then(result => {
                if (result.data.status == "Login succes") {
                    logIn(result.data.name)
                    setLogged(!isLoggedIn)
                    setUserName(result.data.name)
                    ToggleLoginModal()
                }
                else if (result.data.status == "Invalid email or password") {
                    console.log("Invalid email or password")
                }
            })
        });
    }

    return (
        <React.Fragment>
            <span className={classes.sign} align="center">Авторизація </span>
            <form className={classes.form1}>
                <input className={classes.un} value={name} onChange={(e) => setName(e.target.value)} type="text"  placeholder="Name" />
                <input className={classes.un} value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                <a className={classes.submit} onClick={Login} align="center">Війти</a>
            </form>
            <span className={classes.otherOption}>
                Або
                <br/>
                <br/>
                Ввійти через аккаунт :
            </span>
            <div className={classes.socialAuth}>
                <div className={classes.SocialMediaIcon}>
                    <img src="/img/google.png" />
                    <span>Google</span>
                </div>
                <div className={classes.SocialMediaIcon}>
                    <img src="/img/facebook.png" />
                    <span>Facebook</span>
                </div>
            </div>
            <div className={classes.otherProp} onClick={() => { ToggleLoginModal(); ToggleRegisterModal();}}>
                Ще не зарєстровані? <span className={classes.AuthButton} >Зареєструватися</span>
            </div>
        </React.Fragment>
    )
}

export default Login