const Company = require('../models/company');
const companyCtrl = {};

companyCtrl.createCompany = async (req, res) => {
	const { name, dir, lat, lon } = req.body;

	console.log(name, dir, lat, lon);

	const company = new Company({
		name,
		dir,
		coordinate: { lat, lon },
	});
	await company.save();

	req.flash('success_msg', 'Added Successfully');
	res.render('company/index', { company });
};

companyCtrl.getCompany = async (req, res) => {
	const company = await Company.find({});
	res.render('company/index', { company });
};

companyCtrl.updateCompany = async (req, res) => {
	const { id } = req.params;
	const { name, dir, coordinate, phones, whatsapp, images, mission, vision, description } = req.body;
	const company = await Company.findByIdAndUpdate(
		id,
		{
			name,
			dir,
			coordinate,
			phones,
			whatsapp,
			images,
			mission,
			vision,
			description,
		},
		{ new: true },
	);
	req.flash('success_msg', 'Updated Successfully');
	res.render('company/index', { company });
};

module.exports = companyCtrl;
