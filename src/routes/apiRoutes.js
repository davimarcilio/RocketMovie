const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');
router.get('/movie', apiController.movie)
module.exports = router;