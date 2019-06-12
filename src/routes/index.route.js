const express = require('express');
const router = express.Router();
const landingController = require('../controllers/landing.controller');

router.get('/', (req, res) => {
	res.render('index');
});

router.get('/about', (req, res) => {
	res.render('about');
});

router.get('/contact', (req, res) => {
	res.render('contact');
});

module.exports = router;
