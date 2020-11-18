const { setResponse } = require('@/utils');

const { Receipt } = require('./receipt.model');

const ListReceipt = async ({ query }) => {
  const receipts = await Receipt.find(query);

  return setResponse(200, 'Receipts found.', receipts);
};

const GetReceipt = async ({ params }) => {
  const receipt = await Receipt.findById(params.id);
  if (!receipt) return setResponse(404, 'Receipt not found.');

  return setResponse(200, 'Receipt found.', receipt);
};

const validatePostReceipt = ({ body }) => {
  // * LOGICA MAS COMPLEJA PARA VALIDAR
  if (body.projectId > 5)
    return setResponse(
      400,
      'Invalid project Id.',
      null,
      'El projecto indicado no esta permitido',
    );
  return setResponse(200, 'OK');
};

const PostReceipt = async ({ body }) => {
  const receipt = new Receipt(body);

  await receipt.save();

  return setResponse(201, 'Receipt created.', receipt);
};
module.exports = {
  ListReceipt,
  GetReceipt,
  validatePostReceipt,
  PostReceipt,
};
