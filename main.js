//DotEnv Usage
require('dotenv').config();
//Import Express
const express = require('express');
const app = express();
//Import Routes
const imageRoutes = require('./src/routes/imageRoutes');
const scriptRoutes = require('./src/routes/scriptRoutes');
const apiRoutes = require('./src/routes/apiRoutes');
const styleRoutes = require('./src/routes/styleRoutes');
const publicRoutes = require('./src/routes/publicRoutes');
//Routes Express
app.use('/api', apiRoutes);
app.use('/', publicRoutes);
app.use('/styles', styleRoutes)
app.use('/scripts', scriptRoutes);
app.use('/images', imageRoutes);
app.listen(process.env.PORT, () => {
  console.log('Listen on port: ' + process.env.PORT);
})