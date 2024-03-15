import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpeg";

const Header = () => {
	const navigate = useNavigate();
	const [isScrolled, setIsScrolled] = useState(false);
	const permissionLevel = localStorage.getItem("permissionLevel");

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

	const [isOpen, setIsOpen] = useState(false);
	const [isOpen1, setIsOpen1] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const toggleMenu1 = () => {
		setIsOpen1(!isOpen1);
	};

	const closeDropdowns = () => {
		setIsOpen(false);
		setIsOpen1(false);
	};

	const logout = () => {
		localStorage.removeItem("name");
		localStorage.removeItem("email");
		localStorage.removeItem("uId");
		localStorage.removeItem("authToken");
		localStorage.removeItem("permissionLevel");
		navigate("/");
		window.location.reload();
		makeToast({ type: "success", message: "Logout Successful" });
	};

	useEffect(() => {
		const handleBodyClick = (event) => {
			const target = event.target;
			if (!target.closest(".dropdown") && !target.closest(".dropdown-button")) {
				closeDropdowns();
			}
		};

		document.body.addEventListener("click", handleBodyClick);

		return () => {
			document.body.removeEventListener("click", handleBodyClick);
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
						<img src={logo} alt="Flowrift" width="10px" height="10px" className="mt-5 h-auto w-24 text-indigo-500" />
						<div className="text-gray-600">LEND A HAND</div>
					</a>

					{/* logo - end */}
					{/* nav - start */}
					<nav className="hidden gap-12 lg:flex 2xl:ml-16">
						<a href="#" className="text-lg font-semibold text-black  hover:text-indigo-500">
							Home
						</a>

						<div className="relative dropdown">
							<button
								onClick={toggleMenu1}
								className="dropdown-button text-lg font-semibold text-black transition duration-100 hover:text-indigo-500 active:text-indigo-700"
							>
								Donate 🔽
							</button>
							{isOpen1 && (
								<div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-1">
									<Link to="/donor/essentials/list">
										<a className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100 hover:text-indigo-500">
											Essential Items
										</a>
									</Link>
									<a className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100 hover:text-indigo-500">
										Medication
									</a>
									<a className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100 hover:text-indigo-500">
										Upcoming Events
									</a>
									<a className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100 hover:text-indigo-500">
										Hair Donation
									</a>
								</div>
							)}
						</div>

						<a
							href="#"
							className="text-lg font-semibold text-black transition duration-100 hover:text-indigo-500 active:text-indigo-700"
						>
							About Us
						</a>
						<a
							href="#"
							className="text-lg font-semibold text-black transition duration-100 hover:text-indigo-500 active:text-indigo-700"
						>
							Contact Us
						</a>
						{permissionLevel === "STAFF" && (
							<div className="relative dropdown">
								<Link to="/staff">
									<button
										onClick={toggleMenu}
										className="dropdown-button text-lg font-semibold text-black transition duration-100 hover:text-indigo-500 active:text-indigo-700"
									>
										Dashboard 🔽
									</button>
								</Link>
								{isOpen && (
									<div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-1">
										<Link to="/staff/essentials">
											<a
												href="#"
												className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100 hover:text-indigo-500"
											>
												Essential Items
											</a>
										</Link>
										<a
											href="#"
											className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100 hover:text-indigo-500"
										>
											Medication
										</a>
										<a
											href="#"
											className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100 hover:text-indigo-500"
										>
											Upcoming Events
										</a>
										<a
											href="#"
											className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100 hover:text-indigo-500"
										>
											Hair Donation
										</a>
									</div>
								)}
							</div>
						)}
					</nav>
					{/* nav - end */}
					{/* buttons - start */}
					<div className="flex divide-x border-r sm:border-l">
						{localStorage.getItem("authToken") ? (
							<button onClick={logout}>
								<a
									href="#"
									className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24"
								>
									{/* SVG code for the Log Out icon */}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6 text-gray-800"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
									</svg>
									<span className="hidden text-xs font-semibold text-gray-500 sm:block">Log Out</span>
								</a>
							</button>
						) : (
							<>
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
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
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
							</>
						)}
					</div>
					{/* buttons - end */}
				</div>
			</div>
		</>
	);
};

export default Header;
