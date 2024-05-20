import React from "react";
import HairDonation from "./HairDonation";
import { HairDonationProvider } from "../../contexts/HairDonationContext";

const index = () => {
	return (
		<HairDonationProvider>
			<HairDonation />
		</HairDonationProvider>
	);
};

export default index;
