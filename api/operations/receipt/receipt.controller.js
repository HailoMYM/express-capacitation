const Service = require('./receipt.service');

const ListReceipt = async (req, res) => {
  const response = await Service.ListReceipt(req.query);
  return res.status(response.status).send(response);
};

const GetReceipt = async (req, res) => {
  const response = await Service.GetReceipt(req.params);
  return res.status(response.status).send(response);
};

const PostReceipt = async (req, res) => {
  const validateResponse = await Service.validatePostReceipt(req.body);
  if (validateResponse.status !== 200)
    return res.status(validateResponse.status).send(validateResponse);

  const response = await Service.PostReceipt(req.body);
  return res.status(response.status).send(response);
};

module.exports = {
  ListReceipt,
  GetReceipt,
  PostReceipt,
};
