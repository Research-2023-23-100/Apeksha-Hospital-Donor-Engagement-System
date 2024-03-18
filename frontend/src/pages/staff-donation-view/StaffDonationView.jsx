import React, { useContext, useState, useEffect } from "react";
import DonationRequestContext from "../../contexts/DonationRequestContext";

const StaffDonationView = () => {
	const { donations, changeStatus } = useContext(DonationRequestContext);
	const [currentPage, setCurrentPage] = useState("Essential");

	const handlePageChange = (page) => {
		setCurrentPage(page);
	};

	const handleStatusChange = async (id, newStatus) => {
		try {
			const values = {
				id: id,
				status: newStatus,
			};

			changeStatus(values);

			location.reload();
		} catch (error) {
			console.error("Error updating status:", error);
		}
	};

	// Rendering content based on currentPage

	const renderContent = () => {
		switch (currentPage) {
			case "Essential":
				return (
					<div>
						<div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10 mt-6">
							<table className="w-full table-fixed gap-10">
								<thead>
									<tr className="bg-gray-100">
										<th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold">Item Name</th>
										<th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold">Quantity</th>
										<th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold">Donor Name</th>
										<th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold">Donor Email</th>
										<th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold">Hand Over Date</th>
										<th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold">Donation Type</th>
										<th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold">Change Status</th>
										<th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold">Status</th>
									</tr>
								</thead>
								<tbody className="bg-white">
									{donations
										.filter((elem) => elem.donationType === "ESSENTIAL")
										.map((elem) => (
											<tr key={elem.id}>
												<td className="py-4 px-6 border-b border-gray-200">{elem.ItemName}</td>
												<td className="py-4 px-6 border-b border-gray-200 truncate">{elem.quantity}</td>
												<td className="py-4 px-6 border-b border-gray-200">{elem.name}</td>
												<td className="py-4 px-6 border-b border-gray-200">{elem.email}</td>
												<td className="py-4 px-6 border-b border-gray-200">{elem.date?.slice(0, 10)}</td>
												<td className="py-4 px-6 border-b border-gray-200">{elem.donationType}</td>
												<td className="border px-4 py-2">
													<select
														className="border rounded-md px-2 py-1"
														value={elem.status}
														onChange={(e) => handleStatusChange(elem._id, e.target.value)}
													>
														<option value="PENDING">Pending</option>
														<option value="ACCEPTED">Accepted</option>
														<option value="COMPLETED">Completed</option>
														<option value="REJECT">Rejected</option>
													</select>
												</td>
												<td className="py-4 px-6 border-b border-gray-200">
													<span
														className={`py-1 px-2 font-bold rounded-full text-xs ${
															elem.status === "REJECT"
																? "bg-red-500 text-white"
																: elem.status === "PENDING"
																	? "bg-orange-500 text-white"
																	: elem.status === "COMPLETED"
																		? "bg-green-500 text-white"
																		: elem.status === "ACCEPTED"
																			? "bg-green-500 text-white"
																			: ""
														}`}
													>
														{elem.status}
													</span>
												</td>
											</tr>
										))}
								</tbody>
							</table>
						</div>
					</div>
				);
			case "Medication":
				return (
					<div>
						<div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10 mt-6">
							<table className="w-full table-fixed">
								<thead>
									<tr className="bg-gray-100">
										<th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold">Item Name</th>
										<th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold">Quantity</th>
										<th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold">Donor Name</th>
										<th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold">Donor Email</th>
										<th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold">Hand Over Date</th>
										<th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold">Donation Type</th>
										<th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold">Change Status</th>
										<th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold">Status</th>
									</tr>
								</thead>
								<tbody className="bg-white">
									{donations
										.filter((elem) => elem.donationType === "MEDICATION")
										.map((elem) => (
											<tr key={elem.id}>
												<td className="py-4 px-6 border-b border-gray-200 gap-10">{elem.ItemName}</td>
												<td className="py-4 px-6 border-b border-gray-200 truncate">{elem.quantity}</td>
												<td className="py-4 px-6 border-b border-gray-200">{elem.name}</td>
												<td className="py-4 px-6 border-b border-gray-200">{elem.email}</td>
												<td className="py-4 px-6 border-b border-gray-200">{elem.date?.slice(0, 10)}</td>
												<td className="py-4 px-6 border-b border-gray-200">{elem.donationType}</td>
												<td className="border px-4 py-2">
													<select
														className="border rounded-md px-2 py-1"
														value={elem.status}
														onChange={(e) => handleStatusChange(elem._id, e.target.value)}
													>
														<option value="PENDING">Pending</option>
														<option value="ACCEPTED">Accepted</option>
														<option value="COMPLETED">Completed</option>
														<option value="REJECT">Rejected</option>
													</select>
												</td>
												<td className="py-4 px-6 border-b border-gray-200">
													<span
														className={`py-1 px-2 font-bold rounded-full text-xs ${
															elem.status === "REJECT"
																? "bg-red-500 text-white"
																: elem.status === "PENDING"
																	? "bg-orange-500 text-white"
																	: elem.status === "COMPLETED"
																		? "bg-green-500 text-white"
																		: elem.status === "ACCEPTED"
																			? "bg-green-500 text-white"
																			: ""
														}`}
													>
														{elem.status}
													</span>
												</td>
											</tr>
										))}
								</tbody>
							</table>
						</div>
					</div>
				);
			default:
				return <h1>Essential Page</h1>;
		}
	};

	return (
		<div>
			<div className="md:mt-16">
				<h2 className="mb-8 text-center text-3xl font-semibold text-gray-800">Donation Request</h2>
			</div>
			<div className="flex gap-8 justify-center">
				<button
					onClick={() => handlePageChange("Essential")}
					className="py-2.5 px-6 rounded-lg text-sm font-medium bg-green-500 text-white"
				>
					Essential
				</button>
				<button
					onClick={() => handlePageChange("Medication")}
					className="py-2.5 px-6 rounded-lg text-sm font-medium text-white bg-red-500"
				>
					Medication
				</button>
			</div>

			{renderContent()}
		</div>
	);
};

export default StaffDonationView;
