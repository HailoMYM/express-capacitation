// * Packages for production environment

const helmet = require('helmet');
const compression = require('compression');
const winston = require('winston');

module.exports = (app) => {
  app.use(helmet());
  app.use(compression());
  winston.info('Step PROD: Set up Production packages.');
};
