const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
async function get() {
    const log = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=037554f5230123a5c8a8aad9ab7622ac&language=en-US&page=1')
    const logtext = await log.text()
    const selectedMovie = JSON.parse(logtext).results[0]
    return selectedMovie
}
