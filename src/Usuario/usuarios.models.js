const mongoose = require("mongoose");

const usuarioSchema = mongoose.Schema ({
    nome: {
        type: String,
        required: true
    },
    sobreNome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    login: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    adm: {
        type: Boolean,
        default: false
    },
    dateRegister: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Usuario", usuarioSchema)