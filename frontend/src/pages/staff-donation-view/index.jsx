import React from "react";
import StaffDonationView from "./StaffDonationView";
import { DonationRequestProvider } from "../../contexts/DonationRequestContext";

const index = () => {
	return (
		<DonationRequestProvider>
			<StaffDonationView />
		</DonationRequestProvider>
	);
};

export default index;
