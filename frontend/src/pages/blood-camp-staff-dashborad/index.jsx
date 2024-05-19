import React, { useState } from "react";
import BloodCampAdmin from "./../blood-camp-admin-panel";
import AllDonors from "./../view-all-donors";
import GetAllCamps from "../get-all-camps/";

const BloodCampStaffDashboard = () => {
	const [view, setView] = useState("bloodCampAdmin");

	return (
		<div className="container mx-auto mt-20">
			<div className="flex justify-center space-x-4 mt-8">
				<button
					onClick={() => setView("bloodCampAdmin")}
					className={`px-4 py-2 rounded-md ${view === "bloodCampAdmin" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
				>
					Blood Camp Admin
				</button>
				<button
					onClick={() => setView("getAllCamps")}
					className={`px-4 py-2 rounded-md ${view === "getAllCamps" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
				>
					Get All Camps
				</button>
				<button
					onClick={() => setView("allDonors")}
					className={`px-4 py-2 rounded-md ${view === "allDonors" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
				>
					All Donors
				</button>
			</div>
			<div className="mt-8">
				{view === "bloodCampAdmin" && <BloodCampAdmin />}
				{view === "getAllCamps" && <GetAllCamps />}
				{view === "allDonors" && <AllDonors />}
			</div>
		</div>
	);
};

export default BloodCampStaffDashboard;
