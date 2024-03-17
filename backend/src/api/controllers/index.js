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
} from "./Organization.controller";

import {
	insertItem,
	getAllItems,
	getItemDetails,
	deleteItem,
	incrementQuantity,
	decrementQuantity,
} from "./Item.controller";

import {
	deleteCampagin,
	editCampaginDetails,
	getAllCampagin,
	getCampaginDetails,
	insertCampagin,
} from "./Campagin.controller";

import { insertDonation } from "./DonationRequest.controller";

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

	// Item Section
	insertItem,
	getAllItems,
	getItemDetails,
	deleteItem,
	incrementQuantity,
	decrementQuantity,

	// Campagin Section
	insertCampagin,
	getAllCampagin,
	getCampaginDetails,
	deleteCampagin,
	editCampaginDetails,

	// Dontation Request
	insertDonation,
};
