import { insert } from "./Sample.controller";

import { loginStaff, registerStaff, getAllStaff, getOneStaff, updateStaff, deleteStaff } from "./Staff.controller";

import {
	loginDonor,
	registerDonor,
	getAllDonor,
	getOneDonor,
	updateDonor,
	deleteDonor,
	changeStatus,
} from "./Donor.controller";

import {
	loginOrganization,
	registerOrganization,
	getOneOrganization,
	getAllOrganization,
	updateOrganization,
	deleteOrganization,
	updateOrganizerStatus,
	getOrganizerStatus,
} from "./Organization.controller";

import {
	insertItem,
	getAllItems,
	getItemDetails,
	deleteItem,
	incrementQuantity,
	decrementQuantity,
} from "./Item.controller";

import { createCamp, getAllCamps, getCampById, updateCamp, deleteCamp,updateBloodCampStaff,updateBloodRequiredItems,updateBloodCampAccountStatus } from "./Campagin.controller";

import {
	deleteDonation,
	getAllDonation,
	getDonationDetails,
	insertDonation,
	changeDonationStatus,
} from "./DonationRequest.controller";

export default {
	insert,

	//Staff Section
	loginStaff,
	registerStaff,
	getAllStaff,
	getOneStaff,
	updateStaff,
	deleteStaff,

	//Donor Section
	loginDonor,
	registerDonor,
	getAllDonor,
	getOneDonor,
	updateDonor,
	deleteDonor,
	changeStatus,

	//Organization Section
	loginOrganization,
	registerOrganization,
	getOneOrganization,
	getAllOrganization,
	updateOrganization,
	deleteOrganization,
	updateOrganizerStatus,
	getOrganizerStatus,

	// Item Section
	insertItem,
	getAllItems,
	getItemDetails,
	deleteItem,
	incrementQuantity,
	decrementQuantity,

	// Campagin Section
	createCamp,
	getAllCamps,
	getCampById,
	updateCamp,
	deleteCamp,
	updateBloodCampStaff,
	updateBloodRequiredItems,
	updateBloodCampAccountStatus,

	// Dontation Request
	insertDonation,
	getAllDonation,
	getDonationDetails,
	deleteDonation,
	changeDonationStatus,
};
