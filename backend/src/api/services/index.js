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

import {
	authenticateOrganization,
	insertOrganization,
	getAllOrganization,
	getOrganizationDetails,
	editOrganizationDetails,
	deleteOrganization,
} from "./Organization.service";

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

	// Organization Section
	authenticateOrganization,
	insertOrganization,
	getAllOrganization,
	getOrganizationDetails,
	editOrganizationDetails,
	deleteOrganization,
};
