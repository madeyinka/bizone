import React, { createContext, useReducer, useState } from "react";
import authReducer from './reducers/auth'
import userReducer from './reducers/user'
import uploadReducer from "./reducers/upload";
import postReducer from "./reducers/post"
import authInitialState from './initialstates/authInitialState'
import userInitialState from './initialstates/userInitialState'
import uploadInitialState from './initialstates/uploadInitialState'
import postInitialState from './initialstates/postInitialState'

export const GlobalContext = createContext({})

export const GlobalProvider = ({children}) => {

    //get current user and set value here....
    const [currentUser, setCurrentUser] = useState({})
    const [authState, authDispatch] = useReducer(authReducer, authInitialState)
    const [userState, userDispatch] = useReducer(userReducer, userInitialState)
    const [uploadState, uploadDispatch] = useReducer(uploadReducer, uploadInitialState)
    const [postState, postDispatch] = useReducer(postReducer, postInitialState)


    return (<GlobalContext.Provider value={
        {
            currentUser,
            setCurrentUser,
            authState,
            authDispatch,
            userState,
            userDispatch,
            uploadState,
            uploadDispatch,
            postState,
            postDispatch
        }
    }>{children}</GlobalContext.Provider>)
}