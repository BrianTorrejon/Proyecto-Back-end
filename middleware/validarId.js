const { Cancion } = require("../models/cancion")

const validarId = async (req, res, next) => {

    try {
        const cancion = await Cancion.findById(req.params.id)
        next()
    } catch (error) {
        res.status(400).json({ msg: "error en id" })
    }
}

module.exports = { validarId }