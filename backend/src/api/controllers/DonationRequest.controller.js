import DonationRequestService from "../services";
import logger from "../../util/logger";
import sendMail from "../../util/sendMail";

// Create Donation
export const insertDonation = async (request, response, next) => {
	try {
		const donationRequest = await DonationRequestService.insertDonation(request.body);

		// Send email to donated user
		await sendMail({
			to: request.body.email,
			subject: "Apeksha Hospital Donation Status",
			templateType: "donationPending",
			data: {
				name: request.body.name,
				donationItems: [
					{
						ItemName: donationRequest.ItemName,
						quantity: donationRequest.quantity,
					},
				],
			},
		});

		logger.info("Donation Created");
		request.handleResponse.successRespond(response)(donationRequest);
		next();
	} catch (error) {
		logger.error("Error occurred while processing donation:", error);
		request.handleResponse.errorRespond(response)(error.message || "Internal Server Error");
		next();
	}
};

export const getAllDonation = async (request, response, next) => {
	await DonationRequestService.getAllDonation("users")
		.then(async (data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

export const getDonationDetails = async (req, res, next) => {
	await DonationRequestService.getDonationDetails(req.params.id)
		.then((data) => {
			req.handleResponse.successRespond(res)(data);
			next();
		})
		.catch((error) => {
			req.handleResponse.errorRespond(res)(error.message);
			next();
		});
};

export const deleteDonation = async (request, response, next) => {
	await DonationRequestService.deleteDonation(request.params.id)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

export const changeDonationStatus = async (request, response, next) => {
	await DonationRequestService.changeDonationStatus(request.params.id, request.body.status)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};
