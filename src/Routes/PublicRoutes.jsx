
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../components/public/HomePage";

export const PublicRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
		</Routes>
	)
}
