import mongoose from "mongoose";

//Esquema de como debe de llegar la información
const AlumnoSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required: true,
        trim: true
    },
    edad:{
        type: Number,
        required: true,
        trim: true
    },
    grupo:{
        type: String,
        required: true,
        trim: true
    }
}, {
    //Agrega info sobre cuando fue creado o modificado
    timestamps:true
})

export default mongoose.model("Alumno", AlumnoSchema)