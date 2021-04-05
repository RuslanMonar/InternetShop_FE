import api from './modules/Auth/ApiAxios';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './routes/Home/Home';
import {CheckAuthCookie} from './modules/Auth/Auth';

import React from 'react';
import AuthContext from './contexts/AuthContext';

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
      </AuthContext.Provider>
    </Switch>
  );
}

export default App;
