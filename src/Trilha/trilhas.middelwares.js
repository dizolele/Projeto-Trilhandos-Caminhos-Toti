const Trilha = require("./trilhas.models");

module.exports = {

    async checkCharecter(req, res, next) {
        try {
            const { id } = req.params;
            if(id.length > 24 || id.length < 24 ) {
                return res.status(404).json({ message: "Id incorreto"})
            }
            next();
        } catch(error) {
            res.status(500).json({ error: error.message})
        }
    },

    async checkId(req, res, next) {
        try{
            const idDB = await Trilha.findById(req.params.id)

            if(!idDB){
                return res.status(404).json({message: "Id não cadastrado no banco de dados"})
            }
            next()

        } catch(error) {
            res.status(403).json({error: error.message})
        }

    }
}
