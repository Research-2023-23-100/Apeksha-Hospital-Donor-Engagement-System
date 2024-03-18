import Camp from '../models/campagin.model';


// Create a new camp
export const createCamp = async (req, res) => {

  try {
    const { organizerName, mobile, email, staff, requiredItems, date,expectedPeopleAmount } = req.body;

    // Create new camp with Cloudinary image URL and other details
    const newCamp = await Camp.create({
      organizerName,
      mobile,
      email,
      staff,
      requiredItems,
      date,
      expectedPeopleAmount,
      marketingSlip: req.file.path, // URL of the uploaded image
    });

    res.status(201).json({
      success: true,
      data: newCamp
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
};

// Get all camps
export const getAllCamps = async (req, res) => {
	try {
		const camps = await Camp.find();
		res.status(200).json({
			success: true,
			data: camps,
		});
	} catch (err) {
		res.status(500).json({
			success: false,
			message: "Server Error",
		});
	}
};

// Get a single camp by ID
export const getCampById = async (req, res) => {
	try {
		const camp = await Camp.findById(req.params.id);
		if (!camp) {
			return res.status(404).json({
				success: false,
				message: "Camp not found",
			});
		}
		res.status(200).json({
			success: true,
			data: camp,
		});
	} catch (err) {
		res.status(500).json({
			success: false,
			message: "Server Error",
		});
	}
};

// Update a camp by ID
export const updateCamp = async (req, res) => {
	try {
		const camp = await Camp.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true,
		});
		if (!camp) {
			return res.status(404).json({
				success: false,
				message: "Camp not found",
			});
		}
		res.status(200).json({
			success: true,
			data: camp,
		});
	} catch (err) {
		res.status(500).json({
			success: false,
			message: "Server Error",
		});
	}
};

// Delete a camp by ID
export const deleteCamp = async (req, res) => {
	try {
		const camp = await Camp.findByIdAndDelete(req.params.id);
		if (!camp) {
			return res.status(404).json({
				success: false,
				message: "Camp not found",
			});
		}
		res.status(200).json({
			success: true,
			message: "Camp deleted",
		});
	} catch (err) {
		res.status(500).json({
			success: false,
			message: "Server Error",
		});
	}
};

// Update staff by ID
export const updateBloodCampStaff = async (req, res) => {
  try {
    const { id } = req.params;
    const { staff } = req.body;

    const updatedCamp = await Camp.findByIdAndUpdate(id, { staff }, { new: true });

    if (!updatedCamp) {
      return res.status(404).json({ success: false, message: 'Camp not found' });
    }

    res.status(200).json({ success: true, data: updatedCamp });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update requiredItems by ID
export const updateBloodRequiredItems = async (req, res) => {
  try {
    const { id } = req.params;
    const { requiredItems } = req.body;

    const updatedCamp = await Camp.findByIdAndUpdate(id, { requiredItems }, { new: true });

    if (!updatedCamp) {
      return res.status(404).json({ success: false, message: 'Camp not found' });
    }

    res.status(200).json({ success: true, data: updatedCamp });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update accountStatus by ID
export const updateBloodCampAccountStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { accountStatus } = req.body;

    const updatedCamp = await Camp.findByIdAndUpdate(id, { accountStatus }, { new: true });

    if (!updatedCamp) {
      return res.status(404).json({ success: false, message: 'Camp not found' });
    }

    res.status(200).json({ success: true, data: updatedCamp });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

