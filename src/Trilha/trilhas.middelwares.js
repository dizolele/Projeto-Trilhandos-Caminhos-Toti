const Trilha = require("./trilhas.models");

module.exports = {
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
