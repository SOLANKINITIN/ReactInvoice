const express = require('express');
const router = express.Router();

const Invoice = require('../../model/Invoice');
router.post('/invoice', async (req, res, next) => {
	const { productName, date, price, image } = req.body;
	try {
		const invoice = await new Invoice({
			productName,
			date,
			price,
			image,
		}).save();
		res.json({
			code: 200,
			data: {
				invoice,
			},
			success: true,
		});
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

router.get('/invoice', async (req, res, next) => {
	try {
		const invoice = await Invoice.find();

		res.json({
			code: 200,
			data: {
				invoice,
			},
			success: true,
		});
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});
router.get('/invoice/search/:', async (req, res, next) => {
	try {
		const { search } = req.params;
		console.log(search);
		const invoice = await Invoice.find({
			$or: [
				{ productName: { $regex: search, $options: 'i' } },
				// { price: { $regex: 17000,  } },
			],
		});
		return res.json({
			code: 200,
			data: {
				invoice,
			},
			success: true,
		});
	} catch (err) {
		console.log(err);
	}
});

module.exports = router;
