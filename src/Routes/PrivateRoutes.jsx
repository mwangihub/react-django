
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../components/private/Dashboard";


export const PrivateRoutes = () => {
	return (
		<Routes>
			<Route path="/dashboard" element={<Dashboard />} />
		</Routes>
	)
}
