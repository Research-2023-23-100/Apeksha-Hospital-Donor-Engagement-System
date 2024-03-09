import { insert } from "./Sample.service";

import {
	authenticateStaff,
	insertStaff,
	getStaffDetails,
	getAllStaff,
	editStaffDetails,
	deleteStaff,
} from "./Staff.service";

import {
	authenticateDonor,
	insertDonor,
	getAllDonor,
	getDonorDetails,
	editDonorDetails,
	deleteDonor,
} from "./Donor.service";

export default {
	insert,

	// Staff Section
	authenticateStaff,
	insertStaff,
	getStaffDetails,
	getAllStaff,
	editStaffDetails,
	deleteStaff,

	//Donor Section
	authenticateDonor,
	insertDonor,
	getAllDonor,
	getDonorDetails,
	editDonorDetails,
	deleteDonor,
};
