import React from "react";
import DonorDonationCreate from "./DonorDonationCreate";
import { DonationRequestProvider } from "../../contexts/DonationRequestContext";

const index = () => {
	return (
		<DonationRequestProvider>
			<DonorDonationCreate />
		</DonationRequestProvider>
	);
};

export default index;
