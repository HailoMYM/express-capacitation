const { Joi } = require('celebrate');

const Post = {
  body: {
    userId: Joi.objectId(),
    projectId: Joi.number().integer(),
    message: Joi.string().max(256).required(),
    type: Joi.string().valid('boleta', 'factura').required(),
  },
};

const Get = {
  body: {
    id: Joi.objectId().required(),
  },
};

const List = {
  body: {
    type: Joi.string().valid('boleta', 'factura'),
  },
};

module.exports = {
  Post,
  Get,
  List,
};
