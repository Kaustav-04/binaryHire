import { createSlice } from "@reduxjs/toolkit";

const initialState = {contentmodal: false, imagemodal: false}

export const modalSlice = createSlice({
    name: 'modalSlice',
    initialState,
    reducers:{
        modalOpen(state){
            state.contentmodal = true
        },
        modalClose(state){
            state.contentmodal = false
        },
        imageOpen(state){
            state.imagemodal = true
        },
        imageClose(state){
            state.imagemodal = false
        }
    }
})