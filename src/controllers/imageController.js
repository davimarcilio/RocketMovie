const path = require('path');
module.exports = {
    logo: (req, res) => {
        res.sendFile(path.join(__dirname, '../../public/assets/logo.png'));
    },
    buttonIcon: (req, res) => {
        res.sendFile(path.join(__dirname, '../../public/assets/shuffle 2.png'));
    },
    favicon: (req, res) => {
        res.sendFile(path.join(__dirname, '../../public/assets/favicon.ico'));
    },
    errorPoster: (req, res) => {
        res.sendFile(path.join(__dirname, '../../public/assets/Poster.png'));
    }
}