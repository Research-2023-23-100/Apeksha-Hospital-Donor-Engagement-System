import React from "react";
import Organizer from "./OrganizerLogin";
import { OrganizerProvider } from "../../contexts/OrganizerContext";

function index() {
	return (
		<div>
			<OrganizerProvider>
				<Organizer />
			</OrganizerProvider>
		</div>
	);
}

export default index;
