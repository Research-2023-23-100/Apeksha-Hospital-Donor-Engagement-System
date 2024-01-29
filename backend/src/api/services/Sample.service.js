import SampleModel from "../models/Sample.model";

export const insert = async (data) => {
	return await SampleModel.create(data)
		.then(async (data) => {
			await data.save();
			return data;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};