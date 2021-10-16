const mongoose = require("mongoose");

const trilhasSchema = new mongoose.Schema ({
    nomeTrilha: {
        type: String,
        required: true
    },
    regiao: {
        type: String,
        required: true
    },
    partida: {
        type: String,
        required: true
    },
    destino: {
        type: String,
        required: true
    },
    preco: {
        type: Number,
        required: true
    },
    dataPublicacao: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Trilha", trilhasSchema);