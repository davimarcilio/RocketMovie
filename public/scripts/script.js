//Principal function
async function getMovie() {
  const movie = await fetchMovieApi();
  showMovie(movie);
}
async function fetchMovieApi() {
  try {
    const response = await fetch('http://localhost:8080/api/movie');
    const responseText = await response.text();
    return JSON.parse(responseText).movie;
  } catch (error) {
    console.error(error);
  }
  return JSON.parse(responseText).movie;
}
//Show movie in index.html
function showMovie(selectedMovie) {
  const movie = document.getElementById('movie')
  movie.innerHTML = '';
  movie.innerHTML = `<img width="300" id="movieImg" class="img-thumbnail" src="${selectedMovie.poster_path.indexOf('/') != 0 ? selectedMovie.poster_path : 'https://image.tmdb.org/t/p/w500/' + selectedMovie.poster_path}" alt="${selectedMovie.title}">
      <div class="d-flex flex-column justify-content-center">
        <h4 id="movieTitle" class="movie-title text-center text-sm-start">
          ${selectedMovie.title}
        </h4>
        <p id="movieDescription" class="movie-description text-center text-sm-start">
          ${selectedMovie.overview}
        </p>
      </div>`;
}


