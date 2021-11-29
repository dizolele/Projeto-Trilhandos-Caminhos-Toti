const jwt = require("jsonwebtoken");
const Usuario = require("../Usuario/usuarios.models");
const SECRET = process.env.SECRET;

module.exports = ({
    async auth(req, res) {
        if(req.body.login === "becas" && req.body.senha === "rebi") {
            const token = jwt.sign({userId: 1}, SECRET, { expiresIn: 300});
            return res.status(200).json({auth: true, token});
        }
        res.status(401).end();
    },

    async verifyToken(req, res, next) {
        const token = req.headers["x-acess-token"];
        jwt.verify(token, SECRET, (err, decoded) => {
            if(err) return res.status(401).send("Não autorizado a acessar esta rota!").end();

            req.userId = decoded.userId;
            next();
        })
    }
})

