import React, { useContext, useState, useEffect } from "react";
import DonationRequestContext from "../../contexts/DonationRequestContext";

const DonorEssentialView = () => {
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
										<th className="w-1/4 py-4 px-20 text-left text-gray-600 font-bold">Hand Over Date</th>
										<th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold">Donation Type</th>
										<th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold">Status</th>
									</tr>
								</thead>
								<tbody className="bg-white">
									{donations
										.filter((elem) => elem.donationType === "ESSENTIAL" && elem.email===localStorage.getItem('email'))
										.map((elem) => (
											<tr key={elem.id}>
												<td className="py-4 px-6 border-b border-gray-200">{elem.ItemName}</td>
												<td className="py-4 px-6 border-b border-gray-200 truncate">{elem.quantity}</td>
												<td className="py-4 px-6 border-b border-gray-200">{elem.name}</td>
												<td className="py-4 px-6 border-b border-gray-200">{elem.email}</td>
												<td className="py-4 px-20 border-b border-gray-200">{elem.date?.slice(0, 10)}</td>
												<td className="py-4 px-6 border-b border-gray-200">{elem.donationType}</td>
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
			
            }
export default DonorEssentialView;
