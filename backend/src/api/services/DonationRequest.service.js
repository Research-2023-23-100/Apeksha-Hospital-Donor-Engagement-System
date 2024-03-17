import DonationRequestModel from "../models/DonationRequest.model";

export const insertDonation = async (item) => {
	return await DonationRequestModel.create(item)
		.then(async (item_data) => {
			await item_data.save();
			return item_data;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

export const getAllDonation = async () => {
	return await DonationRequestModel.find({})
		.then((data) => {
			return data;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

export const getDonationDetails = async (itemId) => {
	return await DonationRequestModel.findById(itemId)
		.then((item) => {
			return item;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// delete item
export const deleteDonation = async (itemId) => {
	return await DonationRequestModel.findByIdAndDelete(itemId)
		.then((item) => {
			if (item) {
				return item;
			} else {
				throw new Error("Donation Not Found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};
