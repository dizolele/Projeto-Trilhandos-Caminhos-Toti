const Usuario = require("./usuarios.models");

module.exports = ({
    async checkIdCharecter(req, res, next) {
        const { id } = req.params;
        if(id.length > 24 || id.length < 24 ) {
            return res.status(404).json({ message: "Id incorreto"})
        }
        next();
    },


    async checkId(req, res, next) {
        const idDB = await Usuario.findById(req.params.id);
        if(!idDB) {
            return res.status(404).json({ message: "Id não encontrado no banco de dados"})
        }
        next();
    }
})