const express = require('express');
const { celebrate } = require('celebrate');

const router = express.Router();

const Controller = require('./receipt.controller');
const Validator = require('./receipt.validator');

router.get('/', celebrate(Validator.List), Controller.ListReceipt);
router.get('/:id', celebrate(Validator.Get), Controller.GetReceipt);
router.post('/', celebrate(Validator.Post), Controller.PostReceipt);

module.exports = router;
