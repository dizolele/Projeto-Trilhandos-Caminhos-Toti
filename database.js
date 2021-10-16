const mongoose = require("mongoose");

function dbConnect() {
     mongoose.connect(process.env.dataBase_url,
     {
          useNewUrlParser:true,
          useUnifiedTopology: true,
     }
     )

     const db = mongoose.connection
     db.on("error", (error) => console.error(error));
     db.once("open", () => console.log("conectado com o banco de dados"))
}

module.exports = dbConnect;






