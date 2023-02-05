import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./Auth";
import { modalSlice } from "./Modal";
import {projSlice} from './Projects'

export const store = configureStore({
    reducer: {
        modal : modalSlice.reducer,
        auth: authSlice.reducer,
        proj: projSlice.reducer
    }
})

export const modalActions = modalSlice.actions;
export const authActions = authSlice.actions;
export const projActions = projSlice.actions;