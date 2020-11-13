const express = require('express');
const { celebrate } = require('celebrate');

const router = express.Router();

const Controller = require('./receipt.controller');
const Validator = require('./receipt.validator');

router.get('/', Controller.ListReceipt);
router.get('/:id', Controller.GetReceipt);
router.post('/', celebrate(Validator.Post), Controller.PostReceipt);
// router.put('/:id', Controller.PutReceipt);
// router.delete('/:id', Controller.DeleteReceipt);

module.exports = router;
