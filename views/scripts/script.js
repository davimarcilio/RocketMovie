//require('dotenv').config()
//Principal function
async function getMovie() {
  const movie = await fetchMovieApi();
  showMovie(movie);
}
async function fetchMovieApi() {
  const response = await fetch('http://localhost:8080/movie');
  const responseText = await response.text();
  return JSON.parse(responseText).movie
}
//Show movie in index.html
function showMovie(selectedMovie) {
  const movie = document.getElementById('movie')
  movie.innerHTML = '';
  movie.innerHTML = `<img id="movieImg" class="float-start img-thumbnail h-75" src="${'https://image.tmdb.org/t/p/w200/' + selectedMovie.poster_path}" alt="${selectedMovie.title}">
      <div class="float-end w-50 mx-5">
        <h4 id="movieTitle" class="movie-title">
          ${selectedMovie.title}
        </h4>
        <p id="movieDescription" class="movie-description fs-5">
          ${selectedMovie.overview}
        </p>
      </div>`;
}


