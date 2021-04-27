import api from './modules/Auth/ApiAxios';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './routes/Home/Home';
import { CheckAuthCookie } from './modules/Auth/Auth';
import React from 'react';
import AuthContext from './contexts/AuthContext';
import Main from './routes/Products/Main';
import About from './routes/AboutUs/AboutUs';
import { NetworkError, Error_500, Error_502, Error_404, Error_401 } from './modules/Errors/Errors';
//import {ToggleLoginModal , ToggleRegisterModal , ToggleAuthModals} from './modules/Auth/ToggleAuthModals'


function App() {


  const Username = () => {
    api().get('/sanctum/csrf-cookie').then(response => {
      api().get("/api/username").then(result => {
        setUserName(result.data.name)
        return result.data.name
      })
    });
  }

  const [isLoggedIn, setLogged] = React.useState(CheckAuthCookie);
  const [UserName, setUserName] = React.useState(() => { if (isLoggedIn) return Username() });
  const [RegisterVisible, setRegisterVisible] = React.useState(false);
  const [LoginVisible, setLoginVisible] = React.useState(false);
  const [AlertMistake, SetAlertMistake] = React.useState(false);

  const ToggleRegisterModal = () => {
    setRegisterVisible(!RegisterVisible);
  }

  const ToggleLoginModal = () => {
    setLoginVisible(!LoginVisible);
  }

  const ToggleAuthModals = (status) => {
    if (status == "CloseRegistrationFirst") {
      ToggleRegisterModal()
      ToggleLoginModal()
    }
    else if (status == 'CloseLoginFirst') {
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
        <Route path="/about" exact component={About} />
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
