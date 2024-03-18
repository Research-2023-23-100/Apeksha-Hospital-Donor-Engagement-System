import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import DonorContext from "../../contexts/DonorContext";

const DonorLogin = () => {
	const { login } = useContext(DonorContext);

	const handleSubmit = (e) => {
		e.preventDefault();

		const newUser = {
			email: e.target.email.value,
			password: e.target.password.value,
		};

		login(newUser);
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className="py-16 mt-28">
					<div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
						<div
							className="hidden lg:block lg:w-1/2 bg-cover"
							style={{
								backgroundImage:
									'url("https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
							}}
						></div>

						<div className="w-full p-8 lg:w-1/2">
							<p className="text-xl text-gray-600 text-center">Welcome back!</p>

							<div className="mt-4 flex items-center justify-between">
								<span className="border-b w-1/5 lg:w-1/4" />
								<a className="text-xs text-center text-gray-500 uppercase">or login with email</a>
								<span className="border-b w-1/5 lg:w-1/4" />
							</div>
							<div className="mt-4">
								<label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
								<input
									id="email"
									placeholder="Enter you email address"
									className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
									type="email"
								/>
							</div>
							<div className="mt-4">
								<div className="flex justify-between">
									<label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
								</div>
								<input
									id="password"
									placeholder="Enter your password"
									className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
									type="password"
								/>
							</div>
							<div className="mt-8">
								<button
									className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
									type="submit"
								>
									Login
								</button>
							</div>
							<div className="mt-4 flex items-center justify-between">
								<span className="border-b w-1/5 md:w-1/4" />
								<Link to="/donor/register">
									<a className="text-xs text-gray-500 uppercase">or sign up</a>
								</Link>
								<span className="border-b w-1/5 md:w-1/4" />
							</div>
						</div>
					</div>
				</div>
			</form>
		</>
	);
};

export default DonorLogin;
