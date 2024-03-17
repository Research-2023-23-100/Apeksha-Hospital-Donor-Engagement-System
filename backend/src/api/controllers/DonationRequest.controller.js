import DonationRequestService from "../services";
import logger from "../../util/logger";
import sendMail from "../../util/sendMail";

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
