import React, { useEffect, useState } from "react";
import axios from "axios";
import imageblood from "../../assets/blood-child.jpg";
import BloodDonorCarousel from "../carousel-home";
import DonorContext from "../../contexts/DonorContext";

function CampsPage() {
	const [camps, setCamps] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios
			.get("http://localhost:3000/camp/view-all-camps")
			.then((response) => {
				console.log("All camps:", response.data.data);
				setCamps(response.data.data);
				setLoading(false);
			})
			.catch((error) => {
				console.error("Error fetching camps:", error);
				setLoading(false);
			});
	}, []);

	// Sample top blood donors data
	const topBloodDonors = [
		{ name: "John Doe", donations: 15 },
		{ name: "Jane Smith", donations: 12 },
		{ name: "David Johnson", donations: 10 },
	];

	return (
		<div className="container mx-auto px-4 py-8 flex flex-col md:flex-row mt-[7rem] ml-[3rem]">
			{/* Left Side Column with Image */}
			<div className="md:w-1/3">
				{/* <img src={imageblood} alt="Camp Image" className="w-full rounded-md shadow-md mb-4" /> */}
				<BloodDonorCarousel />
			</div>

			{/* Right Side Column with Who Can Donate Blood, Top Blood Donors, and Upcoming Events */}
			<div className="md:w-1/3 md:ml-4">
				{/* Who Can Donate Blood Section */}
				<section className="mb-8 w-full ml-5">
					<h2 className="text-2xl font-bold mb-4">Who Can Donate Blood</h2>
					<p>
						<strong>Donate Blood</strong>
					</p>
					<p>
						<br />
						The person must fulfill several criteria to be accepted as a blood donor. These criteria are set forth to
						ensure the safety of the donor as well as the quality of donated blood.
					</p>
					<br />

					<p>
						<strong>Donor Selection Criteria</strong>
						<br />
						<br />
						Age above 18 years and below 60 years.
						<br />
						If previously donated, at least 4 months should be elapsed since the date of previous donation.
						<br />
						Hemoglobin level should be more than 12g/dL. (this blood test is done prior to each blood donation)
						<br />
						Free from any serious disease condition or pregnancy.
						<br />
						Should have a valid identity card or any other document to prove the identity.
					</p>
					{/* Add more text and details as needed */}
				</section>

				{/* Display All Camps Section */}
				<section className="mt-[5rem]">
					{/* Upcoming Events */}
					<section className="mb-8 ">
						<h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
						{/* Add your upcoming events component here */}
					</section>
					{loading ? (
						<p>Loading...</p>
					) : camps.length === 0 ? (
						<p>No camps available</p>
					) : (
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
							{camps.map((camp) => (
								<div key={camp._id} className="bg-white shadow-md rounded-md p-4">
									<h3 className="text-xl font-semibold mb-2">{camp.organizerName}</h3>
									<p>Date: {new Date(camp.date).toLocaleDateString()}</p>
									{/* Add more details here as needed */}
								</div>
							))}
						</div>
					)}
				</section>
			</div>
			{/* Top Blood Donors */}
			<section className="mb-8 w-[15rem] ml-[6rem]">
				<h2 className="text-2xl font-bold mb-4">Top Blood Donors</h2>
				<div className="flex flex-col">
					{topBloodDonors.map((donor, index) => (
						<div key={index} className="bg-white shadow-md rounded-md p-4 mb-4">
							<h3 className="text-xl font-semibold mb-2">{donor.name}</h3>
							<p>Donations: {donor.donations}</p>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}

export default CampsPage;
