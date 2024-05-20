import React, { useState, useContext, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import ItemContext from "../../contexts/ItemContext";
import { Link } from "react-router-dom";

const StaffViewAllItems = () => {
	const { dbItems, addStock, getOneDbItem, removeStock, deleteDbItem } = useContext(ItemContext);
	const [selectedItem, setSelectedItem] = useState(null);
	const [quantity, setQuantity] = useState(0);
	const [quantityToAdd, setQuantityToAdd] = useState(0);
	const [showModal, setShowModal] = useState(false);
	const [updatedQuantityCount, setUpdatedQuantityCount] = useState(0);
	const [selectedId, setSelectedId] = useState(null);
	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		if (selectedItem) {
			setSelectedId(selectedItem.id);
		}
	}, [selectedItem]);

	useEffect(() => {
		if (selectedItem) {
			setQuantity(selectedItem.QuantityInStock);
		}
	}, [selectedItem]);

	const handleAddQuantity = () => {
		const newQuantity = quantity + parseInt(quantityToAdd);
		setQuantity(Math.max(newQuantity, 0)); // Ensure quantity doesn't go below 0
	};

	const handleSubtractQuantity = () => {
		const newQuantity = quantity - parseInt(quantityToAdd);
		setQuantity(Math.max(newQuantity, 0)); // Ensure quantity doesn't go below 0
	};

	const handleIncrement = async () => {
		if (selectedItem) {
			console.log(parseInt(quantityToAdd));
			await addStock(selectedItem._id, parseInt(quantityToAdd)); // Use selectedItem._id instead of selectedItem.ItemID
			const updatedItem = await getOneDbItem(selectedItem._id); // Use selectedItem._id instead of selectedItem.ItemID
			setSelectedItem(updatedItem);
			setQuantity(updatedItem.QuantityInStock);
			setUpdatedQuantityCount(updatedItem.QuantityInStock);
			console.log("Submitted quantity:", updatedItem.QuantityInStock);
		}
	};

	const handleDecrement = async () => {
		if (selectedItem) {
			console.log(parseInt(quantityToAdd));
			await removeStock(selectedItem._id, parseInt(quantityToAdd)); // Use selectedItem._id instead of selectedItem.ItemID
			const updatedItem = await getOneDbItem(selectedItem._id); // Use selectedItem._id instead of selectedItem.ItemID
			setSelectedItem(updatedItem);
			setQuantity(updatedItem.QuantityInStock);
			setUpdatedQuantityCount(updatedItem.QuantityInStock);
			console.log("Submitted quantity:", updatedItem.QuantityInStock);
		}
	};

	const handleOpenModal = (itemId) => {
		const selectedItem = dbItems.find((item) => item._id === itemId);
		setSelectedId(selectedItem.id);
		setSelectedItem(selectedItem);
		setQuantity(selectedItem.QuantityInStock);
		setQuantityToAdd(0); // Reset quantityToAdd when opening the modal
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setSelectedItem(null);
		setShowModal(false);
	};

	const handleCreateNewItem = () => {
		// Implement logic to create a new item
		console.log("Creating a new item...");
	};

	return (
		<>
			<div className="mt-24 md:mb-4">
				<h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
					Essential Inventory Items List
				</h2>
			</div>
			<label
				className="mx-auto mt-8 relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
				htmlFor="search-bar"
			>
				<input
					id="search-bar"
					placeholder="your keyword here"
					className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white"
					onChange={(event) => {
						setSearchTerm(event.target.value);
					}}
				/>
				<button className="w-full md:w-auto px-6 py-3 bg-black border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all disabled:opacity-70">
					<div className="relative">
						{/* Loading animation change opacity to display */}
						<div className="flex items-center justify-center h-3 w-3 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
							<svg
								className="opacity-0 animate-spin w-full h-full"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
							>
								<circle className="opacity-25" cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={4} />
								<path
									className="opacity-75"
									fill="currentColor"
									d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
								></path>
							</svg>
						</div>
						<div className="flex items-center transition-all opacity-1 valid:">
							<span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">Search</span>
						</div>
					</div>
				</button>
			</label>

			<div className="flex justify-end mt-4">
				<Link to="/staff/item/create">
					<button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full mr-12">
						Create New Item
					</button>
				</Link>
			</div>

			<div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10 mt-8">
				<table className="w-full table-fixed">
					<thead>
						<tr className="bg-gray-100">
							<th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold">Image</th>
							<th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold">Item Name</th>
							<th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold">Item Code</th>
							<th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold">Quantity In Stock</th>
							<th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold">Quantity Status</th>
							<th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold">Action</th>
							<th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold">Action</th>
						</tr>
					</thead>
					<tbody className="bg-white">
						{dbItems
							.filter((val) => {
								if (searchTerm === "") {
									return val;
								} else if (val.ItemName.toLowerCase().includes(searchTerm.toLowerCase())) {
									return val;
								}
							})
							.map((elem) => (
								<tr key={elem._id}>
									<td className="py-4 px-6 border-b border-gray-200">
										<img
											src={elem.image}
											alt={elem.ItemName}
											style={{ width: "100px", height: "100px" }}
											className="object-cover"
										/>
									</td>
									<td className="py-4 px-6 border-b border-gray-200">{elem.ItemName}</td>
									<td className="py-4 px-6 border-b border-gray-200 truncate">{elem.ItemID}</td>
									<td className="py-4 px-6 border-b border-gray-200">{elem.QuantityInStock}</td>
									<td className="py-4 px-6 border-b border-gray-200">
										{elem.QuantityInStock < 50 ? (
											<span className="bg-red-500 text-white py-1 px-2 rounded-full font-bold text-xs">Low</span>
										) : elem.QuantityInStock >= 50 && elem.QuantityInStock <= 100 ? (
											<span className="bg-yellow-500 text-white py-1 px-2 rounded-full font-bold text-xs">Average</span>
										) : (
											<span className="bg-green-500 text-white py-1 px-2 rounded-full font-bold text-xs">Good</span>
										)}
									</td>
									<td className="py-4 px-6 border-b border-gray-200">
										<button
											onClick={() => handleOpenModal(elem._id)}
											className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
										>
											<FaEdit />
										</button>
									</td>

									<td className="py-4 px-6 border-b border-gray-200">
										<button
											onClick={() => deleteDbItem(elem._id)}
											className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
										>
											<FaTrash />
										</button>
									</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>

			{/* Popup Modal */}
			{showModal && (
				<div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
					<div className="bg-white p-8 rounded-lg shadow-lg">
						<h2 className="text-xl font-bold mb-4">Edit Quantity</h2>
						<p>Item: {selectedItem && selectedItem.ItemName}</p>
						<p>Current Quantity: {quantity}</p>
						<p>Current Quantity: {selectedItem._id}</p>
						<div className="flex justify-between mt-4">
							<input
								type="number"
								value={quantityToAdd}
								onChange={(e) => setQuantityToAdd(e.target.value)}
								className="px-3 py-2 border border-gray-300 rounded-md w-1/3"
							/>
							<button
								onClick={handleAddQuantity}
								className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
							>
								+
							</button>
							<button
								onClick={handleSubtractQuantity}
								className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
							>
								-
							</button>
						</div>
						<div className="flex justify-end mt-4">
							<button
								onClick={handleIncrement}
								className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-4 rounded-full"
							>
								Increment
							</button>
							<button
								onClick={handleDecrement}
								className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
							>
								Decrement
							</button>
							<button
								onClick={handleCloseModal}
								className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full ml-4"
							>
								Close
							</button>
						</div>
						{updatedQuantityCount !== 0 && <p className="mt-4">Updated Quantity: {updatedQuantityCount}</p>}
					</div>
				</div>
			)}
		</>
	);
};

export default StaffViewAllItems;
