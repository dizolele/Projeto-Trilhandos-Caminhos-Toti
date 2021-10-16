const Usuario = require("./usuarios.models")

module.exports = {

    async showAll (req, res) {
        const usuarioDB = await Usuario.find().sort({dateRegister: "desc"})
        res.status(200).json({ usuarioDB })
    },

    async showById (req, res) {
        const usuarioDB = await Usuario.findById(req.params.id)
        res.status(200).json({ usuarioDB })
    },

    post_Put(postPut) {
        return async (req, res) => {
            let usuarioDB
            if(postPut === "post") {
                usuarioDB = await new Usuario()
            } else if(postPut === "put") {
                usuarioDB = await Usuario.findById(req.params.id)
            }

            usuarioDB.nome = req.body.nome 
            usuarioDB.sobreNome = req.body.sobreNome
            usuarioDB.email = req.body.email
            usuarioDB.login = req.body.login
            usuarioDB.senha = req.body.senha


            try {
                await usuarioDB.save()
                let msg = ""
                postPut === "post"  ? msg = "Adicionado"  : msg = "Atualizado"
                res.status(200).json({message: `Usuario ${msg} com sucesso`})
            } catch(error) {
                res.status(500).json({error: error.message})
            }

        }
    },

    async delete (req, res) {
        try {
            await Usuario.findByIdAndDelete(req.params.id)
            res.status(200).json({message: "Usuario deletado com sucesso"})
        } catch(error) {
            res.status(500).json({error: error.message})
        }
    }



}
