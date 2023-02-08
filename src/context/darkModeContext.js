import { createContext, useEffect, useState } from "react"

export const DarkModeContext = createContext() // creating a context api

export const DarkModeContextProvider = ({ children }) => {   // to use this context, we need to create a provider to wrap our entire application
    const [darkMode, setDarkMode]  = useState(JSON.parse(localStorage.getItem("darkMode")) || false );  //we use json parse to turn it into a booloean instead of the normal string that gets returned to us from local storage
                                                        // instead of setting the value of darkMode straight to false initially, check local storage to know if the user has previously toogled darkMode. If not, false that dude up 
    const toggle = () => {
        setDarkMode(!darkMode)   // we use useState to change the state of our darkMode
    }

    useEffect(() => {
        localStorage.setItem("darkMode", darkMode)  // whenever darkMode changes, store the value straight in local storage
    }, [darkMode])   // the darkMode dependency activates it whenever the change occurs

    return (
        <DarkModeContext.Provider value= {{ darkMode, toggle }}> 
            {children}
        </DarkModeContext.Provider>  // since we'll be wrapping the entire application with the provider, we are able to use the darkMode value and the toogle function anywhere in the app
    )
}

