//require('dotenv').config()
//Principal function
async function getMovie() {
  const selectedMovie = await fetchMovieApi();
  showMovie(selectedMovie);
}
//Show movie in index.html
function showMovie(selectedMovie) {
  const movie = getElementsPage();
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
//get element for showMovie
function getElementsPage() {
  const movie = document.getElementById('movie');
  return movie;
}

//Pull movies from api
async function fetchMovieApi() {
  const { aleatoryPage, arrayMovie } = randomGenerateNumbers();
  const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=037554f5230123a5c8a8aad9ab7622ac&language=pt-BR&page=' + aleatoryPage);
  const responseText = await response.text();
  const selectedMovie = JSON.parse(responseText).results[arrayMovie];
  return selectedMovie;
}

//Generate numbers for numbers pages/arrayObject
function randomGenerateNumbers() {
  const aleatoryPage = Math.round(Math.random() * 500);
  const arrayMovie = Math.floor(Math.random() * 20);
  return { aleatoryPage, arrayMovie };
}

