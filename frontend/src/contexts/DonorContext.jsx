import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import makeToast from "../components/toast";
import DonorAPI from "./api/DonorAPI";

const DonorContext = createContext();

export function DonorProvider({ children }) {
	const [donors, setDonors] = useState([]);
	const navigate = useNavigate();
	const [donor, setDonor] = useState({
		name: "",
		email: "",
		contact: "",
		nic: "",
		password: "",
	});

	// Donor Login
	const login = (values) => {
		DonorAPI.login(values)
			.then((response) => {
				localStorage.setItem("uId", response.data._id);
				localStorage.setItem("name", response.data.name);
				localStorage.setItem("email", response.data.email);
				localStorage.setItem("authToken", response.data.token);
				localStorage.setItem("permissionLevel", response.data.permissionLevel);
				makeToast({ type: "success", message: "Login Successful" });
				window.location.href = "/donor";
			})
			.catch((err) => {
				makeToast({ type: "error", message: "Invalid Email or Password" });
			});
	};

	// Donor Register
	const register = (values) => {
		DonorAPI.register(values)
			.then((response) => {
				setDonors([...donors, response.data]);
				makeToast({ type: "success", message: "Registration Successful" });
				navigate("/donor/login")
			})
			.catch((err) => {
				if (err.response.data.details == "Email already exists") {
					setMailError(err.response.data.details);
				} else {
					makeToast({ type: "error", message: "Registration not success" });
				}
			});
	};

	// Get one Donor
	const getOne = (id) => {
		useEffect(() => {
			DonorAPI.getOne(id).then((res) => {
				setDonor(res.data);
			});
		}, []);
	};

	//Get all Donor
	useEffect(() => {
		DonorAPI.getAll().then((response) => {
			setDonors(response.data);
		});
	}, []);

	return (
		<DonorContext.Provider
			value={{
				donor,
				setDonor,
				donors,
				setDonors,
				login,
				register,
				getOne,
			}}
		>
			{children}
		</DonorContext.Provider>
	);
}

export default DonorContext;
