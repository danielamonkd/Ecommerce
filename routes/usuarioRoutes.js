const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuariosController");

router.post(
    "/",
    usuarioController.crearUsuario
);

/*
router.get("/", (req,res) => {
    res.json({msg:"desde routes"});
});

router.post("/", (req,res) => {
    res.json({msg:"este es el post para postman"});

});
*/


//Definir las rutas 
module.exports = router;