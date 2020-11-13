const express = require('express');

const router = express.Router();

router.use('/receipts', require('./receipt/receipt.router'));
router.use('/payments', require('./payment/payment.router'));
router.use('/invoices', require('./invoice/invoice.router'));

module.exports = router;
