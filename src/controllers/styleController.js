const path = require('path');
module.exports = {
    indexStyle: (req, res) => {
        res.sendFile(path.join(__dirname, '../../public/styles/styles.css'));
    }
}