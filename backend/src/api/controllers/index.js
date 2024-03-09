import { insert } from "./Sample.controller";

import { loginStaff, registerStaff, getAllStaff, getOneStaff, updateStaff, deleteStaff } from "./Staff.controller";

import { loginDonor, registerDonor, getAllDonor, getOneDonor, updateDonor, deleteDonor } from "./Donor.controller";

import {
	loginOrganization,
	registerOrganization,
	getOneOrganization,
	getAllOrganization,
	updateOrganization,
	deleteOrganization,
} from "./Organization.controller";

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

	//Organization Section
	loginOrganization,
	registerOrganization,
	getOneOrganization,
	getAllOrganization,
	updateOrganization,
	deleteOrganization,
};
