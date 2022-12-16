const mongoose = require("mongoose");

const CategoriasSchema = mongoose.Schema ({
    nombre: { type: String, required: true , trim: true },
    imagen: { type: String, required: true , trim: true },
    creador: {type: mongoose.Schema.Types.ObjectId, ref: "Usuarios"},
    creado:{ type: Date, default: Date.now()}
});

//definir el modelo
module.exports = mongoose.model("Categorias", CategoriasSchema);