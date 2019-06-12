const faker = require('faker/locale/es_MX');
const Farm = require('../models/farm');
const fakerFarms = {};

fakerFarms.generateFarms = async () => {
	let farms = [];
	for (let index = 0; index < 10; index++) {
		const newFarm = new Farm({
			name: faker.company.companyName(),
			alias: faker.company.companySuffix(),
			dir: faker.address.secondaryAddress(),
			description: faker.lorem.sentence(200, 20),
			coordinate: {
				lat: faker.address.latitude(),
				lon: faker.address.longitude(),
			},
			images: [
				{
					name: faker.image.nature.name,
					url: 'https://picsum.photos/1920/800/?image=' + faker.random.number(1084), // faker.image.imageUrl(1920, 800, 'nature', true, true),
					size: 9545493.45,
				},
				{
					name: faker.image.nature.name,
					url: 'https://picsum.photos/1920/800/?image=' + faker.random.number(1084), // faker.image.imageUrl(1920, 800, 'nature', true, true),
					size: 9545493.45,
				},
			],
			prices: {
				low_season: {
					total: faker.commerce.price(800000, 3500000, 2),
					per_persona: faker.commerce.price(120000, 350000, 2),
				},
				mid_season: {
					total: faker.commerce.price(1200000, 3500000, 2),
					per_persona: faker.commerce.price(120000, 350000, 2),
				},
				high_season: {
					total: faker.commerce.price(1200000, 3500000, 2),
					per_persona: faker.commerce.price(180000, 350000, 2),
				},
			},
			services: [
				{
					name: faker.name.jobArea(),
					description: faker.name.jobDescriptor(),
					icon: faker.internet.avatar.name,
				},
				{
					name: faker.name.jobArea(),
					description: faker.name.jobDescriptor(),
					icon: faker.internet.avatar.name,
				},
			],
		});
		farms.push(await newFarm.save());
	}
	return farms;
};

module.exports = fakerFarms;
