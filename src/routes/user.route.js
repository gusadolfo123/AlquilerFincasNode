const userController = require('../controllers/user.controller');
const express = require('express');
const router = express.Router();

router.get('/users/signin', (req, res) => {
	res.render('users/signin');
});

router.get('/users/signup', (req, res) => {
	res.render('users/signup');
});

router.post('/users/signin', userController.signIn);
router.post('/users/signup', userController.signUp);
router.get('/users/logout', userController.logout);

module.exports = router;
