const express = require('express');
const router = express.Router();
const companyController = require('../controllers/company.controller');

router.get('/company', companyController.getCompany);
router.post('/company', companyController.createCompany);
router.put('/company/:id?', companyController.updateCompany);

module.exports = router;
