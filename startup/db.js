const mongoose = require("mongoose");
const config = require("config");

module.exports = () => {
  mongoose
    .connect(config.get("dbUri"), { useNewUrlParser: true })
    .then(() => console.log("Conectado a la base de datos..."))
    .catch((err) => console.error(err));
};
