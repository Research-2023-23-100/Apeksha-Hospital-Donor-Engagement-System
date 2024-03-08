import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import PrivateRoute from "./PrivateRoute";
// import CheckLoginStatus from "./CheckLoginStatus";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { Home } from "../pages";

const AppRoutes = () => {
	return (
		<>
			<Router>
				<Header/>
				<div className="">
					<Routes>
						{/* Public Routes */}
						<Route path="/" element={<Home />} />
					</Routes>
					<Footer/>
				</div>

			
			</Router>
		</>
	);
};

export default AppRoutes;