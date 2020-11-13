const express = require('express');

const router = express.Router();
const { celebrate } = require('celebrate');

const { Payment } = require('./payment.model');
const PaymentValidator = require('./payment.validator');

router.get('/', async function (req, res) {
  const payments = await Payment.find(req.query);

  return res.status(200).send(payments);
});

router.get('/:id', async function (req, res) {
  const payment = await Payment.findById(req.params.id);

  if (!payment)
    res.status(404).send({
      status: 404,
      message: 'Payment not found.',
      data: {},
      userMessage: 'El pago solicitado no existe.',
    });

  return res.status(200).send(payment);
});

router.post('/', celebrate(PaymentValidator.Post), async function (req, res) {
  const payment = new Payment(req.body);

  await payment.save();

  return res.status(201).send({
    status: 201,
    message: 'Payment created.',
    data: {
      payment,
    },
  });
});

router.put('/:id', async function (req, res) {
  const payment = await Payment.findById(req.params.id);

  if (!payment) res.status(404).send({});

  payment.type = req.body.type;

  await payment.save();

  return res.status(200).send(payment);
});

router.delete('/:id', async function (req, res) {
  const payment = await Payment.findById(req.params.id);

  if (!payment) res.status(404).send({});

  await Payment.deleteOne({ _id: req.params.id });
  return res.status(200).send(payment);
});

module.exports = router;
