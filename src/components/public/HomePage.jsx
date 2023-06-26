import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAction, logoutAction } from "../../reducer/actions/AuthActions";


export const HomePage = () => {
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
				{user &&
					<div className="btn-group" role="group" aria-label="Basic mixed styles example">
						<button className="btn btn-danger" onClick={logout}>Logout</button>
						<Link to="/dashboard" className="btn btn-warning">Dashboard</Link>
					</div>
				}

				{user && <h1 className="text-body-emphasis">{user.email}</h1>}

				{!user && <LoginForm />}

			</div>
		</div>
	)
}

const LoginForm = () => {

	const { isLoading, error } = useSelector(state => state.auth);

	const dispatch = useDispatch();

	const login = (event) => {
		event.preventDefault()
		const password = event.target.password.value;
		const email = event.target.email.value;
		dispatch(loginAction(email, password))
	};

	if (isLoading)
		return <h5 className="fw-bold text-info-emphasis">Loading ... </h5>


	if (error)
		return <h5 className="fw-bold text-danger-emphasis">{error} </h5>


	return (
		<form action="" className="col-lg-8 mt-5" onSubmit={login}>
			<div className="row g-3">
				<div className="col-sm-6">
					<label className="form-label">Email</label>
					<div className="input-group has-validation">
						<span className="input-group-text">@</span>
						<input type="email" className="form-control" name="email" />
						<div className="invalid-feedback">
							Your username is required.
						</div>
					</div>
				</div>
				<div className="col-sm-6">
					<label className="form-label">Password</label>
					<input type="password" className="form-control" name="password" />
					<div className="invalid-feedback">
						Valid first name is required.
					</div>
				</div>
				<div className="col-sm-12">
					<button type="submit" className="btn btn-success btn-sm w-100">Login</button>
				</div>
			</div>
		</form>
	)
}