import React, { useContext } from 'react';
import classes from '../../css/style.module.css';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import Registration from '../Auth/Registration';
import Login from './../Auth/Login';
import { SignOut } from '../Auth/Auth';
import AuthContext from './../../contexts/AuthContext';
import SearchForm from '../search_form/SearchForm';


const Header = () => {
    const [RegisterVisible, setRegisterVisible] = React.useState(false);
    const [LoginVisible, setLoginVisible] = React.useState(false);

    const [AlertMistake, SetAlertMistake] = React.useState(false)
    const [responsiveMenu, setMenu] = React.useState(false)
    const { isLoggedIn, setLogged, UserName, setUserName } = useContext(AuthContext);

    const ToggleRegisterModal = () => {
        setRegisterVisible(!RegisterVisible)
    }

    const ToggleLoginModal = () => {
        setLoginVisible(!LoginVisible)
    }

    const ToggleAuthModals = (status) => {
        if(status == "CloseRegistrationFirst"){
            ToggleRegisterModal()
            ToggleLoginModal()
        }
        else if(status == 'CloseLoginFirst'){
            ToggleLoginModal()
            ToggleRegisterModal()
        }
    }


    const WhenSignIn = (name, LoginAfterRegistration) => {
        setLogged(!isLoggedIn)
        setUserName(name)
        if (LoginAfterRegistration === false) {
            ToggleLoginModal()
        }
    }

    return (
        <div className={classes.header}>
            <div className={classes.flex_bar}>
                <div className={classes.logo}>
                    <img src="/img/logo6.png" />
                </div>
                <SearchForm />
                <div className={classes.user}>
                    <div className={classes.profile}>
                        {isLoggedIn ? (
                            <React.Fragment>
                                <img src="/img/user.png" />
                                <span>{UserName}</span>
                                <img src="/img/exit.png" />
                                <span onClick={() => SignOut(isLoggedIn, setLogged)} >Вихід</span>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <img src="/img/registration.png" />
                                <span
                                    onClick={ToggleRegisterModal}
                                >Реєстрація</span>
                                <img src="/img/login.png" />
                                <span
                                    onClick={ToggleLoginModal}
                                >Вхід</span>
                            </React.Fragment>

                        )}
                    </div >
                    <div className={classes.basket}>
                        <img src="/img/basket.png" />
                        <span>Корзина</span>
                    </div>
                </div>
            </div>
            <div className={classes.navigation}>
                <div onClick={() => setMenu(!responsiveMenu)} className={classes.hamburger}>☰</div>
                <ul  className={responsiveMenu===true ?  classes.myListResponsive : classes.menuList}>
                    <li>FASHION</li>
                    <li>ELECTRONIC</li>
                    <li>LEBNSMITTEL</li>
                    <li>MASCHINENBAU</li>
                    <li>LANDINGPAGE</li>
                    <li>SALE</li>
                </ul>
            </div>
            <div className={classes.extra_info}>
                <span>Бзкоштовна Доставка - Безкоштовне Повернення</span>
            </div>

            <Rodal width={400}
                height={550}
                measure={'px'}
                closeMaskOnClick={true}
                visible={RegisterVisible}

                onClose={() => {ToggleRegisterModal() ; SetAlertMistake(false)}}
                className={classes['rodal-close', 'rodal-dialog']}
                animation={'fade'}>

                <Registration 
                ToggleAuthModals={ToggleAuthModals} 
                ToggleRegisterModal={ToggleRegisterModal} 
                WhenSignIn={WhenSignIn} 
                SetAlertMistake={SetAlertMistake}
                AlertMistake={AlertMistake} />
            </Rodal>

            <Rodal width={400}
                height={500}
                measure={'px'}
                closeMaskOnClick={true}
                visible={LoginVisible}

                onClose={() => {ToggleLoginModal() ; SetAlertMistake(false)}}
                className={classes['rodal-close', 'rodal-dialog']}
                animation={'fade'}>

                <Login 
                ToggleAuthModals={ToggleAuthModals} 
                WhenSignIn={WhenSignIn} 
                SetAlertMistake={SetAlertMistake} 
                AlertMistake={AlertMistake} />

            </Rodal>

        </div>
    )
}
export default Header