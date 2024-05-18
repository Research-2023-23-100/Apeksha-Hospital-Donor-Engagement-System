import React from "react";
import formImage from "../../assets/bloodbag.png";
import mainImage from "../../assets/main_image.jpg";
import { Link } from "react-router-dom";

function DonorAsk() {
	return (
		<div className="container mx-auto flex items-center justify-center ml-10 mt-16">
			{/* Left side with card view */}
			<div className="flex flex-col justify-center items-center w-1/3">
				<div className="bg-white p-4 ml-5 rounded-lg shadow-md mb-4 items-center justify-center">
					<div className="flex items-center justify-center">
						<img src={formImage} alt="Main" className="w-24 h-24 mb-5" />
					</div>

					{/* Vision text */}
					<div className="text-center">
						<h2 className="text-[3rem] font-semibold mb-2 text-red-500">Our Vision</h2>
						<p className="text-gray-700 text-[20px] mb-10">
							To establish a nationally coordinated system that ensures high-quality blood services, setting a global
							standard for excellence and reliability.
						</p>
					</div>
					<div className="grid grid-cols-3 md:grid-cols-3 gap-2 ">
						{/* First red button with margin-bottom */}
						<Link to="/organizer-login">
							<button className="bg-red-500 text-sm text-white px-4 py-2 rounded-lg">Organizer Login</button>
						</Link>
						<Link to="/organizer-signup">
							<button className="bg-red-500 text-white text-sm px-4 py-2 rounded-lg">Organizer SignUp</button>
						</Link>
						{/* Second red button */}
						<Link to="/donor/login">
						<button className="bg-red-500 text-white text-sm px-4 py-2 rounded-lg">As Donor</button>
						</Link>
					</div>
				</div>
			</div>

			{/* Right side with main image */}
			<div className="w-2/3 mt-10 ">
				<img src={mainImage} alt="Main" className="w-[50rem] max-w-full" />
			</div>
		</div>
	);
}

export default DonorAsk;
