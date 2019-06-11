const mongoose = require('mongoose');
const { Schema } = mongoose;
const { Image } = require('./image');
const { Service } = require('./service');

const FarmSchema = new Schema({
	name: { type: String, required: true },
	alias: { type: String, required: true },
	dir: { type: String, required: true },
	description: { type: String, required: true },
	coordinate: {
		lat: { type: Schema.Types.Decimal128 },
		lon: { type: Schema.Types.Decimal128 },
	},
	images: [[Image]],
	prices: {
		low_season: Price,
		mid_season: Price,
		high_season: Price,
	},
	services: [[Service]],
});

module.exports = mongoose.model('Farm', FarmSchema);
