import React from "react";
import MedicationDashboard from "./medicationDashboard";
import CriticalMedication from "./criticalMedication";
import { MedicationProvider } from "../../contexts/MedicationContext";

const index = () => {
	return (
		<MedicationProvider>
			<MedicationDashboard />
		</MedicationProvider>
	);
};
export default index;
