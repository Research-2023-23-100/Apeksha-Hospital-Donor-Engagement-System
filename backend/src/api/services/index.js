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
	changeStatus,
} from "./Donor.service";

import {
	authenticateOrganization,
	insertOrganization,
	getAllOrganization,
	getOrganizationDetails,
	editOrganizationDetails,
	deleteOrganization,
} from "./Organization.service";

import {
	insertItem,
	getAllItems,
	getItemDetails,
	deleteItem,
	incrementQuantity,
	decrementQuantity,
} from "./Item.service";

import { deleteCampagin, getAllCampagin, getCampaginDetails, insertCampagin } from "./Campagin.service";

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
	changeStatus,

	// Organization Section
	authenticateOrganization,
	insertOrganization,
	getAllOrganization,
	getOrganizationDetails,
	editOrganizationDetails,
	deleteOrganization,

	// Item Section
	insertItem,
	getAllItems,
	getItemDetails,
	deleteItem,
	incrementQuantity,
	decrementQuantity,

	//Campagin Section
	insertCampagin,
	getAllCampagin,
	getCampaginDetails,
	deleteCampagin,
};
