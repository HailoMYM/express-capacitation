const express = require('express');

const clientRouter = express.Router();
const { celebrate } = require('celebrate');

const { Client } = require('./client.model');
const ClientValidator = require('./client.validator');

clientRouter.get('/', async function (req, res) {
  const clients = await Client.find(req.query);

  return res.status(200).send(clients);
});

clientRouter.get('/:id', async function (req, res) {
  const client = await Client.findById(req.params.id);

  if (!client)
    res.status(404).send({
      status: 404,
      message: 'Client not found.',
      data: {},
      userMessage: 'El cliente solicitado no existe.',
    });

  return res.status(200).send(client);
});

clientRouter.post('/', celebrate(ClientValidator.Post), async function (
  req,
  res,
) {
  const client = new Client(req.body);

  await client.save();

  return res.status(201).send({
    status: 201,
    message: 'Client created.',
    data: {
      client,
    },
  });
});

clientRouter.put('/:id', async function (req, res) {
  const client = await Client.findById(req.params.id);

  if (!client) res.status(404).send({});

  client.type = req.body.type;

  await client.save();

  return res.status(200).send(client);
});

clientRouter.delete('/:id', async function (req, res) {
  const client = await Client.findById(req.params.id);

  if (!client) res.status(404).send({});

  await Client.deleteOne({ _id: req.params.id });

  return res.status(200).send(client);
});

module.exports = clientRouter;
