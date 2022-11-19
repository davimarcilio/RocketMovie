const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
require('dotenv').config()
const path = require('path');
//Generate numbers for numbers pages/arrayObject
function randomGenerateNumbers() {
    const aleatoryPage = Math.round(Math.random() * 500);
    const arrayMovie = Math.floor(Math.random() * 20);
    return { aleatoryPage, arrayMovie };
}
//Pull movies from api
async function fetchMovieApi() {
    try {
        const { aleatoryPage, arrayMovie } = randomGenerateNumbers();
        const response = await fetch(`${process.env.BASE_URL}?${process.env.API_KEY}&${process.env.LANGUAGE}&page=${aleatoryPage}`);
        const responseText = await response.text();
        return JSON.parse(responseText).results[arrayMovie];
    } catch (error) {
        console.error(error)
    }
    return {
        title: 'Ops, hoje não é dia de assistir filme.<br> Bora codar! 🚀',
        overview: '',
        poster_path: 'http://localhost:3000/images/errorPoster',
    }


}
module.exports = fetchMovieApi;