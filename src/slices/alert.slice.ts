import { createSlice } from "@reduxjs/toolkit";

export interface AlertState {
    open?: boolean;
    message?: string;
    type?: string;
}

export type AlertOpenAction = {
    type: string;
    payload: AlertState;
}

export const initialState: AlertState = {
    open: false,
    message: '',
    type: 'error'
}

const alertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        open(state, {payload}: AlertOpenAction) {
            state.open = true;
            state.message = payload.message || '';
            return state;
        },
        close(state) {
            state.open = false;
            state.message = '';
            return state;            
        }
    }
})

export const alertActions = alertSlice.actions;

export default alertSlice.reducer;