var express = require("express");
var router = express.Router();

router.use("/projects", require("./project/project.router"));
router.use("/clients", require("./client/client.router"));

module.exports = router;
