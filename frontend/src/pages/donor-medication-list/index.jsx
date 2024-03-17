import React from "react";
import DonorMedicationList from "./donorMedicationList";
import { MedicationProvider } from "../../contexts/MedicationContext";

const index = () => {
	return (
		<MedicationProvider>
			<DonorMedicationList />
		</MedicationProvider>
	);
};
export default index;