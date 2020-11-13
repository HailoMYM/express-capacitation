const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

require('dotenv').config();
const config = require('config');
const { errors } = require('celebrate');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const operationsRouter = require('./api/operations/operations.router');
const managementRouter = require('./api/management/management.router');

app.use('/', operationsRouter);
app.use('/management', managementRouter);

require('./startup/db')();

app.use(errors());

// app.use(express.static(path.join(__dirname, "public")));
module.exports = app;
