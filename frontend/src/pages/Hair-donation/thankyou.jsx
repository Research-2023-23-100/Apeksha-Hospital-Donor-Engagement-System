import React from "react";
import { Link, useNavigate } from "react-router-dom";
import HairBGimage from "../../assets/hair/hairBG1.jpg";

import guide from "../../assets/hair/hair_thank.png";

const Thankyou = () => {
	return (
		<div className="bg-red-100">
			{/* Testimonials */}
			<section className="bg-white-200 py-16">
				<div className="container mx-auto">
					<img
						src={guide}
						alt="Step 3 Image"
						class="w-full h-auto mb-4"
						style={{
							marginTop: "100px", // Add top padding
						}}
					/>
					<h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Donor Stories</h2>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{/* Testimonial Cards */}
						<div className="bg-white rounded-lg shadow-lg p-6">
							<p className="text-gray-600">
								"As a frequent hair donor, I am thrilled to see the implementation of this innovative system. Knowing
								that my donations undergo thorough assessment ensures that they truly make a difference in the lives of
								cancer patients, providing them with high-quality wigs that boost their confidence during treatment."{" "}
							</p>
							<p className="text-gray-800 font-semibold mt-4">- Elan, Hair Donor</p>
						</div>
						<div className="bg-white rounded-lg shadow-lg p-6">
							<p className="text-gray-600">
								"I've been donating my hair for years, but it wasn't until I learned about this research that I truly
								understood the impact of my contributions. The detailed evaluation process gives me peace of mind,
								knowing that my hair will bring comfort and joy to those battling cancer. Thank you for creating such a
								meaningful initiative."
							</p>
							<p className="text-gray-800 font-semibold mt-4">- Amaya, Hair Donor</p>
						</div>
						<div className="bg-white rounded-lg shadow-lg p-6">
							<p className="text-gray-600">
								"After losing my mother to cancer, I wanted to do something tangible to support others facing similar
								battles. This research and its systematic approach to hair donation give me hope that my contributions
								honor her memory in a meaningful way. It's inspiring to see technology used for such a compassionate
								cause."{" "}
							</p>
							<p className="text-gray-800 font-semibold mt-4">- Dehemi, Hair Donor</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Thankyou;
