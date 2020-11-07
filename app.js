var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var app = express();

require("dotenv").config();
const config = require("config");
const { errors } = require("celebrate");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const operationsRouter = require("./api/operations/operations.router");
app.use("/", operationsRouter);

require("./startup/db")();

app.use(errors());

// app.use(express.static(path.join(__dirname, "public")));
module.exports = app;
