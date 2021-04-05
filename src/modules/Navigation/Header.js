import React, { useContext } from 'react';
import classes from '../../css/style.module.css';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import Registration from '../Auth/Registration';
import Login from './../Auth/Login';
import { logOut, isLoggedInCookie } from '../Auth/Auth';
import AuthContext from './../../contexts/AuthContext';
import SearchForm from '../search_form/SearchForm';

import axios from 'axios';

import api from '../Auth/ApiAxios';

const Header = () => {
    const [RegisterVisible, setRegisterVisible] = React.useState(false);
    const [LoginVisible, setLoginVisible] = React.useState(false);
    const { isLoggedIn, setLogged, UserName, setUserName } = useContext(AuthContext);

    const ToggleRegisterModal = () => {
        setRegisterVisible(!RegisterVisible)
    }
    const ToggleLoginModal = () => {
        setLoginVisible(!LoginVisible)
    }

    const Logout = () => {
        api().get('/sanctum/csrf-cookie').then(response => {
            api().post("/api/logout").then(result => {
                if (result.data.status == "Logedout") {
                    logOut()
                    setLogged(!isLoggedIn)
                }
                else {
                    console.log("Invalid logout")
                }
            })
        });
    }

    return (
        <div className={classes.header}>
            <div className={classes.flex_bar}>
                <div className={classes.logo}>
                    <img src="/img/logo4.png" />
                </div>
                <SearchForm />
                <div className={classes.user}>
                    <div className={classes.profile}>
                        {isLoggedIn ? (
                            <React.Fragment>
                                <img src="/img/user.png" />
                                <span>{UserName}</span>
                                <img src="/img/exit.png" />
                                <span onClick={Logout} >Вихід</span>
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
                <ul>
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
                onClose={ToggleRegisterModal}
                className={classes['rodal-close', 'rodal-dialog']}
                animation={'fade'}>
                <Registration ToggleLoginModal={ToggleLoginModal} ToggleRegisterModal={ToggleRegisterModal} />
            </Rodal>

            <Rodal width={400}
                height={500}
                measure={'px'}
                closeMaskOnClick={true}
                visible={LoginVisible}
                onClose={ToggleLoginModal}
                className={classes['rodal-close', 'rodal-dialog']}
                animation={'fade'}>

                <Login isLoggedIn={isLoggedIn}
                    setLogged={setLogged}
                    ToggleLoginModal={ToggleLoginModal}
                    ToggleRegisterModal={ToggleRegisterModal}
                    setUserName={setUserName} />

            </Rodal>

        </div>
    )
}
export default Header