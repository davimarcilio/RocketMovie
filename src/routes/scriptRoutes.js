const express = require('express');
const path = require('path');
const router = express.Router();
router.get('/scriptIndex', (req, res) => {
    res.sendFile(path.join(__dirname, '../../views/scripts/script.js'));
})
module.exports = router;