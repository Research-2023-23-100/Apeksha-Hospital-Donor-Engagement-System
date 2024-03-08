import StaffService from "../services";
import logger from "../../util/logger";
import StaffModel from "../models/Staff.model";

//Staff Login
export const loginStaff = async (request, response, next) => {
	const { email, password } = request.body;

	if (email && password) {
		await StaffService.authenticateStaff(email, password)
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

// Staff register
export const registerStaff = async (request, response, next) => {
	if (await StaffModel.findOne({ email: request.body.email })) {
		request.handleResponse.errorRespond(response)("Email already exists");
		next();
	} else if (await StaffModel.findOne({ name: request.body.name })) {
		request.handleResponse.errorRespond(response)("Name already exists");
	} else {
		const Staff = {
			name: request.body.name,
			email: request.body.email,
			password: request.body.password,
			permissionLevel: "STAFF",
		};

		await StaffService.insertStaff(Staff)
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

// Get all staff details
export const getAllStaff = async (request, response, next) => {
	await StaffService.getAllStaff("users")
		.then(async (data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Get one staff details
export const getOneStaff = async (request, response, next) => {
	await StaffService.getStaffDetails(request.params.id)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Update staff details
export const updateStaff = async (request, response, next) => {
	await StaffService.editStaffDetails(request.params.id, request.body)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Delete Staff user
export const deleteStaff = async (request, response, next) => {
	await StaffService.deleteStaff(request.params.id)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};
