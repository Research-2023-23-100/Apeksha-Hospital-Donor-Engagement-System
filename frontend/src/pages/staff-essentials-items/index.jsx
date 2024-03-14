import React from "react";
import StaffEssentialItems from "./StaffEssentialItems";
import { ItemProvider } from "../../contexts/ItemContext";

const index = () => {
	return (
		<ItemProvider>
			<StaffEssentialItems />
		</ItemProvider>
	);
};

export default index;
