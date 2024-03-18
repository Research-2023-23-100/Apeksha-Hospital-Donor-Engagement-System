import React, { useContext, useState } from "react";
import StaffContext from "../../contexts/StaffContext";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line, Scatter } from "react-chartjs-2";
import { Link } from "react-router-dom";
import ItemContext from "../../contexts/ItemContext";

const StaffDashboard = () => {
	const { items } = useContext(ItemContext);
	const [selectedMonth, setSelectedMonth] = useState("");

	// Function to handle dropdown change
	const handleMonthChange = (event) => {
		setSelectedMonth(event.target.value);
	};

	// Filtered items based on selected month
	const filteredItems = selectedMonth ? items.filter((elem) => elem.Month === selectedMonth) : items;

	// Scatter plot data
	const scatterData = {
		datasets: [
			{
				label: "Bar Chart for Predicted Values and Items",
				data: filteredItems.map((elem) => ({ x: elem.ItemName, y: elem.Prediction })),
				backgroundColor: [
					"rgba(255, 99, 132, 0.6)",
					"rgba(54, 162, 235, 0.6)",
					"rgba(255, 206, 86, 0.6)",
					"rgba(75, 192, 192, 0.6)",
					"rgba(153, 102, 255, 0.6)",
					"rgba(255, 159, 64, 0.6)",
					"rgba(255, 0, 0, 0.6)", // Red
					"rgba(0, 255, 0, 0.6)", // Green
					"rgba(0, 0, 255, 0.6)", // Blue
					"rgba(255, 255, 0, 0.6)", // Yellow
					"rgba(0, 255, 255, 0.6)", // Cyan
					"rgba(255, 0, 255, 0.6)", // Magenta
					"rgba(128, 128, 128, 0.6)", // Gray
					"rgba(255, 128, 0, 0.6)", // Orange
				],
			},
		],
	};

	// Scatter plot options
	const scatterOptions = {
		maintainAspectRatio: true,
		scales: {
			x: {
				title: {
					display: true,
					text: "Item Name",
				},
			},
			y: {
				title: {
					display: true,
					text: "Predicted Value",
				},
			},
		},
	};

	return (
		<>
		
			<div className="grid grid-cols-1 gap-8 p-10 lg:grid-cols-2 xl:grid-cols-4">
				{/* Value card */}
				<div className="flex items-center shadow justify-between p-4 bg-white rounded-md dark:bg-darker">
					<Link to="/staff/medication/donate/">
						<div>
							<h6 className="text-xs font-bold leading-none tracking-wider text-black uppercase dark:text-primary-light">
								Donation
							</h6>

						</div>
					</Link>
					<div>
						<span>
							<svg
								className="w-12 h-12 text-gray-300 dark:text-primary-dark"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								></path>
							</svg>
						</span>
					</div>
				</div>
				{/* Users card */}
				<div className="flex items-center shadow justify-between p-4 bg-white rounded-md dark:bg-darker">
					<Link to="/staff/essential/donate/">
						<div>
							<h6 className="text-xs font-bold leading-none tracking-wider text-black uppercase dark:text-primary-light">
								Donors
							</h6>
						</div>
					</Link>
					<div>
						<span>
							<svg
								className="w-12 h-12 text-gray-300 dark:text-primary-dark"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
								></path>
							</svg>
						</span>
					</div>
				</div>
				{/* Orders card */}

				<div className="flex items-center shadow justify-between p-4 bg-white rounded-md dark:bg-darker">
					<Link to="/staff/essentials">
						<div>
							<h6 className="text-xs font-bold leading-none tracking-wider text-black uppercase dark:text-primary-light">
								Essentials Items Prediction
							</h6>
						</div>
					</Link>
					<div>
						<span>
							<svg
								className="w-12 h-12 text-gray-300 dark:text-primary-dark"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
								></path>
							</svg>
						</span>
					</div>
				</div>
				{/* Tickets card */}
				<div className="flex items-center shadow justify-between p-4 bg-white rounded-md dark:bg-darker">
					<Link to="/staff/item/">
						<div>
							<h6 className="text-xs font-bold leading-none tracking-wider text-black uppercase dark:text-primary-light">
								Essential Items
							</h6>
						</div>
					</Link>
					<div>
						<span>
							<svg
								className="w-12 h-12 text-gray-300 dark:text-primary-dark"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
								></path>
							</svg>
						</span>
					</div>
				</div>
			</div>

			{/* Table and Bar Chart */}
			<div className="flex flex-col md:flex-row items-center justify-start ml-2">
				<div className="relative ml-72" style={{ paddingBottom: "25%", width: "50%", height: "50%" }}>
					<div className="absolute inset-0 flex items-center justify-center">
						{/* Render your Scatter plot component here */}
						<Bar data={scatterData} options={scatterOptions} />
					</div>
				</div>
				<div className="relative">
					{/* Dropdown menu for selecting month */}
					<select
						value={selectedMonth}
						onChange={handleMonthChange}
						className="ml-10 mb-40 appearance-none bg-white border border-gray-400 rounded-lg py-2 px-4 pr-8 focus:outline-none focus:border-blue-500"
					>
						<option value="">Select Month</option>
						<option value="January">January</option>
						<option value="February">February</option>
						<option value="March">March</option>
						<option value="April">April</option>
						<option value="May">May</option>
						<option value="June">June</option>
						<option value="July">July</option>
						<option value="August">August</option>
						<option value="September">September</option>
						<option value="October">October</option>
						<option value="November">November</option>
						<option value="December">December</option>
					</select>
					<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
						<svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
							<path
								fill-rule="evenodd"
								d="M7.293 8.707a1 1 0 011.414 0L10 10.586l1.293-1.293a1 1 0 111.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414zM10 4a1 1 0 100 2 1 1 0 000-2z"
								clip-rule="evenodd"
							></path>
						</svg>
					</div>
				</div>
			</div>
		</>
	);
};

export default StaffDashboard;
