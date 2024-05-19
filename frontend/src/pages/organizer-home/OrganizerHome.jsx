import React from "react";
import handbookPDF from "../../assets/donationorg.pdf"; // Assuming the PDF file is in the same directory
import Carousel from "../carousel-home";
import { Link } from "react-router-dom";

function OrganizerHome() {
	return (
		<div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between mt-[8rem] ml-[5rem]">
			<div className="lg:w-1/2">
				<h1 className="text-3xl lg:text-5xl font-bold text-center lg:text-left mb-4">Welcome to </h1>
				<h1 className="text-3xl lg:text-5xl font-bold text-center lg:text-left mb-4">
					Blood Donation Campaign Organizer
				</h1>
				<p className="text-lg lg:text-xl text-center lg:text-left mb-8">
					"The gift of blood is the gift of life. There is no substitute for human blood."
				</p>

				<div className="flex flex-col items-center space-y-4">
					<a
						href={handbookPDF}
						download="donation_camp_handbook.pdf"
						className=" px-4 py-2 mt-5 font-bold text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:shadow-outline "
					>
						Organizer Handbook
					</a>
					<Link to="/org/camp-prediction">
						<a className="w-1/2 px-4 py-2 mt-5 font-bold text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:shadow-outline">
							Organize Blood Camp
						</a>
					</Link>
				</div>
			</div>
			<div className="lg:w-1/2 lg:ml-12 mt-8 lg:mt-0">
				<Carousel />
			</div>
		</div>
	);
}

export default OrganizerHome;
