/* eslint-disable global-require */

module.exports = (app) => {
  app.use('/', require('../api/management/management.router'));
  app.use('/', require('../api/operations/operations.router'));
};
