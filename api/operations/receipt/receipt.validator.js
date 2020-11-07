const { Joi } = require("celebrate");

const Post = {
  body: {
    userId: Joi.number().integer(),
    message: Joi.string().max(256).required(),
    type: Joi.string().valid("boleta", "factura").required(),
  },
  query: {},
  params: {},
};

module.exports = {
  Post,
};
