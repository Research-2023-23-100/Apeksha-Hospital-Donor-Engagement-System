import React from "react";
import DonorMedicationView from "./DonorMedicationView";
import { DonationRequestProvider } from "../../contexts/DonationRequestContext";

const index = () => {
	return (
		<DonationRequestProvider>
			<DonorMedicationView />
		</DonationRequestProvider>
	);
};

export default index;