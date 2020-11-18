/* eslint-disable global-require */
const express = require('express');

require('module-alias/register');

const app = express();

require('./startup/config')(); // ? Variables de entorno
require('./startup/logging')(); // ? Estrategias de logging
require('./startup/validation')(); // ? Configuracion de validacion
require('./startup/middleware')(app); // ? Definir los middlewares globales

if (process.env.NODE_ENV === 'production') {
  require('./startup/prod')(app);
}

require('./startup/db')(); // ? Coneccion a la DB

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

module.exports = app;
