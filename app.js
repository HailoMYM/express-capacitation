var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const operationsRouter = require("./api/operations/operations.router");
app.use("/", operationsRouter);

// app.use(express.static(path.join(__dirname, "public")));
module.exports = app;
