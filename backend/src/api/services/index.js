import { insert } from "./Sample.service";

import {
	authenticateStaff,
	insertStaff,
	getStaffDetails,
	getAllStaff,
	editStaffDetails,
	deleteStaff,
} from "./Staff.service";

export default {
	insert,

	// Staff Section
	authenticateStaff,
	insertStaff,
	getStaffDetails,
	getAllStaff,
	editStaffDetails,
	deleteStaff,
};
