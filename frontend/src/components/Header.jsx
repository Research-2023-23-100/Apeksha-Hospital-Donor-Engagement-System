import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrolled = window.scrollY > 0;
			setIsScrolled(scrolled);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<div className={`fixed top-0 left-0 w-full z-50 transition-all ${isScrolled ? "bg-white shadow-md" : ""}`}>
				<div className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 md:px-8">
					{/* logo - start */}
					<a
						href="/"
						className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
						aria-label="logo"
					>
						<svg
							width={95}
							height={94}
							viewBox="0 0 95 94"
							className="h-auto w-6 text-indigo-500"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M96 0V47L48 94H0V47L48 0H96Z" />
						</svg>
						Flowrift
					</a>
					{/* logo - end */}
					{/* nav - start */}
					<nav className="hidden gap-12 lg:flex 2xl:ml-16">
						<a href="#" className="text-lg font-semibold text-indigo-500">
							Home
						</a>
						<a
							href="#"
							className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
						>
							Collections
						</a>
						<a
							href="#"
							className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
						>
							Sale
						</a>
						<a
							href="#"
							className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
						>
							About
						</a>
					</nav>
					{/* nav - end */}
					{/* buttons - start */}
					<div className="flex divide-x border-r sm:border-l">
						
						<a
							href="#"
							className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6 text-gray-800"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
								/>
							</svg>
							<span className="hidden text-xs font-semibold text-gray-500 sm:block">Sign In</span>
						</a>
						<a
							href="#"
							className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24"
						>
							
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6 text-gray-800"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M12 6v6m0 0v6m0-6h6m-6 0H6"
								/>
							</svg>
							<span className="hidden text-xs font-semibold text-gray-500 sm:block">Sign Up</span>
						</a>
						<button
							type="button"
							className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:hidden"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6 text-gray-800"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
									clipRule="evenodd"
								/>
							</svg>
							<span className="hidden text-xs font-semibold text-gray-500 sm:block">Menu</span>
						</button>
					</div>
					{/* buttons - end */}
				</div>
			</div>
		</>
	);
};

export default Header;
