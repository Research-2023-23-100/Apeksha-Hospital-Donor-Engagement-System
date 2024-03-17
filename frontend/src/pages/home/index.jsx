import React from "react";
import servicesImage from "../../assets/doctor.jpg";
import medication_donation from "../../assets/Medication_donation.jpeg";
import blood_donation from "../../assets/Blood_donation.jpeg";
import hair_donation from "../../assets/Hair_donation.jpeg";
import essentials_donation from "../../assets/Essentials_donation.jpeg";

import Carousel from "../carousel-home";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<>
			<div className="min-h-screen bg-white mt-24">
				<div className="py-10 px-4 sm:px-6 lg:px-8">
					{/* Header */}

					{/* Main Content */}
					<div className="grid grid-cols-1 ml-48 md:grid-cols-2 gap-16">
						{/* About Section */}
						<div className="flex flex-col justify-center">
							<h2 className="text-6xl font-bold text-red-500 mb-4">Join hands for a better tomorrow.</h2>
							<p className="text-gray-600 text-2xl mb-4">
								Your generosity powers miracles. Dive in, explore, and see the difference you make.
							</p>
							<p className="text-gray-600 text-2xl">
								At Apeksha Hospital's Donor Hub, impact is our currency. Join us, spark change, and be a beacon of hope.
							</p>
						</div>

						{/* Image Section */}
						<div className="w-full md:w-1/2 lg:w-3/4 ml-8 mt-8">
							<Carousel />
						</div>
					</div>

					{/* Services Section */}

					{/* Call to Action */}

					{/* Card Views Section */}
					<div className="ml-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-48">
						{/* Card View 1 */}
						<div class="max-w-xs bg-white border border-gray-200 rounded-lg shadow">
							<a href="#">
								<img class="rounded-t-lg" src={essentials_donation} alt="" />
							</a>
							<div class="p-5">
								<div>
									<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Donate Essentials</h5>
								</div>
								<Link to="/donor/essentials/list">
									<a

										class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
									>

										Read more
										<svg
											class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 14 10"
										>
											<path
												stroke="currentColor"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M1 5h12m0 0L9 1m4 4L9 9"
											/>
										</svg>
									</a>
								</Link>
							</div>
						</div>
						<div class="max-w-xs bg-white border border-gray-200 rounded-lg shadow">
							<a href="#">
								<img class="rounded-t-lg" src={medication_donation} alt="" />
							</a>
							<div class="p-5">
								<div>
									<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Donate Medication</h5>
								</div>

								<a
									href="#"
									class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
								>
									Read more
									<svg
										class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 14 10"
									>
										<path
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M1 5h12m0 0L9 1m4 4L9 9"
										/>
									</svg>
								</a>
							</div>
						</div>
						<div class="max-w-xs bg-white border border-gray-200 rounded-lg shadow">
							<a href="#">
								<img class="rounded-t-lg" src={blood_donation} alt="" />
							</a>
							<div class="p-5">
								<div>
									<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Donate Blood</h5>
								</div>

								<a
									href="./donor-ask"
									class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
								>
									Read more
									<svg
										class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 14 10"
									>
										<path
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M1 5h12m0 0L9 1m4 4L9 9"
										/>
									</svg>
								</a>
							</div>
						</div>
						<div class="max-w-xs bg-white border border-gray-200 rounded-lg shadow">
							<a href="#">
								<img class="rounded-t-lg" src={hair_donation} alt="" />
							</a>
							<div class="p-5">
								<div>
									<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Donate Hair</h5>
								</div>

								<a
									href="#"
									class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
								>
									Read more
									<svg
										class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 14 10"
									>
										<path
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M1 5h12m0 0L9 1m4 4L9 9"
										/>
									</svg>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div >
		</>
	);
};

export default Home;
