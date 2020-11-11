var express = require("express");
var router = express.Router();

router.use("/projects", require("./project/project.router"));


module.exports = router;
