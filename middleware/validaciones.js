const { Album } = require("../models/album")
const { Cancion } = require("../models/cancion")

const validarId = async (req, res, next) => {

    try {
        const cancion = await Cancion.findById(req.params.id)
        next()
    } catch (error) {
        res.status(400).json({ msg: "error en id" })
    }
}

const validarIdAlbum = async (req, res, next) => {

    try {
        const cancion = await Album.findById(req.params.id)
        next()
    } catch (error) {
        res.status(400).json({ msg: "error en id del album" })
    }
}

const validarAlbum = async (req, res, next) => { //Verifica que el album exista en la base de datos
    const nameAlbum = await Album.find({ name: req.params.nameAlbum });
    if (nameAlbum.length) {
        next()
    } else {
        res.status(400).json({ msg: "No existe album en la base de datos" })
    }
}

const validarAlbumVacio = async (req, res, next) => {  //Verifica que el album contenga al menos una cancion para mostrar, El controlador trae todas las canciones.
    const cancion = await Cancion.findOne({ album: req.params.nameAlbum })
    if (cancion !== null) {
        next()
    } else {
        res.status(400).json({ msg: "El album no tiene canciones para mostrar" })
    }
}
module.exports = { validarId, validarIdAlbum, validarAlbum, validarAlbumVacio }