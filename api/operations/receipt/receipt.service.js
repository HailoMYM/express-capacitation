const { Receipt } = require('./receipt.model');

const { setResponse } = require('../../utils');

const ListReceipt = async (reqQuery) => {
  const receipts = await Receipt.find(reqQuery);

  return setResponse(200, 'Receipts found.', receipts);
};

const GetReceipt = async (reqParams) => {
  const receipt = await Receipt.findById(reqParams.id);
  if (!receipt) return setResponse(404, 'Receipt not found.');

  return setResponse(200, 'Receipt found.', receipt);
};

const validatePostReceipt = (reqBody) => {
  // * LOGICA MAS COMPLEJA PARA VALIDAR
  if (reqBody.projectId > 5)
    return setResponse(
      400,
      'Invalid project Id.',
      null,
      'El projecto indicado no esta permitido',
    );
  return setResponse(200, 'OK');
};

const PostReceipt = async (reqBody) => {
  const receipt = new Receipt(reqBody);
  await receipt.save();

  return setResponse(201, 'Receipt created.', receipt);
};

// router.put('/:id', async function (req, res) {
//   const receipt = await Receipt.findById(req.params.id);

//   if (!receipt) res.status(404).send({});

//   receipt.type = req.body.type;

//   await receipt.save();

//   return res.status(200).send(receipt);
// });

// router.delete('/:id', async function (req, res) {
//   const receipt = await Receipt.findById(req.params.id);

//   if (!receipt) res.status(404).send({});

//   await Receipt.deleteOne({ _id: req.params.id });

//   return res.status(200).send(receipt);
// });

module.exports = {
  ListReceipt,
  GetReceipt,
  validatePostReceipt,
  PostReceipt,
};
