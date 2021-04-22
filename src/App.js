import api from './modules/Auth/ApiAxios';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './routes/Home/Home';
import {CheckAuthCookie} from './modules/Auth/Auth';

import React from 'react';
import AuthContext from './contexts/AuthContext';
import Main from './routes/Products/Main';
import About from './routes/AboutUs/AboutUs';
import Error_500 from './modules/Errors/Error_500';
import Error_502 from './modules/Errors/Error_500';
import Error_404 from './modules/Errors/Error_500';
import Error_401 from './modules/Errors/Error_401';
import NetworkError from './modules/Errors/NetworkError';

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
  const [UserName, setUserName] = React.useState(() => {
    if (isLoggedIn) {
      return Username()
    }
  })


  return (
    <Switch>
      <AuthContext.Provider value={{ UserName, setUserName, isLoggedIn, setLogged }}>
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
