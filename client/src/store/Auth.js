import { createSlice } from "@reduxjs/toolkit";
const initialState = {auth: false}

export const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        login(state){
            state.auth = true
        },
        logout(state){
            state.auth = false
        }
    }

})