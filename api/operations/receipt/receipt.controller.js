const { buildController } = require('@/utils');

const Service = require('./receipt.service');

const PostReceipt = async (req, res) => {
  const validateResponse = await Service.validatePostReceipt(req);
  if (validateResponse.status !== 200)
    return res.status(validateResponse.status).send(validateResponse);

  const response = await Service.PostReceipt(req);
  return res.status(response.status).send(response);
};

module.exports = {
  ...buildController(Service, 'ListReceipt'),
  ...buildController(Service, 'GetReceipt'),
  PostReceipt,
};
