const express = require('express');
const styleController = require('../controllers/styleController');
const router = express.Router();
router.get('/indexCss', styleController.indexStyle)
module.exports = router;