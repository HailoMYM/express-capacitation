var express = require("express");
var router = express.Router();
const { celebrate } = require("celebrate");

const { Receipt } = require("./receipt.model");
const ReceiptValidator = require("./receipt.validator");

router.get("/", async function (req, res) {
  const receipts = await Receipt.find(req.query);

  return res.status(200).send(receipts);
});

router.get("/:id", async function (req, res) {
  const receipt = await Receipt.findById(req.params.id);

  if (!receipt)
    res.status(404).send({
      status: 404,
      message: "Receipt not found.",
      data: {},
      userMessage: "El recibo solicitado no existe.",
    });

  return res.status(200).send(receipt);
});

router.post("/", celebrate(ReceiptValidator.Post), async function (req, res) {
  const receipt = new Receipt(req.body);

  await receipt.save();

  return res.status(201).send({
    status: 201,
    message: "Receipt created.",
    data: {
      receipt,
    },
  });
});

router.put("/:id", async function (req, res) {
  const receipt = await Receipt.findById(req.params.id);

  if (!receipt) res.status(404).send({});

  receipt.type = req.body.type;

  await receipt.save();

  return res.status(200).send(receipt);
});

router.delete("/:id", async function (req, res) {
  const receipt = await Receipt.findById(req.params.id);

  if (!receipt) res.status(404).send({});

  await Receipt.deleteOne({ _id: req.params.id });

  return res.status(200).send(receipt);
});

module.exports = router;
