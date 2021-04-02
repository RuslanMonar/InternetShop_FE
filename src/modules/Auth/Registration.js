import React, { useContext } from 'react';
import classes from '../../css/style.module.css';
import { SingUp } from './Auth';
import GoogleSignUp from 'react-google-login'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

const Registration = ({ ToggleAuthModals, ToggleRegisterModal, WhenSignIn, SetAlertMistake, AlertMistake }) => {
    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")

    const GoogleSignUpResponse = (response) => {
        if (response.error === undefined) {
            response = response.profileObj;
            SingUp(response.name, response.email, response.googleId, ToggleRegisterModal, WhenSignIn, SetAlertMistake)
        } else {
            console.log(response.error)
        }
    }

    const FacebookSignUpResponse = (response) => {
        SingUp(response.name, response.email, response.userID, ToggleRegisterModal, WhenSignIn, SetAlertMistake)
    }


    return (
        <React.Fragment>
            <span className={classes.sign} align="center">Реєстрація</span>
            <form className={classes.form1}>
                <input className={classes.un} value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" />
                <input className={classes.un} value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
                <input className={classes.un} value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                {AlertMistake ? (<div className={classes.authError} >Цей email вже зайнятий</div>) : (<span></span>)}
                <a className={classes.submit} onClick={() => SingUp(name, email, password, ToggleRegisterModal, WhenSignIn, SetAlertMistake)} align="center">Зареєструватися</a>
            </form>
            <span className={classes.otherOption}>
                Або
                <br />
                <br />
                Ввійти через аккаунт :
            </span>
            <div className={classes.socialAuth}>
                <GoogleSignUp
                    clientId="86353896450-e2vq41grdcmdol5njckcm9jteu65fun7.apps.googleusercontent.com"
                    render={renderProps => (
                        <div onClick={renderProps.onClick} className={classes.SocialMediaIcon}>
                            <img src="/img/google.png" />
                            <span>Google</span>
                        </div>
                    )}
                    buttonText="Sign in with Google"
                    onSuccess={GoogleSignUpResponse}
                    onFailure={GoogleSignUpResponse}
                    cookiePolicy={'single_host_origin'}
                />
                <FacebookLogin
                    appId="183494546770953"
                    autoLoad={true}
                    fields="name,email,picture"
                    callback={FacebookSignUpResponse}
                    render={renderProps => (
                        <div onClick={renderProps.onClick} className={classes.SocialMediaIcon}>
                            <img src="/img/facebook.png" />
                            <span>Facebook</span>
                        </div>
                    )}
                />
            </div>
            <div className={classes.otherProp} onClick={() => ToggleAuthModals('CloseRegistrationFirst')}>
                Вже є аккаунт? <span className={classes.AuthButton} >Ввійти</span>
            </div>
        </React.Fragment>
    )
}

export default Registration