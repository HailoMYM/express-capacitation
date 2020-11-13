const { Joi } = require("celebrate");

const Post = {
body: {
    clientId: Joi.number().integer().required(),
    name: Joi.string().required(),
    image: Joi.string(),
    company: Joi.string().required(),
    ruc: Joi.string().length(11).pattern(/^[0-9]+$/).required(),
    description:Joi.string(),
    email: Joi.string().email().required(),
    phone:Joi.string().length(9).pattern(/^[0-9]+$/),
},
query: {},
params: {},
};

module.exports = {
 Post,
};
