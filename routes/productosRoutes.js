const express = require("express");
const router = express.Router();
const authMidd = require("../middleware/authMidd");
const productosController = require("../controllers/productosController")


router.get("/:id", authMidd, productosController.obtenerProducto);
router.post("/", authMidd, productosController.crearProducto );
router.put("/:id", authMidd, productosController.actualizarProducto);
router.delete("/:id",authMidd, productosController.borrarProducto);

//Definir las rutas 
module.exports = router;