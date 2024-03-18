import React from "react";
import BloodDonorSignUp from "./DonorSignUp";
import { BloodDonorProvider } from "../../contexts/BloodDonorContext";

function index() {
	return (
		<BloodDonorProvider>
			<BloodDonorSignUp />
		</BloodDonorProvider>
	);
}

export default index;
