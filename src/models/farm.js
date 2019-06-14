const mongoose = require('mongoose');
const { Schema } = mongoose;

const FarmSchema = new Schema({
	name: { type: String, required: true },
	alias: { type: String, required: true },
	dir: { type: String, required: true },
	description: { type: String, required: true },
	coordinate: {
		lat: { type: Schema.Types.Decimal128 },
		lon: { type: Schema.Types.Decimal128 },
	},
	images: [
		{
			name: { type: String },
			url: { type: String },
			size: { type: String },
		},
	],
	prices: {
		low_season: {
			total: { type: Schema.Types.Decimal128 },
			per_person: { type: Schema.Types.Decimal128 },
		},
		mid_season: {
			total: { type: Schema.Types.Decimal128 },
			per_person: { type: Schema.Types.Decimal128 },
		},
		high_season: {
			total: { type: Schema.Types.Decimal128 },
			per_person: { type: Schema.Types.Decimal128 },
		},
	},
	services: [
		{
			name: { type: String },
			description: { type: String },
			icon: { type: String },
		},
	],
	terms_conditions: [String],
});

module.exports = mongoose.model('Farm', FarmSchema);
