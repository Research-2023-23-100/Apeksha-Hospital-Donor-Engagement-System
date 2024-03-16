import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import makeToast from "../components/toast";
import DonorAPI from "./api/DonorAPI";

const DonorContext = createContext();

export function DonorProvider({ children }) {
	const [donor, setDonor] = useState([]);
	const [donors, setDonors] = useState({});

	const login = (values) => {
		DonorAPI.login(values)
			.then((response) => {
				localStorage.setItem("uId", response.data._id);
				localStorage.setItem("name", response.data.name);
				localStorage.setItem("email", response.data.email);
				localStorage.setItem("authToken", response.data.token);
				localStorage.setItem("permissionLevel", response.data.permissionLevel);
				makeToast({ type: "success", message: "Login Successful" });
				window.location.href = "/staff";
			})
			.catch((err) => {
				makeToast({ type: "error", message: "Invalid Email or Password" });
			});
	};

	return (
		<DonorContext.Provider
			value={{
				donor,
				setDonor,
				donors,
				setDonors,
				login,
			}}
		>
			{children}
		</DonorContext.Provider>
	);
}

export default DonorContext;
