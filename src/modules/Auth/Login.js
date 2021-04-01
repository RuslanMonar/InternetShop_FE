import React  from 'react';
import classes from '../../css/style.module.css';
import { SignIn } from './Auth';



const Login = ({ToggleAuthModals , WhenSignIn }) => {
    const [name, setName] = React.useState("")
    const [password, setPassword] = React.useState("")
    
    return (
        <React.Fragment>
            <span className={classes.sign} align="center">Авторизація </span>
            <form className={classes.form1}>
                <input className={classes.un} value={name} onChange={(e) => setName(e.target.value)} type="text"  placeholder="Name" />
                <input className={classes.un} value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                <a className={classes.submit} onClick={() => SignIn(name,password,WhenSignIn)} align="center">Війти</a>
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
            <div className={classes.otherProp} onClick={() => ToggleAuthModals('CloseLoginFirst')}>
                Ще не зарєстровані? <span className={classes.AuthButton} >Зареєструватися</span>
            </div>
        </React.Fragment>
    )
}

export default Login