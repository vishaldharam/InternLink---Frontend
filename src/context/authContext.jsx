import { createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext()

export const authReducer = (state, action) => {
    switch(action.type){
        case 'LOGIN':
            return {
                user: action.payload,
                userType: action.userType,
                isAuthenticated: true
            }
        case 'LOGOUT':
            return {
                user: null,
                userType: null,
                isAuthenticated: false
            }
        default :
            return state
    }
}

export const AuthContextProvider = ({ children }) => {

    const user = JSON.parse(localStorage.getItem('payload'))

    const [state, dispatch] = useReducer(authReducer, {
        user: user ? user : null,
        userType: user ? user.userType : null,
        isAuthenticated: user ? true : false
    })

    
    

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            { children }
        </AuthContext.Provider>
    )

}