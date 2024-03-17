import React from "react";
import DonorEssentialDonate from "./DonorEssentialDonate";
import { DonorProvider } from "../../contexts/DonorContext";
import { ItemProvider } from "../../contexts/ItemContext";

const index = () => {
	return (
		<DonorProvider>
			<ItemProvider>
				<DonorEssentialDonate />
			</ItemProvider>
		</DonorProvider>
	);
};
export default index;
