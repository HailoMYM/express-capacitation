const { Joi } = require('celebrate');

const Post = {
  body: {
    userId: Joi.number().integer().required(),
    serialCode: Joi.string().required(),
    serialNumber: Joi.number().integer().required(),
    clientName: Joi.string().required(),
    clientLastName: Joi.string().required(),
    clientBusinessName: Joi.string().required(),
    clientAddress: Joi.string().required(),
    clientRUC: Joi.string().max(11).required(),
    description: Joi.string().required(),
    date: Joi.date().required(),
    amount: Joi.number().integer().required(),
  },
  query: {},
  params: {},
};

module.exports = {
  Post,
};
