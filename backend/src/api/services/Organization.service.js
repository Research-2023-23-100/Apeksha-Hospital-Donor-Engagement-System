import OrganizationModel from "../models/Organization.model";

// Authenticate Organization
export const authenticateOrganization = async (email, password) => {
	return await OrganizationModel.findOne({ email })
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

// Insert Organizatioon
export const insertOrganization = async (user) => {
	return await OrganizationModel.create(user)
		.then(async (user) => {
			await user.generateAuthToken();
			return user;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get one Organization Details
export const getOrganizationDetails = async (userId) => {
	return await OrganizationModel.findById(userId)
		.then((user) => {
			return user;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get All Organization Details
export const getAllOrganization = async () => {
	return await OrganizationModel.find()
		.then((user) => {
			return user;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Update Organization Details
export const editOrganizationDetails = async (userId, Staff) => {
	return await OrganizationModel.findByIdAndUpdate(userId, Staff, { new: true })
		.then((Staff) => {
			return Staff;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Delete Organization user
export const deleteOrganization = async (userId) => {
	return await OrganizationModel.findByIdAndDelete(userId)
		.then((user) => {
			return user;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};
