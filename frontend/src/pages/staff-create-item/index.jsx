import React from "react";
import StaffCreateItem from "./StaffCreateItem";
import { ItemProvider } from "../../contexts/ItemContext";

const index = () => {
	return (
		<ItemProvider>
			<StaffCreateItem />
		</ItemProvider>
	);
};

export default index;
