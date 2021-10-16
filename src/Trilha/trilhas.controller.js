const Trilha = require("./trilhas.models")

module.exports = {
    async showAll (req, res) {
        try {
            const trilhaDB = await Trilha.find().sort({dataPublicacao: "desc"})
            res.status(200).json({ trilhaDB })
        } catch(error) {
            res.status(500).json({error: error.message})
        }
    },

    async showById (req, res) {
        try {
            const trilhaDB = await Trilha.findById(req.params.id)
            res.status(200).json({ trilhaDB })
        } catch(error) {
            res.status(500).json({error: error.message})
        }
    },

    post_Put(postPut) {
        return async (req, res) => {
            let trilhaDB
            if(postPut === "post") {
                trilhaDB = await new Trilha()
            } else if(postPut === "put") {
            
                trilhaDB = await Trilha.findById(req.params.id)
            } 

            trilhaDB.nomeTrilha = req.body.nomeTrilha
            trilhaDB.regiao = req.body.regiao
            trilhaDB.partida = req.body.partida
            trilhaDB.destino = req.body.destino
            trilhaDB.preco = req.body.preco

            try {
                await trilhaDB.save()
                let msg = ""
                postPut === "post"  ?  msg = "Adicionado"  : msg = "Atualizado"
                res.status(200).json({message: `Trilha ${msg} com sucesso`})
            } catch(error) {
                res.status(500).json({error: error.message})
            }
        }
    },

    async delete(req, res) {
        try {
            await Trilha.findByIdAndDelete(req.params.id)
            res.status(200).json({message: "trilha deletada com sucesso"})
        } catch(error) {
            res.status(500).json({error: error.message})
        }
    }


}

