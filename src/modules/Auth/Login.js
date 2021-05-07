import React from 'react';
import classes from '../../css/style.module.css';
import { SignIn, GoogleSignInResponse, FacebookSignInResponse } from './Auth';
import GoogleLogin from 'react-google-login'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import AuthContext from './../../contexts/AuthContext';
import CartContext from './../../contexts/CartContext';



const Login = ({ AuthModalsSwitcher }) => {
    const [name, setName] = React.useState("")
    const [password, setPassword] = React.useState("")

    const { AlertMistake, ToggleAuthModals, SetAlertMistake, WhenSignIn } = React.useContext(AuthContext);
    const { CountProductInCart , setProductsInCart} = React.useContext(CartContext);
    const modalFunc = { SetAlertMistake, WhenSignIn, AuthModalsSwitcher ,  CountProductInCart , setProductsInCart }


    return (
        <React.Fragment>
            <span className={classes.sign} align="center">Авторизація </span>
            <form className={classes.form1}>
                <input className={classes.un} value={name} onChange={(e) => setName(e.target.value)} type="email" placeholder="Email" />
                <input className={classes.un} value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                {AlertMistake ? (<div className={classes.authError} >Неправильний логін або пароль</div>) : (<span></span>)}
                <a className={classes.submit} onClick={() => SignIn(name, password, modalFunc)} align="center">Війти</a>
            </form>
            <span className={classes.otherOption}>
                Або
                <br />
                <br />
                Ввійти через аккаунт :
            </span>
            <div className={classes.socialAuth}>
                <GoogleLogin
                    clientId="86353896450-e2vq41grdcmdol5njckcm9jteu65fun7.apps.googleusercontent.com"
                    render={renderProps => (
                        <div onClick={renderProps.onClick} className={classes.SocialMediaIcon}>
                            <img src="/img/google.png" />
                            <span>Google</span>
                        </div>
                    )}
                    buttonText="Sign in with Google"
                    onSuccess={response => GoogleSignInResponse(response, modalFunc)}
                    onFailure={response => GoogleSignInResponse(response, modalFunc)}
                    cookiePolicy={'single_host_origin'}
                />
                <FacebookLogin
                    appId="183494546770953"
                    autoLoad={true}
                    fields="name,email,picture"
                    callback={response => FacebookSignInResponse(response, modalFunc)}
                    render={renderProps => (
                        <div onClick={renderProps.onClick} className={classes.SocialMediaIcon}>
                            <img src="/img/facebook.png" />
                            <span>Facebook</span>
                        </div>
                    )}
                />
            </div>
            <div className={classes.otherProp} onClick={() => ToggleAuthModals('CloseLoginFirst', AuthModalsSwitcher)}>
                Ще не зарєстровані? <span className={classes.AuthButton} >Зареєструватися</span>
            </div>
        </React.Fragment>
    )
}

export default Login