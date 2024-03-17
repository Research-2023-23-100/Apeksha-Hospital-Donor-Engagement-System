const mongoose = require("mongoose");

const CampaginSchema = new mongoose.Schema({
	organizerName: {
		type: String,
		required: true,
	},
	mobile: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},

	date: {
		type: Date,
		default: Date.now,
	},
	marketingSlip: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("Campagin", CampaginSchema);
