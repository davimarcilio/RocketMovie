const path = require('path');
module.exports = {
    indexScript: (req, res) => {
        res.sendFile(path.join(__dirname, '../../public/scripts/script.js'));
    }
}