import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim: true,
        //Garantiza que este dato sea único frente a todos los demás datos registrados
        unique: true
    },
    password:{
        type: String,
        required: true,
    }
}, {
    timestamps:true
})

export default mongoose.model("User", UserSchema)