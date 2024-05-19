import DonorModel from "../models/Donor.model";
import DonorService from "../services";
import logger from "../../util/logger";
import sendMail from "../../util/sendMail";

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
	try {
		const existingEmail = await DonorModel.findOne({ email: request.body.email });
		if (existingEmail) {
			request.handleResponse.errorRespond(response)("Email already exists");
		} else {
			const existingNIC = await DonorModel.findOne({ nic: request.body.nic });
			if (existingNIC) {
				request.handleResponse.errorRespond(response)("NIC already exists");
			} else {
				const newDonor = {
					name: request.body.name,
					email: request.body.email,
					contact: request.body.contact,
					nic: request.body.nic,
					password: request.body.password,
					permissionLevel: "DONOR",
				};

				const createdDonor = await DonorService.insertDonor(newDonor);
				logger.info(`New User with ID ${createdDonor._id} created`);
				request.handleResponse.successRespond(response)(createdDonor);

				// Send email to the registered user
				await sendMail({
					to: request.body.email,
					subject: "User Registered",
					templateType: "donation",
					data: {
						name: request.body.name,
					},
				});
			}
		}
	} catch (error) {
		logger.error(error.message);
		request.handleResponse.errorRespond(response)(error.message);
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

// Change Status
export const changeStatus = async (request, response, next) => {
	await DonorService.changeStatus(request.params.id, request.body.status)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// // Update donated count for a donor

export const updateDonatedCount = async (req, res) => {
	try {
	  const { id } = req.params;
	  const { donatedCount } = req.body;
  
	  const updatedDonor = await DonorModel.findByIdAndUpdate(id, { donatedCount }, { new: true });
  
	  if (!updatedDonor) {
		return res.status(404).json({ success: false, message: 'Donor not found' });
	  }
  
	  res.status(200).json({ success: true, data: updatedDonor });
	} catch (error) {
	  res.status(500).json({ success: false, message: error.message });
	}
  };
  