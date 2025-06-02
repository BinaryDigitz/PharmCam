import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AppContext from './AppContext'

function AppProvider({ children }) {
    const navigate = useNavigate()
 const [ town, setTown    ] =  useState({region: '', town: ''})
    


    const values = {
        navigate,
        town, setTown
    }
  return (
    <AppContext.Provider value = { values}>
        { children }
    </AppContext.Provider>
  )
}

export default AppProvider
