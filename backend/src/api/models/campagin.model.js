const mongoose = require("mongoose");

const CampaginSchema = new mongoose.Schema({
	organizerName: {
		type: String,
		required: true,
	},
	organizerId: {
		type: String,
		default: "0",
	},
	mobile: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	place: {
		type: String,
		default: "Apeksha Hospital",
	},
	staff: {
		type: Number,
		default: 0,
	},
	requiredItems: {
		type: Number,
		default: 0,
	},
	accountStatus: {
		type: String,
		enum: ["pending", "accept", "reject"],
		default: "pending",
	},
	expectedPeopleAmount: {
		type: Number,
		default: 0,
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
