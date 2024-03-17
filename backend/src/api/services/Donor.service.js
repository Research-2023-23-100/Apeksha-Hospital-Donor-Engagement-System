import DonorModel from "../models/Donor.model";

// Authenticate Donor
export const authenticateDonor = async (email, password) => {
	return await DonorModel.findOne({ email })
		.then(async (user) => {
			if (user && (await user.matchPassword(password))) {
				return user;
			} else {
				throw new Error("Invalid Email or Password!");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Insert Donor
export const insertDonor = async (user) => {
	return await DonorModel.create(user)
		.then(async (user) => {
			await user.generateAuthToken();
			return user;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get one Donor Details
export const getDonorDetails = async (userId) => {
	return await DonorModel.findById(userId)
		.then((user) => {
			return user;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get All Donor Details
export const getAllDonor = async () => {
	return await DonorModel.find()
		.then((user) => {
			return user;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Update Donor Details
export const editDonorDetails = async (userId, Staff) => {
	return await DonorModel.findByIdAndUpdate(userId, Staff, { new: true })
		.then((Staff) => {
			return Staff;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Delete Donor user
export const deleteDonor = async (userId) => {
	return await DonorModel.findByIdAndDelete(userId)
		.then((user) => {
			return user;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Update Active Status
export const changeStatus = async (userId, status) => {
	return await DonorModel.findByIdAndUpdate(userId, { status: status }, { new: true })
		.then((user) => {
			if (user) {
				return user;
			} else {
				throw new Error("User not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};
