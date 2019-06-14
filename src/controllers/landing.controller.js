const Farm = require('../models/farm');
const Company = require('../models/company');
const { generateFarms } = require('../test/farm.fake');
const LandingCtrl = {};

LandingCtrl.index = async (req, res) => {
	const company = await Company.find({});
	res.render('index', { company });
};

LandingCtrl.about = (req, res) => {
	res.render('about');
};

LandingCtrl.contact = (req, res) => {
	res.render('contact');
};

LandingCtrl.generateFakeData = async (req, res) => {
	generateFarms()
		.then(result => {
			res.send(result);
		})
		.catch(error => {
			res.send(error);
		});
};

LandingCtrl.getFarmsPerPage = async (req, res, next) => {
	const perPage = 9;
	const page = req.params.page || 1;

	await Farm.find({})
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
};

module.exports = LandingCtrl;
