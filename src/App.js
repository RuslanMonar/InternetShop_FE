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


function App() {

  const [isLoggedIn, setLogged] = React.useState(CheckAuthCookie);
  const [UserName, setUserName] = React.useState('');
  if (isLoggedIn) Username(setUserName);
  const [RegisterVisible, setRegisterVisible] = React.useState(false);
  const [LoginVisible, setLoginVisible] = React.useState(false);
  const [AlertMistake, SetAlertMistake] = React.useState(false);



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
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={Main} />
        <Route path="/about" exact component={AboutUsMain} />
        <Route path="/505" exact component={Error_500} />
        <Route path="/502" exact component={Error_502} />
        <Route path="/404" exact component={Error_404} />
        <Route path="/401" exact component={Error_401} />
        <Route path="/network_error" exact component={NetworkError} />
      </AuthContext.Provider>
    </Switch>
  );
}

export default App;
