import { createSlice } from "@reduxjs/toolkit"; 
import { createAsyncThunk } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem('ils-user'))

export const loginUser = createAsyncThunk('login-user', async( data, {rejectWithValue} )=> {
    const { email, password } = data;
    const URL = data.userType === "Student" ? 'http://localhost:8000/auth/candidate/login' : 'http://localhost:8000/auth/employee/login'
    
    try {
        const response = await fetch(URL,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        })

        const json = await response.json()
        json.userType = data.userType
        return json
        

    } catch (error) {
        return error
    }


})



const initialState = {
   user:{
        isAuthenticated: user ? true : false,
        UserData:  user ? user : null
   },
   APILoading: false,
   APIError: null
}

const authSlice = new createSlice({
    name: "auth",
    initialState,
   extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state, action) => {
            state.APILoading = true
    })
    builder.addCase(loginUser.fulfilled, (state, action) => {
        
        state.APILoading = false
        if(action.payload.status === "ok"){
            const user = action.payload.user
            user.userType = action.payload.userType
            user.token = action.payload.token
            localStorage.setItem('ils-user',JSON.stringify(user))
            state.user.UserData = user
            state.user.isAuthenticated = true
        }

        state.APIError = "Invalid Username and Password"

           
    })
    builder.addCase(loginUser.rejected, (state, action) => {
        state.APILoading = false
        state.APIError = error
})
   }


})

//action creator for initiating the action with the type of it.
const { login, logout } = authSlice.actions;

export default authSlice.reducer;