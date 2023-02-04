import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./Auth";
import { modalSlice } from "./Modal";

export const store = configureStore({
    reducer: {
        modal : modalSlice.reducer,
        auth: authSlice.reducer
    }
})

export const modalActions = modalSlice.actions;
export const authActions = authSlice.actions;