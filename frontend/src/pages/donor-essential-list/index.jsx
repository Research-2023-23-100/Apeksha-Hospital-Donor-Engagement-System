import React from "react";
import DonorEssentialsList from "./DonorEssentialList";
import { ItemProvider } from "../../contexts/ItemContext";
const index = () => {
	return (
		<ItemProvider>
			<DonorEssentialsList />
		</ItemProvider>
	);
};

export default index;
