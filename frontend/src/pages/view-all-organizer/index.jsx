import React from "react";
import AllOrganizer from "./AllOrganizer";
import { OrganizerProvider } from "../../contexts/OrganizerContext";

function index() {
	return (
		<>
			<OrganizerProvider>
				<AllOrganizer />
			</OrganizerProvider>
		</>
	);
}

export default index;
