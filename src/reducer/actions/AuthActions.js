
import jwt_decode from "jwt-decode";
import { Api } from "../../Api";
import { loginStart, loginSuccess, loginFailure, logout } from "../reducers/AuthReducer";


export const refreshTokenThunk = (object) => async (dispatch) => {
	console.log("Refreshing tokens");
	/*
	* Lets say the Api.refreshToken(object) response will take some seconds to give back response.
	* If that is the case, the server will be clogged with numerous response, where it might crash.
	* It is therefore neccessary to dispatch(loginStart()); in order to use isLoding flag when
	* requesting for new tokens 
	*/
	try {
		dispatch(loginStart());
		const { data, status } = await Api.refreshToken(object);
		if (status === 200) {
			localStorage.setItem('authTokens', JSON.stringify(data));
			const user = jwt_decode(data.access)
			dispatch(loginSuccess(user));
		}
	} catch (error) {
		dispatch(loginFailure(error.message));
		dispatch(logout());
	}
};

// export const startRefreshTokenTimer = (obj) => (dispatch) => {
// 	const refreshTokenInterval = setInterval(() => {
// 		dispatch(refreshTokenThunk(obj));
// 	}, 1000);//4 * 60 *
// 	localStorage.setItem("refreshTokenInterval", refreshTokenInterval.toString());
// };

// export const stopRefreshTokenTimer = () => () => {
// 	const refreshTokenInterval = localStorage.getItem("refreshTokenInterval");
// 	if (refreshTokenInterval) {
// 		clearInterval(parseInt(refreshTokenInterval));
// 		localStorage.removeItem("refreshTokenInterval");
// 	}
// };


export const loginAction = (email, password) => async (dispatch) => {
	try {
		dispatch(loginStart());
		const { data, status } = await Api.loginApi(email, password);
		if (status === 200) {
			/**
			 * Repeating code
			 */
			localStorage.setItem('authTokens', JSON.stringify(data))
			const user = jwt_decode(data.access)
			dispatch(loginSuccess(user));
			// dispatch(startRefreshTokenTimer({ refresh: data.refresh }));
		}
	} catch (error) {
		dispatch(loginFailure(error.message));
	}
};


export const logoutAction = (navigate) => async (dispatch) => {
	try {
		dispatch(loginStart());
		const { status } = await Api.logoutApi();
		if (status === 200) {
			localStorage.removeItem('authTokens')
			dispatch(logout());
			// dispatch(stopRefreshTokenTimer());
			navigate();
		}
	} catch (error) {
		dispatch(loginFailure(error.message));
	}
};


