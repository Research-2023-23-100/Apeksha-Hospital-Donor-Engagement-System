import React, { useContext, useState } from "react";
import ItemContext from "../../contexts/ItemContext";

const StaffCreateItem = () => {
	return (
		<>
			<div className="bg-white py-6 sm:py-8 lg:py-28">
				<div className="mx-auto max-w-screen-2xl px-4 md:px-8">
					<div className="mb-10 md:mb-4">
						<h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Create New Item</h2>
					</div>

					<form className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
						<div>
							<label className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Item Name</label>
							<input
								id="ItemName"
								className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
							/>
						</div>
						<div>
							<label className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Item ID</label>
							<input
								id="ItemID"
								className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
							/>
						</div>
						<div className="sm:col-span-2">
							<label htmlFor="company" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
								Quantity InStock
							</label>
							<input
								id="QuantityInStock"
								className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
								type="number"
							/>
						</div>

						<div className="sm:col-span-2 mt-4">
							<label className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Image</label>
							<input
								type="file"
								id="image"
								className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
							/>
						</div>

						<div className="flex items-center justify-center sm:col-span-2 mt-6">
							<button className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
								Create Item
							</button>
						</div>
					</form>
					{/* form - end */}
				</div>
			</div>
		</>
	);
};

export default StaffCreateItem;
