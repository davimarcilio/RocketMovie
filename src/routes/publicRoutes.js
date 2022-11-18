const express = require('express');
const publicController = require('../controllers/publicController');
const router = express.Router();
router.get('/', publicController.index);
module.exports = router;