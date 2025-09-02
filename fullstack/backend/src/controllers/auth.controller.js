import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const register = async (req, res) => {
    const {email, password, username} = req.body

    try {
        //Recibe dos argumentos:
            //El parametro qe va a encriptar
            //Las veces que se va a ejecutar el algoritmo sobre el parámetro
        
        const passwordHash = await bcrypt.hash(password,10)

        const newUser = new User({
            username,
            email,
            password: passwordHash
        })

        const userSaved = await newUser.save()

        //Parq que la info se guarde en las cookies
        jwt.sign({
            id: userSaved._id
        },
            //Ya no es necesario hacer la importación del doteenv porque auth.controller es un archivo que tiene una relación con el app.js
            process.env.SECRET_KEY,
        {
            expiresIn: "1d"
        },
        (err, token) => {
            if(err) console.error(err)

            //Si todo sale bien el TOKEN SE GUARDA EN LAS COOKIES
            res.cookie("token", token)

            res.json({
                id: userSaved.id,
                username: userSaved.username,
                email: userSaved.email,
                createdAt: userSaved.createdAt,
                updatedAt: userSaved.updatedAt
            })
        }
        )



        //res.send("Registrando...")

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const login = async (req, res) => {

    const {email, password} = req.body

    try {
        //Se busca usuario por email dado que es el dato único
        const userFound = await User.findOne({email})

        //En caso de que no se encuentre el usuario
        if(!userFound) return res.status(400).json({message: "Usuario no encontrado"})


        //Devuelve un valor booleano para ver si la contrasena ingresada coincidee con la encontrada o no
        const isMatch = await bcrypt.compare(password, userFound.password)

        //Devuelve el mensaje en caso de que la contrasena sea incorrecta
        if(!isMatch) return res.status(400).json({message: "Contrasena incorrecta"})


        //Para que la info se guarde en las cookies
        jwt.sign({
            id: userFound._id
        },
            //Ya no es necesario hacer la importación del doteenv porque auth.controller es un archivo que tiene una relación con el app.js
            process.env.SECRET_KEY,
        {
            expiresIn: "1d"
        },
        (err, token) => {
            if(err) console.error(err)

            //Si todo sale bien el TOKEN SE GUARDA EN LAS COOKIES
            res.cookie("token", token)

            res.json({
                id: userFound.id,
                username: userFound.username,
                email: userFound.email,
                createdAt: userFound.createdAt,
                updatedAt: userFound.updatedAt
            })
        }
        )

        //res.send("Registrando...")

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const logout = (req, res) => {
    res.cookie("token", "", {
        //Para que la cookie expire
        expires: new Date(0)
    })

    return res.sendStatus(200)
}

export const profile = async (req, res) => {

    const userFound = await User.findById(req.user.id)

    if(!userFound) return res.status(400).json({message: "Usuario no encontrado"})

    return res.json({
        id: userFound.id,
        username: userFound.username,
        email: userFound.email,
        createdAt: userFound.createdAt,
        updatedAt: userFound.updatedAt
    })
}