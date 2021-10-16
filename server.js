require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose");

const dbConnect = require("./database")
const UserRoutes = require("./src/Usuario/usuarios.routes")



const port = process.env.serverPort

dbConnect();

const server = express();
server.use(express.json());

server.use(UserRoutes)

server.listen(port, () => {
    console.log(`servidor rodando na porta ${port}`)
})