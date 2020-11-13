const { Joi } = require('celebrate');

const Post = {
  body: {
    userId: Joi.number().integer(),
    name: Joi.string().max(256).required(),
    type: Joi.string().valid('Web', 'Mobile').required(),
  },
  query: {},
  params: {},
};

module.exports = {
  Post,
};
