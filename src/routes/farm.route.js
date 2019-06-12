const express = require('express');
const router = express.Router();
const Farm = require('../models/farm');
const { generateFarms } = require('../test/farm.fake');

router.get('/farms', async (req, res) => {
	const farms = await Farm.find({});
	console.log(farms[0]);
	res.render('farms/index', { farms });
});

router.get('/farms/generate', async (req, res) => {
	generateFarms()
		.then(result => {
			res.send(result);
		})
		.catch(error => {
			console.log(error);
			res.send(error);
		});
});

module.exports = router;
