const express = require('express');

const router = express.Router();

router.use('/projects', require('./project/project.router'));
router.use('/clients', require('./client/client.router'));

module.exports = router;
