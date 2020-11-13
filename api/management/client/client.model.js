const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const clientSchema = new Schema({
    clientId:{
        type:Number,
        required: true,
        unique:true,
    },
    // Nombre del cliente
    name:{
        type:String,
        required: true,

    },
    // posible imagen / logo del cliente , no es obligatorio
    image:{
        type:String,
        
    },
    //Empresa a quien facturar
    company:{
        type:String,
        required:true,
    },
    // Ruc de la empresa a quien se factura
    ruc:{
        type: String,
        required: true
    },
    // Descripcion del puesto / cargo de la persona en la empresa,no es obligatorio
    description: {
        type: String,
    },
    // E- mail de contacto 
    email:{
        type: String,
        required:true,
    },
    // Telefono del contacto , no es obligatorio
    phone:{
        type:String,
    }
    
},
{
    timestamps:true,
}
);

var Clients = mongoose.model('Client', clientSchema);

module.exports=Clients;
