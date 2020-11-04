const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const invoiceSchema = new Schema({
	productName: {
		type: mongoose.Schema.Types.String,
	},
	image: {
		type: mongoose.Schema.Types.String,
	},

	date: {
		type: Date,
		default: Date.now,
	},
	price: {
		type: mongoose.Schema.Types.Number,
		default: 0,
	},
});

module.exports = mongoose.model('Invoice', invoiceSchema);
