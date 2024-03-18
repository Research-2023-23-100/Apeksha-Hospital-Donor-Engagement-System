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
		default: "hospital",
	},
	staff: {
		type: Number,
		set: (v) => (v === null ? 0 : v), // Set to 0 if null is provided
		default: 0,
	},
	requiredItems: {
		type: Number,
		set: (v) => (v === null ? 0 : v), // Set to 0 if null is provided
		default: 0,
	},
	accountStatus: {
		type: String,
		enum: ["pending", "active", "block"],
		default: "pending",
	},
	expectedPeopleAmount: {
		type: Number,
		set: (v) => (v === null ? 0 : v), // Set to 0 if null is provided
		default: 0,
	},
	date: {
		type: Date,
		default: Date.now,
	},
	marketingSlip: {
		type: String,
		required: false,
	},
});

module.exports = mongoose.model("Campagin", CampaginSchema);
