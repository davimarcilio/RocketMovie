const fetchMovieApi = require('../functions/fetchFunction.js');
module.exports = {
    movie: async (req, res) => {
        const movie = await fetchMovieApi();
        res.status(200).send({ movie });
    }
}