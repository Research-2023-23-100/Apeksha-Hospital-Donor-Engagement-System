import React from "react";
import StaffViewAllItems from "./StaffViewAllItems";
import { ItemProvider } from "../../contexts/ItemContext";

const index = () => {
	return (
		<ItemProvider>
			<StaffViewAllItems />
		</ItemProvider>
	);
};
export default index;
