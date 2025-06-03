import React, { useState } from 'react'
import AppContext from './AppContext'
import { useNavigate } from 'react-router-dom'

function AppProvider({children}) {
  const navigate = useNavigate()
  const [ user, setUser ] = useState(false)
  const [ isLoggedIn, setLogin ] = useState(false)

    const values = {
      user, setUser,
      isLoggedIn, setLogin,
      navigate
        
    }
  return <AppContext.Provider value={values}>
    { children }
  </AppContext.Provider>
}

export default AppProvider
