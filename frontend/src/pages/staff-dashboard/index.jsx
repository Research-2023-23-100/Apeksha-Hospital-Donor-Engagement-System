import React from "react";
import StaffDashboard from "./StaffDashboard";
import { StaffProvider } from "../../contexts/StaffContext";
import { ItemProvider } from "../../contexts/ItemContext";

const index = () => {
	return (
		<StaffProvider>
			<ItemProvider>
				<StaffDashboard />
			</ItemProvider >
		</StaffProvider>
	);
};
export default index;
