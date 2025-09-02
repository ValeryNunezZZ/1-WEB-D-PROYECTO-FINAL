import {Router} from "express";
import { register, login, logout, profile } from "../controllers/auth.controller.js";
import {authRequired} from "../middlewares/validateToken.js"

const router = Router()

//No vamos a poner las funciones directamente porque vamos a trabajarlas por separado en un CONTROLLERS

    //CONTROLLERS -> es una carpeta que se crea por CONVECIÓN que se encarga de GUARDAR funciones que se MANDAN LLAMAR cuando se HACE UNA PETICIÓN a alguna ruta específica

router.post('/register', /* FUNCION REGISTER */ register)
router.post('/login', /* FUNCION LOGIN */ login)
router.post('/logout', /* FUNCION LOGOUT */ logout)

//validateUser = middleWare

    //MiddleWare -> Es el encargado de autorizar el paso del usuario a la ruta profile
router.get('/profile',authRequired, /* validateUser, */ profile)

export default router