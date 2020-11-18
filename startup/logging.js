// Setup Winston Logger

const winston = require('winston');
const config = require('config');
require('express-async-errors');
require('winston-mongodb');

const { combine, timestamp, printf, label } = winston.format;

const myFormat = printf((info) => {
  if (info instanceof Error) {
    return `${info.timestamp} ${info.level} : ${info.message} ${info.stack}`;
  }
  return `${info.timestamp} ${info.level}: ${info.message}`;
});

module.exports = () => {
  winston.configure({
    level: 'info',
    format: combine(
      winston.format.colorize(),
      winston.format.splat(),
      label({
        label: 'Logging...',
      }),
      timestamp(),
      myFormat,
    ),
    defaultMeta: {
      service: 'user-service',
    },
    transports: [
      new winston.transports.Console({
        level: 'silly',
      }),
      new winston.transports.MongoDB({
        db: config.get('dbUri'),
        level: 'error',
        collection: 'errorLog',
        options: {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        },
      }),
    ],
  });

  winston.exceptions.handle(
    new winston.transports.Console({
      colorize: true,
      prettyPrint: true,
    }),
  );

  winston.info('Step 2: Setup loggers');
};
