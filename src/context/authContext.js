import { createContext, useEffect, useState } from "react"

export const  AuthContext = createContext() // creating a context api

export const AuthContextProvider = ({ children }) => {   // to use this context, we need to create a provider to wrap our entire application
    const [currentUser, setCurrentUser]  = useState(JSON.parse(localStorage.getItem("user")) || null );  //we use json parse to turn it into a booloean instead of the normal string that gets returned to us from local storage
                                                        // instead of setting the state of user Status straight to null initially, check local storage to know if the user has previously signed in. If not, null that dude up 
    const login = () => {
        setCurrentUser({
            id: 1, 
            userId: 1,
            name: "Logan", 
            profilePic: "https://images.hdqwalls.com/download/call-of-duty-modern-warfare-2019-4k-cb-1920x1080.jpg" 
        }) // TO DO. But dummy user object for now
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser))  // whenever a user logs in, his info such as user name and dp(url) is stored in user info as a string. We convert into a string because we cannot store objects in local storage
    }, [currentUser])   // the currrentUser status dependency activates it whenever the change occurs

    return (
        <AuthContext.Provider value= {{ currentUser, login }}> 
            {children}
        </AuthContext.Provider>  // since we'll be wrapping the entire application with the provider, we are able to use the darkMode value and the toogle function anywhere in the app
    )
}

