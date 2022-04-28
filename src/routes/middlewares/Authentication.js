import React from 'react'
import {Navigate} from 'react-router-dom'
//import { GlobalContext } from '../../contexts/Provider'

/**
* return AUTH status
*/
const useAuth = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user.isAuthenticated === true) 
        return {auth:true}
    else
        return <Navigate to="/auth/login" />
}       

const AuthenticatedRoutes = ({children}) => {

    const {auth} = useAuth()

  return ((auth === true) ? children : <Navigate to="/auth/login" />)
}

export default AuthenticatedRoutes