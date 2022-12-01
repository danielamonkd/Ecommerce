const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const authMidd = require("../middleware/authMidd");

router.post(
    "/",
    authController.autenticarUsuario
);

router.get("/", authMidd, authController.usuarioAutenticado);

//definir la ruta 
module.exports = router;