import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutAction } from "../../reducer/actions/AuthActions";

export const Dashboard = () => {
	const { user, } = useSelector(state => state.auth);

	const dispatch = useDispatch();

	const navigate = useNavigate();

	const logout = () => {
		const navigateTo = () => navigate('/', { replace: true })
		return dispatch(logoutAction(navigateTo));
	}

	return (
		<div className="container my-5">
			<div className="position-relative p-5 text-muted bg-body border border-dashed rounded-5">
				<button type="button" className="position-absolute top-0 end-0 p-3 m-3 btn-close bg-secondary bg-opacity-10 rounded-pill" aria-label="Close"></button>

				<div className="btn-group" role="group" aria-label="Basic mixed styles example">
					<button className="btn btn-danger" onClick={logout}>Logout</button>
					<Link to="/" className="btn btn-success">Home</Link>
				</div>

				<h1 className="text-body-emphasis">Dashboard</h1>
				{user && <p className=" fw-bold">{user.email}</p>}
			</div>
		</div>
	)
};
