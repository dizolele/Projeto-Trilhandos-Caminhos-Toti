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

const authMiddelwares = require("../auth/auth.middelwares");

routers.get("/", (req, res) => {
    res.status(200).send("Ola, Mbora escrever o projeto Trilhando Caminhos, Foco sempre")
})

// Rotas referentes a Trilhas
routers.get("/trilhas", authMiddelwares.verifyToken, trilhasControllers.showAll);

routers.get("/trilha/:id", authMiddelwares.verifyToken, trilhasMiddelwares.checkId, trilhasControllers.showById);

routers.post("/trilhas", authMiddelwares.verifyToken, trilhasControllers.post_Put("post"));

routers.put("/trilhas:id", authMiddelwares.verifyToken, trilhasControllers.post_Put("put"));

routers.delete("trilhas/:id", authMiddelwares.verifyToken, trilhasControllers.delete);


// Rotas referentes a Usuarios
routers.post("/login", authMiddelwares.auth);

routers.get("/allUsuarios", authMiddelwares.verifyToken, usuarioControllers.showAll);

routers.post("/usuarios", authMiddelwares.verifyToken, usuarioControllers.post_Put("post"));

routers.put("/usuarios/:id", authMiddelwares.verifyToken, usuarioControllers.post_Put("put"));

routers.delete("/usuarios/:id", authMiddelwares.verifyToken, usuarioControllers.delete);

module.exports = routers;