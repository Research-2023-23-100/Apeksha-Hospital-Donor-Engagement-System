import { insert } from "./Sample.controller";

import { loginStaff, registerStaff, getAllStaff, getOneStaff, updateStaff, deleteStaff } from "./Staff.controller";

import { loginDonor, registerDonor, getAllDonor, getOneDonor, updateDonor, deleteDonor } from "./Donor.controller";

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
};
