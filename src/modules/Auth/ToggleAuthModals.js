import api from './ApiAxios';

export const ToggleRegisterModal = (AuthModalsSwitcher) => {
  AuthModalsSwitcher.setRegisterVisible(!AuthModalsSwitcher.RegisterVisible);
}


export const ToggleLoginModal = (AuthModalsSwitcher) => {
  AuthModalsSwitcher.setLoginVisible(!AuthModalsSwitcher.LoginVisible);
}

export const ToggleAuthModals = (status, AuthModalsSwitcher) => {
  if (status == "CloseRegistrationFirst") {
    ToggleRegisterModal(AuthModalsSwitcher)
    ToggleLoginModal(AuthModalsSwitcher)
  }
  else if (status == 'CloseLoginFirst') {
    ToggleLoginModal(AuthModalsSwitcher)
    ToggleRegisterModal(AuthModalsSwitcher)
  }
}

export const WhenSignIn = (name, AuthModalsSwitcher, LoginAfterRegistration) => {
  AuthModalsSwitcher.setLogged(!AuthModalsSwitcher.isLoggedIn)
  AuthModalsSwitcher.setUserName(name)
  if (LoginAfterRegistration === false) {
    ToggleLoginModal( AuthModalsSwitcher )
  }
}


export const Username = (setUserName) => {
    api().get("/api/username").then(result => {
      setUserName(result.data.name)
      return result.data.name
    })
}
