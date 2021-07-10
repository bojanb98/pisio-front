import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    isLoggedIn: false,
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
    }
});

const { reducer, actions } = loginSlice;

export default reducer;

export const { loginPending, loginSuccess, loginFail } = actions;