import React, { useState, useEffect, useContext } from "react";
import DonorContext from "../../contexts/DonorContext";
import BloodDonorHome from "../blood-donor-home-page"

const DonorDashboard = () => {
	return (
		<>
			<div className="div">
				<BloodDonorHome />
			</div>
		</>
	);
};

export default DonorDashboard;
