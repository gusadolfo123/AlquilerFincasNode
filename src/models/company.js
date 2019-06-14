const mongoose = require('mongoose');
const { Schema } = mongoose;

const CompanySchemma = new Schema({
	name: { type: String, required: true },
	dir: { type: String, required: true },
	coordinate: {
		lat: { type: Schema.Types.Decimal128 },
		lon: { type: Schema.Types.Decimal128 },
	},
	phones: [
		{
			phone_type: String,
			number: String,
		},
	],
	whatsapp: { type: String },
	images: [
		{
			name: { type: String },
			url: { type: String },
			size: { type: String },
		},
	],
	mission: { type: String },
	vision: { type: String },
	description: { type: String },
});

module.exports = mongoose.model('Company', CompanySchemma);
