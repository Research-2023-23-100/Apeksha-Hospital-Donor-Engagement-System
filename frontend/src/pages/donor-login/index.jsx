import React from "react";
import DonorLogin from "./DonorLogin";
import { DonorProvider } from "../../contexts/DonorContext";

const index = () => {
	return (
		<DonorProvider>
			<DonorLogin />
		</DonorProvider>
	);
};

export default index;
