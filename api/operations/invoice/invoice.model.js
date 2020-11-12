const mongoose = require("mongoose");

const { Schema } = mongoose;

const invoiceSchema = new Schema(
  {
    //Fuente: Arial 12 (https://orientacion.sunat.gob.pe/index.php/empresas-menu/comprobantes-de-pago-empresas/comprobantes-de-pago-fisicos-empresas/tipos-de-comprobantes-de-pago-fisicos-empresas/6586-01-factura)
    userId: { type: Number, default: 1 }, // Usuario que lo creo
    serialCode:{ type: String }, //Serie de factura
    serialNumber:{ type: Number }, //Nro en la serie
    clientName: { type: String },  //Nombre cliente
    clientLastName: { type: String },  //Apellido cliente
    clientBusinessName: { type: String }, //Razon social empresa cliente
    clientAddress: { type: String }, //Razon social empresa cliente
    clientRUC:{ type: String }, //RUC del cliente
    description: { type: String}, //Descripcion de la operacion
    date:{ type: Date}, //Fecha de la operacion
    amount:{ type: Number }, //Monto de la operacion (centavos)
  },
  {
    timestamps: true,
    // * Automaticamente crea dos campos
    // * createdAt: Fecha de creacion
    // * updatedAt: Ultima fecha de modificacion
  }
);

const Invoice = mongoose.model("Invoice", invoiceSchema);

module.exports = {
  invoiceSchema,
  Invoice,
};
