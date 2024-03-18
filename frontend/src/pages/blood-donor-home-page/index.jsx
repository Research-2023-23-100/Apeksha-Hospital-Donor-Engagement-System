import BloodDonorHome from "./BloodDonorHome";
import { DonorProvider } from "../../contexts/DonorContext";
import React from "react";

const index = () => {
	return (
		<DonorProvider>
			<BloodDonorHome />
		</DonorProvider>
	);
};

export default index;
