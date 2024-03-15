import React from "react";
import OrganizerSignup from "./OrganizerSignup";
import { OrganizerProvider } from "../../contexts/OrganizerContext";

function index() {
	return (
		<>
			<OrganizerProvider>
				<OrganizerSignup />
			</OrganizerProvider>
		</>
	);
}

export default index;
