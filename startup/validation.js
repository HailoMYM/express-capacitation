/* eslint-disable global-require */
// * Setup joi validator for mongodb id - Valid just for mongoDB
const { Joi } = require('celebrate');
const winston = require('winston');

module.exports = () => {
  Joi.objectId = require('joi-objectid')(Joi);
  winston.info('Step 3: Setup validation config');
};
