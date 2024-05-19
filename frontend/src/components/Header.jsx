import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import makeToast from "../components/toast";

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

	const handleMouseEnter = (menu) => {
		if (menu === "menu1") {
			setIsOpen1(true);
		} else if (menu === "menu") {
			setIsOpen(true);
		}
	};

	const handleMouseLeave = (menu) => {
		if (menu === "menu1") {
			setIsOpen1(false);
		} else if (menu === "menu") {
			setIsOpen(false);
		}
	};

	const handleClick = () => {
		// Code to handle button click event
	};

	return (
		<>
			<div className={`fixed top-0 left-0 w-full z-50 transition-all ${isScrolled ? "bg-white shadow-md" : ""}`}>
				<div className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 md:px-8">
					{/* logo - start */}
					<a className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl" aria-label="logo">
						<Link to="/">
							<img src={logo} alt="Flowrift" width="10px" height="10px" className="mt-5 h-auto w-24 text-red-600" />
						</Link>
						<div className="text-gray-600">LEND A HAND</div>
					</a>
					{/* logo - end */}
					{/* nav - start */}
					<nav className="hidden gap-10 lg:flex 2xl:ml-8">
						<Link to="/">
							<a className="text-lg font-semibold text-gray-800 hover:text-red-600 transition-colors duration-300">
								Home
							</a>
						</Link>

						<a
							href="#"
							className="text-lg font-semibold text-gray-800 hover:text-red-600 transition-colors duration-300"
						>
							Contact Us
						</a>
						<Link to="/about-us">
							<a

								className="text-lg font-semibold text-gray-800 hover:text-red-600 transition-colors duration-300"
							>
								About Us
							</a>
						</Link>
						<Link to="/faq">
							<a
								href="#"
								className="text-lg font-semibold text-gray-800 hover:text-red-600 transition-colors duration-300"
							>
								FAQ
							</a>
						</Link>
						{permissionLevel === "STAFF" && (
							<div className="relative dropdown">
								<Link to="/staff/dashboard">
									<button className="dropdown-button text-lg font-semibold text-gray-800 hover:text-red-500 transition-colors duration-300">
										Dashboard
									</button>
								</Link>
							</div>
						)}

						{permissionLevel === "DONOR" && (
							<div className="relative dropdown">
								<Link to="/donor">
									<button className="dropdown-button text-lg font-semibold text-gray-800 hover:text-red-500 transition-colors duration-300">
										Dashboard
									</button>
								</Link>
								<Link to="/donor/medication/donate/" className="ml-10">
									<button className="dropdown-button text-lg font-semibold text-gray-800 hover:text-red-500 transition-colors duration-300">
										Medication
									</button>
								</Link>
								<Link to="/donor/essential/donate/" className="ml-10">
									<button className="dropdown-button text-lg font-semibold text-gray-800 hover:text-red-500 transition-colors duration-300">
										Essentials
									</button>
								</Link>
								<Link to="#" className="ml-10">
									<button className="dropdown-button text-lg font-semibold text-gray-800 hover:text-red-500 transition-colors duration-300">
										Hair 
									</button>
								</Link>
							</div>
						)}
					</nav>

					{/* nav - end */}
					{/* buttons - start */}
					<div className="flex divide-x border-r sm:border-l">
						{localStorage.getItem("authToken") ? (
							<button onClick={logout} className="bg-red-600 rounded-full w-24 h-8 text-white font-semibold">
								<div className="flex gap-2 justify-center items-center">
									<span>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="w-5 h-5"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" />
										</svg>
									</span>
									<span className="text-xs">Logout</span>
								</div>
							</button>
						) : (
							<>
								<div className="flex gap-3 max-w-sm">
									<Link to="/donor/login">
										<button className="py-2.5 px-6 rounded-lg text-sm font-medium bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors duration-300">
											Sign-Up
										</button>
									</Link>
									<Link to="/donor/register">
										<button className="py-2.5 px-6 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition-colors duration-300">
											Sign-In
										</button>
									</Link>
								</div>
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
