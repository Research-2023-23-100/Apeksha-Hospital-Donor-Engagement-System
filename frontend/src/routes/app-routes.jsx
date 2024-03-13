import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import CheckLoginStatus from "./CheckLoginStatus";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { Home, StaffLogin, StaffDashboard,MedicationDashboard } from "../pages";

const AppRoutes = () => {
	return (
		<>
			<Router>
				<Header />

				<Routes>
					{/* Public Routes */}
					<Route path="/" element={<Home />} />

					{/* Staff Section */}
					<Route path="/staff/login" element={<CheckLoginStatus />}>
						<Route path="/staff/login" element={<StaffLogin />} />
					</Route>

					<Route path="/staff" element={<PrivateRoute permissionLevel="STAFF" />}>
					<Route path="/staff" element={<StaffDashboard />} />
					</Route>
					<Route path="/medication" element={<MedicationDashboard />} />



				</Routes>

				<Footer />

			</Router>
		</>
	);
};

export default AppRoutes;
