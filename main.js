
const express = require('express');
const app = express();
const path = require('path');
const imageRoutes = require('./src/routes/imageRoutes.js')
const scriptRoutes = require('./src/routes/scriptRoutes.js');
const fetchMovieApi = require('./src/functions/fetchFunction.js');


app.get('/movie', async (req, res) => {
  const movie = await fetchMovieApi();
  res.status(200).send({ movie });
})

app.set('view engine', 'ejs');
app.get('/', async (req, res) => {

  return res.sendFile(path.join(__dirname, './views/pages/index.html'));


});
app.get('/css', (req, res) => {
  res.sendFile(path.join(__dirname, './views/styles/styles.css'));
})

app.use('/scripts', scriptRoutes)
app.use('/images', imageRoutes);
app.listen(8080, () => {
  console.log('Listen on port 8080');
})