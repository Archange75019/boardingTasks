import { createContext } from "react";
import Cookies from 'universal-cookie'
import { useState } from "react";

const defaultValue = {
    token: "",
    userId: null,
    login: () => { },
    logout: () => { },
    userIsLoggedIn: false
}
const cookies = new Cookies();
const getPersistentData = (item) => {

    var data = cookies.get('Register Company')
    if (data !== "") {
        for (var obj in data) {
            if (obj === item) {
                return data[obj]
            }
        }
    }
}

const getStatus = () => {
    const data = cookies.get('Register Company')
    return data
}

export const AuthContext = createContext(defaultValue)

export const AuthContextProvider = (props) => {

    const [token, setToken] = useState(null)
    const [userId, setUserId] = useState(null)
    const loginHandler = (token, userId) => {
        setToken(token)
        setUserId(userId)
    }
    const logoutHandler = (token, userId) => {
        cookies.remove('Register Company')
        setToken(token)
        setUserId(userId)

    }
    var userIsLoggedIn = getStatus() !== undefined ? true : !!token

    const contextValue = {
        token: getPersistentData('token') !== '' ? getPersistentData('token') : token,
        userId: getPersistentData('userId') !== '' ? getPersistentData('userId') : userId,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}