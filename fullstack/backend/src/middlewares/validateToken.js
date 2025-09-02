import jwt from "jsonwebtoken"

export const authRequired = (req, res, next) => {

    //Para obtener la cookie a partir del header
    //console.log(req.headers.cookie)

    //Para obtener la cookie a partir del NAVEGADOR
        //para eso se necesita importar la librería cookie-parser
    //console.log("cookie = ",req.cookies)

    const {token} = req.cookies

    if(!token) return res.status(401).json({message: "Autorización denegada"})
    
    //que es lo que pide VERIFY:
        //token, secretKey, callBack que DEVUELVE ERROR o USUARIO
    jwt.verify(token, process.env.SECRET_KEY, (err, user)=>{
        if(err) return res.status(403).json({message: "Token no es válido"})

            console.log(user)

            //Lo que hacemos aquí es crear una propiedad adicional para el REQ para que se pueda utilizar

            //Si todo sale bien seguarda la información de usuario
            req.user = user
    })
    
    //el objectivo al  final de todo es que el NEXT SE EJECUTE
    //NEXT nos lleva directamente al AUTH CONTROLLER
    next()
}