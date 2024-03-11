import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ permissionLevel }) => {
	const isAuthenticated = localStorage.getItem("authToken") !== null;

	if (isAuthenticated) {
		return <Outlet />;
	} else {
		if (permissionLevel === "DONOR") {
			return <Navigate to="/donor/login" />;
		}
		if (permissionLevel === "STAFF") {
			return <Navigate to="/staff/login" />;
		}
		if (permissionLevel === "ORGANIZATION") {
			return <Navigate to="/org/login" />;
		} else {
			return <Navigate to="/" />;
		}
	}

	// If authorized, return an outlet that will render child elements
	// If not, return element that will navigate to login page
	// return isAuthenticated ? <Outlet /> : <Navigate to="/userLogin" />;
};

export default PrivateRoute;
