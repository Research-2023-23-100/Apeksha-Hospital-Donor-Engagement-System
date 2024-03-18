import React from "react";
import DonorDashboard from "./DonorDashboard";
import { DonorProvider } from "../../contexts/DonorContext";

const index = () => {
	return (
		<DonorProvider>
			<DonorDashboard />
		</DonorProvider>
	);
};

export default index;
