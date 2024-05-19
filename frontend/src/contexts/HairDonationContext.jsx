import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import makeToast from "../components/toast";
import HairDonationAPI from "./api/HairDonationAPI";

const HairDonationContext = createContext();

export function HairDonationProvider({ children }) {
	const [hairDonation, setHairDonation] = useState([]);

	useEffect(() => {
		HairDonationAPI.testapi().then((response) => {
			setHairDonation(response.data);
		});
	}, []);

	return (
		<HairDonationContext.Provider
			value={{
				hairDonation,
				setHairDonation,
			}}
		>
			{children}
		</HairDonationContext.Provider>
	);
}

export default HairDonationContext;
