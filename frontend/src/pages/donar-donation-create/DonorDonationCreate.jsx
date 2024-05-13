import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DonationRequestContext from "../../contexts/DonationRequestContext";

const DonorDonationCreate = () => {
	const { addDonation } = useContext(DonationRequestContext);
	const { itemName } = useParams(); // Accessing the parameter from the URL

	const email = localStorage.getItem("email");
	const name = localStorage.getItem("name");

	const [quantity, setQuantity] = useState("");
	const [handoverDate, setHandoverDate] = useState("");
	const [donationType, setDonationType] = useState("ESSENTIAL");

	const handleSubmit = (e) => {
		e.preventDefault();

		const newDonation = {
			ItemName: e.target.ItemName.value,
			quantity: e.target.quantity.value,
			name: e.target.name.value,
			email: e.target.email.value,
			date: e.target.date.value,
			donationType: e.target.donationType.value,
		};

		addDonation(newDonation);
	};

	return (
		<>
			<div className="mt-12 md:mt-32">
				<h2 className="mb-8 text-center text-3xl font-semibold text-gray-800">Make Donation</h2>
			</div>
			<div className="flex items-center justify-center">
				<div className="mx-auto w-full max-w-[550px] bg-white shadow-lg rounded-lg p-8">
					<form onSubmit={handleSubmit} className="space-y-6">
						<div className="mb-5">
							<label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
								Item Name
							</label>
							<input
								type="text"
								id="ItemName"
								placeholder="Item Name"
								className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
								value={itemName}
								readOnly
							/>
						</div>
						<div className="mb-5">
							<label htmlFor="quantity" className="mb-3 block text-base font-medium text-[#07074D]">
								Quantity
							</label>
							<input
								type="number"
								id="quantity"
								placeholder="Enter quantity"
								className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
								value={quantity}
								onChange={(e) => setQuantity(e.target.value)}
							/>
						</div>
						<div className="mb-5">
							<label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
								User Name
							</label>
							<input
								type="email"
								id="name"
								placeholder="Item Name"
								className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
								value={name}
								readOnly
							/>
						</div>
						<div className="mb-5">
							<label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
								Email Address
							</label>
							<input
								type="email"
								id="email"
								placeholder="Item Name"
								className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
								value={email}
								readOnly
							/>
						</div>
						<div className="-mx-3 flex flex-wrap">
							<div className="w-full px-3 sm:w-1/2">
								<div className="mb-5">
									<label htmlFor="date" className="mb-3 block text-base font-medium text-[#07074D]">
										Hand Over Date
									</label>
									<input
										type="date"
										id="date"
										className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
										value={handoverDate}
										onChange={(e) => setHandoverDate(e.target.value)}
									/>
								</div>
							</div>
							<div className="w-full px-3 sm:w-1/2">
								<div className="mb-5">
									<label htmlFor="donationType" className="mb-3 block text-base font-medium text-[#07074D]">
										Donation Type
									</label>
									<select
										name="donationType"
										id="donationType"
										className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
										value={donationType}
										onChange={(e) => setDonationType(e.target.value)}
									>
										<option value="ESSENTIAL">ESSENTIAL</option>
										<option value="MEDICATION">MEDICATION</option>
									</select>
								</div>
							</div>
						</div>
						<div>
							<button
								type="submit"
								className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
							>
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default DonorDonationCreate;
