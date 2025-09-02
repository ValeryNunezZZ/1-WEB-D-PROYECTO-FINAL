//Se incializa el proyecto completo

import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import {config} from "dotenv"

import alumnosRouter from "./routes/alumnos.routes.js"
import authRoutes from "./routes/auth.routes.js"
import cookieParser from "cookie-parser"

config()

const PORT = process.env.PORT
const app = express()

//para que cuando hagamog post se reconozca el formato utilizado
app.use(express.json())

//Esto permite que la url con el 5173 se pueda comunicar con el puerto 3000
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(cookieParser())

//Prefijo a usar para poder ocupar todas las rutas definidas en alumnosRouter
app.use("/api/alumnos", alumnosRouter)
app.use("/api", authRoutes)

mongoose.connect(process.env.MONGO_KEY).then(()=>console.log("CONECTADO A MONGO DV"))

app.listen(PORT, ()=>{
    console.log("Servidor corriendo en el puerto ", PORT)
})
