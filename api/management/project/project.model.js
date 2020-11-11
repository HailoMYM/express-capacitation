const mongoose = require("mongoose");

const {Schema} = mongoose;

const projectSchema = new Schema(

    {
        clientId:{type:Number, default:1},
        name:{type:String, required:true},
        type: { type: String, enum: ["Web", "Mobile"] },
        status:{
            type:Boolean,
            default:true
        }
    },
    {
        timestamps:true,
    }

)

const Project = mongoose.model('Project',projectSchema);

module.exports ={
    projectSchema,
    Project
}