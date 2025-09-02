import {Router} from "express";
import Alumno from "../models/alumno.model.js";


const router = Router()

//Crea el alumno

router.post('/', async(req, res) =>{
    //Alumno verifica que req.body cumpla con el formato solicitado en el esquema 

    //Y despues guarda el nuevo alumno e nuevoAlumno
    const nuevoAlumno = new Alumno(req.body)

    //Se pone await porque es un guardado que se hace directamente con la BD
    await nuevoAlumno.save()

    res.json(nuevoAlumno)
})

router.get('/', async(req, res)=>{
    //Se pone el await dado que es una busqueda que se hace directamente a la BD
    const alumnos = await Alumno.find()

    res.json(alumnos)
})

router.put('/:id', async(req, res)=>{
    //Se pone {new: true} para que el findByIdAndUpdate devuelva el VALOR ACTUAL
    const alumnoActualizado = await Alumno.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.json(alumnoActualizado)
})

router.delete('/:id', async(req, res)=>{
    const alumnoActualizado = await Alumno.findByIdAndDelete(req.params.id)

    res.json({message: "Alumno ELIMINADO"})
})

export default router