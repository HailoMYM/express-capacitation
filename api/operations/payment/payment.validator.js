const { Joi } = require('celebrate');

const Post = {
  body: {
    userId: Joi.number().integer(),
    amount: Joi.number().required(),
    date: Joi.date().required(),
    paymentMethod: Joi.string().valid('efectivo', 'tarjeta').required(),
    type: Joi.string().valid('boleta', 'factura').required(),
  },
  query: {},
  params: {},
};

module.exports = {
  Post,
};
