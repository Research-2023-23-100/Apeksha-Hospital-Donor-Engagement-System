import StaffModel from "../models/Staff.model";

// Authenticate Staff
export const authenticateStaff = async (email, password) => {
	return await StaffModel.findOne({ email })
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

// Create new Staff user
export const insertStaff = async (user) => {
	return await StaffModel.create(user)
		.then(async (user) => {
			await user.generateAuthToken();
			return user;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get one Staff Details
export const getStaffDetails = async (userId) => {
	return await StaffModel.findById(userId)
		.then((user) => {
			return user;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get All Staff Details
export const getAllStaff = async () => {
	return await StaffModel.find()
		.then((user) => {
			return user;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Update Staff Details
export const editStaffDetails = async (userId, Staff) => {
	return await StaffModel.findByIdAndUpdate(userId, Staff, { new: true })
		.then((Staff) => {
			return Staff;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Delete Staff user
export const deleteStaff = async (userId) => {
	return await StaffModel.findByIdAndDelete(userId)
		.then((user) => {
			return user;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};
