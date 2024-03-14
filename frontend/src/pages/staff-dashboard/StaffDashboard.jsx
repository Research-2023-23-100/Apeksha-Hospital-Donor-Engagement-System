import React, { useContext, useState } from "react";
import StaffContext from "../../contexts/StaffContext";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line, Scatter } from "react-chartjs-2";
import { Link } from "react-router-dom";
import ItemContext from "../../contexts/ItemContext";

const StaffDashboard = () => {

	const { items } = useContext(ItemContext)
	// const uniqueItemNames = Array.from(new Set(items.map(elem => elem.ItemName)));

	// Prepare data for Scatter plot
	const scatterData = {
		datasets: [{
			label: 'Bar Chart for Predicted Values and Items',
			data: items.map(elem => ({ x: elem.ItemName, y: elem.Prediction })),
			backgroundColor: [
				'rgba(255, 99, 132, 0.6)',
				'rgba(54, 162, 235, 0.6)',
				'rgba(255, 206, 86, 0.6)',
				'rgba(75, 192, 192, 0.6)',
				'rgba(153, 102, 255, 0.6)',
				'rgba(255, 159, 64, 0.6)'
				// Add more colors if needed
			],
		}]
	};

	const scatterOptions = {
		maintainAspectRatio: true,
		scales: {
			x: {
				title: {
					display: true,
					text: 'Item Name'
				}
			},
			y: {
				title: {
					display: true,
					text: 'Predicted Value'
				}
			}
		}
	};

	return (
		<>

			{/* <div className="flex justify-center ml-32">
				<div className="grid grid-cols-1 gap-8 p-10 mt-24 lg:grid-cols-2 xl:grid-cols-4">
					<button
						role="tab"
						type="button"
						className="flex whitespace-nowrap items-center h-8 px-5 font-medium rounded-lg outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-inset text-yellow-600 shadow bg-white dark:text-white dark:bg-yellow-600"
						aria-selected={showBarChart}
						onClick={handleMedicationButtonClick}
					>
						Medication
					</button>
					<button
						role="tab"
						type="button"
						className="flex whitespace-nowrap items-center h-8 px-5 font-medium rounded-lg outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-inset hover:text-gray-800 focus:text-yellow-600 dark:text-gray-400 dark:hover:text-gray-300 dark:focus:text-gray-400"
						aria-selected={!showBarChart}
						onClick={handleEssentialsButtonClick}
					>
						Essentials
					</button>
				</div>
			</div> */}

			<div className="grid grid-cols-1 gap-8 p-10 lg:grid-cols-2 xl:grid-cols-4 mt-24">
				{/* Value card */}
				<div className="flex items-center shadow justify-between p-4 bg-white rounded-md dark:bg-darker">
					<div>
						<h6 className="text-xs font-medium leading-none tracking-wider text-gray-500 uppercase dark:text-primary-light">
							Donation
						</h6>
						<span className="text-xl font-semibold">$30,000</span>
						<span className="inline-block px-2 py-px ml-2 text-xs text-green-500 bg-green-100 rounded-md">
							+4.4%
						</span>
					</div>
					<div>
						<span>
							<svg className="w-12 h-12 text-gray-300 dark:text-primary-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
							</svg>
						</span>
					</div>
				</div>
				{/* Users card */}
				<div className="flex items-center shadow justify-between p-4 bg-white rounded-md dark:bg-darker">
					<div>
						<h6 className="text-xs font-medium leading-none tracking-wider text-gray-500 uppercase dark:text-primary-light">
							Donors
						</h6>
						<span className="text-xl font-semibold">50,021</span>
						<span className="inline-block px-2 py-px ml-2 text-xs text-green-500 bg-green-100 rounded-md">
							+2.6%
						</span>
					</div>
					<div>
						<span>
							<svg className="w-12 h-12 text-gray-300 dark:text-primary-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
							</svg>
						</span>
					</div>
				</div>
				{/* Orders card */}
				<div className="flex items-center shadow justify-between p-4 bg-white rounded-md dark:bg-darker">
					<div>
						<h6 className="text-xs font-medium leading-none tracking-wider text-gray-500 uppercase dark:text-primary-light">
							Medication
						</h6>
						<span className="text-xl font-semibold">45,021</span>
						<span className="inline-block px-2 py-px ml-2 text-xs text-green-500 bg-green-100 rounded-md">
							+3.1%
						</span>
					</div>
					<div>
						<span>
							<svg className="w-12 h-12 text-gray-300 dark:text-primary-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
							</svg>
						</span>
					</div>
				</div>
				{/* Tickets card */}
				<div className="flex items-center shadow justify-between p-4 bg-white rounded-md dark:bg-darker">
					<Link to="/staff/item/">
						<div>
							<h6 className="text-xs font-medium leading-none tracking-wider text-gray-500 uppercase dark:text-primary-light">
								Essential Items
							</h6>
							<span className="text-xl font-semibold">20,516</span>
							<span className="inline-block px-2 py-px ml-2 text-xs text-green-500 bg-green-100 rounded-md">
								+3.1%
							</span>
						</div>
					</Link>
					<div>
						<span>
							<svg className="w-12 h-12 text-gray-300 dark:text-primary-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path>
							</svg>
						</span>
					</div>
				</div>
			</div>


			{/* Table and Bar Chart */}
			<div className="flex flex-col md:flex-row items-center justify-start ml-2">


				<div className="relative ml-60" style={{ paddingBottom: "25%", width: "50%", height: "50%" }}>
					<div className="absolute inset-0 flex items-center justify-center">
						{/* Render your Scatter plot component here */}
						<Bar data={scatterData} options={scatterOptions} />
					</div>


				</div>

			</div>
			<div className="w-full md:w-2/3 lg:w-3/4 xl:w-3/4 overflow-x-auto mx-36 my-6">
				<table className="min-w-full bg-white rounded-lg overflow-hidden">
					<thead>
						<tr>
							<th className="px-6 py-3 border-b border-black bg-black text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">Item Name</th>
							<th className="px-6 py-3 border-b border-black bg-black text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">Month</th>
							<th className="px- py-3 border-b border-black bg-black text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">Predicted Value</th>
						</tr>
					</thead>
					<tbody>
						{items.slice(0, 6).map((elem, index) => (
							<tr key={index}>
								<td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200">{elem.ItemName}</td>
								<td className="px-6 py-2 whitespace-no-wrap border-b border-gray-200">{elem.Month}</td>
								<td className="px-6 py-2 whitespace-no-wrap border-b border-gray-200">{elem.Prediction}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>





		</>
	);
};

export default StaffDashboard;
