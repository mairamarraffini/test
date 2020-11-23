
/** @format */

require('./config');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// remove some libs

app.use(require('./routes/peliculas'));

app.listen(process.env.PORT, () => {
  console.log(`server corriendo en http://localhost:${process.env.PORT}`);
});