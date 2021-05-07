import React, { useContext } from 'react';
import classes from '../../css/style.module.css';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import Registration from '../Auth/Registration';
import Login from '../Auth/Login';
import { SignOut } from '../Auth/Auth';
import AuthContext from '../../contexts/AuthContext';
import SearchForm from '../search_form/SearchForm';
import CartContext from './../../contexts/CartContext';
import Cart from './../Cart/Cart';




const Header = () => {
    var Link = require('react-router-dom').Link
    const [responsiveMenu, setMenu] = React.useState(false)
    const {
        setUserName,
        isLoggedIn, setLogged,
        UserName,
        RegisterVisible, setRegisterVisible,
        LoginVisible, setLoginVisible,
        SetAlertMistake,
        ToggleRegisterModal, ToggleLoginModal
    } = useContext(AuthContext);

    const { setCart, setCartLoader, cartModal, setCartModal, loadCart, setCartTotalPrice } = React.useContext(CartContext)

    const AuthModalsSwitcher = { LoginVisible, setLoginVisible, RegisterVisible, setRegisterVisible, setLogged, isLoggedIn, setUserName }


    const cartModalOpen = () => {
        if (isLoggedIn) {
            setCartModal(!cartModal);
            loadCart(setCart, setCartLoader, setCartTotalPrice);
        }
        else{
            setRegisterVisible(!RegisterVisible);
        }
    }

    return (
        <div className={classes.header}>
            <div className={classes.flex_bar}>
                <div className={classes.logo}>
                    <Link to="/">
                        <img src="/img/logo6.png" />
                    </Link>
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
                                <span onClick={() => ToggleRegisterModal(AuthModalsSwitcher)}
                                >Реєстрація</span>
                                <img src="/img/login.png" />
                                <span onClick={() => ToggleLoginModal(AuthModalsSwitcher)}
                                >Вхід</span>
                            </React.Fragment>
                        )}
                    </div >
                    <div onClick={() => cartModalOpen()} className={classes.basket}>
                        <img src="/img/basket.png" />
                        <span>Корзина</span>
                    </div>
                </div>
            </div>
            <div className={classes.navigation}>
                <div onClick={() => setMenu(!responsiveMenu)} className={classes.hamburger}>☰</div>
                <ul className={responsiveMenu === true ? classes.myListResponsive : classes.menuList}>
                    <li><Link to="/products">Каталог товарів</Link></li>
                    <li><Link to="/about">Про нас</Link></li>
                    <li>LEBNSMITTEL</li>
                    <li>MASCHINENBAU</li>
                    <li>LANDINGPAGE</li>
                    <li>SALE</li>
                </ul>
            </div>
            <div className={classes.extra_info}>
                <span>Бзкоштовна Доставка - Безкоштовне Повернення</span>
            </div>


            <Rodal
                width={700}
                height={500}
                measure={'px'}
                closeMaskOnClick={true}
                visible={cartModal}
                onClose={() => { setCartModal(!cartModal) }}
                animation={'fade'}>

                <Cart />
            </Rodal>


            <Rodal
                width={400}
                height={550}
                measure={'px'}
                closeMaskOnClick={true}
                visible={RegisterVisible}
                onClose={() => { ToggleRegisterModal(AuthModalsSwitcher); SetAlertMistake(false) }}
                className={classes['rodal-close', 'rodal-dialog']}
                animation={'fade'}>
                <Registration AuthModalsSwitcher={AuthModalsSwitcher} />
            </Rodal>

            <Rodal
                width={400}
                height={500}
                measure={'px'}
                closeMaskOnClick={true}
                visible={LoginVisible}
                onClose={() => { ToggleLoginModal(AuthModalsSwitcher); SetAlertMistake(false) }}
                className={classes['rodal-close', 'rodal-dialog']}
                animation={'fade'}>
                <Login AuthModalsSwitcher={AuthModalsSwitcher} />
            </Rodal>

        </div>
    )
}
export default Header