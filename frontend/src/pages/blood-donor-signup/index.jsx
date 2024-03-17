import React from "react";
import BloodDonorSignUp from "./BloodDonorSignUp";
import { BloodDonorProvider } from "../../contexts/BloodDonorContext";

function index() {
	return (
		<BloodDonorProvider>
			<BloodDonorSignUp />
		</BloodDonorProvider>
	);
}

export default index;
