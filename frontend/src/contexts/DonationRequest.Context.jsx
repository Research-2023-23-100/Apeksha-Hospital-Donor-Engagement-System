import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import makeToast from "../components/toast";
import DonationRequestAPI from "./api/DonationRequestAPI";

const DonationRequestContext = createContext();

export function DonationRequestProvider({ children }) {
	const [donations, setDonations] = useState([]);
	const [donation, setDonation] = useState({
		ItemName: "",
		quantity: "",
		userId: "",
		name: "",
		email: "",
		donationType: "",
		status: "",
	});

	return (
		<DonationRequestContext.Provider
			value={{
				donations,
				setDonations,
				donation,
				setDonation,
			}}
		>
			{children}
		</DonationRequestContext.Provider>
	);
}

export default DonationRequestContext;
