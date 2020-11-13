const express = require('express');

const router = express.Router();
const { celebrate } = require('celebrate');

const { Invoice } = require('./invoice.model');
const InvoiceValidator = require('./invoice.validator');

router.get('/', async function (req, res) {
  const invoices = await Invoice.find(req.query);

  return res.status(200).send(invoices);
});

router.get('/:id', async function (req, res) {
  const invoice = await Invoice.findById(req.params.id);

  if (!invoice)
    res.status(404).send({
      status: 404,
      message: 'Invoice not found.',
      data: {},
      userMessage: 'La factura solicitada no existe.',
    });

  return res.status(200).send(invoice);
});

router.post('/', celebrate(InvoiceValidator.Post), async function (req, res) {
  const invoice = new Invoice(req.body);

  await invoice.save();

  return res.status(201).send({
    status: 201,
    message: 'Invoice created.',
    data: {
      invoice,
    },
  });
});

router.put('/:id', async function (req, res) {
  const invoice = await Invoice.findById(req.params.id);

  if (!invoice) res.status(404).send({});

  invoice.type = req.body.type;

  await invoice.save();

  return res.status(200).send(invoice);
});

router.delete('/:id', async function (req, res) {
  const invoice = await Invoice.findById(req.params.id);

  if (!invoice) res.status(404).send({});

  await Invoice.deleteOne({ _id: req.params.id });

  return res.status(200).send(invoice);
});

module.exports = router;
