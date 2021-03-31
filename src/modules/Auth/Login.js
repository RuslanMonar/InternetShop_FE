import React from 'react';
import axios from 'axios';
import classes from '../../css/style.module.css';
import api from './ApiAxios';
import { logIn } from './Auth';

const Login = ({ isLoggedIn, setLogged, ToggleLoginModal, setUserName }) => {
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
                    logIn()
                    setLogged(!isLoggedIn)
                    setUserName(result.data.name)
                    ToggleLoginModal()
                }
                else if(result.data.status == "Invalid email or password"){
                    console.log("Invalid email or password")
                }
            })
        });
    }

    return (

        <div className={classes.registration_content}>
            <h3>Вхід</h3>
            <div className={classes.field}>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" />
                <div className={classes.line}></div>
            </div>
            <div className={classes.field}>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                <div className={classes.line}></div>
            </div>
            <button onClick={Login} className={classes.auth_button} >Відправити</button>
        </div>
    )
}

export default Login