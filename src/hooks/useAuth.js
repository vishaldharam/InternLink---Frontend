import axios from "axios";
import { useAuthContext } from "./useAuthContext";
import { AuthContext } from "../context/authContext";

import { useState } from "react";




export const useSignUp = () => {
    const [serverError, setServerError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const signup = async(email, password, userType) => {
        setIsLoading(true)
        setServerError(null)
        
        const URL = userType === "Student" ? 'http://localhost:8000/auth/candidate/login' : 'http://localhost:8000/auth/employee/login'

        const response = await fetch(URL,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        })

        const json = await response.json()

       

        if(json.status === 'ok'){
            json.userType = userType
            localStorage.setItem('payload',JSON.stringify(json))

            //update the authContext 
            dispatch({type:'LOGIN', payload:json,userType:userType})
            setIsLoading(false)
            return(true)

        }
        else{
            setServerError(json.message)
            setIsLoading(false)
            return(false)

        }

        setIsLoading(false)

        return(false)
          
    }
     const getData = async() => {
        const { user } = useAuthContext()
        const token = user.token
        // console.log(user, token)
        const response = await fetch('http://localhost:8000/internship/getLatestInternships')
        const json = await response.json()
        console.log(json.LatestInternships)
    }

    return {serverError, isLoading, signup, getData}
}

