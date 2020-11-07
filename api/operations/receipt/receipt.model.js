const mongoose = require("mongoose");

const { Schema } = mongoose;

const receiptSchema = new Schema(
  {
    userId: { type: Number, default: 1 },
    message: { type: String },
    type: { type: String, enum: ["boleta", "factura"] },
  },
  {
    timestamps: true,
    // * Automaticamente crea dos campos
    // * createdAt: Fecha de creacion
    // * updatedAt: Ultima fecha de modificacion
  }
);

const Receipt = mongoose.model("Receipt", receiptSchema);

module.exports = {
  receiptSchema,
  Receipt,
};
