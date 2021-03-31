import React from 'react';
import classes from '../../css/style.module.css';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import Registration from '../Auth/Registration';
import Login from './../Auth/Login';
import { logOut } from '../Auth/Auth';

const Header = () => {
    const [isLoggedIn, setLogged] = React.useState(false);
    const [RegisterVisible, setRegisterVisible] = React.useState(false);
    const [LoginVisible, setLoginVisible] = React.useState(false);
    const [UserName , setUserName] = React.useState("Not Found")

    const ToggleRegisterModal = () => {
        setRegisterVisible(!RegisterVisible)
    }
    const ToggleLoginModal = () => {
        setLoginVisible(!LoginVisible)
    }


    return (
        <div className={classes.header}>
            <div className={classes.flex_bar}>
                <div className={classes.logo}>
                    <img src="/img/logo4.png" />
                </div>
                <div className={classes.search}>
                    <input placeholder="Пошук"></input>
                    <div>
                        <img src="/img/search-512.png" />
                    </div>
                </div>
                <div className={classes.user}>
                    <div className={classes.profile}>
                        {isLoggedIn ? (
                            <React.Fragment>
                                <img src="/img/user.png" />
                                <span>{UserName}</span>
                                <img src="/img/exit.png" />
                                <span onClick={logOut} >Вихід</span>
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
            <Rodal width={50}
                height={40}
                measure={'%'}
                closeMaskOnClick={true}
                visible={RegisterVisible}
                onClose={ToggleRegisterModal}
                className={classes['rodal-close']}
                animation={'fade'}>
                <Registration />
            </Rodal>
            <Rodal width={50}
                height={40}
                measure={'%'}
                closeMaskOnClick={true}
                visible={LoginVisible}
                onClose={ToggleLoginModal}
                className={classes['rodal-close']}
                animation={'fade'}>
                <Login isLoggedIn={isLoggedIn} setLogged={setLogged} ToggleLoginModal={ToggleLoginModal} setUserName={setUserName} />
            </Rodal>
        </div>
    )
}
export default Header