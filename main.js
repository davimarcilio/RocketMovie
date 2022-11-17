// import {
//   API_KEY, BASE_URL,
//   IMG_URL,
//   language,
// } from './api.js'
const express = require('express');
const app = express();
const path = require('path');
const imageRoutes = require('./src/routes/imageRoutes.js')
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  //res.send('src/pages/index.html')
  //   title: 'Movie',
  //   overview: 'cacete'
  // }
  const selectedMovie = app.get('/movie');

  return res.render('./pages/index', { selectedMovie });


});
app.get('/css', (req, res) => {
  res.sendFile(path.join(__dirname, './views/styles/styles.css'));
})
app.get('/movie', async (req, res) => {
  const log = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=037554f5230123a5c8a8aad9ab7622ac&language=en-US&page=1')
  const logtext = await log.text()
  //console.log(JSON.parse(logtext).results[1]);
  const selectedMovie = JSON.parse(logtext).results[0]
  //res.send(selectedMovie)
  res.status(200).send({ selectedMovie });
})
app.use('/images', imageRoutes);
app.listen(8080, () => {
  console.log('Listen on port 8080');
})