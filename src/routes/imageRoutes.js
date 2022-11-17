const express = require('express');
const path = require('path');
const router = express.Router();
router.get('/logo', (req, res) => {
    res.sendFile(path.join(__dirname, '../../views/assets/logo.png'));
});
router.get('/buttonIcon', (req, res) => {
    res.sendFile(path.join(__dirname, '../../views/assets/shuffle 2.png'));
});
router.get('/test', (req, res) => {
    res.sendFile(path.join(__dirname, '../../views/assets/Poster.png'));
});
module.exports = router;