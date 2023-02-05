import { createSlice } from "@reduxjs/toolkit";
const initialState = {projects: null}

export const projSlice = createSlice({
    name: 'projSlice',
    initialState,
    reducers: {
        add(state,action){
            state.projects = action.payload
        }
    }

})