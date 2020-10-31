var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.status(200).send({
    status: 200,
    message: "Ok",
    data: {
      message: "Hola",
    },
  });
});

module.exports = router;
