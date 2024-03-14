import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import CheckLoginStatus from "./CheckLoginStatus";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Essentials from "../components/Essentials";

import { Home, StaffLogin, StaffDashboard, StaffEssentialItems, StaffCreateItem, StaffViewAllItems,MedicationDashboard } from "../pages";
const AppRoutes = () => {
	return (
		<>
						
			<Router>
			<Header />
				<Routes>
					{/* Public Routes */}
					<Route path="/" element={<Home />} />
					<Route path="/essentials" element={<Essentials />} />


					{/* Staff Section */}
					{/* Staff Check Login Status */}
					<Route path="/staff/login" element={<CheckLoginStatus />}>
						<Route path="/staff/login" element={<StaffLogin />} />
					</Route>

					{/* Staff Private Routes */}
					<Route path="/staff" element={<PrivateRoute permissionLevel="STAFF" />}>
						<Route path="/staff" element={<StaffDashboard />} />
						<Route path="/staff/essentials" element={<StaffEssentialItems />} />
						<Route path="/staff/item/create" element={<StaffCreateItem />} />
						<Route path="/staff/item/" element={<StaffViewAllItems />} />
					</Route>


					{/* Donor Section */}
					{/* Donor Check Login Status */}
					<Route path="/donor/login" element={<CheckLoginStatus />}>
						{/* <Route path="/donor/login" element={<donroLogin />} /> */}
					</Route>

					{/* Donor Private Routes */}
					<Route path="/donor" element={<PrivateRoute permissionLevel="DONOR" />}>
						<Route path="/donor" element={<StaffDashboard />} />
					</Route>


					{/* Organization Section */}
					<Route path="/org/login" element={<CheckLoginStatus />}>
						{/* <Route path="/org/login" element={<orgLogin />} /> */}
					</Route>

					{/* Organization Private Routes */}
					<Route path="/org" element={<PrivateRoute permissionLevel="ORGANIZATION" />}>
						{/* <Route path="/org" element={<orgDashboard />} /> */}
					</Route>
					<Route path="/medication" element={<MedicationDashboard />} />





				</Routes>

				<Footer />
			</Router>
		</>
	);
};

export default AppRoutes;
