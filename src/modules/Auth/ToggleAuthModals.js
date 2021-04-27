import React from 'react';
import AuthContext from './../../contexts/AuthContext';

export const ToggleRegisterModal = () => {
  const { RegisterVisible, setRegisterVisible } = React.useContext(AuthContext);
  setRegisterVisible(!RegisterVisible);
 
}


export const ToggleLoginModal = () => {
  const { LoginVisible, setLoginVisible } = React.useContext(AuthContext);
  setLoginVisible(!LoginVisible);
}

export  const ToggleAuthModals = (status) => {
  if (status == "CloseRegistrationFirst") {
    ToggleRegisterModal()
    ToggleLoginModal()
  }
  else if (status == 'CloseLoginFirst') {
    ToggleLoginModal()
    ToggleRegisterModal()
  }
}

