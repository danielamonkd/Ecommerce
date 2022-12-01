const mongoose = require("mongoose");

const conectarDB = async  ()=>{
    try {
        const connection = await mongoose.connect(
            "mongodb+srv://Dany9319:poiuyt@cluster0.knt5f19.mongodb.net/?retryWrites=true&w=majority",{
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });

            const url = `${connection.connection.host}:${connection.connection.port}`
            console.log(`MongoDB conectado en :${url}`);

    }catch(error){
        console.log(`error:${error.message}`);
        process.exit(1);

    }
}

module.exports =conectarDB;