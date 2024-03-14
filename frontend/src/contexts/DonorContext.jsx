import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import makeToast from "../components/toast";
import DonorAPI from "./api/DonorAPI";

const DonorContext = createContext();

export function DonorProvider({ children }) {
	const [donor, setDonor] = useState([]);
	const [donors, setDonors] = useState({});

	return (
		<DonorContext.Provider
			value={{
				donor,
				setDonor,
				donors,
				setDonors,
			}}
		>
			{children}
		</DonorContext.Provider>
	);
}

export default DonorContext;
