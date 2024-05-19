import React from "react";
import { Link, useNavigate } from "react-router-dom";
import HairBGimage from "../../assets/hair/hairBG1.jpg";
import Home2 from "../../assets/hair/Home 2.jpg";
import step1 from "../../assets/hair/step1.jpeg";
import step2 from "../../assets/hair/step2.jpg";
import step3 from "../../assets/hair/step3.png";
import guide from "../../assets/hair/guide.png";

const Home = () => {
	return (
		<div className="bg-red-100">
			{/* Hero Banner */}
			<section
				className="relative left-0 top-0 z-0 bg-cover bg-center h-80 md:h-screen flex items-center justify-center text-center text-white"
				style={{
					backgroundImage: `url(${HairBGimage})`,
					marginTop: "120px",
				}}
			>
				<div className="container mx-auto relative z-10">
					<h1 className="text-4xl md:text-6xl font-bold mb-4">
						Donate Your Hair, <br /> Change a Life
					</h1>
					<p className="text-lg md:text-xl mb-8">Join us in our mission to empower hope and confidence</p>
				</div>
			</section>

			{/* Section with Image and Content */}
			<section className="bg-white py-16 md:flex md:items-center">
				{/* Image Part */}
				<div className="md:w-300 md:pr-8">
					<img
						src={Home2} // Placeholder image URL
						alt="Hair donation"
						className="rounded-lg shadow-lg"
					/>
				</div>
				{/* Content Part */}
				<div className="md:w-3/4 md:pl-8">
					<h2 className="text-5xl md:text-6xl font-bold text-red-800 mb-5">
						Thinking of donating your hair to Apeksha Canser Hospital - Sri Lanka?
					</h2>

					<p className="text-xl text-red-700 mb-4">
						Before you book that salon appointment, please watch celebrity hairdresser Andrew Barton show you the best
						way to cut your hair for Apeksha Hospital.
					</p>
					<p className="text-xl text-red-700 mb-4">
						Donating your long locks to help children and young people experiencing the devastating effects of hair loss
						is an incredibly generous thing to do.
					</p>
					<p className="text-xl text-red-700 mb-4">
						By following the advice on this short film, you can help us boost the confidence and self-esteem of young
						people at what can be a very challenging time in their young lives.
					</p>
					<p className="text-xl text-red-700 mb-4">
						And please don't forget that we need financial donations to help us cover the cost of making, fitting, and
						styling our wigs.
					</p>
					<p className="text-xl text-red-700 mb-4">
						So perhaps you could ask family and friends to sponsor your big haircut and help us turn your gorgeous hair
						into a beautiful wig.
					</p>
				</div>
			</section>

			{/* Donation Process */}
			<section className="container mx-auto py-16">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-5xl font-bold mb-4">Step-by-Step Guide</h2>
					<p className=" md:text-4xl text-gray-600">
						Before donating your hair, follow the steps below to check if the hair meets the standards recommended by
						the hospital.
					</p>
				</div>
				<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div class="bg-white rounded-lg shadow-lg p-6">
						<img src={step1} alt="Step 1 Image" class="w-full h-auto mb-4" />
						<h3 class="text-xl font-semibold mb-4">Step 1: Hair Preparation:</h3>
						<p class="text-gray-600">
							Hair Preparation: Follow the hospital's guidelines for cleaning and conditioning your hair before
							donation. Use recommended products to ensure your hair meets the donation criteria. Properly cleaned and
							conditioned hair increases the chances of successful donation and wig creation for those in need. Adhering
							to these instructions ensures that your donation contributes effectively to the cause, providing comfort
							and confidence to recipients.
						</p>
					</div>

					<div class="bg-white rounded-lg shadow-lg p-6">
						<img src={step2} alt="Step 2 Image" class="w-full h-auto mb-4" />
						<h3 class="text-xl font-semibold mb-4">Step 2: Capture Detailed Images:</h3>
						<p class="text-gray-600">
							Take multiple high-quality photos of your hair to fulfill the system's requirements. Ensure the images
							clearly depict your hair and scalp, with individual hair follicles visible. Optimal lighting and angles
							are crucial for accurate assessment. Detailed images aid in determining the suitability of your hair for
							donation and help match it with potential recipients' needs. By providing comprehensive visual
							documentation, you facilitate the donation process and enhance the system's ability to assist you
							effectively.
						</p>
					</div>

					<div class="bg-white rounded-lg shadow-lg p-6">
						<img src={step3} alt="Step 3 Image" class="w-full h-auto mb-4" />
						<h3 class="text-xl font-semibold mb-4">Step 3: Upload and Receive Evaluation:</h3>
						<p class="text-gray-600">
							Upload the unaltered photos of your hair to the system for evaluation. Ensure that the images accurately
							represent your hair's condition without any modifications. The system will analyze the photos based on
							predetermined criteria to determine the suitability of your donation. Promptly receiving the evaluation
							allows you to proceed with the donation process confidently, knowing that your contribution aligns with
							the recipient's requirements. By following this step, you actively participate in providing essential
							support to individuals undergoing hair loss due to medical conditions.
						</p>
					</div>
				</div>
			</section>
			<div className="flex justify-center">
				<div className="flex justify-center">
					<div className="flex justify-center">
						<Link to="/donor/hair_sample">
							<button
								className="bg-red-500 hover:bg-red-600 text-white font-bold py-5 px-5 rounded-lg shadow-lg transition duration-300"
								style={{ width: "500px" }}
							>
								CHECK THE QUALITY OF YOUR HAIR
							</button>
						</Link>
						<br></br>
					</div>
				</div>
			</div>

			{/* Testimonials */}
			<section className="bg-red-200 py-16">
				<div className="container mx-auto">
					<img src={guide} alt="Step 3 Image" class="w-full h-auto mb-4" />
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

export default Home;
