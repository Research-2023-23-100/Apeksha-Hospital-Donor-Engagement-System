// utils/upload.js
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

// Configure Cloudinary
cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Configure multer and Cloudinary storage
const storage = new CloudinaryStorage({
	cloudinary: cloudinary,
	params: {
		folder: "camp_bank_pics",
		format: async (req, file) => "png", // or jpg, jpeg, etc.
		public_id: (req, file) => `bankSlip_${Date.now()}`, // Use a unique ID for each profile picture
	},
});

const slipupload = multer({ storage: storage });

module.exports = slipupload;
