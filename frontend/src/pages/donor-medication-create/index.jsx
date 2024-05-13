import React from "react";
import DonorMedicationCreate from "./DonorMedicationCreate";
import { DonationRequestProvider } from "../../contexts/DonationRequestContext";

const index = () => {
	return (
		<DonationRequestProvider>
			<DonorMedicationCreate />
		</DonationRequestProvider>
	);
};

export default index;
