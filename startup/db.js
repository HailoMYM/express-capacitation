const mongoose = require('mongoose');
const config = require('config');
const winston = require('winston');

module.exports = () => {
  mongoose.set('useCreateIndex', true);
  mongoose
    .connect(config.get('dbUri'), {
      useNewUrlParser: true,
    })
    .then(() => winston.info('Step 5: Conectado a la base de datos...'))
    .catch((err) => winston.error(err));
};
