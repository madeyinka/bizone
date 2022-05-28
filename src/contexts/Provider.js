import React, { createContext, useState } from "react";

export const GlobalContext = createContext({})

export const GlobalProvider = ({children}) => {

    //get current user and set value here....
    const [auth, setAuth] = useState({})
    


    return (<GlobalContext.Provider value={{auth, setAuth}}>{children}</GlobalContext.Provider>)
}