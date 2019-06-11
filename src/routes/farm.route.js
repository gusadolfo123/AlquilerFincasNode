const express = require('express');
const router = express.Router();

router.get('/farms', (req, res) => {
	res.render('farms/index');
});

module.exports = router;
