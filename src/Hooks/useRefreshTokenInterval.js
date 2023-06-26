import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { refreshTokenThunk } from "../reducer/actions/AuthActions";


export const useRefreshTokenInterval = (intervalTime = (4 * 60 * 1000)) => {
	const dispatch = useDispatch();
	const { isLoggedIn, isLoading } = useSelector((state) => state.auth);


	useEffect(() => {
		let refreshTokenInterval = setInterval(() => {
			if (isLoggedIn && !isLoading) {
				const authTokens = localStorage.getItem('authTokens');

				const refresh = authTokens ? JSON.parse(authTokens).refresh : null;

				dispatch(refreshTokenThunk({ refresh }));
			}
			else {
				clearInterval(refreshTokenInterval);
			}
		}, intervalTime);

		return () => {
			if (refreshTokenInterval) {
				clearInterval(refreshTokenInterval);
			}
		}

	}, [dispatch, isLoggedIn, intervalTime, isLoading]);

	return null;
};
