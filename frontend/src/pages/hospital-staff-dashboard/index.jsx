import React, { useContext, useState, useEffect, useRef } from "react";
import MedicationDashboard from "../medication-dashboard";
import StaffDashboard from "../staff-dashboard";
import BloodCampAdmin from "../blood-camp-admin-panel";
import StaffDonationView from "../staff-donation-view";
import { Link } from "react-router-dom";

const HospitalStaffDashboard = () => {
	const [type, setType] = useState("general");

	return (
		<div className="container mx-auto mt-28">
			<div className="md:mt-16">
				<h2 className="mb-8 text-center text-3xl font-bold text-gray-800">Staff Dashboard</h2>
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 mt-8">
				{/* Value card */}
				<div
					className={`flex ${type === "general" ? "bg-gray-100 border-2 border-gray-300 font-bold shadow-2xl hover:bg-gray-800" : "bg-white  hover:bg-gray-800"}items-center shadow p-4  rounded-md dark:bg-darker`}
				>
					<button onClick={() => setType("general")} className="w-full">
						<div>
							<h6 className="text-xs font-medium leading-none tracking-wider text-black uppercase dark:text-primary-light">
								General
							</h6>
						</div>
					</button>
					<div>
						<span className="text-gray-300 dark:text-primary-dark">
							<svg
								className="w-12 h-12"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</span>
					</div>
				</div>
				{/* Users card */}
				<div
					className={`flex ${type === "essentials" ? "bg-gray-100 border-2 border-gray-300 font-bold shadow-2xl hover:bg-gray-800" : "bg-white  hover:bg-gray-800"}items-center shadow p-4  rounded-md dark:bg-darker`}
				>
					<button onClick={() => setType("essentials")} className="w-full">
						<div>
							<h6 className="text-xs font-bold leading-none tracking-wider text-black uppercase dark:text-primary-light">
								Essentials
							</h6>
						</div>
					</button>
					<div>
						<span className="text-gray-300 dark:text-primary-dark">
							<svg
								className="w-12 h-12"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</span>
					</div>
				</div>
				{/* Orders card */}
				<div
					className={`flex ${type === "medication" ? "bg-gray-100 border-2 border-gray-300 font-bold shadow-2xl hover:bg-gray-800" : "bg-white  hover:bg-gray-800"}items-center shadow p-4  rounded-md dark:bg-darker`}
				>
					<button onClick={() => setType("medication")} className="w-full">
						<div>
							<h6 className="text-xs font-bold leading-none tracking-wider text-black uppercase dark:text-primary-light">
								Medication
							</h6>
						</div>
					</button>
					<div>
						<span className="text-gray-300 dark:text-primary-dark">
							<svg
								className="w-12 h-12"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</span>
					</div>
				</div>
				{/* Tickets card */}
				<div
					className={`flex ${type === "blood" ? "bg-gray-100 border-2 border-gray-300 font-bold shadow-2xl hover:bg-gray-800" : "bg-white  hover:bg-gray-800"}items-center shadow p-4  rounded-md dark:bg-darker`}
				>
					<button onClick={() => setType("blood")} className="w-full">
						<div>
							<h6 className="text-xs font-bold leading-none tracking-wider text-black uppercase dark:text-primary-light">
								Blood Donation
							</h6>
						</div>
					</button>
					<div>
						<span className="text-gray-300 dark:text-primary-dark">
							<svg
								className="w-12 h-12"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</span>
					</div>
				</div>
			</div>
			<div className="mt-8">
				{type === "essentials" ? (
					<StaffDashboard />
				) : type === "medication" ? (
					<MedicationDashboard />
				) : type === "blood" ? (
					<BloodCampAdmin />
				) : type === "general" ? (
					<StaffDonationView />
				) : (
					<div>hello</div>
				)}
			</div>
		</div>
	);
};

export default HospitalStaffDashboard;
