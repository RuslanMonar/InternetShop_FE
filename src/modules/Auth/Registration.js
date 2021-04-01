import React from 'react';

import classes from '../../css/style.module.css';

const Registration = ({ToggleLoginModal,ToggleRegisterModal}) => {
    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    var csrf_token = '{{ echo csrf_token()}}';

    const singUp = async () => {
        let data = { name, email, password, csrf_token }
        const respone = await fetch("http://shop/api/register", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                'X-CSRF-TOKEN': csrf_token,
            }

        })
        const result = await respone.json()
        console.log("result", result)
    }
    return (
        <React.Fragment>
            <span className={classes.sign} align="center">Реєстрація</span>
            <form className={classes.form1}>
                <input className={classes.un} value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" />
                <input className={classes.un} value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
                <input className={classes.un} value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                <a className={classes.submit} onClick={singUp} align="center">Війти</a>
            </form>
            <span className={classes.otherOption}>
                Або
                <br />
                <br />
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
            <div className={classes.otherProp} onClick={() => { ToggleLoginModal(); ToggleRegisterModal(); }}>
                Вже є аккаунт? <span className={classes.AuthButton} >Ввійти</span>
            </div>
        </React.Fragment>
    )
}

export default Registration