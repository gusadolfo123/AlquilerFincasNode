const mongoose = require('mongoose');
const { Schema } = mongoose;
const { Phone } = require('./phone');
const { Image } = require('./image');

const CompanySchemma = new Schema({
	name: { type: String, required: true },
	dir: { type: String, required: true },
	coordinate: {
		lat: { type: Schema.Types.Decimal128 },
		lon: { type: Schema.Types.Decimal128 },
	},
	phones: [[Phone]],
	whatsapp: { type: String },
	images: [[Image]],
	mission: { type: String },
	vision: { type: String },
	description: { type: String },
});

module.exports = mongoose.model('Company', CompanySchemma);
