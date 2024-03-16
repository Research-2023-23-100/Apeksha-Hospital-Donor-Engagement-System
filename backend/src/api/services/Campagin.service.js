import CampaginModel from "../models/campagin.model";

export const insertCampagin = async (data) => {
	return await CampaginModel.create(data)
		.then(async (cam_data) => {
			await cam_data.save();
			return cam_data;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

export const getAllCampagin = async () => {
	return await CampaginModel.find({})
		.then((data) => {
			return data;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

export const getCampaginDetails = async (camId) => {
	return await CampaginModel.findById(camId)
		.then((cam) => {
			return cam;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

export const deleteCampagin = async (camId) => {
	return await CampaginModel.findByIdAndDelete(camId)
		.then((cam) => {
			if (cam) {
				return cam;
			} else {
				throw new Error("Campagin Not Found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

export const editCampaginDetails = async (userId, cam) => {
	return await CampaginModel.findByIdAndUpdate(userId, cam, { new: true })
		.then((cam) => {
			return cam;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};
