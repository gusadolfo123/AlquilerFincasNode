const express = require('express');
const router = express.Router();
const landingController = require('../controllers/landing.controller');

router.get('/', landingController.index);
router.get('/about', landingController.about);
router.get('/contact', landingController.contact);
router.get('/farms/generate', landingController.generateFakeData);
router.get('/farms/:page?', landingController.getFarmsPerPage);

module.exports = router;
