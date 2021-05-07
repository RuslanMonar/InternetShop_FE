import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './routes/Home/Home';
import { CheckAuthCookie } from './modules/Auth/Auth';
import React from 'react';
import AuthContext from './contexts/AuthContext';
import Main from './routes/Products/Main';
import AboutUsMain from './routes/AboutUs/AboutMain';
import { NetworkError, Error_500, Error_502, Error_404, Error_401 } from './modules/Errors/Errors';
import { ToggleLoginModal, ToggleRegisterModal, ToggleAuthModals, Username, WhenSignIn } from './modules/Auth/ToggleAuthModals'
import CartContext from './contexts/CartContext';
import { loadCart, delteItemFromCart , IncreaseQuantity , DecreaseQuantity , ChangeQuantityValue } from './modules/Cart/CartLogic';


function App() {

  const [isLoggedIn, setLogged] = React.useState(CheckAuthCookie);
  const [UserName, setUserName] = React.useState('');
  React.useEffect(() => {
    if (isLoggedIn) { Username(setUserName); }
  }, [])
  const [RegisterVisible, setRegisterVisible] = React.useState(false);
  const [LoginVisible, setLoginVisible] = React.useState(false);
  const [AlertMistake, SetAlertMistake] = React.useState(false);
  const [cartModal, setCartModal] = React.useState(false)
  const [CartLoader, setCartLoader] = React.useState(false)
  const [cart, setCart] = React.useState();
  const [cartTotalPrice, setCartTotalPrice] = React.useState(0);


  return (
    <Switch>
      <AuthContext.Provider value={{
        UserName, setUserName,
        isLoggedIn, setLogged,
        RegisterVisible, setRegisterVisible,
        LoginVisible, setLoginVisible,
        AlertMistake, SetAlertMistake,
        ToggleAuthModals, ToggleRegisterModal, ToggleLoginModal,
        WhenSignIn
      }}>
        <CartContext.Provider value={{
          cartModal, setCartModal,
          CartLoader, setCartLoader,
          cart, setCart,
          loadCart, delteItemFromCart,
          cartTotalPrice, setCartTotalPrice,
          IncreaseQuantity , DecreaseQuantity , ChangeQuantityValue
        }} >
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={Main} />
          <Route path="/about" exact component={AboutUsMain} />
          <Route path="/505" exact component={Error_500} />
          <Route path="/502" exact component={Error_502} />
          <Route path="/404" exact component={Error_404} />
          <Route path="/401" exact component={Error_401} />
          <Route path="/network_error" exact component={NetworkError} />
        </CartContext.Provider>
      </AuthContext.Provider>
    </Switch>
  );
}

export default App;
