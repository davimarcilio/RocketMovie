const express = require('express');
const scriptController = require('../controllers/scriptController');
const router = express.Router();
router.get('/scriptIndex', scriptController.indexScript)
module.exports = router;