import React from "react";

const FAQ = () => {
	return (
		<>
			{/* component */}
			<div className="max-w-screen-xl mx-auto px-5 bg-white min-h-screen">
				<div className="flex flex-col items-center">
					<p className="text-black text-xl mt-28">Frequently Asked Questions</p>
				</div>
				<div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
					<div className="py-5">
						<details className="group">
							<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
								<span> What is the Lend A Hand System?</span>
								<span className="transition group-open:rotate-180">
									<svg
										fill="none"
										height={24}
										shapeRendering="geometricPrecision"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="1.5"
										viewBox="0 0 24 24"
										width={24}
									>
										<path d="M6 9l6 6 6-6" />
									</svg>
								</span>
							</summary>
							<p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
								The Lend A Hand System is a platform designed to facilitate and enhance communication and interaction between the hospital and its donors. It allows donors to track their contributions, receive updates, and engage with hospital initiatives.
							</p>
						</details>
					</div>
					<div className="py-5">
						<details className="group">
							<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
								<span> How can I make a donation?</span>
								<span className="transition group-open:rotate-180">
									<svg
										fill="none"
										height={24}
										shapeRendering="geometricPrecision"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="1.5"
										viewBox="0 0 24 24"
										width={24}
									>
										<path d="M6 9l6 6 6-6" />
									</svg>
								</span>
							</summary>
							<p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
								You can make a donation through our website by navigating to the 'Donor Dashboard' section. We accept various donation methods excluding credit cards, bank transfers, and online payment systems.
							</p>
						</details>
					</div>

					<div className="py-5">
						<details className="group">
							<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
								<span>How can I confirm if my donation was received?</span>
								<span className="transition group-open:rotate-180">
									<svg
										fill="none"
										height={24}
										shapeRendering="geometricPrecision"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="1.5"
										viewBox="0 0 24 24"
										width={24}
									>
										<path d="M6 9l6 6 6-6" />
									</svg>
								</span>
							</summary>
							<p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
								Upon completion of your donation, you will receive a confirmation email from Lend A Hand acknowledging the receipt of your contribution. Additionally, you can log in to your account on our website to view your donation history and confirm the transaction.
							</p>
						</details>
					</div>


					<div className="py-5">
						<details className="group">
							<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
								<span> How do I track my donations?</span>
								<span className="transition group-open:rotate-180">
									<svg
										fill="none"
										height={24}
										shapeRendering="geometricPrecision"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="1.5"
										viewBox="0 0 24 24"
										width={24}
									>
										<path d="M6 9l6 6 6-6" />
									</svg>
								</span>
							</summary>
							<p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
								You can track your donations by logging into your account on our website. Your donation history and receipts will be available in your profile section.
							</p>
						</details>
					</div>
					<div className="py-5">
						<details className="group">
							<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
								<span> Can I volunteer at Apeksha Hospital?</span>
								<span className="transition group-open:rotate-180">
									<svg
										fill="none"
										height={24}
										shapeRendering="geometricPrecision"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="1.5"
										viewBox="0 0 24 24"
										width={24}
									>
										<path d="M6 9l6 6 6-6" />
									</svg>
								</span>
							</summary>
							<p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
								Yes, we welcome volunteers to help with various activities and events. Please visit the as a 'Organizer' section of our website to find out more and to sign up.
							</p>
						</details>
					</div>
					<div className="py-5">
						<details className="group">
							<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
								<span> How do I update my contact information?</span>
								<span className="transition group-open:rotate-180">
									<svg
										fill="none"
										height={24}
										shapeRendering="geometricPrecision"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="1.5"
										viewBox="0 0 24 24"
										width={24}
									>
										<path d="M6 9l6 6 6-6" />
									</svg>
								</span>
							</summary>
							<p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
								To update your contact information, log in to your account and navigate to the 'Profile' section. Here you can update your email address, phone number, and other personal information.
							</p>
						</details>
					</div>
					<div className="py-5">
						<details className="group">
							<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
								<span> How do I contact support?</span>
								<span className="transition group-open:rotate-180">
									<svg
										fill="none"
										height={24}
										shapeRendering="geometricPrecision"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="1.5"
										viewBox="0 0 24 24"
										width={24}
									>
										<path d="M6 9l6 6 6-6" />
									</svg>
								</span>
							</summary>
							<p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
								If you need assistance, you can contact our support team by submitting a request through the 'Contact Us' section of our website or by emailing support@apekshahospital.com.
							</p>
						</details>
					</div>
					<div className="py-5">
						<details className="group">
							<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
								<span> What are the benefits of becoming a regular donor?</span>
								<span className="transition group-open:rotate-180">
									<svg
										fill="none"
										height={24}
										shapeRendering="geometricPrecision"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="1.5"
										viewBox="0 0 24 24"
										width={24}
									>
										<path d="M6 9l6 6 6-6" />
									</svg>
								</span>
							</summary>
							<p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
								Regular donors enjoy several benefits, including regular updates on how their contributions are making a difference, exclusive invitations to donor events, and recognition on our donor wall.
							</p>
						</details>
					</div>
				</div>
			</div>
		</>
	);
};

export default FAQ;
