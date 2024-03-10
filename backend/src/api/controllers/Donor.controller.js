import DonorModel from "../models/Donor.model";
import DonorService from "../services";
import logger from "../../util/logger";

// Donor Login
export const loginDonor = async (request, response, next) => {
	const { email, password } = request.body;

	if (email && password) {
		await DonorService.authenticateDonor(email, password)
			.then(async (user) => {
				const authToken = await user.generateAuthToken();
				const data = {
					_id: user._id,
					name: user.name,
					email: user.email,
					token: authToken,
					permissionLevel: user.permissionLevel,
				};

				request.handleResponse.successRespond(response)(data);
			})
			.catch((error) => {
				const errorResponseData = {
					errorTime: new Date(),
					message: error.message,
				};

				logger.error(JSON.stringify(errorResponseData));
				request.handleResponse.errorRespond(response)(errorResponseData);
				next();
			});
	} else {
		logger.error("Username or Password is missing");
		request.handleResponse.errorRespond(response)("Username or Password is missing");
		next();
	}
};

// Donor register
export const registerDonor = async (request, response, next) => {
	if (await DonorModel.findOne({ email: request.body.email })) {
		request.handleResponse.errorRespond(response)("Email already exists");
		next();
	} else if (await DonorModel.findOne({ nic: request.body.nic })) {
		request.handleResponse.errorRespond(response)("NIC already exists");
	} else {
		const Staff = {
			name: request.body.name,
			email: request.body.email,
			nic: request.body.nic,
			password: request.body.password,
			permissionLevel: "DONOR",
		};

		await DonorService.insertDonor(Staff)
			.then((data) => {
				logger.info(`New User with ID ${data._id} created`);
				request.handleResponse.successRespond(response)(data);
				next();
			})
			.catch((error) => {
				logger.error(error.message);
				request.handleResponse.errorRespond(response)(error.message);
				next();
			});
	}
};

// Get all donor details
export const getAllDonor = async (request, response, next) => {
	await DonorService.getAllDonor("users")
		.then(async (data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Get one donor details
export const getOneDonor = async (request, response, next) => {
	await DonorService.getDonorDetails(request.params.id)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Update donor details
export const updateDonor = async (request, response, next) => {
	await DonorService.editDonorDetails(request.params.id, request.body)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Delete Donor user
export const deleteDonor = async (request, response, next) => {
	await DonorService.deleteDonor(request.params.id)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};
