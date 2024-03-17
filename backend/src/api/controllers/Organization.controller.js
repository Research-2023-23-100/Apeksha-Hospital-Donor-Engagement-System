import OrganizationModel from "../models/Organization.model";
import logger from "../../util/logger";
import OrganizationService from "../services";

// Organization Login
export const loginOrganization = async (request, response, next) => {
  const { email, password } = request.body;

  if (email && password) {
    await OrganizationService.authenticateOrganization(email, password)
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

// Organization register
export const registerOrganization = async (request, response, next) => {
  if (await OrganizationModel.findOne({ email: request.body.email })) {
    request.handleResponse.errorRespond(response)("Email already exists");
    next();
  } else if (await OrganizationModel.findOne({ name: request.body.name })) {
    request.handleResponse.errorRespond(response)("Name already exists");
  } else {
    const Staff = {
      name: request.body.name,
      email: request.body.email,
      password: request.body.password,
      imageBack: request.body.imageBack,
      imageFront: request.body.imageFront,
      permissionLevel: "ORGANIZATION",
    };

    await OrganizationService.insertOrganization(Staff)
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

// Get all organization details
export const getAllOrganization = async (request, response, next) => {
  await OrganizationService.getAllOrganization("users")
    .then(async (data) => {
      request.handleResponse.successRespond(response)(data);
      next();
    })
    .catch((error) => {
      request.handleResponse.errorRespond(response)(error.message);
      next();
    });
};

// Get one organization details
export const getOneOrganization = async (request, response, next) => {
  await OrganizationService.getOrganizationDetails(request.params.id)
    .then((data) => {
      request.handleResponse.successRespond(response)(data);
      next();
    })
    .catch((error) => {
      request.handleResponse.errorRespond(response)(error.message);
      next();
    });
};

// Update organization details
export const updateOrganization = async (request, response, next) => {
  await OrganizationService.editOrganizationDetails(request.params.id, request.body)
    .then((data) => {
      request.handleResponse.successRespond(response)(data);
      next();
    })
    .catch((error) => {
      request.handleResponse.errorRespond(response)(error.message);
      next();
    });
};

// Delete Organization user
export const deleteOrganization = async (request, response, next) => {
  await OrganizationService.deleteOrganization(request.params.id)
    .then((data) => {
      request.handleResponse.successRespond(response)(data);
      next();
    })
    .catch((error) => {
      request.handleResponse.errorRespond(response)(error.message);
      next();
    });
};

// Update Donor Status
export const updateDonorStatus = async (request, response, next) => {
  try {
    const { id } = request.params;
    const { accountStatus } = request.body;

    // Find the organizer by ID and update its account status
    const updatedDonor = await Donor.findByIdAndUpdate(id, { accountStatus }, { new: true });

    if (!updatedDonor) {
      response.status(404).json({ error: 'Donor not found' });
      return;
    }

    response.json({ message: 'Donor status updated successfully', donor: updatedDonor });
  } catch (error) {
    console.error('Error updating donor status:', error);
    response.status(500).json({ error: 'Error updating donor status' });
  }
};

// Get Donor Status
export const getDonorStatus = async (request, response, next) => {
  try {
    const { email } = request.body;
    const donor = await Donor.findOne({ email });

    if (!donor) {
      response.status(404).json({ error: 'Donor not found' });
      return;
    }

    response.json({ status: donor.accountStatus });
  } catch (error) {
    console.error('Error fetching donor status:', error);
    response.status(500).json({ error: 'Error fetching donor status' });
  }
};
