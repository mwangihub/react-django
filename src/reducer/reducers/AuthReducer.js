
import jwt_decode from "jwt-decode";
import { createSlice } from '@reduxjs/toolkit';

const authTokens = localStorage.getItem('authTokens');

const initialState = {
	user: authTokens ? jwt_decode(JSON.parse(authTokens).access) : null,
	isLoggedIn: authTokens !== null,
	isLoading: false,
	error: null,
};


const authReducer = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		loginStart: (state) => {
			state.isLoading = true;
			state.error = null;
		},
		loginSuccess: (state, action) => {
			state.isLoading = false;
			state.isLoggedIn = true;
			state.user = action.payload;
			state.error = null;
		},
		loginFailure: (state, action) => {
			state.isLoading = false;
			state.isLoggedIn = false;
			state.error = action.payload;
			state.user = null;
		},
		logout: (state) => {
			state.user = null;
			state.isLoggedIn = false;
			state.isLoading = false;
			state.error = null;
		},
	},
});

export const {
	loginStart,
	loginSuccess,
	loginFailure,
	logout,
} = authReducer.actions;

export default authReducer.reducer;
