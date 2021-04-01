import React , {useContext} from 'react';
import classes from '../../css/style.module.css';
import { SingUp } from './Auth';

const Registration = ({ToggleAuthModals,ToggleRegisterModal,WhenSignIn}) => {
    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")

    return (
        <React.Fragment>
            <span className={classes.sign} align="center">Реєстрація</span>
            <form className={classes.form1}>
                <input className={classes.un} value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" />
                <input className={classes.un} value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
                <input className={classes.un} value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                <a className={classes.submit} onClick={() => SingUp(name,email,password,ToggleRegisterModal,WhenSignIn)} align="center">Зареєструватися</a>
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
            <div className={classes.otherProp} onClick={() => ToggleAuthModals('CloseRegistrationFirst')}>
                Вже є аккаунт? <span className={classes.AuthButton} >Ввійти</span>
            </div>
        </React.Fragment>
    )
}

export default Registration