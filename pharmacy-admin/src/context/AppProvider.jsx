import React, { useState } from 'react'
import AppContext from './AppContext'
import { useNavigate } from 'react-router-dom'

function AppProvider({children}) {
  const navigate = useNavigate()
  const [ user, setUser ] = useState(true)
  const [ lang, setLang ] = useState('EN')
  const [ isLoggedin, setLogin ] = useState(true)
  const [ showLoginForm, setLoginForm ] = useState(false)
  const [ showRegistrationForm, setShowRegistrationForm ] = useState(false)

    const values = {
      user, setUser,
      isLoggedin, setLogin,
      navigate,
      lang, setLang,
      showLoginForm, setLoginForm,
      showRegistrationForm, setShowRegistrationForm
        
    }
  return <AppContext.Provider value={values}>
    { children }
  </AppContext.Provider>
}

export default AppProvider
