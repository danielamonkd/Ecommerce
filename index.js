const express = require("express");
const conectarDB =require("./config/db");
const usuarioRoutes = require("./routes/usuarioRoutes");
const auth =require("./routes/auth");
const categoriasRoutes =require ("./routes/categoriasRoutes");
const productosRoutes =require ("./routes/productosRoutes");

const app = express();

app.use(express.json({extended: true}));

conectarDB();

//rutas
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/auth", auth);
app.use("/api/categorias", categoriasRoutes);
app.use("/api/productos", productosRoutes);

app.listen(4000, () =>{
    console.log ("servidor corriendo en el puerto 4000");
});