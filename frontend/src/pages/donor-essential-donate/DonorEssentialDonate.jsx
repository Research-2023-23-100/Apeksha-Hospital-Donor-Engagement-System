import React, { useState, useContext, useEffect } from "react";
import DonorContext from "../../contexts/DonorContext";
import ItemContext from "../../contexts/ItemContext";
import { Link } from "react-router-dom";

const DonorEssentialDonate = () => {
	const { items, dbItems } = useContext(ItemContext);
	const [selectedMonth, setSelectedMonth] = useState("All");
	const [searchTerm, setSearchTerm] = useState("");
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 8;
	const [itemImages, setItemImages] = useState({});

	useEffect(() => {
		// Create a mapping of item names to their images
		const images = {};
		dbItems.forEach((item) => {
			images[item.ItemName] = item.image;
		});
		setItemImages(images);
	}, [dbItems]);

	// Function to handle donation for a specific item
	const handleDonate = (itemName) => {
		// Implement your donation logic here
		console.log(`Donating ${itemName}`);
	};

	// Function to handle month filter
	const handleMonthFilter = (e) => {
		setSelectedMonth(e.target.value);
		setCurrentPage(1); // Reset current page when changing filters
	};

	// Function to handle search input
	const handleSearch = (e) => {
		setSearchTerm(e.target.value);
		setCurrentPage(1); // Reset current page when changing search term
	};

	// Filter items by month and search term
	let filteredItems = selectedMonth === "All" ? items : items.filter((item) => item.Month === selectedMonth);
	filteredItems = filteredItems.filter((item) => item.ItemName.toLowerCase().includes(searchTerm.toLowerCase()));

	// Calculate total pages
	const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

	// Calculate index of the last item on the current page
	const indexOfLastItem = currentPage * itemsPerPage;

	// Calculate index of the first item on the current page
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;

	// Get current items for the current page
	const currentItems = Array.isArray(filteredItems) ? filteredItems?.slice(indexOfFirstItem, indexOfLastItem) : [];

	// Array of all months
	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	// Function to handle pagination
	const handlePagination = (action) => {
		if (action === "prev" && currentPage > 1) {
			setCurrentPage(currentPage - 1);
		} else if (action === "next" && currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
		}
	};

	return (
		<>
			<div className="mt-12 md:mt-24">
				<h2 className="mb-8 text-center text-3xl font-semibold text-gray-800">Current Essential Items</h2>
				<div className="flex justify-center mb-4">
					<input
						type="text"
						placeholder="Search Items..."
						value={searchTerm}
						onChange={handleSearch}
						className="px-4 py-2 border border-gray-300 rounded-md mr-4"
					/>
					<select
						onChange={handleMonthFilter}
						value={selectedMonth}
						className="px-4 py-2 border border-gray-300 rounded-md"
					>
						<option value="All">All Months</option>
						{months.map((month, index) => (
							<option key={index} value={month}>
								{month}
							</option>
						))}
					</select>
				</div>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
				{currentItems.map((item, index) => (
					<div key={index} className="bg-white rounded-xl shadow-lg">
						<div className="overflow-hidden rounded-t-xl">
							{itemImages[item.ItemName] ? (
								<img
									src={itemImages[item.ItemName]}
									alt={item.ItemName}
									className="w-full h-48 object-cover object-center"
								/>
							) : (
								<div className="w-full h-48 bg-gray-200 flex items-center justify-center">No Image Available</div>
							)}
						</div>
						<div className="p-6">
							<h2 className="text-xl font-semibold text-gray-800 mb-2">{item.ItemName}</h2>
							<p className="text-gray-600 mb-4">Quantity Needed: {item.Prediction}</p>
							<div className="flex justify-end">
								<Link to={`/donor/donatation/create/${item.ItemName}`}>
									<button
										onClick={() => handleDonate(item.ItemName)}
										className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
									>
										Donate
									</button>
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="flex justify-center mt-8">
				<button
					onClick={() => handlePagination("prev")}
					className="px-4 py-2 mr-2 bg-black text-white rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 cursor-pointer"
					disabled={currentPage === 1}
				>
					Previous
				</button>
				<button
					onClick={() => handlePagination("next")}
					className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
					disabled={currentPage === totalPages}
				>
					Next
				</button>
			</div>
		</>
	);
};

export default DonorEssentialDonate;
