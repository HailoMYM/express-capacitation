const mongoose = require("mongoose");

const { Schema } = mongoose;

const paymentSchema = new Schema(
  {
    userId: { type: Number, default: 1 },
    amount: { type: Number },
    date: { type: Date },
    paymentMethod: { type: String, enum: ["efectivo", "tarjeta"] },
    type: { type: String, enum: ["boleta", "factura"] },
  },
  {
    timestamps: true,
  }
);

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = {
  paymentSchema,
  Payment,
};
