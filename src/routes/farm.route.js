const express = require('express');
const router = express.Router();
const Farm = require('../models/farm');
const { generateFarms } = require('../test/farm.fake');

router.get('/farms/:page?', async (req, res, next) => {
	const perPage = 9;
	console.log(req.params.page);
	const page = req.params.page || 1;

	const farms = await Farm.find({})
		.skip(perPage * page - perPage)
		.limit(perPage)
		.exec((err, farms) => {
			Farm.countDocuments((err, count) => {
				if (err) return next(err);
				res.render('farms/index', {
					farms,
					current: page,
					pages: Math.ceil(count / perPage),
					total: count,
				});
			});
		});
});

router.get('/farms/generate', async (req, res) => {
	generateFarms()
		.then(result => {
			res.send(result);
		})
		.catch(error => {
			res.send(error);
		});
});

module.exports = router;
