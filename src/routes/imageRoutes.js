const express = require('express');
const imageController = require('../controllers/imageController');
const router = express.Router();
router.get('/logo', imageController.logo);
router.get('/buttonIcon', imageController.buttonIcon);
router.get('/favicon', imageController.favicon);
router.get('/errorPoster', imageController.errorPoster);
module.exports = router;