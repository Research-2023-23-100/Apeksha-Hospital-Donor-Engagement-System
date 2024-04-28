import React, { useState, useEffect, useContext } from "react";
import ItemContext from "../../contexts/ItemContext";

const DonorEssentialsList = () => {
	const { dbItems } = useContext(ItemContext);
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 8;

	// Sorting items by ItemName in ascending order if dbItems is available and is an array
	const sortedItems = Array.isArray(dbItems) ? dbItems?.slice().sort((a, b) => a.ItemName.localeCompare(b.ItemName)) : [];

	// Logic to calculate index of the first and last item on the current page
	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = sortedItems?.slice(indexOfFirstItem, indexOfLastItem);

	// Logic for pagination
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	const handleDonate = (itemId) => {
		// Handle donation logic here, for example, redirect to donation page or trigger a donation modal
		console.log("Donating item with ID:", itemId);
	};

	// Render loading state if dbItems is not available
	// if (!Array.isArray(dbItems)) {
	// 	return <div>Loading...</div>;
	// }

	// // Render if dbItems is available but empty
	// if (Array.isArray(dbItems) && dbItems.length === 0) {
	// 	return <div>No items available</div>;
	// }

	return (
		<>
			<div className="mt-28 md:mb-4">
				<h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
					Essential Donation Items
				</h2>
			</div>
			<section className="text-gray-600 body-font">
				<div className="container px-5 py-8 mx-auto">
					<div className="flex flex-wrap -m-4">
						{/* Map through displayed items and render cards */}
						{currentItems.map((item) => (
							<div key={item._id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
								<div className="bg-white p-6 rounded-lg border border-gray-300">
									{" "}
									{/* Added border styling */}
									<a className="block relative h-48 overflow-hidden">
										<img alt="ecommerce" className="object-cover object-center w-full h-full block" src={item.image} />
									</a>
									<div className="mt-4">
										<h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
										<h2 className="text-gray-900 title-font text-lg font-medium">{item.ItemName}</h2>
										<button
											onClick={() => handleDonate(item._id)}
											className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
										>
											Donate
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Pagination */}
			<div className="flex justify-center mt-8">
				{Array.from({ length: Math.ceil(sortedItems.length / itemsPerPage) }, (_, i) => (
					<button
						key={i}
						onClick={() => paginate(i + 1)}
						className={`mx-1 px-3 py-1 rounded-lg ${currentPage === i + 1 ? "bg-gray-900 text-white" : "bg-gray-300 text-gray-700"}`}
					>
						{i + 1}
					</button>
				))}
			</div>
		</>
	);
};

export default DonorEssentialsList;
