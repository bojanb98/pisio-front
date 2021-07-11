import { createSlice } from "@reduxjs/toolkit";
import AUTH_TOKEN_STORAGE_KEY from "./loginConstants";

const initialState = {
    isLoading: false,
    isLoggedIn: !!localStorage.getItem(AUTH_TOKEN_STORAGE_KEY),
    error: null
}


const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginPending: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        loginSuccess: (state) => {
            state.isLoading = false;
            state.isLoggedIn = true;
            state.error = null;
        },
        loginFail: (state, { payload }) => {
            state.isLoading = false;
            state.isLoggedIn = false;
            state.error = payload;
        },
        logout: (state) => {
            state.isLoading = false;
            state.isLoggedIn = false;
            state.error = null;
        },
        clearErrorMessage: (state) => {
            state.error = null;
        }
    }
});

const { reducer, actions } = loginSlice;

export default reducer;

export const { loginPending, loginSuccess, loginFail, logout, clearErrorMessage } = actions;