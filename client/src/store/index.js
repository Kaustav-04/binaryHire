import { configureStore } from "@reduxjs/toolkit";
import { modalSlice } from "./Modal";

export const store = configureStore({
    reducer: {
        modal : modalSlice.reducer
    }
})

export const modalActions = modalSlice.actions;