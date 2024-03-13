import React, { useState, useContext, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import ItemContext from "../../contexts/ItemContext";

const StaffViewAllItems = () => {
	const { dbItems, addStock, getOneDbItem, removeStock } = useContext(ItemContext);
	const [selectedItem, setSelectedItem] = useState(null);
	const [quantity, setQuantity] = useState(0);
	const [quantityToAdd, setQuantityToAdd] = useState(0);
	const [showModal, setShowModal] = useState(false);
	const [updatedQuantityCount, setUpdatedQuantityCount] = useState(0);
	const [selectedId, setSelectedId] = useState(null);

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

	return (
		<>
			<div className="mt-24 md:mb-4">
				<h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
					Essential Inventory Items List
				</h2>
			</div>
			<div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10 mt-4">
				<table className="w-full table-fixed">
					<thead>
						<tr className="bg-gray-100">
							<th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold">Item ID</th>
							<th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold">Item Name</th>
							<th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold">Item Code</th>
							<th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold">Quantity In Stock</th>
							<th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold">Quantity Status</th>
							<th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold">Action</th>
						</tr>
					</thead>
					<tbody className="bg-white">
						{dbItems.map((elem) => (
							<tr key={elem._id}>
								<td className="py-4 px-6 border-b border-gray-200">{elem._id}</td>
								<td className="py-4 px-6 border-b border-gray-200">{elem.ItemName}</td>
								<td className="py-4 px-6 border-b border-gray-200 truncate">{elem.ItemID}</td>
								<td className="py-4 px-6 border-b border-gray-200">{elem.QuantityInStock}</td>
								<td className="py-4 px-6 border-b border-gray-200">
									{elem.QuantityInStock < 50 ? (
										<span className="bg-red-500 text-white py-1 px-2 rounded-full text-xs">Running-Out-Stock</span>
									) : (
										<span className="bg-green-500 text-white py-1 px-2 rounded-full text-xs">In Stock</span>
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
