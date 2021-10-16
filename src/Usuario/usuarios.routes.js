const express = require("express");
const routers = express.Router();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./../../swagger.json');

routers.use('/api-docs', swaggerUi.serve);
routers.get('/api-docs', swaggerUi.setup(swaggerDocument));

const Trilha = require("./../Trilha/trilhas.models");
const trilhasControllers = require("./../Trilha/trilhas.controller");
const trilhasMiddelwares = require("./../Trilha/trilhas.middelwares");

const Usuario = require("./usuarios.models")
const usuarioControllers = require("./usuario.controllers")

routers.get("/", (req, res) => {
    res.status(200).send("Ola, Mbora escrever o projeto Trilhando Caminhos, Foco sempre")
})

// Rotas referentes a Trilhas
routers.get("/trilhas", trilhasControllers.showAll);

routers.get("/trilha/:id", trilhasMiddelwares.checkId, trilhasControllers.showById);

routers.post("/trilhas", trilhasControllers.post_Put("post"));

routers.put("/trilhas:id", trilhasControllers.post_Put("put"));

routers.delete("trilhas/:id", trilhasControllers.delete);


// Rotas referentes a Usuarios
routers.get("/allUsuarios", usuarioControllers.showAll);

routers.post("/usuarios", usuarioControllers.post_Put("post"));

routers.put("/usuarios/:id", usuarioControllers.post_Put("put"));

routers.delete("/usuarios/:id", usuarioControllers.delete);

module.exports = routers;