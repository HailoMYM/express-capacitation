var express = require("express");
var router = express.Router();

var data = [
  {
    id: 1,
    userId: 3,
    message: "Lorem aute consequat amet excepteur quis velit consequat.",
    type: "boleta",
  },
  {
    id: 2,
    userId: 2,
    message: "Ad Lorem elit excepteur qui fugiat sit dolore laborum.",
    type: "boleta",
  },
  {
    id: 3,
    userId: 2,
    message: "Eu et voluptate officia velit in.",
    type: "factura",
  },
  {
    id: 4,
    userId: 1,
    message:
      "Sint aliqua eiusmod laborum reprehenderit fugiat anim officia consectetur aute irure elit.",
    type: "factura",
  },
  {
    id: 5,
    userId: 1,
    message:
      "Sunt officia elit incididunt dolore do amet incididunt cillum duis amet.",
    type: "factura",
  },
  {
    id: 6,
    userId: 2,
    message: "Adipisicing ea non culpa minim occaecat esse amet.",
    type: "factura",
  },
  {
    id: 7,
    userId: 2,
    message: "Ipsum minim sit sit ex sint Lorem cillum ad ad.",
    type: "boleta",
  },
  {
    id: 8,
    userId: 3,
    message: "Ad dolor qui laborum consequat.",
    type: "factura",
  },
  {
    id: 9,
    userId: 1,
    message: "Duis commodo enim occaecat esse.",
    type: "boleta",
  },
  {
    id: 10,
    userId: 1,
    message: "Officia aliqua aliqua magna excepteur cillum labore.",
    type: "boleta",
  },
  {
    id: 11,
    userId: 1,
    message:
      "Amet magna id occaecat labore anim occaecat aliquip excepteur occaecat id enim aliquip voluptate occaecat.",
    type: "factura",
  },
  {
    id: 12,
    userId: 2,
    message:
      "Sit exercitation consectetur amet sunt non culpa minim dolor nisi sunt eiusmod est labore esse.",
    type: "factura",
  },
  {
    id: 13,
    userId: 2,
    message: "Qui ea sint non quis duis laboris officia tempor cupidatat.",
    type: "boleta",
  },
  {
    id: 14,
    userId: 3,
    message:
      "Aute laboris magna irure nisi tempor commodo deserunt nulla cillum aliqua Lorem.",
    type: "factura",
  },
  {
    id: 15,
    userId: 2,
    message:
      "Ullamco ipsum ullamco do incididunt ex officia sint esse et enim mollit ut ipsum.",
    type: "boleta",
  },
  {
    id: 16,
    userId: 1,
    message:
      "Ad ad officia velit ut in sint duis pariatur est fugiat incididunt velit ea.",
    type: "factura",
  },
  {
    id: 17,
    userId: 3,
    message: "Ad sunt aliquip qui consequat ut aute sunt ad mollit.",
    type: "factura",
  },
  {
    id: 18,
    userId: 2,
    message:
      "Voluptate ea aliqua consectetur nulla minim laboris qui labore aliqua enim consectetur aute eu.",
    type: "factura",
  },
  {
    id: 19,
    userId: 1,
    message: "Exercitation ex adipisicing mollit ad elit.",
    type: "factura",
  },
  {
    id: 20,
    userId: 2,
    message:
      "Incididunt minim id aliqua nostrud cillum laborum proident aliquip minim nulla aliquip dolore.",
    type: "boleta",
  },
];

router.get("/", function (req, res) {
  let filtered = data;
  if (req.query.type)
    filtered = data.filter((obj) => obj.type === req.query.type);
  return res.status(200).send(filtered);
});

router.get("/:id", function (req, res) {
  const receipt = data.find((obj) => obj.id == req.params.id);
  if (!receipt) return res.status(404).send({});
  return res.status(200).send(receipt);
});

router.post("/", function (req, res) {
  data.push({
    id: data.length + 1,
    ...req.body,
  });
  return res.status(201).send(data[data.length - 1]);
});

module.exports = router;
