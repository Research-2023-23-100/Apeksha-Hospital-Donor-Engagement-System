import React from "react";
import DonorRegister from "./DonorRegister";
import { DonorProvider } from "../../contexts/DonorContext";

const index = () => {
	return (
		<DonorProvider>
			<DonorRegister />
		</DonorProvider>
	);
};

export default index;
