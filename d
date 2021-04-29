[1mdiff --git a/src/App.js b/src/App.js[m
[1mindex d27a033..7051089 100644[m
[1m--- a/src/App.js[m
[1m+++ b/src/App.js[m
[36m@@ -8,7 +8,7 @@[m [mimport AuthContext from './contexts/AuthContext';[m
 import Main from './routes/Products/Main';[m
 import About from './routes/AboutUs/AboutUs';[m
 import { NetworkError, Error_500, Error_502, Error_404, Error_401 } from './modules/Errors/Errors';[m
[31m-//import {ToggleLoginModal , ToggleRegisterModal , ToggleAuthModals} from './modules/Auth/ToggleAuthModals'[m
[32m+[m[32mimport {ToggleLoginModal , ToggleRegisterModal , ToggleAuthModals} from './modules/Auth/ToggleAuthModals'[m
 [m
 [m
 function App() {[m
[36m@@ -29,24 +29,24 @@[m [mfunction App() {[m
   const [LoginVisible, setLoginVisible] = React.useState(false);[m
   const [AlertMistake, SetAlertMistake] = React.useState(false);[m
 [m
[31m-  const ToggleRegisterModal = () => {[m
[31m-    setRegisterVisible(!RegisterVisible);[m
[31m-  }[m
[32m+[m[32m  // const ToggleRegisterModal = () => {[m
[32m+[m[32m  //   setRegisterVisible(!RegisterVisible);[m
[32m+[m[32m  // }[m
 [m
[31m-  const ToggleLoginModal = () => {[m
[31m-    setLoginVisible(!LoginVisible);[m
[31m-  }[m
[32m+[m[32m  // const ToggleLoginModal = () => {[m
[32m+[m[32m  //   setLoginVisible(!LoginVisible);[m
[32m+[m[32m  // }[m
 [m
[31m-  const ToggleAuthModals = (status) => {[m
[31m-    if (status == "CloseRegistrationFirst") {[m
[31m-      ToggleRegisterModal()[m
[31m-      ToggleLoginModal()[m
[31m-    }[m
[31m-    else if (status == 'CloseLoginFirst') {[m
[31m-      ToggleLoginModal()[m
[31m-      ToggleRegisterModal()[m
[31m-    }[m
[31m-  }[m
[32m+[m[32m  // const ToggleAuthModals = (status) => {[m
[32m+[m[32m  //   if (status == "CloseRegistrationFirst") {[m
[32m+[m[32m  //     ToggleRegisterModal()[m
[32m+[m[32m  //     ToggleLoginModal()[m
[32m+[m[32m  //   }[m
[32m+[m[32m  //   else if (status == 'CloseLoginFirst') {[m
[32m+[m[32m  //     ToggleLoginModal()[m
[32m+[m[32m  //     ToggleRegisterModal()[m
[32m+[m[32m  //   }[m
[32m+[m[32m  // }[m
 [m
   const WhenSignIn = (name, LoginAfterRegistration) => {[m
     setLogged(!isLoggedIn)[m
[1mdiff --git a/src/modules/Auth/ApiAxios.js b/src/modules/Auth/ApiAxios.js[m
[1mindex 5051f6e..26a2586 100644[m
[1m--- a/src/modules/Auth/ApiAxios.js[m
[1m+++ b/src/modules/Auth/ApiAxios.js[m
[36m@@ -21,11 +21,11 @@[m [mexport default function api() {[m
             Promise.reject()[m
             history.push('/502')[m
         }[m
[31m-        else if (error.response.status === 401) {[m
[31m-            DeleteAuthCookie()[m
[31m-            Promise.reject()[m
[31m-            history.push('/401')[m
[31m-        }[m
[32m+[m[32m        // else if (error.response.status === 401) {[m
[32m+[m[32m        //     DeleteAuthCookie()[m
[32m+[m[32m        //     Promise.reject()[m
[32m+[m[32m        //     history.push('/401')[m
[32m+[m[32m        // }[m
         else if (error.response.status === 404) {[m
             Promise.reject()[m
             history.push('/404')[m
[1mdiff --git a/src/modules/Auth/Auth.js b/src/modules/Auth/Auth.js[m
[1mindex 03eddd5..35efa52 100644[m
[1m--- a/src/modules/Auth/Auth.js[m
[1m+++ b/src/modules/Auth/Auth.js[m
[36m@@ -19,18 +19,17 @@[m [mexport const DeleteAuthCookie = () => {[m
     }[m
 }[m
 [m
[31m-export const SignIn = (email, password, LoginAfterRegistration = false) => {[m
[31m-    const { SetAlertMistake, WhenSignIn } = React.useContext(AuthContext);[m
[32m+[m[32mexport const SignIn = (email, password, modalFunc, LoginAfterRegistration = false) => {[m
     let data = { email, password }[m
     api().get('/sanctum/csrf-cookie').then(response => {[m
         api().post("/api/login", data).then(result => {[m
             if (result.status === 200) {[m
                 SetAuthCookie()[m
[31m-                SetAlertMistake(false)[m
[31m-                WhenSignIn(result.data.name, LoginAfterRegistration)[m
[32m+[m[32m                modalFunc.SetAlertMistake(false)[m
[32m+[m[32m                modalFunc.WhenSignIn(result.data.name, LoginAfterRegistration)[m
             }[m
         }).catch(err => {[m
[31m-            SetAlertMistake(true)[m
[32m+[m[32m            modalFunc.SetAlertMistake(true)[m
             console.log('Невірний логін або пароль');[m
         })[m
     });[m
[1mdiff --git a/src/modules/Auth/Login.js b/src/modules/Auth/Login.js[m
[1mindex d94b93f..95fad1d 100644[m
[1m--- a/src/modules/Auth/Login.js[m
[1m+++ b/src/modules/Auth/Login.js[m
[36m@@ -9,9 +9,9 @@[m [mconst Login = () => {[m
     const [name, setName] = React.useState("")[m
     const [password, setPassword] = React.useState("")[m
 [m
[31m-    const {AlertMistake,ToggleAuthModals} = React.useContext(AuthContext);[m
[31m-[m
[32m+[m[32m    const {AlertMistake,ToggleAuthModals,SetAlertMistake,WhenSignIn} = React.useContext(AuthContext);[m
 [m
[32m+[m[32m    const modalFunc = {AlertMistake,ToggleAuthModals,SetAlertMistake,WhenSignIn}[m
     const GoogleSignInResponse = (response) => {[m
         if (response.error === undefined) {[m
             response = response.profileObj;[m
[36m@@ -34,7 +34,7 @@[m [mconst Login = () => {[m
                 <input className={classes.un} value={name} onChange={(e) => setName(e.target.value)} type="email" placeholder="Email" />[m
                 <input className={classes.un} value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />[m
                 {AlertMistake ? (<div className={classes.authError} >Неправильний логін або пароль</div>) : (<span></span>)}[m
[31m-                <a className={classes.submit} onClick={() => SignIn(name, password)} align="center">Війти</a>[m
[32m+[m[32m                <a className={classes.submit} onClick={() => SignIn(name, password , modalFunc)} align="center">Війти</a>[m
             </form>[m
             <span className={classes.otherOption}>[m
                 Або[m
[1mdiff --git a/src/modules/Auth/ToggleAuthModals.js b/src/modules/Auth/ToggleAuthModals.js[m
[1mindex 7c5aad9..ae1d6cd 100644[m
[1m--- a/src/modules/Auth/ToggleAuthModals.js[m
[1m+++ b/src/modules/Auth/ToggleAuthModals.js[m
[36m@@ -1,15 +1,12 @@[m
 import React from 'react';[m
 import AuthContext from './../../contexts/AuthContext';[m
 [m
[31m-export const ToggleRegisterModal = () => {[m
[31m-  const { RegisterVisible, setRegisterVisible } = React.useContext(AuthContext);[m
[32m+[m[32mexport const ToggleRegisterModal = ({RegisterVisible , setRegisterVisible}) => {[m
   setRegisterVisible(!RegisterVisible);[m
[31m- [m
 }[m
 [m
 [m
[31m-export const ToggleLoginModal = () => {[m
[31m-  const { LoginVisible, setLoginVisible } = React.useContext(AuthContext);[m
[32m+[m[32mexport const ToggleLoginModal = ({LoginVisible , setLoginVisible}) => {[m
   setLoginVisible(!LoginVisible);[m
 }[m
 [m
[1mdiff --git a/src/modules/Navigation/Header.js b/src/modules/Navigation/Header.js[m
[1mindex ff654bd..cf2b2be 100644[m
[1m--- a/src/modules/Navigation/Header.js[m
[1m+++ b/src/modules/Navigation/Header.js[m
[36m@@ -46,7 +46,7 @@[m [mconst Header = () => {[m
                                 <span onClick={ToggleRegisterModal}[m
                                 >Реєстрація</span>[m
                                 <img src="/img/login.png" />[m
[31m-                                <span onClick={ToggleLoginModal}[m
[32m+[m[32m                                <span onClick={() => ToggleLoginModal({LoginVisible , setLoginVisible})}[m
                                 >Вхід</span>[m
                             </React.Fragment>[m
                         )}[m
[36m@@ -90,7 +90,7 @@[m [mconst Header = () => {[m
                 measure={'px'}[m
                 closeMaskOnClick={true}[m
                 visible={LoginVisible}[m
[31m-                onClose={() => { ToggleLoginModal(); SetAlertMistake(false) }}[m
[32m+[m[32m                onClose={() => { ToggleLoginModal({LoginVisible , setLoginVisible}); SetAlertMistake(false) }}[m
                 className={classes['rodal-close', 'rodal-dialog']}[m
                 animation={'fade'}>[m
                 <Login />[m
[1mdiff --git a/src/routes/Products/Grid.jsx b/src/routes/Products/Grid.jsx[m
[1mindex 8cd56c2..75e0349 100644[m
[1m--- a/src/routes/Products/Grid.jsx[m
[1m+++ b/src/routes/Products/Grid.jsx[m
[36m@@ -249,6 +249,17 @@[m [mconst Grid = () => {[m
         });[m
     }[m
 [m
[32m+[m[32m    const test = (value) => {[m
[32m+[m[32m        if(value === 'Phone'){[m
[32m+[m[41m            [m
[32m+[m[32m        }[m
[32m+[m[32m    }[m
[32m+[m
[32m+[m[32m    const keyMap = {[m
[32m+[m[32m        Phone: false,[m
[32m+[m[32m        Laptop:false,[m
[32m+[m[32m        Table:false[m
[32m+[m[32m    }[m
 [m
     return ([m
         <div className={'GridContainer'}>[m
[36m@@ -257,7 +268,7 @@[m [mconst Grid = () => {[m
                 <div className={'manufacturer'}>[m
                     <span className={'CharacteristicTitle'}>Тип товару:</span>[m
                     <span onClick={() => {GetProductsList();setPhone(false); setLaptop(false); setTablet(false); setFIlterParams({})}}>Всі</span>[m
[31m-                    <span onClick={() => { FindByCateogry('Phone'); setPhone(true); setLaptop(false); setTablet(false); setFIlterParams({}) }}>Телефони</span>[m
[32m+[m[32m                    <span onClick={() => { FindByCateogry('Phone'); test('Phone'); setPhone(true); setLaptop(false); setTablet(false); setFIlterParams({}) }}>Телефони</span>[m
                     <span onClick={() => { FindByCateogry('Tablet'); setPhone(false); setLaptop(false); setTablet(true); setFIlterParams({}) }}>Планшети</span>[m
                     <span onClick={() => { FindByCateogry('Laptop'); setPhone(false); setLaptop(true); setTablet(false); setFIlterParams({}) }}>Ноутбуки</span>[m
                 </div>[m
