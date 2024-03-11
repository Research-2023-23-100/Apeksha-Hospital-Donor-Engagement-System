import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import makeToast from "../components/toast";
import StaffAPI from "./api/StaffAPI";

const StaffContext = createContext();

export function StaffProvider({ children }) {
	const [staffs, setStaffs] = useState([]);
	const [mailError, setMailError] = useState("");

	const [staff, setStaff] = useState({
		name: "",
		email: "",
		password: "",
	});

	// Staff Register
	const register = (values) => {
		StaffAPI.register(values)
			.then((response) => {
				setStaffs([...staffs, response.data]);
				makeToast({ type: "success", message: "Registration Successful" });
			})
			.catch((err) => {
				if (err.response.data.details == "Email already exists") {
					setMailError(err.response.data.details);
				} else {
					makeToast({ type: "error", message: "Registration not success" });
				}
			});
	};
	// Staff Login
	const login = (values) => {
		StaffAPI.login(values)
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

	// Get one Staff
	const getOne = (id) => {
		useEffect(() => {
			StaffAPI.getOne(id).then((res) => {
				setStaff(res.data);
			});
		}, []);
	};

	//Get all Sfaff
	useEffect(() => {
		StaffAPI.getAll().then((response) => {
			setStaffs(response.data);
		});
	}, []);

	return (
		<StaffContext.Provider
			value={{
				staffs,
				setStaffs,
				staff,
				setStaff,
				register,
				login,
				getOne,
			}}
		>
			{children}
		</StaffContext.Provider>
	);
}

export default StaffContext;
