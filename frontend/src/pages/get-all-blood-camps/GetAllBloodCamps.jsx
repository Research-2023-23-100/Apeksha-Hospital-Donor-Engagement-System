import React, { useState, useEffect } from "react";
import axios from "axios";

function GetAllBloodCamps() {
	const [camps, setCamps] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	//Get all Prediction Values
	useEffect(() => {
		axios.get("http://localhost:5000/campaign").then((response) => {
			setCamps(response.data.data);
			console.log(camps);
		});
	}, []);

	// const fetchDataCamps = async () => {
	//   try {
	//     const response = await axios.get('http://localhost:5000/campaign');
	//     setCamps(response.data);
	//     console.log("campzzzz-"+camps)
	//     setLoading(false);
	//   } catch (error) {
	//     setError(error);
	//     setLoading(false);
	//   }
	// };

	if (loading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>Error: {error.message}</p>;
	}

	return (
		<div className="mt-[10rem]">
			<h1>All Blood Donation Camps</h1>
			<div>
				<table>
					<thead>
						<tr>
							<th>Organizer Name</th>
							<th>Mobile</th>
							<th>Email</th>
							<th>Place</th>
							<th>Date</th>
							<th>Expected People Amount</th>
							<th>Marketing Slip</th>
						</tr>
					</thead>
					<tbody>
						{camps.map((camp, index) => (
							<tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"}>
								<td className="px-8 py-4">{camp.organizerName}</td>
								<td className="px-8 py-4">{camp.mobile}</td>
								<td className="px-4 py-2">{camp.email}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default GetAllBloodCamps;
