import api from './modules/Auth/ApiAxios';
import axios from 'axios';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './routes/Home/Home';
import { logOut, isLoggedInCookie, Username } from './modules/Auth/Auth';

import React from 'react';
import AuthContext from './contexts/AuthContext';
import Main from './routes/Products/Main';

function App() {

  const Username = () => {
    api().get('/sanctum/csrf-cookie').then(response => {
      api().get("/api/username").then(result => {
        setUserName(result.data.name)
        return result.data.name
      })
    });
  }
  const [isLoggedIn, setLogged] = React.useState(isLoggedInCookie);
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
      </AuthContext.Provider>
    </Switch>
  );
}

export default App;
