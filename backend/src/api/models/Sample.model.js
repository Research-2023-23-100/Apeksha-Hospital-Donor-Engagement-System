const mongoose = require("mongoose");

const SampleSchema = new mongoose.Schema({

	name : {
		type: String,
		required: true,
	},

	title: {
		type: String,
		required: true,
	}
});

module.exports = mongoose.model("Sample", SampleSchema);