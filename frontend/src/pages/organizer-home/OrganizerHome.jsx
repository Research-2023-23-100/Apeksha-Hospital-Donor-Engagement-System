import React from "react";
import handbookPDF from "../../assets/donationorg.pdf"; // Assuming the PDF file is in the same directory
import Carousel from "../carousel-home";
import { Link } from "react-router-dom";

function OrganizerHome() {
	return (
		<div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between mt-[7rem] ml-[5rem]">
			<div className="lg:w-1/2">
				<h1 className="text-3xl lg:text-5xl font-bold text-center lg:text-left mb-4">
					Welcome to Blood Donation Camp Organizer
				</h1>
				<p className="text-lg lg:text-xl text-center lg:text-left mb-8">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus libero sit amet risus aliquet.
				</p>
				<div className="flex flex-col items-left">
    <a
        href={handbookPDF}
        download="donation_camp_handbook.pdf"
        className="w-[17rem] px-4 py-2 mt-5 font-bold text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:shadow-outline"
    >
        Download Organizer Handbook
    </a>
    <Link to="/org/camp-prediction" className="mt-5">
        <a className="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:shadow-outline">
            Organize Blood Camp
        </a>
    </Link>
	<Link to="/org/camp-prediction" className="mt-6">
        <a className="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:shadow-outline">
            View my Organized camps
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
