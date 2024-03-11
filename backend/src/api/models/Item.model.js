const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema(
	{
		ItemName: {
			type: String,
			required: true,
		},

		ItemID: {
			type: String,
			required: true,
		},
		QuantityInStock: {
			type: Number,
			required: true,
		},
		image: {
			type: String,
			required: false,
		},
	},

	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Items", ItemSchema);
