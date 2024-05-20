import React from "react";
import DonorEssentialView from "./donorEssentialView";
import { DonationRequestProvider } from "../../contexts/DonationRequestContext";

const index = () => {
	return (
		<DonationRequestProvider>
			<DonorEssentialView />
		</DonationRequestProvider>
	);
};

export default index;