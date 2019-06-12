const mongoose = require('mongoose');
const { Schema } = mongoose;

function Image() {
	this.name = { type: String };
	this.url = { type: String };
	this.size = { type: Schema.Types.Decimal128 };
}

module.exports = { Image };
