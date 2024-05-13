const mongoose = require("mongoose");

const DonationRequestSchema = new mongoose.Schema(
	{
		ItemName: {
			type: String,
			required: true,
		},
		quantity: {
			type: Number,
			required: true,
		},
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Donor",
			required: false,
		},
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		date: {
			type: Date,
			required: true,
		},
		donationType: {
			type: String,
			enum: ["ESSENTIAL", "MEDICATION"],
			required: true,
		},
		status: {
			type: String,
			enum: ["PENDING", "ACCEPTED", "REJECT", "COMPLETED"],
			default: "PENDING",
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("DonationRequest", DonationRequestSchema);
