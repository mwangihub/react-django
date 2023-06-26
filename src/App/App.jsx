import React, { } from "react";
// import { useDispatch, useSelector } from 'react-redux';
// import { refreshTokenThunk } from "../reducer/actions/AuthActions";
import { PublicRoutes } from "../Routes/PublicRoutes";
import { PrivateRoutes } from "../Routes/PrivateRoutes";
import { useRefreshTokenInterval } from "../Hooks/useRefreshTokenInterval";


export const App = () => {
	useRefreshTokenInterval()
	// const dispatch = useDispatch();

	// const { isLoggedIn } = useSelector((state) => state.auth);

	// useEffect(() => {
	// 	let refreshTokenInterval = setInterval(() => {
	// 		if (isLoggedIn) {
	// 			const authTokens = localStorage.getItem('authTokens');

	// 			const refresh = authTokens ? JSON.parse(authTokens).refresh : null;

	// 			dispatch(refreshTokenThunk({ refresh }));
	// 		}
	// 		else {
	// 			clearInterval(refreshTokenInterval);
	// 		}
	// 	}, 2000);

	// 	return () => {
	// 		if (refreshTokenInterval) {
	// 			clearInterval(refreshTokenInterval);
	// 		}
	// 	}

	// }, [dispatch, isLoggedIn]);

	return (
		<React.Fragment>
			<PublicRoutes />
			<PrivateRoutes />
		</React.Fragment>
	)
};

