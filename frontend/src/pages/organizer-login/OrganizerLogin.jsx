import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import image1 from "../../assets/bloodbag.png";

const OrganizerLogin = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState({});
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const errors = {};

		if (!email.trim()) {
			errors.email = "Email is required";
		}

		if (!password.trim()) {
			errors.password = "Password is required";
		}

		setErrors(errors);

		if (Object.keys(errors).length === 0) {
			try {
				const response = await axios.post("http://localhost:5000/org/login", {
					email,
					password,
				});
				// Save login information in local storage
				localStorage.setItem("uId", response.data._id);
				localStorage.setItem("name", response.data.name);
				localStorage.setItem("email", response.data.email);
				localStorage.setItem("authToken", response.data.token);
				localStorage.setItem("permissionLevel", response.data.permissionLevel);

				const statusResponse = await axios.post("http://localhost:5000/org/status", {
					email,
				});

				if (statusResponse.data.status === "pending") {
					navigate("/under-review");
				} else {
					navigate("/org/organizer-home");
				}

				console.log("Login successful:", response.data);
			} catch (error) {
				console.error("Error logging in:", error.response.data);
			}
		}
	};

	return (
		<>
			<div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 px-6">
				<div className="sm:mx-auto sm:w-full sm:max-w-md">
					<img className="mx-auto h-20 w-auto" src={image1} alt="Workflow" />
					<h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">Welcome Back Organizer</h2>
				</div>

				<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
					<div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
						<form onSubmit={handleSubmit}>
							<div>
								<label htmlFor="email" className="block text-sm font-medium leading-5 text-gray-700">
									Email address
								</label>
								<div className="mt-1 relative rounded-md shadow-sm">
									<input
										id="email"
										name="email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										placeholder="user@example.com"
										type="email"
										className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
									/>
								</div>
								{errors.email && <p className="text-red-500">{errors.email}</p>}
							</div>

							<div className="mt-6">
								<label htmlFor="password" className="block text-sm font-medium leading-5 text-gray-700">
									Password
								</label>
								<div className="mt-1 rounded-md shadow-sm">
									<input
										id="password"
										name="password"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										type="password"
										required=""
										placeholder="***********"
										className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
									/>
								</div>
								{errors.password && <p className="text-red-500">{errors.password}</p>}
							</div>

							<div className="mt-6 flex items-center justify-between">
								<div className="flex items-center">
									<input
										id="remember_me"
										name="remember"
										type="checkbox"
										value="1"
										className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
									/>
									<label htmlFor="remember_me" className="ml-2 block text-sm leading-5 text-gray-900">
										Remember me
									</label>
								</div>

								<div className="text-sm leading-5">
									<a
										href="#"
										className="font-medium text-blue-500 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"
									>
										Forgot your password?
									</a>
								</div>
							</div>

							<div className="mt-6">
								<span className="block w-full rounded-md shadow-sm">
									<button
										type="submit"
										className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
									>
										Sign in
									</button>
								</span>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default OrganizerLogin;
