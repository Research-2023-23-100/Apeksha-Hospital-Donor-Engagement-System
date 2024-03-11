import React from "react";

const Home = () => {
	return (
		<>
			<div className="bg-white mt-28">
				<section className="mx-auto max-w-screen-2xl px-4 md:px-8">
					<div className="mb-8 flex flex-wrap justify-between md:mb-16">
						<div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
							<h1 className="mb-4 text-4xl font-bold text-black sm:text-4xl md:mb-8 md:text-4xl">
								Empowering Hope,
								<br />
								Connecting Hearts
							</h1>
							<p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
								Apeksha Hospital Donor Engagement System
							</p>
						</div>
						<div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
							<div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
								<img
									src="https://plus.unsplash.com/premium_photo-1668605108593-0ea524c93487?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
									loading="lazy"
									alt="Photo by Kaung Htet"
									className="h-full w-full object-cover object-center"
								/>
							</div>
							<div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
								<img
									src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
									loading="lazy"
									alt="Photo by Manny Moreno"
									className="h-full w-full object-cover object-center"
								/>
							</div>
						</div>
					</div>
					<div className="flex flex-col items-center justify-between gap-8 md:flex-row"></div>
				</section>
			</div>
		</>
	);
};

export default Home;
