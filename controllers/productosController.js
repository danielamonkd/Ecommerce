const Productos = require("../models/Productos");
const Categorias = require("../models/Categorias");

exports.obtenerProductosHome = async (req, res) => {
    try{
        const productos = await Productos.find();

        res.json({ productos});
    }catch(error){
        console.log(error);
    }

};

exports.obtenerProducto = async (req, res) => {
    const {id} = req.params
    const producto =await Productos.find().where("categoriaId").equals(id);
    res.json(producto);

};




exports.crearProducto = async (req, res) => {
    
    const {categoriaId} = req.body;

    try{
        const encontrarCategoria = await Categorias.findById(categoriaId);

        console.log(encontrarCategoria);
       
        const producto = new Productos(req.body);
    
        producto.save();
    
        res.json(producto);
    }catch(error){
        console.log(error);
    }

};

exports.actualizarProducto = async (req, res) => {

    const { id } = req.params;
    const producto= await Productos.findById(id);
    
    if (!producto){
        return res.status(400).json({ msg: "producto no encontrado"});
    }
    
    /*if(categoria.creador.toString () !== req.usuario.id.toString()){
        return res.status(400).json({ msg: "accion no valida para este usuario"})
    }*/

producto.nombre = req.body.nombre || producto.nombre;
producto.descripcion = req.body.descripcion || producto.descripcion;
producto.stock = req.body.stock || producto.stock;
producto.precio = req.body.precio || producto.precio;
producto.categoriaId = req.params.categoriaId || producto.categoriaId;

producto.save();

res.json({producto});

};


exports.borrarProducto = async (req, res) => {
    try{
        await Productos.deleteOne({ _id: req.params.id});
        res.json({msg: "producto eliminado"});
    }catch(error){
        console.log(error);
    }

};