const Usuario =require("../models/Usuarios");
const bcryptjs = require("bcryptjs");

exports.crearUsuario = async (req, res) => {
    //console.log(req.body);
    const {password, email} =req.body;

    try{
    //revisar que sea un unico usario registrado
    let usuario =await Usuario.findOne({email});

    if (usuario){
        return res.status(404).json({msg: "El usuario ya existe"});
    }

    //crear el nuevo usuario 
    usuario = new Usuario(req.body);

    //hash encriptar el password
    usuario.password = await bcryptjs.hash(password,10); 

    //guardar en la base de datos 
    const usuarioAlmacenado = await usuario.save();

    //devuelve el usuario almacenado

    res.json(usuarioAlmacenado);


    }catch(error){
        console.log(error)


    } 

};

